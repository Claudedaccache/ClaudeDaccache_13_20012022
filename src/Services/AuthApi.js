import axios from "axios";

export const SignIn = (credentials) => {
  return axios
    .post("http://localhost:3001/api/v1/user/login", credentials)
    .then((response) => response.data.body.token)
    .then((token) => {
      return token;
    });
};

export const userProfile = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    key: "value",
  };

  return axios
    .post("http://localhost:3001/api/v1/user/profile", bodyParameters, config)
    .then((response) => response.data.body)
    .then((user) => {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
      };
    });
};

export const EditUserInfo = (token, credentials) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    key: "value",
    credentials,
  };

  return axios
    .put("http://localhost:3001/api/v1/user/profile", bodyParameters, config)
    .then((response) => response.data.body)
    .then((user) => {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
      };
    });
};
