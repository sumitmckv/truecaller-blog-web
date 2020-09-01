import ky from 'ky';
import store from '../store';
const BASE_URL: URL = new URL('https://truecaller-blog-server.vercel.app/api/');
const apiClient = ky.create({
  prefixUrl: BASE_URL,
  headers: {},
  hooks: {
    beforeRequest: [
      () => {
        store.commit('loader/startLoading');
      },
    ],
    afterResponse: [
      () => {
        store.commit('loader/endLoading');
      },
    ],
  },
});
const {get} = apiClient;
export {get};
