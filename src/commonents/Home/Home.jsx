import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Home.css';
const Home = ({ handleReadTime, handleBookmark }) => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("Fakedata.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="container pb-4">
      <div>
        {blogs.map((blog) => (
          <Blog handleReadTime={handleReadTime} handleBookmark={handleBookmark} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Home;