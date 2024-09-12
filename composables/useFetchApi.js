export default (url, options = {}) => {
  const { useAuthToken } = useAuth();

  return useFetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${useAuthToken().value}`,
    },
  });
};
