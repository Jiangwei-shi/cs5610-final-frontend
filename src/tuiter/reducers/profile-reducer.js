import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: 'Jiangwei',
    lastName: 'Shi',
    handle: '@Jiangwei',
    profilePicture: 'Elon_Mask.png',
    bannerPicture: 'starship.jpg',
    bio: 'studying at NEU',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '8/20/1998',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223,
    totalTweets: 1246,
  }
};


const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;