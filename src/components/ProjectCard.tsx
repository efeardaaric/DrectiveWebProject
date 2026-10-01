"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/motion";

type Props = {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  video?: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  images,
  video,
  className = "",
}: Props) {
  const [current, setCurrent] = React.useState(0);
  const hasImages = images && images.length > 0;
  const isTall = ["ferman", "crusader tycoon", "scanny"].includes(
    title.toLowerCase()
  );

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.35, ease: easeSmooth } }}
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
    >
      {video ? (
        <div
          className={`relative w-full overflow-hidden ${isTall ? "h-[28rem]" : ""}`}
          style={!isTall ? { aspectRatio: "16/9" } : undefined}
        >
          <video
            src={video}
            controls
            className="h-full w-full object-cover"
            style={{ background: "#000" }}
          />
        </div>
      ) : hasImages ? (
        <div
          className={`relative w-full overflow-hidden ${isTall ? "h-[28rem]" : ""}`}
          style={!isTall ? { aspectRatio: "16/9" } : undefined}
        >
          <Image
            src={images![current]}
            alt={title}
            fill
            className={`transition duration-700 ease-out ${
              title.toLowerCase() === "stufinance" ? "object-contain" : "object-cover"
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {images!.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent((current - 1 + images!.length) % images!.length);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent((current + 1) % images!.length);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white"
              >
                →
              </button>
            </div>
          )}
        </div>
      ) : image ? (
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={image} alt={title} fill className="object-cover object-top" />
        </div>
      ) : null}

      <div className="flex flex-grow flex-col p-5">
        <h3 className="m-0 font-heading text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted">{description}</p>
        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-[11px] text-brass"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
