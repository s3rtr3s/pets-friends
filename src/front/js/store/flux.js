const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BACKEND_URL:

        "https://3001-s3rtr3s-petsfriends-ya7htnlvlee.ws-eu89.gitpod.io/",

      clientInfo: null,
    },
    actions: {
      setClientInfo: () => {
        const client = JSON.parse(localStorage.getItem("clientInfo"));
        setStore({ ...getStore(), clientInfo: client });
      },
      logout: () => {
        localStorage.removeItem("clientInfo");
        setStore({ ...getStore(), clientInfo: null });
      },
    },
  };
};

export default getState;
