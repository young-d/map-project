import useAsyncFn from './useAsyncFn';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_END_POINT;

const useAxios = (url, initialOptions = {}, deps = []) =>
  useAsyncFn(
    (options = {}) =>
      axios({
        url,
        ...initialOptions,
        ...options,
      }).then(res => res.data),
    [...deps, initialOptions]
  );

export default useAxios;
