/**
 * সাইটের পরিচয় আর এই plan-এর সেটিং — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * তিনটা বাজারের (লোকাল · রিমোট · গ্লোবাল) কোড একই; পার্থক্য শুধু এই ফাইল,
 * `next.config.ts`-এর basePath আর `docs/`-এর কনটেন্ট।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
} = {
  title: "৬ মাসে লোকাল কোম্পানি",
  short: "৬ মাসে লোকাল বদল",
  emoji: "🎯",
  description:
    "বাংলাদেশি কোম্পানিতে ২০টা আবেদন আর ৫টা সম্পূর্ণ interview process — ১৮০ দিন, প্রতিদিনের কাজ, ঝালাই আর learning to learn-এর নীতিতে।",
  /** localStorage key-এর prefix — তিন plan-এর progress আলাদা থাকে */
  storagePrefix: "slc6",
  /**
   * শুরুর তারিখ না থাকলে প্রস্তাব — plan ফাইলে তারিখ লেখা অবস্থায় লোকালের plan
   * ২০২৬-০৯-১৪-এ শুরু হয়েছিল, তাই ঐ তারিখটাই input-এ আগে থেকে বসানো। বাছাই না
   * করা পর্যন্ত সাইট কোনো তারিখ ধরে না — প্রথমবার খুললে জিজ্ঞেস করে।
   */
  suggestedStart: "2026-09-14",
};
