import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserLogin } from "../interfaces/IUserLogin";
import { RootState } from ".";
import { IUserProfile } from "../interfaces/IUserProfile";

interface UserProfile {
    profile: {
        isFetching: boolean;
        error: boolean;
        userProfile: IUserProfile | null;
    }
}

const initialState: UserProfile = {
    profile: {
        isFetching: false,
        error: false,
        userProfile: null
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getProfileStart: (state) => {
            state.profile.isFetching = true;
        },
        getProfileSuccess: (state, action: PayloadAction<IUserProfile>) => {
            state.profile.isFetching = false;
            state.profile.error = false;
            state.profile.userProfile = action.payload;
        },
        getProfileFailed: (state) => {
            state.profile.isFetching = false;
            state.profile.error = true;
        },
        deleteUserProfile: (state) => {
            state.profile.userProfile = null;
        },
    }
})

export const {
    getProfileStart,
    getProfileSuccess,
    getProfileFailed,
    deleteUserProfile,
} = userSlice.actions

export const selectUserProfile = (state: RootState) =>
  state.user.profile.userProfile;

export default userSlice.reducer;