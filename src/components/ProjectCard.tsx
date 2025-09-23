"use client";
import React from "react";
import Image from 'next/image';

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

export default function ProjectCard({ title, description, image, tags, liveUrl, githubUrl, images, video, className = '' }: Props) {
  const [current, setCurrent] = React.useState(0);
  const hasImages = images && images.length > 0;
  const isSpecialProject = ['ferman', 'crusader tycoon', 'scanny'].includes(title.toLowerCase());
  
  return (
    <div className={`border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-[#18181b] h-full flex flex-col ${className}`}>
      {video ? (
        <div 
          className={`relative w-full mb-4 overflow-hidden rounded-xl ${
            isSpecialProject ? 'h-[37rem]' : ''
          }`}
          style={!isSpecialProject ? { aspectRatio: '16/9' } : {}}
        >
          <video
            src={video}
            controls
            className={`w-full h-full ${
              title.toLowerCase() === 'ferman' ? 'object-cover object-top' : 'object-cover'
            } rounded-xl`}
            style={{ background: '#000' }}
          />
        </div>
      ) : hasImages ? (
        <div 
          className={`relative w-full mb-4 overflow-hidden rounded-xl ${
            isSpecialProject ? 'h-[37rem]' : ''
          }`}
          style={!isSpecialProject ? { aspectRatio: '16/9' } : {}}
        >
          <Image
            src={images![current]}
            alt={title}
            fill
            className={`w-full h-full ${
              title.toLowerCase() === 'stufinance' ? 'object-contain' : 'object-cover'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"
            priority
          />
          {images!.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent((current - 1 + images!.length) % images!.length);
                }}
                className="bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                &#8592;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent((current + 1) % images!.length);
                }}
                className="bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                &#8594;
              </button>
            </div>
          )}
        </div>
      ) : image ? (
        <div className="relative w-full mb-4 overflow-hidden rounded-xl" style={{ aspectRatio: '16/9' }}>
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-cover"
            priority
          />
        </div>
      ) : null}
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold mb-1 text-[#cc972b]">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs rounded-full" 
                style={{ background: 'rgba(204,151,43,0.20)', color: '#cc972b', fontWeight: 500 }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}