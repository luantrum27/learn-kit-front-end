import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICourse } from "../interfaces/ICourse";
import { RootState } from ".";

interface ICoursesState {
    courses: {
        isFetching: boolean;
        error: boolean;
        listCourses: ICourse[] | [];
    }
}
const initialState: ICoursesState = {
    courses: {
        isFetching: false,
        error: false,
        listCourses: []
    }
}

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        getCoursesStart: (state) => {
            state.courses.isFetching = true
        },
        getCoursesSuccess: (state, action: PayloadAction<ICourse[]>) => {
            state.courses.isFetching = false
            state.courses.error = false
            state.courses.listCourses = action.payload
        },
        getCoursesFailed: (state) => {
            state.courses.isFetching = false,
            state.courses.error = true
        },
        updateCourses: (state, action: PayloadAction<ICourse[]>) => {
            state.courses.listCourses = action.payload;
        },
        deleteCourses: (state) => {
            state.courses.listCourses = []
        },
    }
})

export const {getCoursesStart, getCoursesSuccess, getCoursesFailed, updateCourses, deleteCourses} = coursesSlice.actions;

export const selectCourses = (state: RootState) =>
  state.courses;

export default coursesSlice.reducer;