import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://paxton-p.schools.nsw.gov.au/content/dam/doe/sws/schools/p/paxton-p/news/2017/9/logofacebook.png.thumb.1280.1280.png'
          alt='fbLogo'
        />
      </div>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        onClick={signIn}
      >
        Sign in
      </Button>
    </div>
  );
};

export default Login;
