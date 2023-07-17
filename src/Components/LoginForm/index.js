import { useState, useRef } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  console.log(username);
  console.log(password);
  console.log(errorMsg);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" replace />;
  }

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/", { replace: true });
  };

  const onSubmitFailure = (errorMsg) => {
    setErrorMsg(errorMsg);
  };

  // util method
  const doUserLoginApi = async () => {
    const userDetails = {
      username: username.current.value,
      password: password.current.value,
    };

    const url = "https://apis.ccbp.in/login";

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const responseData = await response.json();

    if (response.ok) {
      onSubmitSuccess(responseData.jwt_token);
    } else {
      onSubmitFailure(responseData.error_msg);
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    doUserLoginApi();
  };

  const renderLoginForm = () => {
    return (
      <form onSubmit={onSubmitForm}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={username}
            // onChange={(event) => setUsername(event.target.value)}
            ref={username}
            placeholder="Enter Username"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
            ref={password}
            placeholder="Enter Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  };

  return (
    <div className="login-form-container">
      <div>{renderLoginForm()}</div>
      <h1 style={{ color: "red" }}>{errorMsg}</h1>
    </div>
  );
};

export default LoginForm;
