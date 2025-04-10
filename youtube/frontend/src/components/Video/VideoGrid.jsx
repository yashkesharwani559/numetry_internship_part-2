import React, { useEffect, useRef, useState } from 'react';
import VideoCard from './VideoCard';

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const observer = useRef();
  const lastVideoRef = useRef();

  // Mock data generator
  const generateMockVideos = (pageNum) => {
    const startId = (pageNum - 1) * 12;
    return Array.from({ length: 12 }, (_, index) => ({
      id: startId + index,
      thumbnail: `https://picsum.photos/seed/${startId + index}/640/360`,
      title: `Video Title ${startId + index + 1}`,
      channelName: `Channel ${Math.floor(Math.random() * 100)}`,
      views: `${Math.floor(Math.random() * 1000)}K views`,
      timestamp: `${Math.floor(Math.random() * 30)} days ago`,
      duration: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    }));
  };

  const loadMoreVideos = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newVideos = generateMockVideos(page);
    setVideos(prev => [...prev, ...newVideos]);
    setPage(prev => prev + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadMoreVideos();
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          loadMoreVideos();
        }
      },
      { threshold: 0.5 }
    );

    if (lastVideoRef.current) {
      observer.current.observe(lastVideoRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 mt-16 lg:mt-16 lg:ml-64">
      {videos.map((video, index) => (
        <div
          key={`video-${video.id}`}
          ref={index === videos.length - 1 ? lastVideoRef : null}
          className="w-full"
        >
          <VideoCard video={video} />
        </div>
      ))}
      
      {loading && (
        <div className="col-span-full flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
      )}
    </div>
  );
};

export default VideoGrid; 