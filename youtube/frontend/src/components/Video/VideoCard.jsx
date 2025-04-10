import React from 'react';

const VideoCard = ({ video }) => {
  const {
    thumbnail,
    title,
    channelName,
    views,
    timestamp,
    duration,
  } = video;

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
          {duration}
        </span>
      </div>
      
      <div className="mt-2 sm:mt-3">
        <h3 className="text-sm sm:text-base font-medium line-clamp-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
          {channelName}
        </p>
        <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
          <span>{views} views</span>
          <span className="mx-1">•</span>
          <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard; 