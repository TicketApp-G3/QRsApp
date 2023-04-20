import axios from 'axios';

const apiProvider = () => {
  const baseURL =
    import.meta.env.VITE_ENV === 'production'
      ? 'https://ticket-app-ms-events.onrender.com'
      : 'http://localhost:8080';

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
      const { status, statusText } = error.response;
      onFailure({ status, statusText });
      console.error('Error Code: ', status, ' Message: ', statusText);
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

  const scanQR = async ({ ticketId, onSuccess, onFailure }) => {
    request({
      method: 'post',
      body: ticketId,
      url: '/scanQr',
      onSuccess,
      onFailure,
    });
  };

  return {
    health,
    scanQR,
    getEvents,
  };
};

export default apiProvider;
