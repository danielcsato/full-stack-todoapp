import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useSelector } from 'react-redux';
import { RootStore } from '../../Redux/Store';

const AuthBox: React.FC = () => {
  const screen = useSelector((state: RootStore) => state.screen);
  return <>{screen === '' ? '' : screen === 'LOGIN' ? <LoginForm /> : <RegisterForm />}</>;
};

export default AuthBox;
