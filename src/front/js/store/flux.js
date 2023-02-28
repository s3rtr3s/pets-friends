const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BACKEND_URL:
        "https://3001-s3rtr3s-petsfriends-eqpivwz4eob.ws-eu88.gitpod.io/",
        
      clientInfo: {},
    },
    actions: {
      setClientInfo: () => {
        const client = JSON.parse(localStorage.getItem("clientInfo"));
        setStore({ clientInfo: client });
      },
    },
  };
};

export default getState;
