import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import Comments from '../components/Comments';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { articleFetch, commentsFetch} from '../services/ApiManager';

const Article = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const article = useSelector(state => state.article.article);
  const users = useSelector(state => state.users.users)
  const comments = useSelector(state => state.comments.comments)

  const getArticle = () => {
    dispatch(articleFetch(id.id))
  }

  const getUser = () => {
   return users.find((user)=>article.user_id === user.id).username ;
  };

  const getComments = () => {
    dispatch(commentsFetch(id.id))
  }

  useEffect(() => {
    getArticle();
    getComments()
  }, []);
  
  return (
    <main className="article">
      <Navbar />
      <div className="articles">
        {article ? (
          <ArticleCard
            article={article}
            key={article.id}
            username={article && getUser()}
          />
        ) : (
          <div className="loading">
            <Loading type="spinningBubbles" color="rgb(0, 0, 0)" />
          </div>
        )}

        <div className="comments">
          {comments.length > 0 ? (
            <Comments comments={comments} />
          ) : (
            <small>No comment </small>
          )}
        </div>
      </div>
    </main>
  );
};

export default Article;