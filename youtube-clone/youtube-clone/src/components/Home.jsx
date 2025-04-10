import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:5000/api/videos?category=${filter}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [filter]);

  return (
    <div>
      <Navbar setFilter={setFilter} />
      <div className="grid grid-cols-3 gap-4 p-4">
        {videos.map((video) => (
          <div
            key={video._id}
            className="border p-2 cursor-pointer hover:shadow-xl"
            onClick={() => navigate(`/video/${video._id}`)}
          >
            <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
            <h2 className="text-lg mt-2">{video.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
