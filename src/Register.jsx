import React from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Regex variables | username and password
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/register";

function Register() {
  const userRef = React.useRef();
  const errRef = React.useRef();

  const [user, setUser] = React.useState("");
  const [validName, setValidName] = React.useState(false);
  const [userFocus, setUserFocus] = React.useState(false);

  const [pwd, setPwd] = React.useState("");
  const [validPwd, setValidPwd] = React.useState(false);
  const [pwdFocus, setPwdFocus] = React.useState(false);

  const [matchPwd, setMatchPwd] = React.useState("");
  const [validMatch, setValidMatch] = React.useState(false);
  const [matchFocus, setMatchFocus] = React.useState(false);

  const [errMsg, setErrMsg] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    userRef.current.focus();
  }, []);

  React.useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  React.useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  React.useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive">
        {errMsg}
      </p>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <span className={validName ? "valid" : "hide"}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={validName || !user ? "hide" : "invalid"}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }>
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hypens allowed.
        </p>
        <label htmlFor="password">
          Password:
          <span className={validPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validPwd || !pwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-desribedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlud={() => setPwdFocus(false)}
        />
        <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character. <br />
          Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>
      </form>
    </section>
  );
}

export default Register;
