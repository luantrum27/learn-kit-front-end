import { ICourse } from "../interfaces/ICourse";
import apiRequest from "../shared/api-request";
import { AppDispatch } from "../stores";
import { getCoursesFailed, getCoursesStart, getCoursesSuccess } from "../stores/courseSlice";

export const getCourses = async (dispatch: AppDispatch) => {
    dispatch(getCoursesStart());
    try {
        const res = await apiRequest.get('/courses')
        dispatch(getCoursesSuccess(res.data));
    } catch (error) {
        dispatch(getCoursesFailed());
    }
}

export const registerCourse = async (course: ICourse) => {
    try {
        const res = await apiRequest.post('/courses', course);
    } catch (error) {
        alert(error)
    }
}