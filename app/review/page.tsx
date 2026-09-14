import type { Metadata } from "next";
import ReviewList from "../components/ReviewList";
import { getRepeatTasks } from "../lib/plan";

export const metadata: Metadata = { title: "ঝালাই" };

export default function ReviewPage() {
  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="t-title text-2xl sm:text-3xl">ঝালাই — ১, ৩, ৭, ২১ দিন</h1>
        <p className="t-body measure text-sm">
          STAR story, &ldquo;Tell me about yourself&rdquo;, সিদ্ধান্তের ব্যাখ্যা — একবার করে ছেড়ে দিলে interview-এর
          দিনে থাকে না। plan-এর প্রতিটা 🔁 কাজ টিক দেওয়ার দিন থেকে নিজে এখানে ফিরে আসে; হাতে কিছু যোগ করতে হয় না।
          নোট বন্ধ করে, ১৫′-এর বেশি নয়। DSA-র ঝালাই DSA-র সাইটে। 🧠 Spaced repetition · Test yourself
        </p>
        <p className="t-caption">সব ডেটা শুধু এই ব্রাউজারে থাকে।</p>
      </header>
      <ReviewList items={getRepeatTasks()} mode="all" />
    </>
  );
}
