# switch_local_company_in_6_month

১৮০ দিনের plan: বাংলাদেশি কোম্পানিতে ২০টা আবেদন আর অন্তত ৫টা সম্পূর্ণ interview process। প্রতিদিন একটা করে করার কাজ, শেখার বিজ্ঞান মেনে। ২০২৬-০৯-১৪-এ শুরু হয়েছে।

এটা তিনটা বিকল্প plan-এর একটা। একজন একটাই চালায়: **লোকাল** (এটা) · [রিমোট](https://github.com/sojibrd/switch_remote_company_in_6_month) · [গ্লোবাল](https://github.com/sojibrd/switch_global_company_in_6_month)। তিনটার কোড হুবহু এক।

**লাইভ:** https://sojibrd.github.io/switch_local_company_in_6_month/

## Functional Requirement

- **আজ (`/`):** ক্যালেন্ডারের আজকের দিনের কাজ দেখায়। ক্রম: dip-এর সতর্কতা → জমে থাকা ⚑ মাইলফলক → আজকের ঝালাই → আজকের দিন। শুরুর তারিখ এখানেই বদলানো যায়।
- **Rail:** সব পাতায় বাঁয়ে একটা rail থাকে, মোবাইলে drawer। তাতে ৩টা পাতার লিংক, plan-এর gauge আর ৬টা ব্লক; যে ব্লক খোলা শুধু তার দিনগুলো দেখায়।
- **দিন (`/day/<nnn>/`):** এক দিনের কাজ, আর দিন শেষের হ্যাঁ/না।
- **ব্লক (`/block/<slug>/`):** ব্লকের ভূমিকা, ৩০ দিনের সারি, আর ব্লক শেষের হ্যাঁ/না।
- **ঝালাই (`/review/`):** প্রতিটা 🔁 কাজ টিকের দিন থেকে ১/৩/৭/২১ দিন পরে ফিরে আসে। "মনে ছিল" দিলে পরের ধাপে যায়, "আটকে গেছি" দিলে আজ থেকে আবার ১ দিনে।
- **নিয়ম (`/rules/`):** `docs/00-rules.md` হুবহু।
- **কাজে টিক:** টিক দিলে শেষের তারিখ জমা হয়। 🧠 chip চাপলে এক লাইনে দেখায় কেন কাজটা এভাবে, সাথে `learning_to_learn` সাইটের লিংক।

## Non-Functional Requirement

- **সত্যের উৎস `docs/`।** কোডে কোনো ব্লক, দিন বা কাজ হার্ডকোড নেই।
- **ফাইলে তারিখ নেই।** তারিখ = শুরুর তারিখ + (দিন − ১)। শুরুর তারিখ ব্রাউজারে; বসানো না থাকলে `app/lib/site.ts`-এর `defaultStart` (২০২৬-০৯-১৪)।
- **"আজ" = ক্যালেন্ডারের তারিখ।** plan পেছায় না। বাদ পড়া সাধারণ কাজ ফেরে না; শুধু ⚑ জমে থাকে।
- **ঝালাই স্বয়ংক্রিয়।** হাতে যোগ করার queue নেই।
- **Static export → GitHub Pages।** Backend নেই।
- **Progress শুধু `localStorage`-এ,** একমাত্র `app/hooks/useProgress.ts` দিয়ে।
- **`app/lib/plan.ts` server-only।**
- **তিন plan-এর কোড এক।** পার্থক্য শুধু `app/lib/site.ts`, `next.config.ts`-এর basePath আর `docs/`। কোড বদলালে তিন repo-তেই একই বদল।
- **Theme contract অলঙ্ঘনীয়, সাইট dark-only।** Tailwind শুধু লেআউটে; চেহারা role class আর `--t-*` টোকেনে। DSA-র প্রবলেম, নোট আর ঝালাই `dsa_prep_local_company`-এ; দিন ০৫০–০৭৭-এর system design [`system_design_local_company`](https://sojibrd.github.io/system_design_local_company/)-এ।
- **স্ট্যাক:** Next.js 16, React 19, TypeScript, Tailwind v4, react-markdown।

## ডক ইনডেক্স

### নিয়ম

| ফাইল | Gist |
|---|---|
| [docs/00-rules.md](docs/00-rules.md) | ১৮০ দিনের সব নিয়ম: লক্ষ্য (২০ আবেদন, ৫ process — offer নয়), সত্যের উৎসের ক্রম, চিহ্নের মানে (`৩০′` 🧠 🔁 ⚑ ⏳), "আজ" মানে ক্যালেন্ডারের আজ, সপ্তাহের ৭ ঘণ্টার ছন্দ, STAR-এর বসার ধাপ (DSA-র বসা `dsa_prep_local_company`-এ), ঝালাই, আবেদন আর interview-এর নিয়ম, Dip-এর নিয়ম, যা করবেন না, টাকা, দিন ১৮০-র পরে |

### ৩০ দিনের ৬টা ব্লক

| ফাইল | দিন | Gist |
|---|---|---|
| [docs/01-ignition.md](docs/01-ignition.md) | ০০১–০৩০ | প্রথম সপ্তাহে কাগজপত্র আর প্রথম আবেদন; তারপর আবেদন, DSA (দিন ০০৮ থেকে) আর STAR একসাথে। শেষে: ৬টা story, ৯টা README, ৮টা আবেদন |
| [docs/02-stories.md](docs/02-stories.md) | ০৩১–০৬০ | লেখা story আর README মুখে বলার মতো করা: ৬০ সেকেন্ডের "Tell me about yourself", প্রজেক্ট নিয়ে ১০ মিনিট টানা কথা। DSA-র ৩০টা দিন ০৪৭-এ শেষ। শেষে: ১৭টা আবেদন |
| [docs/03-applications.md](docs/03-applications.md) | ০৬১–০৯০ · dip | দিন ০৭৮-এর মধ্যে ২০টা আবেদন, তারপর ফানেল পড়া; follow-up প্রশ্নে story টেকানো, কলের আগের ৩০ মিনিট। dip-এর শুরু |
| [docs/04-hr-calls.md](docs/04-hr-calls.md) | ০৯১–১২০ · dip | HR call-এর চারটা প্রশ্ন (নিজের পরিচয়, কেন বদল, বেতন, notice period) আর mock #১। আবেদন এখন থেকে সপ্তাহে ২টা |
| [docs/05-technical.md](docs/05-technical.md) | ১২১–১৫০ · dip | চার ধরনের কারিগরি রাউন্ড (take-home, live coding, framework আলোচনা, frontend system design)। নতুন DSA নয়; নিজের প্রজেক্টের design doc; mock #২ |
| [docs/06-five-processes.md](docs/06-five-processes.md) | ১৫১–১৮০ · dip | Behavioral-এ ছয় story খাটানো, interview নোট থেকে সিলেবাস, ফানেলের শেষ রায়, পুরো process এক বসায় (mock #৪)। শেষ সপ্তাহে শুধু ঝালাই |

### এজেন্ট ফাইল

| ফাইল | Gist |
|---|---|
| [AGENTS.md](AGENTS.md) | `next dev`-এর বসানো ব্লক: এই Next.js 16-এর API আলাদা, কোড লেখার আগে `node_modules/next/dist/docs/` পড়ুন। প্রজেক্টের নিয়ম workspace-এর `AGENTS.md`-এ |
| [CLAUDE.md](CLAUDE.md) | শুধু `@AGENTS.md` |

## প্রজেক্ট-নির্দিষ্ট নিয়ম

### তথ্য বদলানোর ক্রম

`brainstorming/ASSUMPTIONS.md` → `brainstorming/` → এই ফোল্ডারের `docs/`।

### ব্লক ফাইলের যে ছাঁচ parser মানে

`app/lib/plan.ts` `docs/`-এর `^\d\d-.*\.md` ফাইল স্ক্যান করে। `00-rules.md` হলো নিয়ম, বাকিগুলো ব্লক। route আসে ফাইলনাম থেকে নম্বর বাদ দিয়ে (`01-ignition.md` → `/block/ignition/`)। ছাঁচ বদলালে parser-ও বদলাতে হবে।

- `# ব্লক ১ — নাম` — প্রথম H1; "— "-এর পরের অংশ rail-এ দেখায়।
- `*দিন ০০১–০৩০ · dip*` — H1-এর নিচের italic লাইন। শেষে `· dip` থাকলে হোমে Dip-এর সতর্কতা আসে।
- `> **ব্লক শেষে:** …` — ব্লক শেষের প্রশ্ন।
- `### দিন ০০৭ · শিরোনাম` — দিন। নম্বর সব ব্লক মিলিয়ে পরপর না হলে build ভাঙে।
- `- [ ] ৩০′ …` — কাজ। `৩০′` = মিনিট; `⚑` = মাইলফলক; `🔁` = ঝালাই হবে; শেষে `🧠 (নাম · নাম)` = নীতির chip।
- `> **দিন শেষে:** …` — দিন শেষের প্রশ্ন।
- নতুন 🧠 নাম লিখলে তার এক লাইনের ব্যাখ্যা `app/lib/principles.ts`-এ যোগ করুন — তিন repo-তেই।

### Progress key

| key | মান |
|---|---|
| `slc6:v1:start` | শুরুর তারিখ `"YYYY-MM-DD"`। না থাকলে `defaultStart` |
| `slc6:v1:task` | কাজ শেষের তারিখ `"YYYY-MM-DD"`। id = দিন + কাজের **লেখা** থেকে hash — লেখা বদলালে ঐ কাজের টিক হারায় |
| `slc6:v1:check` | দিন শেষ (`d007`) ও ব্লক শেষ (`b1`)-এর হ্যাঁ/না |
| `slc6:v1:review` | 🔁 কাজের ঝালাইয়ের অবস্থা `{ base, step }`। না থাকলে `{ কাজ শেষের তারিখ, 0 }`; "আটকে গেছি" → `{ আজ, 0 }` |

## চালানো

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```

push করলে `.github/workflows/deploy.yml` সাইটটা GitHub Pages-এ তোলে।
