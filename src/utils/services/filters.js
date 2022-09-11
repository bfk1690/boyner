import axios from 'axios';

let BASE_URL = 'https://www.mockachino.com/42a008d9-66a2-41/filter';

export async function getFilters() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}`, config)
      .then(val => {
        resolve(val);
        console.log(val);
      })
      .catch(err => {
        console.log({...err});
        reject(err);
      });
  });
}
