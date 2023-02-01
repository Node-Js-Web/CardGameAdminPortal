const baseURL = 'http://localhost:3000/api/v1/card'

const cardID = localStorage.getItem('cardID')
let readerResult;
$("#img").change(function () {
  var file = this.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    $("#Imgpreview").attr("src", reader.result);
    console.log(document.getElementById("Imgpreview").src);
    readerResult = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
});

$("#updatecard").click(() => {

    const data = {
        title: $('#title').val(),
        attack_points: $('#atkpoints').val(),
        description: $('#des').val(),
        image: readerResult,
    }

    console.log(data);
    axios({
        method: "put",
        url: `${baseURL}/${localStorage.getItem('cardID')}/${localStorage.getItem("userID")}`,
        data,
    }).then((response) => {
        const { message } = response.data;
        console.log(response);
        if (message == 'Done') {
            window.location.replace("http://127.0.0.1:5500/Front-end%20Code//index.html");
        } else {
            alert(message)
        }
    }).catch((err) => {
        console.log({ message: "Catch error", err });
    })
})