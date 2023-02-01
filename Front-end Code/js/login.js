const baseURL = "http://localhost:3000/api/v1/user";

$("#signin").click(() => {
  // const email = $("#email").val();
  // const password = $("#password").val();
  // const data = {
  //   email,
  //   password
  // };
  const data = {
    email: $("#email").val(),
    password: $("#password").val(),
  };
  // console.log({ data });
  axios({
    method: "post",
    url: `${baseURL}/login`,
    data: data,
  })
    .then((response) => {
      console.log({ response });
      const { message, user } = response.data;
      if (message == "Login Success") {
        localStorage.setItem("userID", user.id); 
        window.location.replace(
          "http://127.0.0.1:5500/Front-end%20Code//index.html"
        );
      } else {
        alert(message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
