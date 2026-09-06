# Internal claim-to-source and gap ledger

Access window: September 5-6, 2026. Dates below are publication/update dates where visible; otherwise undated current page. Native references retained for research provenance only. Canonical report: report-source.md. No source attachment was downloaded or embedded. Primary pages support advertised claims, not comparative quality.

| Claim family | Source title; publisher; date; URL | Visible evidence / native provenance | Confidence and gaps |
| --- | --- | --- | --- |
| Yoodli packaging | Pricing & Plans; Yoodli; undated; https://yoodli.ai/pricing | 5 lifetime, 10/week Pro, $8 annual-equivalent Pro, $20 Advanced; turn19view0 | High for advertised web offer; no checkout |
| Orai packaging | Orai Pricing; Orai; undated; https://orai.com/pricing/ | $12/mo, $49.99/yr, card-required 7-day trial; turn19view1 | Ongoing free unknown |
| Orai iOS price | Orai - Improve Public Speaking; On Time Labs / Apple App Store; current listing; https://apps.apple.com/us/app/orai-improve-public-speaking/id1203178170 | Monthly $12.99 SKU; turn23view1 | Channel-specific, not universal |
| Speeko packaging | Subscriptions and Pricing; Speeko; undated; https://www.speeko.co/subscriptions | $29.99/mo, annual equivalent $8.33, basic free forever; turn19view2, turn20view0 | Rounded annual equivalent; no exact checkout total |
| Speeko content features | Speeko: AI for Public Speaking; Speeko Tech / Apple App Store; version 5.0.0 Oct 22 2025; https://apps.apple.com/us/app/speeko-ai-for-public-speaking/id1071468459 | Content feedback, guided conversations in version history; turn23view2, worker turn10view0 | Advertised capability; price variants conflict |
| ELSA packaging | Your Personal English Coach; ELSA; undated; https://elsaspeak.com/en/product?variant=D | Limited free, $159.99 annual/$59.99 quarterly; turn19view3, turn20view1 | Specific English web variant; numeric free limits unknown |
| BoldVoice price | American Accent Training App plan details; BoldVoice; undated; https://start.boldvoice.com/start/details | $24.99/mo and $149.99/yr; turn20view2 | Web offer |
| BoldVoice free | BoldVoice: Accent Training; Wellocution / Apple App Store; current listing; https://apps.apple.com/us/app/boldvoice-accent-training/id1567841142 | First lesson only without subscription; turn23view0 | High advertised limit |
| Gemini rate | Gemini 3.5 Flash Lite API & Pricing; Vercel; model release July 21 2026; https://vercel.com/ai-gateway/models/gemini-3.5-flash-lite | $0.30 input/$2.50 output per M, actual slug; turn19view5, turn20view3 | Catalog prices from, routing may vary |
| Gemini corroboration | Gemini Developer API pricing; Google; current page; https://ai.google.dev/gemini-api/docs/pricing?hl=en | Same standard rate, output includes thinking; turn23view3 lines 416-427 | High; billable token counts not measured |
| Gateway credits | AI Gateway Pricing; Vercel; Feb 10 2026; https://vercel.com/docs/ai-gateway/pricing | No markup, $5 free account credit ends when paid credits bought; turn21view6 | Not included in business model; report omits credit detail |
| TTS-1 rate | TTS-1 Model; OpenAI; undated; https://developers.openai.com/api/docs/models/tts-1 | $15/M characters; turn21view5, turn22view3 | High; use deployment invoice for overrides |
| Azure add-on | How to use pronunciation assessment in Microsoft Foundry portal; Microsoft Learn; Mar 31 2026; https://learn.microsoft.com/en-ca/azure/ai-services/speech-service/pronunciation-assessment-tool | Baseline STT plus prosody charge; turn21view7, turn22view4 | High cost structure |
| Azure dollar rate | Pricing - Azure Speech; Microsoft; current page; https://azure.microsoft.com/en-us/pricing/details/speech/ | Audio billing in seconds, paid dollar values render placeholders; turn21view8 | UNKNOWN exact regional rate. Worker Retail API certificate then429; stopped. Report $1/$1.50/$3 effective/hour are assumptions |
| Prosody support | Use pronunciation assessment; Microsoft Learn; current page; https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-pronunciation-assessment | en-US only; content preview retired SDK1.46+; turn15view0 | High documented capability; app REST behavior not executed |
| RevenueCat cost | Pricing & Plans; RevenueCat; current page; https://www.revenuecat.com/pricing | Free to $2500 MTR then1% tracked revenue; turn21view1, turn22view1 | High. Model allocates1%gross even before threshold |
| Apple reduced rate | App Store Small Business Program; Apple; current page; https://developer.apple.com/app-store/small-business-program/ | Qualified enrolled accounts15%; turn21view2 | User enrollment unknown |
| Apple rates/disclosure | Auto-renewable Subscriptions; Apple; current page; https://developer.apple.com/app-store/subscriptions/ | 70%firstyear/85%later ordinary proceeds, billed total most prominent; turn21view3, turn22view2 | Model30%sensitivity; no taxes included |
| Google fee | Service fees; Google Play; current schedule incl Jun30 2026 changes; https://support.google.com/googleplay/android-developer/answer/112622 | Ordinary Play-billed subscription15%total, some markets10%service+5%billing; turn21view4 | Scope explicitly ordinary Play billing |
| Trial disclosure | Subscriptions; Google Play; current policy; https://support.google.com/googleplay/android-developer/answer/9900533 | Duration, price, paid transition, cancellation and free access clarity; turn23view4 | High |
| Conversion | State of Subscription Apps2026; RevenueCat;2026 report, mainly2025data; https://www.revenuecat.com/state-of-subscription-apps | 115k+qualifyingapps; D35 freemium2.1%, hard10.7%; Q3free>4.5%;5-9day trial37.4%; turn21view0, turn22view0 | Observational, selectedsample, not causal; no business forecast |
| Entitlement architecture | Webhooks; RevenueCat; current docs; https://www.revenuecat.com/docs/integrations/webhooks | Auth verification, retry/deduplication and reconciliation; turn15view1 | Architecture recommendation extends docs |
| Entitlement events | Event Types and Fields; RevenueCat; current docs; https://www.revenuecat.com/docs/integrations/webhooks/event-types-and-fields | Expiry, transfers, event timestamps and IDs; turn15view2 | Test behavior during implementation |
| Expo version | Expo SDK reference; Expo; July29 2026; https://docs.expo.dev/versions/v57.0.0/ | SDK57/RN0.86/React19.2.3; turn1view0 | Read as repository required |

## Local sources

All paths relative to /Users/nate/Downloads/speech-companion, read September5 2026. No production .env secrets were read.

- app/paywall.tsx:48/63/246/335: benefits, plans, scroll selection, heading. Prices fetched from store, not available in source.
- hooks/use-paywall.ts:131: action allowed when store unavailable. rg search found no product feature invocations.
- lib/entitlements.ts: active RevenueCat entitlement Clarity Pro, cancellation/grace display states.
- app/session/results.tsx:189; hooks/use-ai-coaching.ts:16: coach mounts and requests without entitlement check, no report persistence in hook.
- app/api/speech-coach+api.ts:109/126; practice-passage+api.ts:33/50; pronounce+api.ts:8/25: schema validation but no auth/quota, model defaults; maxRetries2.
- web/api files re-export the corresponding app handlers.
- hooks/use-practice-session.real.ts:618/644; services/azure-pronunciation.ts: direct public-config Azure key, phoneme/prosody request.
- hooks/use-practice-session.real.ts and hooks/use-freestyle-session.real.ts: native-first recognition, platform network fallback.
- services/ai-coaching.ts: MAX_TRANSCRIPT_EXCERPT1200 and compact weak sound stats; services/word-pronunciation.ts: word-only cache; pronounce route fixed alloy voice.
- convex/schema.ts: scalar sessions/passages/settings, no entitlement/usage/audio archive; services/session-history.ts: local persistence and mastery.
- components/auth-bridge.tsx; services/auth-state.ts; services/purchases.ts: existing authenticated purchase identity bridge.
- constants/goals.ts:11:20minute default; constants/theme.ts/color/fonts read before artifact design.

## Gap reconciliation and stop decision

Discovery: read billing, practice, providers, local/Convex persistence and logging. Competitor lane searched official pricing/help/store pages; economics lane searched actual provider rates, store fees and RevenueCat2026. Coordinator researched webhook semantics and assessment limits. Follow-up bounded discrepancies in Orai/Speeko web vs store prices, ELSA legacy allowances, unknown Azure regional dollars, exact Gemini slug and mixed native/cloud scoring. Critical prices and limits were reopened in coordinator tools.

All core claims have primary evidence or an explicit limitation. Product positioning, allowances, pricing, conversion experiments and cost aggregates are recommendations/scenarios. Unresolved: actual supplier invoices and overrides, live offerings, current conversion/churn, audience validation, competitive quality, supported-device accuracy. Next evidence: instrumented pilot and billing export; further broad web search unlikely to change first implementation choice. Stop after synthesis.

Required update_plan tool was searched and a call attempted; unavailable TypeError. Plan tracked through phase commentary instead. No need to repeat unchanged unavailable call.
