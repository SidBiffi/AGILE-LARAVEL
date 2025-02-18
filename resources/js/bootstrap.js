import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common = {'Authorization': 'Bearer ' + Laravel.api_token};
