import Logo from "../asset/icon.png";

import "./SignIn.css";

import { signInWithGooglePopup } from "../utils/firebase.js";
import { actionTypes } from "../reducer/Reducer";
import { useStateValue } from "../context/UserContext";

const SignIn = () => {
  const [state, dispatch] = useStateValue();

  const login = () => {
    signInWithGooglePopup()
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin">
      <div className="signin__logo">
        <img src={Logo} alt="" />
        <h1>devbook</h1>
      </div>
      <button variant="inherit" type="submit" onClick={login}>
        SIGN IN
      </button>
    </div>
  );
};

export default SignIn;
