export default function authHeader() {

  const user = store.getState().auth.user;

  if (user && user.accessToken) {
    return {
      Authorization: "Bearer " + user.accessToken,
      'Content-Type': 'application/json'
    };
  } else {
    return {
      'Content-Type': 'application/json'
    };
  }
}
