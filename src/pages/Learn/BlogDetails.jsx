import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.scss'
import blogImg from '../../assets/images/blog-img-big.png'
import Suggestions from '../../components/LearnComp/Blog/Suggestions';

import {blogData} from './BlogData'
function BlogDetails() {
    const { blogId } = useParams();


 

    const blog = blogData.find((b) => b.id === parseInt(blogId));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className='blogdetails_wrapper'>
            <div className='blogdetails_intro'>
                <p>Blog</p>
                <h1>{blog.title} <span className='gradientText'>{blog.colorText}</span></h1>
            </div>

            <div className='blogdetails_content'>

                <div className='blogImg_main'>
                    <img src={blog.image} alt='' />
                </div>
                <div
                    className="blogcontent"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

            </div>

            <Suggestions />
        </div>
    );
}

export default BlogDetails;
