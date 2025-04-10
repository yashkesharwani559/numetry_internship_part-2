import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function Playlist() {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const res = await axios.get('http://localhost:5000/api/playlist', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setPlaylist(res.data);
    };
    fetchPlaylist();
  }, []);

  return (
    <div>
      <Navbar setFilter={() => {}} />
      <div className="p-4 grid grid-cols-3 gap-4">
        {playlist.map((item) => (
          <div key={item._id} className="border p-2">
            <img src={item.video.thumbnail} alt={item.video.title} className="w-full h-40 object-cover" />
            <h2 className="text-lg mt-2">{item.video.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}