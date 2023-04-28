import React from 'react';
import ExploreComponent from './explore';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list';
import { Routes, Route } from 'react-router';
import HomeComponent from './home';
import tuitsReducer from './tuits/tuits-reducer';
import resultsReducer from './reducers/search-reducer';
import userReducer from './reducers/user-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import ProfileComponent from './profile';
import AuthReducer from './reducers/auth-reducer';
import EditProfile from './edit-profile';
import LoginScreen from './loginAndRegister/login-screen';
import SearchScreen from './search/search-screen';
import DetailScreen from './details/detail-screen';
import WriteReview from './details/write-review';

const store = configureStore({
  reducer: {
    users: userReducer,
    usersData: AuthReducer,
    tuitsData: tuitsReducer,
    currentUser: AuthReducer,
    results: resultsReducer,
  },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className='row mt-2'>
        <div className='col-2 col-md-2 col-lg-1 col-xl-2'>
          <NavigationSidebar active='explore' />
        </div>
        <div
          className='col-10 col-md-10 col-lg-7 col-xl-6'
          style={{ position: 'relative' }}
        >
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='tuiter' element={null} />
            <Route path='home' element={<HomeComponent />} />
            <Route path='explore' element={<ExploreComponent />} />
            <Route path='profile' element={<ProfileComponent />} />
            <Route path='edit-profile' element={<EditProfile />} />
            <Route path='login' element={<LoginScreen />} />
            <Route path='search' element={<SearchScreen />} />
            <Route path='detail/:id' element={<DetailScreen />} />
            <Route path='write-review/:result_id' element={<WriteReview />} />
          </Routes>
        </div>
        <div className='d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4'>
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;
