import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import authReducer from './authSlice';
import userReducer from './userSlice';
import coursesReducer from './courseSlice';

const createNoopStorage = () => {
    return {
        getItem(_key: any) {
            return Promise.resolve(null);
        },
        setItem(_key: any, value: any) {
            return Promise.resolve(value);
        },
        removeItem(_key: any) {
            return Promise.resolve()
        }
    }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const loginPersistConfig = {
    key: 'login',
    version: 1,
    storage,
    whitelist: ['login'],
};
const rootReducer = combineReducers({
    auth: persistReducer(loginPersistConfig, authReducer),
    user: userReducer,
    courses: coursesReducer
});
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;