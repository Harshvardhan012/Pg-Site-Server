import React from 'react'
import './blog1.css';
import { useParams} from 'react-router-dom'
import { blog_data } from '../../data/blogdata';

const Blog1 = () => {
    
    let { no } = useParams();
    window.scrollTo(0, 0);

    
    return (
        <>
            <div className="container">

                <div className='container blog_img_div'>
                
                    <img src={blog_data[no].pics} className='big_blog_img' alt="Blog Post" />
                </div>

                <div className='blog1_title '>
                    <h2>{blog_data[no].bolg_title}</h2>
                   
                </div>
                <p>
                    {blog_data[no].blog_desc.para1}
                    <br />
                    <br />
                    {blog_data[no].blog_desc.para2}
                    <br />
                    <br />
                    {blog_data[no].blog_desc.para3}
                    <br />
                    <br />
                    {blog_data[no].blog_desc.para4}
                    <br />
                    <br />
                    {blog_data[no].blog_desc.para5}
                    <br />
                    <br />
                    {blog_data[no].blog_desc.para6}
                    <br />
                    <br />
                    {blog_data[no].blog_desc.para7}
                    <br />
                    <br />
                    {blog_data[no].blog_desc.para8}
                </p>

            </div>

        </>
    )
}

export default Blog1
