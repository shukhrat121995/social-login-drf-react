import "./App.css";
import FacebookLogin from "react-facebook-login";

function App() {
  const responseFacebook = (response) => {};
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
      <FacebookLogin
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
