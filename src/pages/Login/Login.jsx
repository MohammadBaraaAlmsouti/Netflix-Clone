import React, { useState } from 'react';
import classes from './Login.module.css';
import logo from '../../assets/logo.png';
import { login, signUp } from '../../firebase';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Login = () => {
  const [signState, setSignState] = useState('Sing In');
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const switchSingUpHandler = () => {
    setSignState('Sing Up');
  };
  const switchSingInHandler = () => {
    setSignState('Sing In');
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === 'Sing In') {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className={classes.login}>
      <img src={logo} alt="" className={classes['login-logo']} />
      <div className={classes['login-form']}>
        <h1>{signState}</h1>
        <form action="">
          {signState === 'Sing Up' && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={nameChangeHandler}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className={classes['form-help']}>
            <div className={classes.remember}>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className={classes['form-switch']}>
          {signState === 'Sing In' ? (
            <p>
              New To Netflix?{' '}
              <span onClick={switchSingUpHandler}>Sing Up Now</span>
            </p>
          ) : (
            <p>
              Already Have account?{' '}
              <span onClick={switchSingInHandler}>Sing In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
