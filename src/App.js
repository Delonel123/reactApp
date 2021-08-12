import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Suspense } from 'react';
import ChatPage from './components/Chat/ChatPage';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path="/dialog" render={() => <Suspense fallback={<div>Загрузка...</div>}> <DialogsContainer /> </Suspense>} />
            <Route path="/profile/:userId?" render={() => <Suspense fallback={<div>Загрузка...</div>}> <ProfileContainer /> </Suspense>} />
            <Route path="/users" render={() =>  <Suspense fallback={<div>Загрузка...</div>}> <UsersContainer /> </Suspense> } />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/ChatPage" render={() => <ChatPage />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})



export default connect(mapStateToProps, { initializeApp })(App)
