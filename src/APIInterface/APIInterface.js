
import Axios from '../ConfigAxios';

const axios = Axios();

class APIInterface {

    async getUserInfo(user_id) {
        return axios.get(`users/${user_id}`); //login

    }

    async getCourses(term, subject) {
	console.log('getCourses', term, subject);
        return axios.get(`courses/${term}/${subject}/term-subject`);

    }

    async keepAlive() {
        return axios.get('students/keep-alive');
    }

}
export default APIInterface

