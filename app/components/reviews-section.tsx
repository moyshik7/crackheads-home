"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    author: "Mir Mamun",
    text: "ওয়েবসাইট এর quality দেখে আমার মাথা ক্র্যাক হয়ে গেলো (Get that? crack--heads😉) (sorry for lame joke)",
  },
  {
    author: "Sayed Ishak Miah",
    text: "কিরে ভাই, ওয়েবসাইট এত ফাস্ট কেন?",
  },
  {
    author: "IDK Who",
    text: "Vaiyaaa, ekta review dibooo, oita plz website e dekhaben 🥺 (this was actually sent on ngl)",
  },
  {
    author: "Nafisa Rijhum",
    text: "२५ গ্রাম এর দামে একটা ওয়েবসাইট পাইলাম। ভালোই তো",
  },
  {
    author: "Muhammad Naiem",
    text: "চিপি চাপায় পট করতেছিলাম, কয়েকটা পোলাপান আইসা কি ওয়েবসাইট ধরায়ে দিলো।",
  },
  {
    author: "Muhammad Al-amin",
    text: "সেক্সি সেক্সি ওয়েবসাইট, সেক্সি সেক্সি এনিমেশন।",
  },
  {
    author: "Inayah Rahman",
    text: "এদের ওয়েবসাইটের ডিজাইন আর এনিমেশন দেখলে orgasm হয়ে যায় 😅",
  },
  {
    author: "Saif",
    text: "আসলাম ক্র্যাক কিনতে, ধরায়ে দিল ওয়েবসাইট, Satisfaction 100%",
  },
  {
    author: "Sadia",
    text: "আমার bf Gay ছিল কিন্তু Crackheads Studio এর কাজ দেখার পর Straight হয়ে গেছে।",
  },
];

export function ReviewsSection() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
      >
        <motion.h2
          className="mb-10 text-4xl font-black text-[#534a84] sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 140, damping: 17 }}
        >
          Why people love us.
        </motion.h2>
        <p className="mb-8 max-w-2xl text-base font-semibold text-[#5f588c]/85 md:text-lg">
          Not kidding—these are actual messages from our clients. (Mostly in Bengali, our native language 💜)
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.author}-${index}`}
              className="group rounded-4xl bg-white/55 p-6 shadow-[0_20px_40px_rgba(176,170,243,0.23)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_30px_50px_rgba(172,180,255,0.28)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 18,
                delay: index * 0.05,
              }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#ffc6dd] text-[#ffc6dd]"
                  />
                ))}
              </div>
              <p className="mt-3 font-semibold leading-relaxed text-[#5f588c]/90">
                &quot;{review.text}&quot;
              </p>
              <p className="mt-4 font-bold text-[#4f477b]">— {review.author}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
