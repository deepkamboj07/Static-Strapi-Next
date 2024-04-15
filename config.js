import axios from 'axios';

const api= () => {
  return axios.create({
    baseURL: 'https://bee4-2405-201-6826-e04e-4988-de7b-e134-812.ngrok-free.app/',
    headers: {
        Authorization: `Bearer 9f470ac7262a7a4011def5a7adc4058c389f33e296862b958d19d40b9a724256986cd928a78474a7cddf33400e27df485b751a9f4c9a9c47f538bcc524f65fa5fa9d37f3e0e8740559f26c2096222264b46efd2b550446db6e3451765127bc81349309f49acffd0cdc11ea902274aa046cee1d75c5ebf9d7901838e9edc07280`,
    },
  });
};

export default api;