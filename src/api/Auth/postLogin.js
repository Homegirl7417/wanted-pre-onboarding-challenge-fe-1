import { useMutation } from 'react-query';
import api from '..';

const fetchLoginUser = (data) =>
  api.post('/users/login', {
    email: data.email,
    password: data.password,
  });

const useLoginMutation = (navigate) =>
  useMutation(fetchLoginUser, {
    onSuccess: (json) => {
      localStorage.setItem('jwt_token', JSON.stringify(json.data.token));
      navigate('/');
    },
    onError: (error) => {
      alert(error.message);
    },
  });
export default useLoginMutation;
