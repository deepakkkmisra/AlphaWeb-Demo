import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import searchIcon from "../../assets/icons/search.svg";
import BlogBox from "../../components/LearnComp/Blog/BlogBox";
import blogImg from "../../assets/images/blogImg.png";
import { blogDataSmall } from "./BlogData.js";

function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogDataSmall);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredBlogs(blogDataSmall);
    } else {
      const filtered = blogDataSmall.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog_wrapper">
      <div className="blog_intro">
        <span>Blog</span>
        <h1>Blog</h1>
        <div className="blogInformation">
          <p>
            Stay informed with the latest insights, strategies, and updates from
            the world of trading and finance. Our blog covers everything from
            expert market analysis to practical tips for improving your trading
            performance.
          </p>
          <div className="searchbar_wrapper">
            <div className="searchbar">
              <img src={searchIcon} alt="search icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="gradientButton_small" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="blogbox_head">
        <h1 className="gradientText">Traders QnA</h1>
      </div>

      <div className="blogbox_wrapper">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogBox
              key={blog.id}
              title={blog.title}
              image={blog.image}
              description={blog.description}
              blogId={blog.id}
            />
          ))
        ) : (
          <p>No blogs found matching the search.</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
