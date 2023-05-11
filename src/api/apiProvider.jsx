import axios from 'axios';

const apiProvider = () => {
  const baseURL = 'http://192.168.1.33:8083';

  const request = async ({
    method,
    url,
    body = null,
    options = {},
    onSuccess = () => {},
    onFailure = () => {},
  }) => {
    try {
      const { data } = await axios({
        method,
        url: `${baseURL}${url}`,
        data: body,
        ...options,
      });
      onSuccess(data);
    } catch (error) {
      const { status, statusText } = error.response || {};
      onFailure({ status, statusText });
      console.log('Error Code: ', status, ' Message: ', statusText);
    }
  };

  const health = async () => {
    request({
      method: 'get',
      url: '/health',
      onSuccess: () => console.log('BFF CONECTION: OK'),
      onFailure: () => console.log('BFF CONECTION: FAIL'),
    });
  };

  const getEvents = async ({ ownerId, onSuccess, onFailure }) => {
    request({
      method: 'get',
      url: `/events/${ownerId}`,
      onSuccess,
      onFailure,
    });
  };

  const login = async ({ userData, onSuccess, onFailure }) => {
    request({
      method: 'post',
      url: '/users',
      body: userData,
      onSuccess,
      onFailure,
    });
  };

  const validateQR = async ({ ticketId, onSuccess, onFailure }) => {
    request({
      method: 'post',
      body: { ticketId },
      url: '/tickets/validate',
      onSuccess,
      onFailure,
    });
  };

  return {
    health,
    validateQR,
    getEvents,
    login,
  };
};

export default apiProvider;
