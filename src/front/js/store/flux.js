const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BACKEND_URL:
        "https://3001-s3rtr3s-petsfriends-9fv96lqahil.ws-eu89.gitpod.io/",
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
      setLocalStorageClient: (client) => {
        localStorage.setItem("clientInfo", JSON.stringify(client))
      }
    },
  };
};

export default getState;
