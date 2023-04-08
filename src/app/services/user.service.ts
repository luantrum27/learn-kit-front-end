import apiRequest from "../shared/api-request";
import { AppDispatch } from "../stores";
import { getProfileFailed, getProfileStart, getProfileSuccess } from "../stores/userSlice";

export const getUserProfile = async (dispatch: AppDispatch) => {
    dispatch(getProfileStart());
    try {
        const res = await apiRequest.get('/users/profile')
        dispatch(getProfileSuccess(res.data));
    } catch (error) {
        dispatch(getProfileFailed());
    }
}