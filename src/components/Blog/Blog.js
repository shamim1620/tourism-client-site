import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className=" mt-5 my-5 container ">
            <h1>Blogs</h1>
            <div className='d-flex justify-content-center align-items-center blog-item'>
                <div className="m-2">
                    <iframe width="360" height="315" src="https://www.youtube.com/embed/-zwmmqDrytw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="m-2">
                    <iframe width="360" height="315" src="https://www.youtube.com/embed/2HdpX43bm2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="m-2">
                    <iframe width="360" height="315" src="https://www.youtube.com/embed/xw3bEuXteCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>

        </div>
    );
};

export default Blog;