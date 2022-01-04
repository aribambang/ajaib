import serverApi from '../../api/server';

export const getUsers = (payload) => async (dispatch) => {
  try {
    const query = `?${payload.pagination.current ? `page=${payload.pagination.current}&` : ''}${
      payload.pagination.pageSize ? `pageSize=${payload.pagination.pageSize}&` : ''
    }results=10`;
    const { data } = await serverApi.get(`/${query}`);
    dispatch({ type: 'GET_USERS', payload: data.results });
  } catch (err) {
    throw new Error(err.response.data);
  }
};
