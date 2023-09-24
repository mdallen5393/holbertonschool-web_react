import React, { useState } from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (email) => {
    setEmail(email);
    setEnableSubmit(email !== '' && password !== '');
  };

  const handleChangePassword = (password) => {
    setPassword(password);
    setEnableSubmit(email !== '' && password !== '');
  };

  return (
    <>
      <BodySectionWithMarginBottom title='Log in to continue'>
        <div className={`Login ${css(styles.login)}`}>
          <p>Login to access the full dashboard</p>
          <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
            <div className={css(styles.labelInput)}>
              <label htmlFor='email' >Email</label>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='true'
                value={email}
                onChange={(e) => { handleChangeEmail(e.target.value) }}
              />
            </div>
            <div className={css(styles.labelInput)}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                autoComplete='true'
                value={password}
                onChange={(e) => { handleChangePassword(e.target.value) }}
              />
            </div>
            <input
              type='submit'
              className={css(styles.button)}
              value='OK'
              disabled={!enableSubmit}
            />
          </form>
        </div>
      </BodySectionWithMarginBottom>
    </>
  );
};

const styles = StyleSheet.create({
  login: {
    margin: '30px 30px auto',
  },
  form: {
    display: 'flex',
    '@media screen and (max-width: 900px)': {
      flexDirection: 'column',
    },
  },
  button: {
    maxWidth: 40,
  },
  labelInput: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Login;
