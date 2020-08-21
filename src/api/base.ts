import ky from 'ky';
const BASE_URL: URL = new URL(
  'https://public-api.wordpress.com/rest/v1.1/sites/107403796'
);
const apiClient = ky.create({
  prefixUrl: BASE_URL,
  headers: {},
  hooks: {
    beforeRequest: [
      (input, options) => {
        // console.log(input, options)
      },
    ],
    afterResponse: [
      (input, options) => {
        // console.log(input, options)
      },
    ],
  },
});
const {get} = apiClient;
export {get};
