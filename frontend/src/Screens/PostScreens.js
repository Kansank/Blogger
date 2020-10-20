import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsPost } from '../actions/postActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

export default function PostScreens(props) {
  

  const dispatch = useDispatch();
  const postId = props.match.params.id;
  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;

  useEffect(() => {
    dispatch(detailsPost(postId));
  }, [dispatch, postId]);

  return (
    <React.Fragment>
    <div className="post" >
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="BlogPost-container">
          <div className="BlogPost-header">
            <h1 className="post-title"> </h1>
            <span className="postedBy">posted on {post.postedOn} by {post.author} </span>
          </div>
          <div className="BlogPost-img">
            <img src={post.image} alt="" />
          </div>
          <div className="BlogPost-content">
            <h3>{post.title}</h3>
            <p>
             {
               post.text
             }
            </p>
          </div>
        </div>
      )}
    </div>
    </React.Fragment>
  );
}
