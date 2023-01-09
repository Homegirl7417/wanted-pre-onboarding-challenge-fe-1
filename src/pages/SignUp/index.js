import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignUpMutation from '../../api/Auth/postSignUp';
import AuthInputForm from '../../components/authInputForm';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVaildEmail, setIsVaildEmail] = useState(false);
  const [isVaillPassword, setIsVaildPassword] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useSignUpMutation(navigate);

  const onClickButton = () => {
    if (!isSubmit && isVaildEmail && isVaillPassword) {
      setIsSubmit(true);
      mutate({ email, password });
      setIsSubmit(false);
    }
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

  return (
    <AuthInputForm
      title="회원가입"
      emailPlaceholder="이메일 형식 필수"
      passwordPlaceholder="8자 이상"
      isVaildEmail={isVaildEmail}
      isVaillPassword={isVaillPassword}
      buttonText="회원가입"
      isDisplaySignUp={false}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickButton={onClickButton}
    />
  );
}

export default SignUp;
