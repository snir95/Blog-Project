import axios from "axios";
const BASE_URL = "http://localhost:8000/blogs";

const apiCall = (method, url, params = {}, responseHandler) => {
  axios[method](url, params)
    .then((response) => {
      const { data, statusText, message } = response;
      if (statusText !== "OK") {
        alert(message, statusText);
      } else {
        responseHandler && responseHandler(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const getApi = (callback) => apiCall("get", BASE_URL, null, callback);

const postApi = (params, responseHandler) =>
  apiCall("post", BASE_URL, params, responseHandler);

const putApi = (postId, params, responseHandler) =>
  apiCall("put", BASE_URL + `/${postId}`, params, responseHandler);

const deleteApi = (postId, responseHandler) =>
  apiCall("delete", BASE_URL + `/${postId}`, {}, responseHandler);

export default { getApi, putApi, postApi, deleteApi };
