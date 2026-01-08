import axios from 'axios';

const BASE_URL_GET = 'https://portfolio-js.b.goit.study/api/reviews';

export const getFetchReviews = () => {
  return axios.get(BASE_URL_GET);
};
