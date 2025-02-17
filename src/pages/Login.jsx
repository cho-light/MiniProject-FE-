import React from 'react';
import Layout from '../components/layout/Layout';
import useInput from '../components/hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { memberLogin } from '../redux/modules/memberSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Login = () => {
  const [nickname, setNickname, onChangeNickname] = useInput('');
  const [password, setPassword, onChangePassword] = useInput('');

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(memberLogin({
      nickname,
      password
    }));
  };

  return (
    <Layout>
      <LoginContainer>
        <div>
          <FormStyle onSubmit={onSubmitHandler}>
            <TextStyle>여행 어디로 가지?</TextStyle>
            <InputStyle value={nickname} type='text' onChange={onChangeNickname} placeholder='아이디를 입력해주세요.' />
            <InputStyle value={password} type='password' onChange={onChangePassword} placeholder='패스워드를 입력해주세요.' />
            <ButtonStyle>로그인</ButtonStyle>
          </FormStyle>
          <Link to='/signup'>아직 회원이 아니신가요?</Link>
        </div>
      </LoginContainer>
    </Layout>

  );
};
export default Login;

const ButtonStyle = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  background-color: #508dff;
  color: #fff;
  border-radius:15px;
  margin-top: 10px;
  cursor: pointer;
`;

const TextStyle = styled.div`
  font-size:20px;
  font-weight: 600;
  color: #53a9fa;
  margin-bottom: 30px;
`;

const InputStyle = styled.input`
  border: 1px solid #b3b3b3;
  margin-bottom: 10px;
  height: 30px;
  outline: none;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #000000;
  margin-bottom: 30px;
  width: 300px;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #a8a8a8; */
  width: 500px;
  height: 400px;
  border-radius: 10px;
  text-align: center;
`;
