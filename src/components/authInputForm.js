import React from 'react';
import styled from 'styled-components';

function AuthInputForm({
  title,
  emailPlaceholder,
  passwordPlaceholder,
  isVaildEmail,
  isVaillPassword,
  buttonText,
  isDisplaySignUp,
  onChangeEmail,
  onChangePassword,
  onClickButton,
  onClickSignUpButton,
}) {
  return (
    <Container>
      <LogoContainer>안경이의 투두리스트</LogoContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <LoginForm>
          <EmailInput
            type="text"
            placeholder={emailPlaceholder}
            onChange={onChangeEmail}
          />
          <PasswordInput
            type="password"
            placeholder={passwordPlaceholder}
            onChange={onChangePassword}
          />
        </LoginForm>
        <Button
          type="button"
          disabled={!(isVaildEmail && isVaillPassword)}
          onClick={onClickButton}
          isVaildEmail={isVaildEmail}
          isVaillPassword={isVaillPassword}
        >
          {buttonText}
        </Button>
        {isDisplaySignUp && (
          <SignUpButton onClick={onClickSignUpButton}>회원가입</SignUpButton>
        )}
      </ContentContainer>
    </Container>
  );
}

export default AuthInputForm;

const Container = styled.div`
  width: 500px;
  height: 800px;
`;

const LogoContainer = styled.div`
  padding: 20px;
`;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: 'yellow';
`;

const Title = styled.div``;

const LoginForm = styled.div``;

const EmailInput = styled.input``;

const PasswordInput = styled.input``;

const Button = styled.button`
  width: 350px;
  height: 50px;
  background-color: ${(props) =>
    props.isVaildEmail && props.isVaillPassword ? 'green' : 'gray'};
  cursor: ${(props) =>
    props.isVaildEmail && props.isVaillPassword ? 'pointer' : 'default'};
`;

const SignUpButton = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
