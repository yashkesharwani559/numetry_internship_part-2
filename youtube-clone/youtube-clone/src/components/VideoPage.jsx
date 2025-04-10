import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

export default function VideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`http://localhost:5000/api/videos/${id}`);
      setVideo(res.data);

      await axios.post(`http://localhost:5000/api/history/add`, { videoId: id }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
    };
    fetchVideo();
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <Navbar setFilter={() => {}} />
      <div className="p-4">
        <video controls src={video.videoUrl} className="w-full mb-4" />
        <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
        <p>{video.description}</p>
      </div>
    </div>
  );
}