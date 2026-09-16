# switch_in_6_month_*_company — Agent Instructions

১৮০ দিনে চাকরি বদলের তিনটা **বিকল্প** plan — একজন একটাই চালায় (ব্যবহারকারীর সিদ্ধান্ত ২০২৬-০৯-১৫), পাঠক ব্যবহারকারী নিজে: **লোকাল** — বাংলাদেশি কোম্পানিতে ২০ আবেদন + ৫ process (২০২৬-০৯-১৪-এ শুরু) · **রিমোট** — বাংলাদেশে বসে বিদেশি রিমোট কোম্পানিতে ২০ + ৫, offer-এর সীমা $১,৭০০ · **গ্লোবাল** — দেশে থেকে big tech মানের কোম্পানিতে রিমোট, ১০ + ৩, relocation নয়, সীমা $১,৭০০। প্রতিদিন একটা করার কাজ, `learning_to_learn`-এর নীতি মেনে। এই ফাইল তিন repo-তে হুবহু এক।

- **তিন repo-র কোড হুবহু এক** — পার্থক্য শুধু `app/lib/site.ts` (নাম, `slc6`/`src6`/`sgc6` prefix, `suggestedStart` — লোকালে `2026-09-14`, বাকি দুটোয় `null`), `next.config.ts`-এর basePath আর `docs/`। কোড বদলালে তিনটাতেই একই বদল।
- তথ্য বদলালে ক্রম: `brainstorming/ASSUMPTIONS.md` → `brainstorming/` → এই ফোল্ডারগুলোর `docs/` → DSA / system design / behavioural-এর সাইট। `switch_company_in_24_month` ব্যবহারকারী মুছেছেন (২০২৬-০৯-১৫) — উৎস হিসেবে আর নেই।
- `docs/00-rules.md` = নিয়ম; `docs/01…06-*.md` = ৩০ দিনের ৬টা ব্লক, **flat**। scanner `^\d\d-.*\.md`; route ফাইলনাম থেকে নম্বর বাদে (`01-ignition.md` → `/block/ignition/`), দিন `/day/007/`।
- parser-এর ছাঁচ: `# ব্লক ১ — নাম`, নিচে `*দিন ০০১–০৩০ · dip*` (শেষে `· dip` = dip-এর ব্লক), `> **ব্লক শেষে:**`, `### দিন ০০৭ · শিরোনাম`, `- [ ] ৩০′ …`, `> **দিন শেষে:**`। কাজে `⚑` = মাইলফলক, `🔁` = ঝালাই হবে, শেষে `🧠 (নাম · নাম)`। দিনের নম্বর পরপর না হলে build ভাঙে। ছাঁচ বদলালে parser-ও বদলান; নতুন 🧠 নাম → তিন repo-র `app/lib/principles.ts`।
- ফাইলে **তারিখ নেই** — শুরুর তারিখ সাইটে (`<prefix>:v1:start`), দিন গোনা কোডে (`lib/dates.ts`); দিন ০০১ = সোমবার ধরে লেখা। **"আজ" = ক্যালেন্ডারের তারিখ, plan পেছায় না** — বাদ পড়া সাধারণ কাজ ফেরে না; শুধু `⚑` হোমে জমে থাকে।
- **ঝালাই স্বয়ংক্রিয়** — `🔁` কাজে টিকের **আসল তারিখ** থেকে ১/৩/৭/২১ দিন; "আটকে গেছি" → আজ থেকে আবার ১। হাতে যোগ করার queue নেই, বানাবেন না।
- হোমের মূল অংশে **শুধু আজ** (working memory) — ক্রম: শুরুর তারিখ (না থাকলে শুধু ওটাই) → dip-এর সতর্কতা → জমে থাকা ⚑ → আজকের ঝালাই → আজকের দিন। rail-এ ৬ ব্লক, দিন শুধু খোলা ব্লকের।
- Progress চার key (`start`, `task` = শেষের তারিখ, `check` = `d007`/`b1`, `review` = `{ base, step }`), সব একমাত্র `app/hooks/useProgress.ts` দিয়ে। task-id = দিন + কাজের **লেখা** থেকে hash।
- **DSA এই সাইটগুলোয় নয়** — শুধু ঘর আর লিংক, প্রতিটা plan নিজের DSA সাইটে (ব্যবহারকারীর সিদ্ধান্ত ২০২৬-০৯-১৫): লোকাল দিন ০০৮–০৪৭ `dsa_prep_local_company`; রিমোট দিন ০০৮–০৭৭ `dsa_prep_remote_company`; গ্লোবাল দিন ০০৮–১৭৫ `dsa_prep_global_company`। DSA সাইটের দিন = plan-এর ৩০′-এর ঘর। রিমোট/গ্লোবাল DSA সাইটের ⚑ মহড়া/mock plan-এর শনিবারে (রিমোট দিন ০৩৪, ০৬২, ০৭৬; গ্লোবাল দিন ০৩৪, ০৬২, ০৯০, ১১৮, ১৪৬, ১৬৭, ১৭৪-এর loop) — ঐ শনিবারের কাজ পাশের দিনে সরানো; সপ্তাহে ৭ ঘণ্টাই।
- **system design-ও এই সাইটগুলোয় নয়** — শুধু ঘর আর লিংক (ব্যবহারকারীর সিদ্ধান্ত ২০২৬-০৯-১৫): লোকাল দিন ০৫০–০৭৭ আর রিমোট দিন ০৭৮–১৩৩ — DSA শেষে খালি হওয়া সোম–শুক্রের ৩০′ (আগে ঝালাই, ১৫′-এর মধ্যে, তারপর `system_design_local_company` / `system_design_remote_company`); গ্লোবাল দিন ০০৮–১৭৫ — plan-এর আগের design-এর ঘর (বেশিরভাগ মঙ্গল ২৫′, বৃহস্পতি ২৫′, শনি ৬০′, রবি ৪৫′), `system_design_global_company`। plan-এর দিন ১৪০ আর ১৪৭-এ (লোকাল, রিমোট) design doc এখন মুখে বলার ঘর। plan-এর নিজের mock plan-এই।
- **behavioural-ও এই সাইটগুলোয় নয়** — শুধু ঘর আর লিংক (ব্যবহারকারীর সিদ্ধান্ত ২০২৬-০৯-১৫): story-র কাজ দিন ০০৬–১৫৪ (গ্লোবালে ০০৬–১৪৩) `behavioural_interview_<পথ>_company`-এ, ঐ সাইটের দিন = plan-এর দিন − ৫। রোজের ইংরেজির ১৫′ (story জোরে বলা সহ) আর mock interview plan-এই।
- chassis DSA সাইটগুলো থেকে, প্যাটার্ন আর প্রবলেম-নোট বাদে। `app/lib/plan.ts` server-only। **Theme contract অলঙ্ঘনীয়**, সাইট **dark-only**।

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
