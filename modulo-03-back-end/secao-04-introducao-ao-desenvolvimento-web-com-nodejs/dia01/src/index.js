// const fetch = require('node-fetch');

// fetch('https://random-data-api.com/api/v2/users')
// .then((response) => response.json())
// .then((data) => console.log(data));

const axios = require('axios').default;

const baseURL = 'https://random-data-api.com/api/v2/';

const getUsers = async () => {
  const response = await axios.get(baseURL.concat('users'));
  console.log(response.data);
};

const getBanks = async () => {
  const response = await axios.get(baseURL.concat('banks'));
  console.log(response.data);
};

const getAdresses = async () => {
  const response = await axios.get(baseURL.concat('addresses'));
  console.log(response.data);
};

const main = async () => {
  console.time('requests');
  const users = await getUsers();
  const banks = await getBanks();
  const adresses = await getAdresses();
  console.timeEnd('requests');
};

main();