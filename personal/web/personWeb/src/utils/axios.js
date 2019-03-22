import axios from 'axios';

function parseJSON(response) {
    return response.json();
}

export default function request(url, options) {
    return axios(url, options);
}
