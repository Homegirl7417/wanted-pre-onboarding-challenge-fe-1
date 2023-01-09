import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginMutation from '../../api/Auth/postLogin';
import AuthInputForm from '../../components/authInputForm';
import { loginTokenKey } from '../../constant';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVaildEmail, setIsVaildEmail] = useState(false);
  const [isVaillPassword, setIsVaildPassword] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useLoginMutation(navigate);

  const onClickButton = () => {
    if (!isSubmit && isVaildEmail && isVaillPassword) {
      setIsSubmit(true);
      mutate({ email, password });
      setIsSubmit(false);
    }
  };

  const onClickSignUpButton = () => {
    navigate('/auth/signup');
  };

  const onChangeEmail = (e) => {
    const { value } = e.target;
    if (value.includes('@') && value.includes('.')) setIsVaildEmail(true);
    else setIsVaildEmail(false);
    setEmail(value);
  };

  const onChangePassword = (e) => {
    const { value } = e.target;
    if (value.length >= 8) setIsVaildPassword(true);
    else setIsVaildPassword(false);
    setPassword(value);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem(loginTokenKey);
    if (savedToken) {
      return navigate('/');
    }
  }, []);

  return (
    <AuthInputForm
      title="로그인"
      emailPlaceholder="이메일"
      passwordPlaceholder="비밀번호"
      isVaildEmail={isVaildEmail}
      isVaillPassword={isVaillPassword}
      buttonText="로그인"
      isDisplaySignUp
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickButton={onClickButton}
      onClickSignUpButton={onClickSignUpButton}
    />
  );
}

export default Login;
