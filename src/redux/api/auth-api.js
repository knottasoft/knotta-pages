import axios from "axios";
import snakecaseKeys from "snakecase-keys";
import camelcaseKeys from "camelcase-keys";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/dj-rest-auth`;

export const loginViaInstagram = async (accessToken) => {
  try {
    const response = await axios.post(
        `${API_URL}/instagram/`,
        {
          code : accessToken,
        }
    );
    return camelcaseKeys(response, {deep: true});
  } catch(err) {
    return console.error(err)
  }
};

export const loginViaApple = async (params) => {
  try {
    const response = await axios.post(
        `${API_URL}/apple/`,
        {
          access_token: params.token,
          id_token: params.idToken
        }
    );
    return camelcaseKeys(response, {deep: true});
  } catch(err) {
    return console.error(err)
  }
};

export const loginViaFacebook = async (accessToken) => {
  try {

    const response = await axios.post(
        `${API_URL}/facebook/`,
        {
          access_token: accessToken,
        }
    );
    return camelcaseKeys(response, {deep: true});
  } catch(err) {
    return console.error(err)
  }
};

export const loginViaGoogle = async (accessToken) => {
  try {
    const response = await axios.post(
        `${API_URL}/google/`,
        {
          access_token: accessToken,
        }
    );
    return camelcaseKeys(response, {deep: true});
  } catch({response}) {
    return camelcaseKeys(response, {deep: true});
  }
};

export const registration = async (credentials) => {
  try {
    let data = snakecaseKeys(credentials)
    const response = axios.post(API_URL + "/registration/", {data});
    return camelcaseKeys(response, {deep: true})
  } catch(err) {
    return console.error(err)
  }
}

export const login = async (credentials) => {
  try {
    let data = snakecaseKeys(credentials)
    const response = await axios.post(API_URL + "/login/", data )
    return camelcaseKeys(response, {deep: true})
  } catch({response}) {
    return camelcaseKeys(response, {deep: true})
  }
}

const authApi = {
  registration,
  login,
};

export default authApi;
