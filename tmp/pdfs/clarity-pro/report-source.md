# Clarity Pro
## Make practice free. Sell a reason to improve.
Strategy for Clarity's founder | September 5, 2026

Keep the daily practice habit free. Charge for a personalized rehearsal plan, specific corrections, and enough coached practice to prepare for something that matters. My recommended first audience is English-speaking professionals who want clearer interviews, presentations, and work updates. Include fluent non-native speakers without making accent removal the product promise.

The strongest product demonstration is simple. A person records an answer, gets one useful correction, tries again, and hears the difference. Clarity already has several building blocks. The opportunity is to make that sequence fast and convincing, then remember what the person should practice next. This is a product hypothesis, not a verified gap that competitors cannot copy.

| Launch decision | Recommendation |
| --- | --- |
| Free forever | Unlimited basic practice, playback, built-in exercises, basic metrics and personal history |
| Free cloud coaching | Two sessions per monthly allowance period, up to 90 seconds each; plus one welcome exercise with two 45-second attempts |
| Clarity Pro | $14.99/month or $99.99/year, proposed USD test prices |
| Pro allowance | 90 coached minutes each month; personalized plans, targeted drills and advanced comparisons |
| First paid feature | A practice plan built around the user's own upcoming conversation or presentation |
| Initial purchase flow | Free demonstration, contextual upgrade, monthly and annual choices |

Basic practice must still work after a coaching allowance ends. Show the next reset date and offer ordinary practice immediately. Annual subscribers receive the same monthly allowance as monthly subscribers, replenished monthly rather than all at once. Do not advertise unlimited cloud coaching.

At the proposed annual price, roughly $7 per subscriber per month remains after an assumed 15% store fee and a conservative 1% RevenueCat allocation. This is before API usage, free-user costs, refunds, support, acquisition and fixed overhead. Profitability depends as much on the free population as on individual paid users. The model on pages 5 and 6 makes that visible.

Scope and assumptions. This is a strategy and source-code review, not a production configuration change. Pricing recommendations use USD before taxes; localize through the stores. Competitor pages were checked September 5-6, 2026. Production bills, live RevenueCat offerings, actual conversion, usage and churn were not available. No app code or billing settings were changed.

<!-- page -->
# Where Clarity can compete

Generic speech scores and AI roleplay are already common. Do not build a broad language curriculum to match ELSA, or position Clarity as the cheapest speech coach. Compete on the usefulness of a five-minute rehearsal for the user's actual situation.

| App | Advertised free access | Advertised paid benchmark |
| --- | --- | --- |
| Yoodli | Five lifetime sessions | Pro $8/month billed annually; Advanced $20/month billed annually |
| Orai | Seven-day card-required trial; ongoing free allowance unverified | Web $12/month or $49.99/year |
| Speeko | Basic insights free forever, without an account | Web $29.99/month; annual equivalent $8.33/month |
| ELSA | Core capabilities labeled limited; numeric caps unspecified | English web offer $159.99/year or $59.99/quarter |
| BoldVoice | First lesson without a subscription | Web $24.99/month or $149.99/year |

Sources: [Yoodli pricing](https://yoodli.ai/pricing), [Orai pricing](https://orai.com/pricing/), [Speeko subscriptions](https://www.speeko.co/subscriptions), [ELSA product offer](https://elsaspeak.com/en/product?variant=D), [BoldVoice plans](https://start.boldvoice.com/start/details) and [BoldVoice U.S. listing](https://apps.apple.com/us/app/boldvoice-accent-training/id1567841142). These are vendor claims, not quality evaluations. Web pages display dollar signs; USD is a comparison assumption where ISO currency was absent. Speeko's annual equivalent is rounded, so it is not an exact billed total.

Channel differences matter. Orai's U.S. iOS listing shows $12.99 monthly, versus $12 on its website. Speeko's store description and SKU list contain different annual offers. Treat these as distinct advertised offers. Do not use old ELSA regional free limits as universal current policy. Sources: [Orai U.S. listing](https://apps.apple.com/us/app/orai-improve-public-speaking/id1203178170), [Speeko U.S. listing](https://apps.apple.com/us/app/speeko-ai-for-public-speaking/id1071468459).

Yoodli already sells roleplay and uploaded-recording feedback. Speeko advertises personalized feedback and a large exercise library; its app history also describes content feedback and guided conversations. BoldVoice sells specialist pronunciation instruction. A free tier, personalized tips, or roleplay by themselves will not establish an advantage.

Use a narrower promise. "Give a clear 60-second update" is easy to demonstrate. So is "Practice your answer to the interview question you keep avoiding." Start with work updates as the recurring habit and interviews as the urgent acquisition use case. After an interview ends, guide the user into introductions, meetings and presentations instead of assuming interview preparation will retain them indefinitely.

The defensible asset to build is a reliable history of the user's recurring problems and which exercises helped. Validate progress on a fresh question as well as the repeated answer. Improvements on a memorized script do not establish transferable speaking skill.

<!-- page -->
# What belongs behind the paywall

Make Free a complete practice tool. Pro should answer "What should I work on, and how do I improve it?" The following is a proposed entitlement contract, not the current implementation.

| Capability | Free | Pro |
| --- | --- | --- |
| Recording, teleprompter, built-in passages, freestyle | Unlimited basic practice | Same |
| Playback, pace, fillers, pause observations, streaks | Included, with measurement limitations labeled | Same |
| Personal history and previously earned results | Always readable; basic totals and trend | Adds cross-session patterns, filters and planned follow-up |
| Paste and read your own script | Included | Adds context-specific critique, structured practice and revisions |
| Detailed cloud coaching | Two sessions/month, at most 90 seconds each | 90 coached minutes/month, at most 5 minutes per submitted session |
| Personalized multi-day plan | One sample task | Full plan based on goals, observed problems and upcoming event |
| Targeted generated exercises | One alongside each free coached session | Up to 60 new exercises/month; unlimited reuse |
| Before/after comparison | Replay the welcome pair and your own saved clips | Guided comparison, measured changes and next practice recommendation |
| Coaching for interviews and presentations | Static prompts and basic rehearsal | Context-specific questions, follow-ups and structured feedback, once built |

A coached minute means one minute of user audio submitted for enhanced analysis. All coached modes share that allowance, including future freestyle coaching, even when their provider costs differ. This gives the customer one comprehensible meter. Basic recordings do not consume it. Display the mode and allowance before recording; never surprise the user with a paywall after a long recording.

Renew allowances on server-defined monthly anniversaries and show the date locally. Free grants never roll over. Annual subscriptions replenish monthly. Reuse the same completed report without charging again. Release the user's reservation when analysis fails; record any supplier charge separately. If a recording exceeds the supported length, let the user select an excerpt or continue with basic analysis.

Internal limits should also prevent tiny-request abuse: at most 120 new coached reports and 300 uncached pronunciation clips per Pro month, in addition to the audio and exercise limits. Free cloud TTS should be bounded to words from the sample sessions, with a small cap such as 20 new clips/month. Replay cached clips freely. Explain any customer-relevant limit in the included-services details.

Keep account deletion, export of personal data, accessibility, purchase restoration and cancellation support available to everyone. Do not revoke already purchased reports when Pro expires. Avoid selling history access as the primary upgrade. It has low marginal cost and makes the free product feel incomplete.

The current engines try native on-device recognition and can fall back to platform network recognition. Basic mode therefore means no Clarity-funded assessment call, not guaranteed offline recognition on every device. Existing audio needs a deliberate local retention policy before promising a durable recording archive.

<!-- page -->
# Features worth marketing and building

1. Rehearse my next conversation. The user pastes a question, script or talking points and chooses the audience and time limit. Clarity gives one correction, a short retry, and a follow-up question. Market it as "Know how you want to say it before the meeting." Build a goal record, link attempts to it, and extend the current bounded coaching schema with evidence spans and a next action. Start with turn-based recording and text prompts. This is the first Pro workflow to build.

2. Hear your improvement. Let the user switch between the first and latest attempt at the same sentence. Show measured pace or filler changes only where the comparison is valid. Market it with a real, consented before/after demonstration, without fabricated improvement percentages. Clarity has word offsets and immediate playback, but durable audio references, linked attempts and retention controls still need work. Give the welcome comparison free. Sell the ongoing guided comparison and plan.

3. A short plan for your recurring habits. Turn repeated observations into one daily task. A speaker who rushes endings gets a pacing drill; a speaker who repeatedly struggles with a supported sound gets a specific exercise. Market it as "Open Clarity and know what to practice today." Reuse the existing word-mastery and recommendation logic. Persist compact sound evidence, measurement source and exercise outcomes. Generate the plan when relevant evidence changes, then cache it. This is more useful for retention than a fresh generic paragraph after every recording.

4. Make your answer shorter without losing your point. Analyze a user's freestyle transcript against their intended message. Highlight an actual sentence to simplify, produce a draft revision and ask them to say it naturally. Market it as "Turn your rambling answer into a clear one." Keep content feedback distinct from pronunciation. The current coach sees only a 1,200-character freestyle excerpt, so longer answers require segmented evidence or an explicit excerpt scope. Competitors already offer content coaching; quality and low-friction retries must justify the purchase.

5. Interview and presentation practice packs. Add a small set of well-edited rubrics and turn-based follow-ups. Use the same speech engine and shared allowance. Test "Answer the question you hope they don't ask" as a campaign. Job descriptions and scripts should be treated as user data, with bounded prompts and deletion controls. Launch one pack well before building a large catalog.

Defer real-time voice conversation, video body-language scoring, meeting bots, voice cloning and an extensive language course. They add cost, implementation scope or new reliability questions before the core improvement loop has been proven. Native transcription plus a short text response is enough to validate conversational practice. Price live voice separately if measured demand later justifies it.

Maintain measurement honesty. Azure prosody is documented for en-US only, and Azure's old content-assessment preview is retired in newer SDKs. The app offers several accent locales and currently uses one TTS voice with a cache keyed only by word. Do not promise accent-specific voice models or equally supported prosody across those locales. Use locale/model/voice/version in new caches and show unsupported metrics as unavailable. Source: [Microsoft pronunciation assessment](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-pronunciation-assessment).

<!-- page -->
# Price the work the APIs actually do

Current source defaults are Gemini 3.5 Flash Lite through Vercel AI Gateway for coaching and exercise generation, OpenAI TTS-1 for word clips, and Azure for scripted pronunciation assessment with prosody enabled. Native recognition handles live transcription. Deployment environment variables may override the model defaults; no production invoice was inspected.

| Cost component | Verified rate or explicit model assumption |
| --- | --- |
| Gemini 3.5 Flash Lite | Catalog starts at $0.30 per million input tokens and $2.50 per million output tokens |
| Example coaching report | Assumed 2,000 input + 500 billable output tokens = $0.00185 |
| Example generated exercise | Assumed 1,000 input + 600 billable output tokens = $0.00180 |
| TTS-1 word clip | $15 per million characters; a 40-character request costs $0.0006 |
| Azure assessment | Baseline speech-to-text billing plus a prosody add-on; actual regional dollar rate unverified |
| Azure sensitivity below | Assumed effective all-in $1, $1.50 or $3 per audio hour, including billing/retry overhead |

Sources: [Vercel model catalog](https://vercel.com/ai-gateway/models/gemini-3.5-flash-lite), [Google pricing](https://ai.google.dev/gemini-api/docs/pricing?hl=en), [OpenAI TTS-1](https://developers.openai.com/api/docs/models/tts-1), [Microsoft assessment billing](https://learn.microsoft.com/en-ca/azure/ai-services/speech-service/pronunciation-assessment-tool) and [Azure pricing](https://azure.microsoft.com/en-us/pricing/details/speech/). Azure's fetched page displayed dollar placeholders, so these scenarios are not vendor quotes. Include thinking tokens and retries in actual LLM billing. Existing routes permit two retries.

Text coaching is inexpensive in these examples. The cost problem is repeated audio assessment, multiplied across free users. Hiding a generated report after paying to produce it saves nothing. Gate the request before invoking the provider. Likewise, do not upload every free recording to Azure and merely hide the phoneme results.

Use $14.99/month and $99.99/year as the first price test. Annual is about $8.33/month and 44% below twelve monthly payments. Offer the same features and monthly limits on both plans. Start without a weekly subscription or lifetime unlimited-AI purchase. Short-term users can buy a month; annual users need repeated value beyond one event.

Model a 15% store fee plus 1% RevenueCat on gross revenue. Apple requires qualification and enrollment for its 15% small-business rate; otherwise a subscriber's first paid year ordinarily has a 30% store share. Ordinary Play-billed subscriptions total 15% under the retrieved fee schedules. RevenueCat is free through $2,500 monthly tracked revenue and then charges 1%; using 1% throughout is conservative. Sources: [Apple small-business program](https://developer.apple.com/app-store/small-business-program/), [Apple subscriptions](https://developer.apple.com/app-store/subscriptions/), [Google Play fees](https://support.google.com/googleplay/android-developer/answer/112622), [RevenueCat pricing](https://www.revenuecat.com/pricing).

After the modeled fees, monthly Pro yields $12.59/month; annual Pro yields $7.00/month of normalized revenue. Annual cash arrives earlier but finances twelve months of service. Taxes, refunds, acquisition and fixed overhead are not included in these numbers.

<!-- page -->
# The free population determines the margin

Assume a typical paying user consumes 40 coached minutes/month and $0.30 of other variable service cost. At the illustrative $1.50/hour effective assessment rate, that is $1.30/month. The $0.30 is a planning allowance for text, TTS, usage-related infrastructure and retries, not a measured invoice. Fixed hosting minimums, payroll and acquisition remain separate.

| Annual subscriber usage | At $1/hour | At $1.50/hour | At $3/hour |
| --- | --- | --- | --- |
| Typical: 40 min + $0.30 other cost | $0.97 | $1.30 | $2.30 |
| Full allowance: 90 min + $0.60 other cost | $2.10 | $2.85 | $5.10 |
| Contribution at full allowance, before free subsidy | $4.90 | $4.15 | $1.90 |

These are calculations, not forecasts. At a 30% store fee plus 1% RevenueCat, annual normalized revenue falls to $5.75. The $3/hour full-allowance case leaves only $0.65 before subsidizing free users. Verify the regional rate and costly usage percentiles before enabling annual sales; reduce the proposed allowance or revisit annual price before launch if these economics do not hold.

For Free, two 90-second sessions cost $0.075 in audio at $1.50/hour. A $0.10 recurring total-cost scenario allows another $0.025 for bounded text, clips and variable infrastructure. The welcome pair adds 90 seconds once, about $0.0375 in audio in that scenario. Track welcome grants and optional subscription trials as acquisition costs, outside the recurring free allowance.

| 1,000 monthly active users; all payers annual | 2% paid | 5% paid | 10% paid |
| --- | --- | --- | --- |
| Paying users | 20 | 50 | 100 |
| Net subscription revenue/month | $140 | $350 | $700 |
| Paid service cost at $1.30 each | $26 | $65 | $130 |
| Free service cost at $0.10 each | $98 | $95 | $90 |
| Contribution before fixed costs/acquisition | $16 | $190 | $480 |
| Contribution if Free instead costs $0.25 each | -$131 | $47 | $345 |

Values rounded. Paid share here means paid active users divided by all monthly active users. It is not download-to-paid conversion. The annual-only assumption is conservative on revenue; usage and free cost remain unvalidated. A paid user with no activity still generates revenue, so production accounts should include all paying subscriptions separately from usage cohorts.

Formula: contribution = net subscription revenue - paid variable service costs - free variable service costs. At $0.10/free and $1.30/paid, variable-cost break-even is about 1.7% active paid share. At $0.25/free it rises to 4.2%. Neither threshold pays salaries. At 5% paid share in the first scenario, about $3.80 remains per payer after free subsidy. Covering $1,000 of fixed monthly costs would require roughly 264 such payers, before acquisition and refunds.

Instrument actual cost per successful coached minute, retries, cache hits and grant redemption. Target positive contribution across the whole population and sustainable acquisition payback. A high per-subscriber API margin can hide a loss-making free tier.

<!-- page -->
# Turn demonstrated value into a subscription

Show the product working before asking for payment. A proposed welcome sequence is: choose an upcoming speaking situation, record for 45 seconds, see one grounded correction, retry for 45 seconds, then compare. If the second attempt is not better, say what changed accurately and offer the next exercise. A fabricated improvement claim would undermine the reason to trust the coach.

Present Pro when the user requests a personalized plan, asks for a tailored follow-up, or uses the free coaching allowance. Always provide a visible way to continue free practice. Start with one automatic post-demonstration offer and subsequent offers triggered by an explicit paid-feature request. Test frequency instead of showing a modal after every session.

Suggested paywall copy, only after the listed features ship:

"Be ready for your next conversation."

"Practice your own material, get a plan for what to improve, and compare your attempts. Includes 90 coached minutes each month."

Display "$99.99 per year" as the main annual amount, with "about $8.33/month, billed annually" below it. Show the monthly option at $14.99 with equal clarity. The action should name the selected purchase, such as "Subscribe for $99.99/year." Include renewal terms, restoration, privacy and terms links. Apple requires the amount actually billed to be the most prominent price. Source: [Apple subscription presentation guidance](https://developer.apple.com/app-store/subscriptions/).

Start with the no-card welcome sample. Then test an optional seven-day auto-renewing Pro trial against that baseline. Give the trial an explicit 15-minute coaching allowance, with free practice continuing afterward; do not represent it as unlimited Pro if it has a different allowance. Explain when payment starts and the renewal amount. Verify eligibility from the store before showing trial copy. Source: [Google subscription policy](https://support.google.com/googleplay/android-developer/answer/9900533).

RevenueCat's 2026 report, primarily using 2025 activity, reports median day-35 download-to-paid conversion of 2.1% for freemium and 10.7% for hard paywalls; freemium's top quartile exceeds 4.5%. It also reports 37.4% median trial-to-paid conversion for 5-9-day trials. These are observational benchmarks among qualifying RevenueCat apps, not causal effects or Clarity forecasts. A hard paywall also conflicts with the requirement for durable free use. Source: [State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps).

Measure the whole sequence: install, first completed practice, useful feedback, retry, seven-day return, paywall view, purchase, refund and renewal. Keep trial-to-paid, paywall-view-to-paid, install-to-paid and active paid share separate. Pick winners on net contribution per install over a declared window, with retention and refunds as guardrails. Do not optimize trial starts alone.

Retention should come from new useful work. Give a short weekly review based on comparable measurements, then one next task. Let interview users move into weekly meeting updates. Offer optional reminders and consented sharing of a before/after clip. Keep raw recordings private by default and make sharing a deliberate action.

<!-- page -->
# What needs to change in this repository

The current source has working subscription infrastructure but does not establish paid feature boundaries. The audit found these concrete issues.

| Area | Finding and next change |
| --- | --- |
| app/paywall.tsx:48,335 | Benefits are generic; annual/monthly/weekly cards are supported. Replace copy with shipped outcomes and explicit allowances. Prefer two directly selectable plans. |
| hooks/use-paywall.ts:131 | requirePro has no feature call sites found; it also runs the action when purchases are unavailable. Keep basic practice available, but never use store unavailability to authorize paid API work. |
| app/session/results.tsx:189; hooks/use-ai-coaching.ts:16 | Results mount the AI coach, which requests coaching automatically. Decide access before mounting the requesting component; persist and reuse completed reports. |
| app/api/*+api.ts | Three billable handlers validate payloads but have no visible caller authentication, entitlement checks or usage quota. Add checks before every provider call. |
| hooks/use-practice-session.real.ts:618 | Azure key and region come from EXPO_PUBLIC variables and requests leave the device directly. Move assessment behind the authenticated server. |
| convex/schema.ts | Sessions, passages and settings exist; no usage ledger, server entitlement mirror or durable audio archive is defined. Add these deliberately where needed. |

These are source findings, not proof of a production exploit or dashboard state. If distributed builds contained a valid Azure key, remove client key use and rotate that key as part of migration. Protect the proxy with quotas; hiding the key alone does not bound spending.

Create one capability policy for Free, welcome, trial and Pro. Keep RevenueCat as entitlement authority, with an authenticated server mirror populated from verified webhooks and reconciled against authoritative customer state. Preserve the existing Clerk-to-RevenueCat identity bridge. Handle expiration, grace periods, refunds, transfers, duplicate and out-of-order events. A cancelled renewal does not revoke a still-paid period. Sources: [RevenueCat webhooks](https://www.revenuecat.com/docs/integrations/webhooks), [RevenueCat event reference](https://www.revenuecat.com/docs/integrations/webhooks/event-types-and-fields).

Use an atomic reservation per user, period, feature and request ID before starting a billable request. Validate audio duration on the server and reserve an upper bound for a complete job; concurrent chunks and second devices must share the same allowance. Settle actual usage once, deduplicate retries, expire abandoned reservations and store provider costs even when a customer credit is returned. An authenticated request must derive its user from the session token, never from a posted user ID.

Keep synchronous local stores as the screen's source of truth. Feed a quota snapshot through the existing sync bridge, with the server making the final authorization decision. Use relative imports and explicit validators inside Convex. Keep local recording and saved results usable during network or billing-state outages. Require online authorization for new cloud work.

Cache reports by user/session/model/prompt version and pronunciation clips by normalized word/locale/voice/model/version. A public cache header on a POST is not proof that generation is deduplicated. Add global spend alarms, per-account rate limits and a provider circuit breaker that offers basic practice. Record cost and outcomes, not transcript contents, in analytics.

<!-- page -->
# Ship in this order and test the assumptions

Phase 1. Make billing enforceable and measurable. Add authenticated server assessment, the entitlement mirror, atomic quotas and cost telemetry. Reconcile displayed and server access after purchases. Preserve free basic practice and saved results during failures. Verify the actual Azure region, SKU, prosody charge, retry overhead and store commission status. Do this before acquiring a large free audience.

Phase 2. Build the first useful paid loop. Link attempts to the user's own question or script, retain comparison audio locally with a visible deletion policy, and return one evidence-backed correction. Add a short personal plan using existing drills and word-mastery data. Improve the current 20-minute default daily goal by offering a five-minute starting recommendation; total practice time and coached time must be distinct.

Phase 3. Launch the proposed Free/Pro contract to a small cohort. Keep grandfathering rules explicit for existing paid promises; do not silently impose new limits on a subscription sold as unlimited. Start with the welcome sample and two replenishing monthly coached sessions. Check heavy usage and free-user costs before activating the proposed annual offering at scale.

Phase 4. Run one experiment at a time. First test an outcome-specific paywall against the current generic message, holding price constant. Then test welcome sample alone versus the optional seven-day trial. Finally test price or the free allowance. Separate acquisition campaigns for work updates and interview preparation. With small traffic, use interviews and session observations before relying on underpowered A/B results.

Suggested internal launch gates, not industry benchmarks:

- No duplicate quota charge in concurrent, retried or interrupted jobs; restore, expiry, grace and refund flows behave correctly.
- Every successful provider call has recorded cost or an explicit reconciliation status. Typical paid service cost fits the $1.30 scenario or pricing is revised.
- Free cost is near the $0.10 model and the whole-population contribution is positive. Investigate the $0.25 stress case before increasing grants.
- At least 95% of valid, supported coached requests finish successfully in the pilot. Provider fallbacks are labeled and failed coaching does not consume the user's grant.
- Users can find a relevant next task and explain what to change after the first correction. Test with fluent native and non-native speakers across target devices and supported locales.

Use meaningful implementation checks: parallel requests from two devices, account switching, missing store configuration, restored purchase, expired trial, exhausted minutes, clock changes, deleted audio, repeated report opens, provider timeouts and malformed uploads. Existing typecheck and test scripts provide a starting point; add billing/usage invariants and exercise the purchase flow in store sandboxes. No runtime testing was performed for this research-only review.

What remains uncertain. No competitor was purchased or compared in a controlled speaking-quality test. Web and in-app prices can differ. Exact Orai/ELSA free limits, Clarity's live offerings, API invoices, activation, conversion, utilization and renewal rates remain unknown. The pricing and quotas are launch hypotheses. The highest-value next evidence is a measured pilot of the actual rehearsal loop, followed by supplier billing reconciliation.

Research stopped after five direct competitors, the actual configured model families, store fees and subscription benchmarks had primary-source support or explicit gaps. Extra competitor names would not change the first build decision. App-source review and the versioned [Expo SDK 57 reference](https://docs.expo.dev/versions/v57.0.0/) informed the implementation sequence. The report's financial tables are reproducible scenarios, not observed business results.
