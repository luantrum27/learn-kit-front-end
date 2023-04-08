import { notification } from 'antd';
import { AppDispatch } from "../stores";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess, rememberOnSubmit } from "../stores/authSlice";
import apiRequest from "../shared/api-request";
import { IUserRegister } from "../interfaces/IUserRegister";
import { IUserLogin } from '../interfaces/IUserLogin';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { getRefreshToken } from '../utils/getToken';
import { deleteUserProfile } from '../stores/userSlice';

export const register = async (
    user: IUserRegister,
    dispatch: AppDispatch,
  ) => {
    dispatch(registerStart());
    try {
      const res = await apiRequest.post('/auth/register', user);
      dispatch(registerSuccess());
      sessionStorage.setItem('token', JSON.stringify(res.data));
      notification.success({
        message: 'Success',
        description: 'Register successfully!',
        duration: 1.5,
        key: '1',
      });
    } catch (err) {
      dispatch(registerFailed());
      notification.error({
        message: 'Error!!!',
        description: 'Register failed!',
        duration: 1.5,
        key: '1',
      });
    }
};

export const login = async (
  user: IUserLogin,
  isRemember: boolean,
  dispatch: AppDispatch,
  navigate: AppRouterInstance
  ) => {
    dispatch(loginStart);
    try {
      const res = await apiRequest.post('/auth/login', user);
      console.log('res: ', res.data);
      dispatch(loginSuccess());
      dispatch(rememberOnSubmit(!!isRemember));
      if (isRemember) {
        localStorage.setItem('token', JSON.stringify(res.data));
      } else {
        sessionStorage.setItem('token', JSON.stringify(res.data));
      }
      notification.success({
        message: 'Success',
        description: 'Login successfully!',
        duration: 1.5,
        key: '1',
      });
      navigate.push('/');
    } catch (error) {
      dispatch(loginFailed());
      notification.error({
        message: 'Error!!!',
        description: 'Login failed!',
        duration: 1.5,
        key: '1',
      });
    }
}

export const logout = async (dispatch: AppDispatch,) => {
  try {
    const refreshToken = getRefreshToken();
    await apiRequest.post('/auth/logout', { refreshToken });
    dispatch(deleteUserProfile);
    notification.success({
      message: 'Success',
      description: 'Log out successfully!',
      duration: 1.5,
      key: '1',
    });
  } catch (err) {
    notification.error({
      message: 'Error',
      description: 'Log out error!',
      duration: 1.5,
      key: '1',
    });
  }
};