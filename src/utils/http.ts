import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASIC_LINK = "http://localhost:4080/api";

export function useHttp(link: string) {
  function get<T>(config?: AxiosRequestConfig) {
    return axios
      .get(BASIC_LINK + link, config)
      .then((res: AxiosResponse<T>) => res.data)
      .catch((err) => {
        console.error(err);
        return undefined;
      });
  }

  function post<T, R>(data?: T, config?: AxiosRequestConfig) {
    return axios
      .post(BASIC_LINK + link, data, config)
      .then((res: AxiosResponse<R>) => res.data)
      .catch((err) => {
        console.error(err);
        return undefined;
      });
  }

  return {
    get,
    post,
  };
}
