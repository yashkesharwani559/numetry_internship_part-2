import React from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import "./Feed.css";
const user = {
    name: "Manu Jha",
    title: "Full Stack & ML Developer",
    profileImage: "https://source.unsplash.com/100x100/?man,developer" // This should be the same as the sidebar
  };
  
  const posts = [
    {
      id: 1,
      user: "Vishal Jhariya",
      title: "Full Stack Developer | Java | Python | AI/ML",
      time: "1h",
      content: "Proud to have competed in the Semi-Finals of Deep Blue Season 10!",
      image: "https://images.pexels.com/photos/3182749/pexels-photo-3182749.jpeg",
      likes: 14,
      comments: 1
    },
    {
      id: 2,
      user: "Rahul Sharma",
      title: "Software Engineer at Google",
      time: "3h",
      content: "Just started a new role at Google! Excited for the journey.",
      image: "https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg",
      likes: 50,
      comments: 10
    },
    {
      id: 3,
      user: "Priya Singh",
      title: "Data Scientist at Microsoft",
      time: "5h",
      content: "Exploring AI models and their impact on business intelligence. Exciting times ahead!",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
      likes: 78,
      comments: 15
    },
    {
      id: 4,
      user: "Amit Verma",
      title: "Product Manager at Meta",
      time: "7h",
      content: "Launched a new product feature today! Big thanks to the amazing team behind this.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      likes: 120,
      comments: 20
    },
    {
      id: 5,
      user: "Neha Kapoor",
      title: "Marketing Specialist",
      time: "9h",
      content: "Sharing insights from my latest digital marketing campaign.",
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg",
      likes: 62,
      comments: 8
    }
  ];
  
    


function Feed() {
    return (
        <div className="feed bg-white p-3 rounded shadow">
      {/* Start a post section with profile picture from Sidebar */}
      <div className="post-box d-flex align-items-center mb-3 p-3 border rounded">
        <img src={user.profileImage} alt="Profile" className="profile-pic me-2" />
        <input type="text" className="form-control" placeholder="Start a post..." />
      </div>

      <div className="d-flex justify-content-between mt-2">
        <button className="btn btn-light">📹 Video</button>
        <button className="btn btn-light">📸 Photo</button>
        <button className="btn btn-light">✍️ Write Article</button>
      </div>
        {/* Posts */}
        {posts.map(post => (
          <div key={post.id} className="post mb-3 p-2 border rounded">
            <h6>{post.user} <span className="text-muted">{post.time}</span></h6>
            <p>{post.content}</p>
            {post.image && <img src={post.image} className="w-100 rounded" alt="Post" />}
            <div className="d-flex justify-content-between mt-2">
              <button className="btn btn-light"><FaThumbsUp /> {post.likes} Likes</button>
              <button className="btn btn-light"><FaComment /> {post.comments} Comments</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Feed;