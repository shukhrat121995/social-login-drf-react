import "./App.css";
import FbLogin from "react-facebook-login";
import FacebookLogin from "../src/axios/facebookLogin";

function App() {
  const responseFacebook = (response) => {
    FacebookLogin(response.accessToken);
  };
  const componentClicked = (response) => {};
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "600px",
      }}
    >
      <FbLogin
        appId="506446373702522"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}

export default App;
