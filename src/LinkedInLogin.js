import axios from "axios";

const LinkedInLogin = (accesstoken) => {
  console.log(accesstoken);
  axios
    .post("http://127.0.0.1:8000/auth/convert-token/", {
      accesstoken: accesstoken,
      backend: "linkedin-oauth2",
      grant_type: "convert_token",
      client_id: "YtwGwF1S41BJKJyaTm7thK0wVmvt0TbkW5bFuNJV",
      client_secret:
        "RG11I45THUSegtOQ7NTF6ZaQo8o1hI2Ta7yWJASQtZh9rzDRyQGUpsj1uNJDIf0tAsFoFRQoNfVIT54eteAbicclg2eZbPYepFpzxu9ccH2wXGTI53tVx21Dj9lnBDdX",
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
    });
};

export default LinkedInLogin;
