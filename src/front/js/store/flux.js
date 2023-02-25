const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BACKEND_URL:
        "https://3001-s3rtr3s-petsfriends-0t45myy1w41.ws-eu88.gitpod.io/",
      clientId: null,
    },
    actions: {
      setClientId: () => {
		const id = (localStorage.getItem("client_id"))
        setStore({ clientId: id });
      },
    },
  };
};

export default getState;
