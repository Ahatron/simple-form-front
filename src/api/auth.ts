import base from "./base";

class Auth {
    async register(username: string, password: string) {
        try {

            const response = await base.post('/auth/register', { username, password });
            const token = response.data.access_token;
            const userId = response.data._id
            localStorage.setItem('accessToken', token);
            localStorage.setItem('userId', userId)
            console.log(response.data);

            return true
        } catch (error) {
            console.error('Register error:', error);
        }
    }

    async login(username: string, password: string) {
        try {

            const response = await base.post('/auth/login', { username, password });
            const token = response.data.access_token;
            const userId = response.data._id
            localStorage.setItem('accessToken', token);
            localStorage.setItem('userId', userId)
            console.log(response.data);
            return true
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId')

    }
}

export default new Auth()