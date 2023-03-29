const VerifyLogin = () => {
  if (localStorage.getItem("login") !== "true") {
    window.location.href = "/";
  }
};

export default VerifyLogin;
