import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Post from '../Components/Post.js';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/postActions.js';
import HeaderImg from '../Components/HeaderImg/HeaderImg.js'

const Home = (props) => {
  /* const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); */

  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

    return (
      <React.Fragment>
      <div className="wrapper">
      
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
      
        <div className="content clearfix">
          <div className="section-grid">

              {posts.map((post) => (
                  
                  <Post key={post._id} post={post} ></Post>
                               
              ))}
 
          </div>
        </div>

        
      )}
      </div>
      </React.Fragment>
    );
}
export default Home;