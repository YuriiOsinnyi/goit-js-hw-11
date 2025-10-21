import axios from 'axios';

const API_KEY = '52824914-67b35cbaeb2ca1734ba8e47a6';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  return axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => {
      console.log(response);

      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};
