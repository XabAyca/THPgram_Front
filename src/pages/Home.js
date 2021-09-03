import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { articlesFetch, usersFetch } from '../services/ApiManager';
import ArticleCard from '../components/ArticleCard';

const Home = () => {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.articles)
  const users = useSelector(state => state.users.users)

  const getArticles = () => {
    dispatch(articlesFetch())
  }
  const getUserUsername = (id) => {
    return users.find((user)=>user.id === id).username
  }

  const getUsers = () => {
    dispatch(usersFetch())
  }
  useEffect(() => {
    getUsers()
    getArticles();
  },[])


  return (
    <main className='home'>
      <Navbar />
      {
        articles.articles ?
          <div className='articles'>{
            articles.articles.map((article) => {
              return <ArticleCard article={article} key={article.id} username={users && getUserUsername(article.user_id)}/>
            })}
          </div>
          :
          <div className='loading'>
            <Loading type="spinningBubbles" color="rgb(0, 0, 0)" />
          </div>
      }
    </main>
  );
};

export default Home;