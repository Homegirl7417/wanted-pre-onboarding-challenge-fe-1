import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useLoginMutation from '../../api/Auth/postLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVaildEmail, setIsVaildEmail] = useState(false);
  const [isVaillPassword, setIsVaildPassword] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useLoginMutation(navigate);

  const onClickLoginButton = () => {
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
    <Container>
      <LogoContainer>안경이의 투두리스트</LogoContainer>
      <ContentContainer>
        <Title>로그인</Title>
        <LoginForm>
          <EmailInput
            type="text"
            placeholder="이메일"
            onChange={onChangeEmail}
          />
          <PasswordInput
            type="password"
            placeholder="비밀번호"
            onChange={onChangePassword}
          />
        </LoginForm>
        <LoginButton
          type="button"
          disabled={!(isVaildEmail && isVaillPassword)}
          onClick={onClickLoginButton}
          isVaildEmail={isVaildEmail}
          isVaillPassword={isVaillPassword}
        >
          로그인
        </LoginButton>
      </ContentContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 500px;
  height: 800px;
`;

const LogoContainer = styled.div`
  padding: 20px;
`;

const ContentContainer = styled.div`
  padding: 20px;
`;

const Title = styled.div``;

const LoginForm = styled.div``;

const EmailInput = styled.input``;

const PasswordInput = styled.input``;

const LoginButton = styled.button`
  width: 350px;
  height: 50px;
  background-color: ${(props) =>
    props.isVaildEmail && props.isVaillPassword ? 'green' : 'gray'};
  cursor: ${(props) =>
    props.isVaildEmail && props.isVaillPassword ? 'pointer' : 'default'};
`;
