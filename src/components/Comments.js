import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { commentDeleteFetch, commentsFetch } from '../services/ApiManager';

const Comments = () => {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comments.comments)
  const p = useParams()
  const users = useSelector(state => state.users.users)

  const deleteComment = (article_id,comment_id) => {
    dispatch(commentDeleteFetch(article_id, comment_id));
    setTimeout(() => {
      dispatch(commentsFetch(p.id));  
    },50)

  }

  const date = (d) => {
    let date = new Date(d);
    return date.toLocaleDateString("fr", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const getUsername = (id) => {
    return users.find((user) => user.id === id).username
  }

  return (
      comments.map((comment) => {
        return (
          <div className="comment">
            <small>{date(comment.created_at)}</small>
            <p><span className='username'>{users && getUsername(comment.user_id)}</span> {comment.content}</p>
            {comment.user_id === parseInt(Cookies.get("UserId")) &&
              <p onClick={()=>deleteComment(comment.article_id,comment.id)} className="delete">
                DELETE
              </p>
            }
          </div>
        );
      })
  );
};

export default Comments;