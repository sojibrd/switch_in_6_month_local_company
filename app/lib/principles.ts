import { slugify } from "./slug";

/**
 * plan-এর 🧠 (…) বন্ধনীর নাম → `learning_to_learn`-এর বিষয়।
 *
 * এটা ঐ সাইটের ডক থেকে হাতে তোলা এক-লাইনের সারাংশ, build-এর সময় পড়া নয় —
 * কারণ CI-তে শুধু এই repo থাকে, `learning_to_learn/` নয়। পুরো ব্যাখ্যার জন্য
 * লিংক ঐ সাইটের topic anchor-এ নামে।
 *
 * plan-এ নতুন নাম লিখলে এখানে না থাকলে সাইট ভাঙে না — chip দেখায়, ব্যাখ্যা দেখায় না।
 */
export type Principle = {
  /** `learning_to_learn/docs/0n-<doc>.md` → route `/<doc>/` */
  doc: "principle" | "lies" | "pillars" | "science" | "techniques";
  /** ঐ ডকে বুলেটের **নাম** হুবহু — anchor এটা থেকেই */
  topic: string;
  /** কেন কাজটা এভাবে — এক লাইনে */
  line: string;
};

const L2L_SITE = "https://sojibrd.github.io/learning_to_learn";

const PRINCIPLES: Record<string, Principle> = {
  /* --- Principle --------------------------------------------------------- */
  "the dip": {
    doc: "principle",
    topic: "The dip",
    line: "উত্তেজনা শেষ, দক্ষতা এখনো আসেনি — বেশিরভাগ মানুষ এখানেই ছাড়ে। প্রশ্ন একটাই: এটা dip, নাকি সত্যিই ভুল পথ?",
  },
  "compound learning": {
    doc: "principle",
    topic: "Compound learning",
    line: "রোজ একটু করে জমে চক্রবৃদ্ধির মতো — এক সপ্তাহে ৩০ ঘণ্টা ঢেলে যা হয় না, রোজ ১৫ মিনিটে তা হয়।",
  },
  "failures don't count": {
    doc: "principle",
    topic: "Failures don't count",
    line: "ব্যর্থতা ক্ষতি তখনই, যখন তা থেকে কিছু শেখা হয় না।",
  },
  "it's all in the frame": {
    doc: "principle",
    topic: "It's all in the frame",
    line: "\"আমি পারি না\" নয়, \"আমি এখনো ___ ধাপে\" — দ্বিতীয় ফ্রেমে পরের ধাপটা দেখা যায়।",
  },
  pareto: {
    doc: "principle",
    topic: "Pareto principle",
    line: "৮০% ফল আসে ২০% কাজ থেকে। প্রশ্ন একটাই: কোন ২০% করলে কাজ চলবে?",
  },
  "productivity time": {
    doc: "principle",
    topic: "Your productivity time",
    line: "দিনের যে সময়ে মাথা সবচেয়ে ভালো চলে, কঠিন কাজ তখন; সহজ কাজ বাকি সময়ে।",
  },
  "what is success?": {
    doc: "principle",
    topic: "What is success?",
    line: "সংজ্ঞাটা নিজের না হলে পৌঁছেও শান্তি আসে না।",
  },
  "happiness factors": {
    doc: "principle",
    topic: "Happiness factors",
    line: "টাকা একটা অংশ মাত্র — স্বাধীনতা, দক্ষতা, উদ্দেশ্য, সম্পর্ক, স্বাস্থ্য বাদ দিলে সুখ বাড়ে না।",
  },

  /* --- Lies -------------------------------------------------------------- */
  "trust this one person": {
    doc: "lies",
    topic: "Trust this one person",
    line: "প্রত্যেকের পরামর্শ তার নিজের পরিস্থিতি থেকে। একটা উৎসে নয় — একাধিক উৎসে নিজের পরিস্থিতিতে যাচাই।",
  },
  "10,000 hours rule": {
    doc: "lies",
    topic: "10,000 hours rule",
    line: "ঘণ্টা দক্ষতা বানায় না, deliberate practice বানায় — ভুল পদ্ধতিতে বেশি সময় শুধু ভুল অভ্যাস পাকায়।",
  },
  "you can avoid risk": {
    doc: "lies",
    topic: "You can avoid risk",
    line: "ঝুঁকি এড়ানো যায় না, শুধু জায়গা বদলানো যায় — এক জায়গায় থেকে যাওয়াও দক্ষতা পুরনো হওয়ার ঝুঁকি।",
  },

  /* --- Pillars ----------------------------------------------------------- */
  "everything is a game": {
    doc: "pillars",
    topic: "Everything is a game",
    line: "চাকরি পাওয়ারও নিয়ম আছে — সিভি, রেফারেল, interview। নিয়ম জেনে খেললে খেলা সহজ।",
  },
  feynman: {
    doc: "pillars",
    topic: "Feynman technique",
    line: "বাচ্চাকে বোঝানোর মতো সহজ করে লিখুন; যেখানে আটকান সেটাই ফাঁক — ফিরে গিয়ে আবার লিখুন।",
  },
  "trunk based knowledge": {
    doc: "pillars",
    topic: "Trunk based knowledge",
    line: "কাণ্ড আগে, পাতা পরে — মূল ধারণা শক্ত থাকলে নতুন framework-এর প্রশ্নও চেনা লাগে।",
  },
  "efficiency trumps grit": {
    doc: "pillars",
    topic: "Efficiency trumps grit",
    line: "ভুল পদ্ধতিতে দশ ঘণ্টার চেয়ে সঠিক পদ্ধতিতে দুই ঘণ্টা বেশি ফল দেয়।",
  },

  /* --- Science ----------------------------------------------------------- */
  "focus vs diffuse": {
    doc: "science",
    topic: "Focus vs Diffuse mode",
    line: "আটকে গেলে উঠে হাঁটা সময় নষ্ট নয় — নতুন ধারণা জোড়া লাগে diffuse মোডে।",
  },
  sleep: {
    doc: "science",
    topic: "The science of sleep",
    line: "ঘুমের সময় দিনের শেখা স্থায়ী স্মৃতিতে যায়। কম ঘুমিয়ে বেশি পড়া মানে জমা হতে না দেওয়া।",
  },
  feedback: {
    doc: "science",
    topic: "The science of feedback",
    line: "feedback যত দ্রুত আর যত নির্দিষ্ট, শেখা তত দ্রুত — নিজের রেকর্ডিং শোনাই সবচেয়ে সস্তা feedback।",
  },
  "active learning": {
    doc: "science",
    topic: "Active vs Passive learning",
    line: "পড়া আর দেখা শুধু চেনা লাগায়। নিজে করা, না দেখে মনে করা, জোরে বলা — শেখা হয় এখানে।",
  },
  "it pays to be not busy": {
    doc: "science",
    topic: "It pays to be not busy",
    line: "ফাঁকা সময় ছাড়া diffuse মোড কাজ করে না — বড় দিনের আগের দিন হালকা রাখাও একটা কাজ।",
  },
  "deliberate practice": {
    doc: "science",
    topic: "Deliberate practice",
    line: "যা পারেন তার পুনরাবৃত্তি নয় — যা পারেন না ঠিক তার ওপর, সীমার একটু বাইরে, সাথে feedback।",
  },
  "spaced repetition": {
    doc: "science",
    topic: "Spaced repetition",
    line: "একবারে দশবার নয় — ভুলে যাওয়ার ঠিক আগে আবার দেখলে স্মৃতি সবচেয়ে শক্ত হয়। ১, ৩, ৭, ২১ দিন।",
  },
  "have an endpoint": {
    doc: "science",
    topic: "Have an endpoint",
    line: "বসার আগে শেষ সময় ঠিক করলে তার আগের সময়টা বেশি কার্যকর হয়।",
  },

  /* --- Techniques -------------------------------------------------------- */
  pomodoro: {
    doc: "techniques",
    topic: "Pomodoro technique",
    line: "২৫ মিনিট কাজ, ৫ মিনিট বিরতি — \"মাত্র ২৫ মিনিট\" শুরু করাটা সহজ করে দেয়।",
  },
  "chunk the subject": {
    doc: "techniques",
    topic: "Chunk the subject",
    line: "বড় বিষয়কে ছোট অংশে ভাগ করে একটা একটা করে ধরা — ছড়ানো জিনিস একটা গুচ্ছ হলে মনে থাকে।",
  },
  "create a roadmap": {
    doc: "techniques",
    topic: "Create a roadmap",
    line: "শুরুর আগে পুরো পথের মানচিত্র — তাহলে প্রতিদিন \"আজ কী করব\" ভাবতে হয় না।",
  },
  interleaving: {
    doc: "techniques",
    topic: "Interleaving",
    line: "একই ধরনের পরপর করলে শেখা মনে হয়; মিশিয়ে করলে শেখা হয় কোন সমস্যায় কোন pattern লাগবে।",
  },
  community: {
    doc: "techniques",
    topic: "Importance of community",
    line: "একা শেখা ধীর। প্রশ্ন করার জায়গা আর এমন একজন যে জানে আপনি কী করছেন — দুটোই গতি বাড়ায়।",
  },
  "habits revisited": {
    doc: "techniques",
    topic: "Habits revisited",
    line: "সংকেত → কাজ → পুরস্কার। ইচ্ছাশক্তির ওপর নয় — সংকেতটা ঠিক করুন।",
  },
  "system vs goal": {
    doc: "techniques",
    topic: "System vs goal",
    line: "লক্ষ্য বলে কোথায় যাবেন, সিস্টেম বলে প্রতিদিন কী করবেন। \"২০টা আবেদন\" লক্ষ্য, \"সপ্তাহে ২টা\" সিস্টেম।",
  },
  "the power of senses": {
    doc: "techniques",
    topic: "The power of senses",
    line: "হাতে আঁকা, জোরে বলা, ছবি দেখা — প্রতিটা ইন্দ্রিয় স্মৃতির আলাদা পথ।",
  },
  "parkinson's law": {
    doc: "techniques",
    topic: "Parkinson's law",
    line: "কাজ যত সময় পায় ততটাই নেয়। নিজের জন্য ছোট সময়সীমা বাঁধুন।",
  },
  "deep work": {
    doc: "techniques",
    topic: "Exercise deep work",
    line: "notification বন্ধ, ফোন অন্য ঘরে। কঠিন জিনিস কেবল বিরতিহীন মনোযোগে শেখা যায়।",
  },
  "stakes & rewards": {
    doc: "techniques",
    topic: "Stakes & Rewards",
    line: "কাউকে তারিখটা বলে রাখা, বা করলে ছোট একটা পুরস্কার — কিছু বাজি থাকলে কাজটা হয়।",
  },
  "concepts vs facts": {
    doc: "techniques",
    topic: "Concepts vs Facts",
    line: "syntax হারায়, ধারণা টেকে — সময় দিন \"কেন কাজ করে\"-তে।",
  },
  "test yourself": {
    doc: "techniques",
    topic: "Test yourself",
    line: "বই বন্ধ করে মনে করার চেষ্টাই শেখা। যেখানে আটকান, সেটাই দেখায় ফাঁক কোথায়।",
  },
  /* --- রিমোট ও গ্লোবাল plan-এর জন্য যোগ ------------------------------- */
  "learning vs winning": {
    doc: "principle",
    topic: "Learning vs Winning",
    line: "জেতার লক্ষ্যে মানুষ নিরাপদ আবেদন বাছে। শেখার লক্ষ্যে সীমার একটু বাইরেরটা — না হলেও interview-এর নোট থেকে যায়।",
  },
  "skill stacking": {
    doc: "principle",
    topic: "Skill stacking",
    line: "frontend একা নয় — frontend + ইংরেজিতে লেখা + বিরল Ember একসাথে যে জায়গা বানায়, সেখানে প্রতিযোগী কম।",
  },
  einstellung: {
    doc: "techniques",
    topic: "Einstellung",
    line: "প্রথম চেনা উত্তরটাই ভালোটা আড়াল করে — ডিজাইন বা কোড শেষে এক মিনিট: আরেকভাবে হয়?",
  },
};

export function findPrinciple(name: string): Principle | undefined {
  return PRINCIPLES[name.trim().toLowerCase()];
}

export function principleHref(principle: Principle): string {
  return `${L2L_SITE}/${principle.doc}/#${slugify(principle.topic)}`;
}
