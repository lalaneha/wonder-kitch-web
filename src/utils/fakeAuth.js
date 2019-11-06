// import React from 'react';


const fakeAuth = {
    set isAuthenticated(state) {
      // localStorage.setItem("isAuthenticated", state);
    },
    get isAuthenticated() {
      return (localStorage.getItem("userID") != null);
    }
  };

  export default fakeAuth;