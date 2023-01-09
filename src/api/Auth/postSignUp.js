import { useMutation } from 'react-query';
import api from '..';

const fetchSignUp = (data) =>
  api.post('/users/create', {
    email: data.email,
    password: data.password,
  });

const useSignUpMutation = (navigate) =>
  useMutation(fetchSignUp, {
    onSuccess: (json) => {
      alert(json.data.message);
      navigate('/auth');
    },
    onError: (error) => {
      alert(error.message);
    },
  });
export default useSignUpMutation;
