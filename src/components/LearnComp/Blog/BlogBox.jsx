import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogBox.scss';

function BlogBox({ title, image, description, blogId }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="blogbox">
      <div className="blogImg">
        <img src={image} alt={title} />
      </div>
      <div className="blogText">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button className="normalButton" onClick={handleReadMore}>
        Read Now
      </button>
    </div>
  );
}

export default BlogBox;
