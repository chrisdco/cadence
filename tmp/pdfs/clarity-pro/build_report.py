from pathlib import Path
from xml.sax.saxutils import escape
import re
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.pagesizes import letter
from pypdf import PdfReader

ROOT = Path('/Users/nate/Downloads/speech-companion')
WORK = ROOT / 'tmp/pdfs/clarity-pro'
OUT = ROOT / 'output/pdf/clarity-pro-freemium-strategy.pdf'
# Report palette follows constants/colors.ts's light foreground/accent values.
INK = colors.HexColor('#111114')
ACCENT = colors.HexColor('#3478F6')
SECONDARY = colors.HexColor('#77777E')
FILL = colors.HexColor('#F4F4F6')
WHITE = colors.white
PAGE_W, PAGE_H = letter
WIDTH = PAGE_W - 72
styles = {
    'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=25, leading=29, textColor=INK, spaceAfter=16),
    'subtitle': ParagraphStyle('subtitle', fontName='Helvetica-Bold', fontSize=17, leading=21, textColor=ACCENT, spaceAfter=15),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.8, leading=13.2, textColor=INK, spaceAfter=8),
    'source': ParagraphStyle('source', fontName='Helvetica', fontSize=8.3, leading=11.2, textColor=SECONDARY, spaceAfter=9),
    'cell': ParagraphStyle('cell', fontName='Helvetica', fontSize=8.6, leading=10.7, textColor=INK),
    'th': ParagraphStyle('th', fontName='Helvetica-Bold', fontSize=8.6, leading=10.7, textColor=WHITE),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=9.8, leading=13.2, textColor=INK, leftIndent=10, firstLineIndent=-8, spaceAfter=7),
}

def inline(text):
    result, pos = [], 0
    for m in re.finditer(r'\[([^]]+)\]\((https?://[^)]+)\)', text):
        result.append(escape(text[pos:m.start()]))
        result.append(f'<link href="{escape(m.group(2))}" color="#3478F6">{escape(m.group(1))}</link>')
        pos = m.end()
    result.append(escape(text[pos:]))
    return ''.join(result)

def table(lines):
    rows = [[c.strip() for c in line.strip().strip('|').split('|')] for line in lines]
    rows = [row for row in rows if not all(re.fullmatch(r'[-: ]+', c) for c in row)]
    n = len(rows[0])
    if n == 2:
        widths = [WIDTH*.30, WIDTH*.70]
    elif n == 3:
        widths = [WIDTH*.22, WIDTH*.35, WIDTH*.43]
    else:
        widths = [WIDTH*.46] + [WIDTH*.54/(n-1)]*(n-1)
    def cell_markup(c):
        return inline(c).replace('hooks/use-practice-session.real.ts:618', 'hooks/<br/>use-practice-session.real.ts:618')
    data = [[Paragraph(cell_markup(c), styles['th' if i == 0 else 'cell']) for c in row] for i,row in enumerate(rows)]
    t = Table(data, colWidths=widths, repeatRows=1, hAlign='LEFT')
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0),INK),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[FILL,WHITE]),
        ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),
        ('TOPPADDING',(0,0),(-1,-1),5.5),('BOTTOMPADDING',(0,0),(-1,-1),5.5),
        ('LINEBELOW',(0,-1),(-1,-1),.5,colors.HexColor('#E6E6EB')),
    ]))
    return [t, Spacer(1,12)]

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(1.5)
    canvas.line(44,PAGE_H-29,PAGE_W-44,PAGE_H-29)
    canvas.setFont('Helvetica',8)
    canvas.setFillColor(SECONDARY)
    canvas.drawString(44,24,'CLARITY PRO  /  PRODUCT & PRICING STRATEGY  /  SEPTEMBER 2026')
    canvas.drawRightString(PAGE_W-44,24,str(doc.page))
    canvas.restoreState()

source = (WORK / 'report-source.md').read_text()
story=[]
for pno, page in enumerate(source.split('<!-- page -->')):
    if pno: story.append(PageBreak())
    blocks = re.split(r'\n\s*\n',page.strip())
    for block in blocks:
        lines=block.splitlines()
        if lines[0].startswith('|'):
            story += table(lines)
        elif lines[0].startswith('#'):
            for line in lines:
                if line.startswith('## '): story.append(Paragraph(inline(line[3:]),styles['subtitle']))
                elif line.startswith('# '): story.append(Paragraph(inline(line[2:]),styles['title']))
                else: story.append(Paragraph(inline(line),styles['source']))
        elif lines[0].startswith('- '):
            for line in lines: story.append(Paragraph('- '+inline(line[2:]),styles['bullet']))
        else:
            text=' '.join(lines)
            style='source' if text.startswith('Sources:') or text.startswith('Scope and assumptions.') else 'body'
            story.append(Paragraph(inline(text),styles[style]))

doc=SimpleDocTemplate(str(OUT),pagesize=letter,rightMargin=36,leftMargin=36,topMargin=43,bottomMargin=41,
    title='Clarity Pro: freemium and pricing strategy',author='Clarity strategy research',
    subject='Feature paywalls, competitors, API unit economics and implementation plan')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
reader=PdfReader(OUT)
print('Created',OUT,'pages',len(reader.pages),'bytes',OUT.stat().st_size)
for i,p in enumerate(reader.pages):
    txt=p.extract_text()
    links=[a.get_object().get('/A',{}).get('/URI') for a in p.get('/Annots',[]) if a.get_object().get('/A')]
    print(i+1,len(txt.split()),'words;',len(links),'links;',txt.splitlines()[2:4])
assert len(reader.pages)==9, 'Unexpected pagination; inspect overflow before delivery'
assert sum(len(p.get('/Annots',[])) for p in reader.pages)>=20
assert not any(x in '\n'.join(p.extract_text() for p in reader.pages) for x in ['turn21view','<!-- page -->','\u25a0'])
