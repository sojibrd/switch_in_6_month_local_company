# switch_local_company_in_6_month

২০২৬-০৯-১৪ থেকে ২০২৭-০৩-১২: বাংলাদেশি কোম্পানিতে ২০টা আবেদন আর ৫টা interview process — ১৮০ দিন, প্রতিদিন একটা করার কাজ, শেখার বিজ্ঞান মেনে।

লাইভ: https://sojibrd.github.io/switch_local_company_in_6_month/

## সত্যের উৎস

`docs/`-এর ফাইলগুলো — সাইটে কোনো ব্লক, দিন, তারিখ বা কাজ হার্ডকোড নেই; ফাইল বদলালে পরের build-এ সাইট বদলায়।

- [`docs/00-rules.md`](docs/00-rules.md) — লক্ষ্য, সপ্তাহের ছন্দ, শেখার নিয়ম, ঝালাই, Dip-এর নিয়ম।
- `docs/01-…06-*.md` — ৩০ দিনের ৬টা ব্লক।

এই plan `switch_company_in_24_month/docs/24-month-plan.md`-এর মাস ০০–০৬-এর **দিন-স্তরের বিস্তার** — নতুন লক্ষ্য বা সংখ্যা যোগ করে না। তথ্য বদলালে ক্রম: `legacy_and_wisdom/docs/ASSUMPTIONS.md` → `brainstorming/` → ২৪ মাসের plan → এই ফোল্ডার।

## পাতা

| পাতা | কী | শেখার কোন নীতি |
|---|---|---|
| সব পাতা | বাঁয়ে rail: ৩ পাতা, ১৮০ দিনের gauge, ৬ ব্লক (খোলা ব্লকের দিনগুলো); মোবাইলে drawer | Create a roadmap |
| `/` আজ | ক্যালেন্ডারের আজকের দিন; dip-এর সতর্কতা; জমে থাকা ⚑; আজকের ঝালাই | Pareto · The dip · Spaced repetition |
| `/day/<nnn>/` | একটা দিনের কাজ + দিন-শেষের হ্যাঁ/না | System vs goal · Test yourself |
| `/block/<slug>/` | ব্লকের ভূমিকা, ৩০ দিনের সারি, ব্লক-শেষের হ্যাঁ/না | Create a roadmap |
| `/review/` ঝালাই | প্রতিটা 🔁 কাজ, টিকের দিন থেকে ১/৩/৭/২১ দিনে | Spaced repetition · Test yourself |
| `/rules/` নিয়ম | `00-rules.md` হুবহু | — |

প্রতিটা 🧠 chip চাপলে এক লাইনে **কেন** কাজটা এভাবে, আর `learning_to_learn` সাইটে ঐ নীতির লিংক।

## ব্লক ফাইলের যে ছাঁচ parser মানে

`app/lib/plan.ts` `docs/`-এর `^\d\d-.*\.md` ফাইল স্ক্যান করে (`00-rules.md` = নিয়ম, বাকিগুলো ব্লক)। route নাম ফাইলনাম থেকে: `01-ignition.md` → `/block/ignition/`। এগুলো বদলালে parser-ও বদলাতে হবে:

- `# ব্লক ১ — নাম` — প্রথম H1; "— "-এর পরের অংশ rail-এ দেখায়।
- `*দিন ০০১–০৩০ · YYYY-MM-DD → YYYY-MM-DD · dip*` — H1-এর নিচের italic লাইন; শেষে `· dip` থাকলে হোমে Dip-এর সতর্কতা।
- `> **ব্লক শেষে:** …` — ব্লক-শেষের প্রশ্ন।
- `### দিন ০০৭ · YYYY-MM-DD · শিরোনাম` — দিন। তারিখ ফাইলে লেখা, কোডে হিসাব নয়; "আজ" = যে দিনের তারিখ আজ।
- `- [ ] ৩০′ …` — কাজ। শুরুর `৩০′` = মিনিট; `⚑` = মাইলফলক; `🔁` = ঝালাই হবে; শেষে `🧠 (নাম · নাম)` = নীতির chip।
- `> **দিন শেষে:** …` — দিন-শেষের প্রশ্ন।

নতুন 🧠 নাম লিখলে তার এক-লাইনের ব্যাখ্যা `app/lib/principles.ts`-এ যোগ করুন; না করলে chip দেখায়, ব্যাখ্যা দেখায় না।

## Progress

সব ব্রাউজারের `localStorage`-এ, একমাত্র `app/hooks/useProgress.ts` দিয়ে:

- `slc6:v1:task` — কাজের টিক, মান = কাজ শেষের তারিখ (`"YYYY-MM-DD"`)। key = দিন + কাজের **লেখা** থেকে hash: কাজ আগে-পরে যোগ করলে টিক টেকে, কিন্তু লেখা বদলালে ঐ কাজের টিক হারায়।
- `slc6:v1:check` — দিন-শেষ (`d007`) ও ব্লক-শেষ (`b1`) হ্যাঁ/না।
- `slc6:v1:review` — 🔁 কাজের ঝালাইয়ের অবস্থা `{ base, step }`। না থাকলে = `{ কাজ শেষের তারিখ, 0 }`; "আটকে গেছি" → `{ আজ, 0 }`।

## চালানো

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # out/
```

push করলে `.github/workflows/deploy.yml` GitHub Pages-এ তোলে।

## চেহারা

workspace-এর বাকি সাইটের মতো `system_design`-এর dark-only control-room Theme Contract, আর গড়ন `dsa_prep`-এর: rail + ডানের pane একা স্ক্রল, দিন একটা panel, কাজ `surface-raised` card + `.check`। আইকন inline (`app/components/icons.tsx`)। কম্পোনেন্টে কোনো ভিজ্যুয়াল ক্লাস নয় — Tailwind শুধু লেআউটে, চেহারা `app/globals.css`-এর role class আর `app/themes/control-room.css`-এর `--t-*` টোকেনে।
