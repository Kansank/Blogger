import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog(props) {
    const { post } = props;
    return (
        <div key={post._id} className="section-item">
            <div className="section-img">
              <div className="size-img">
                <img  src={post.image} alt="" />
              </div>
                  
                <div className="section-desc">
                <div className="section-title">
                  <h4>{post.title}</h4>
                </div>
                <div className="section-date postedBy">
                  <p>{post.postedOn}</p>
                </div>
                <div className="section-info">
                  <p >
                    {post.text.substring(0, 50)} 
                  </p>
                </div>
                <div className="section-link">
                  <Link exact to={`/post/${post._id}`}>READ</Link>
                </div>
              </div>
              </div>
              </div> 
       
    )
}
