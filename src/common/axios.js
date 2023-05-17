import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Tyep' : 'application/json'
    },
    withCredentials: true // CORS + login   // 없으면 session id가 날라가는데 항상 다른 session id를 넘긴다.  
})