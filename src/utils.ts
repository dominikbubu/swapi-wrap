import axios from 'axios';

const request = (url: string): any => {
  return axios.get(url);
};

export { request };
