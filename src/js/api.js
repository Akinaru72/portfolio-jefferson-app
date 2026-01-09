import axios from 'axios';

const BASE_URL_GET = 'https://portfolio-js.b.goit.study/api/reviews';
const BASE_URL_POST = 'https://portfolio-js.b.goit.study/api/requests';

export const getFetchReviews = () => {
  return axios.get(BASE_URL_GET);
};

export const postFetchRequest = data => {
  return axios.post(BASE_URL_POST, data);
};
