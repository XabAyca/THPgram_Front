import React from 'react';
import { useHistory } from 'react-router-dom';

const ArticleCard = ({ article, username }) => {
  const history = useHistory()

  const date = (d) => {
    let date = new Date(d)
    return date.toLocaleDateString("fr", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric"
    })
  }
  


  return (
    <div className="article-card">
      <div className="article-card-header">
        <i className="far fa-user-circle"></i>
        <p>{username }</p>
      </div>
      <div className='article-card-image'>
        <img onClick={()=>history.push('/article/'+article.id)} src={article.stream} alt='article-card'/>
      </div>
      <div className='article-card-description'>
        <small>{date(article.created_at)}</small>
        <p>{article.description}</p>

      </div>
    </div>
  );
};

export default ArticleCard;