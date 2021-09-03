import Cookies from 'js-cookie';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import NotFound from './pages/NotFound';
import Article from './pages/Article';

const App = () => {
  const register = useSelector((state)=>state.register)
  const login = useSelector((state)=>state.login)

  const isAuth = () => {
    return (
      register.register === '' &&
      login.login === '' &&
      Cookies.get('Token') === undefined ? false : true)
  };


  console.log(register.register);
  //Before install PWA
  let deferredPrompt
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  });

  //View install PWA
  const installBtn = async () => {
    // Hide the app provided install promotion
    document.querySelector('.install-app').style.opacity = '0';
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    getPWADisplayMode()
  };

  const getPWADisplayMode = () => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (document.referrer.startsWith('android-app://')) {
      return 'twa';
    } else if (navigator.standalone || isStandalone) {
      return 'standalone'
    };
    return 'browser';
  };

  window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
    let displayMode = 'browser';
    if (evt.matches) {
      displayMode = 'standalone';
    }
    // Log display mode change to analytics
    console.log('DISPLAY_MODE_CHANGED', displayMode);
  });

  return (
    <Switch>
      <Route exact path="/">
        {isAuth() ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        {isAuth() ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route path="/register">
        {isAuth() ? <Redirect to="/" /> : <Register />}
      </Route>
      <Route path="/article/:id">
        {isAuth() ? <Article /> : <Redirect to='/login'/>}
      </Route>
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default App;
