import React from "react";
import logo from "../../../commons/assets/logo.png";
import {
  ButtonLogin,
  CheckboxRemember,
  LoginStyles,
} from "../../../styles/features/loginStyles";
import { LoginService } from "../../../apis/login";
import { useNavigate } from "react-router-dom";

function LoginSystemComponent() {
  const classes = LoginStyles();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
      await LoginService.login(username, password).then((response) => {
        if (response.token) {
          navigate("/");
        } else {
          alert(response.message);
        }
      });
    } catch (e) {}
  };

  return (
    <div className={classes.root}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <img
          src={logo}
          alt="logo"
          style={{
            maxWidth: "100%",
            height: "auto",
            marginTop: "4rem",
          }}
        />
      </div>

      <form className={classes.loginForm}>
        <h1 className={classes.h1Title}>SIGN IN</h1>
        <label className={classes.labelText} htmlFor="username">
          Username
        </label>
        <input className={classes.inputText} type="text" id="username" />
        <label className={classes.labelText} htmlFor="password">
          Password
        </label>
        <input className={classes.inputText} type="password" id="password" />
        <div className={classes.optionLogin}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <CheckboxRemember color="default" />
            <label>Remember password</label>
          </span>
          <span>
            <label style={{ textDecorationLine: "underline" }}>
              Forget password?
            </label>
          </span>
        </div>
        <ButtonLogin onClick={() => handleLogin()}>SIGN IN</ButtonLogin>
      </form>
      <div className={classes.bottomSide}></div>
    </div>
  );
}

export default LoginSystemComponent;
