const baseURL = "http://localhost:3000/api/v1/card";
// start Display data
let cardsArr = [];
function getData() {
  axios({
    method: "get",
    url: `${baseURL}/`,
  })
    .then(function (response) {
      const { cards } = response.data;
      cardsArr = cards;
      console.log(cardsArr);
      showData();
    })
    .catch(function (error) {
      console.log(error);
    });
}

getData();

function showData() {
  let cartonna = ``;
  for (let index = 0; index < cardsArr.length; index++) {
      cartonna += `<tr>
           <td>${cardsArr[index].title}</td>
           <td>${cardsArr[index].attack_points}</td>
           <td>${cardsArr[index].description}</td>
           <td><img src="${cardsArr[index].image}" alt="" border=3 height=400 width=300></img></td>
           <td>
           <button onclick='deleteItem(${cardsArr[index].id})' class="btn btn-danger">Delete</button>
           <button onclick='updateItem(${cardsArr[index].id})' class="btn btn-success">Update</button>
           </td>
       </tr>`
  }
  document.getElementById("tbody").innerHTML = cartonna;
}
// End Display data
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
//create card with
$("#addcard").click(() => {
  const data = {
    title: $("#title").val(),
    attack_points: $("#atkpoints").val(),
    description: $("#des").val(),
    image: readerResult,
    UserId: localStorage.getItem("userID"),  // 1
  }; 
  // console.log(data);
  axios({
    method: "post",
    url: `${baseURL}/addcard`,
    data,
  })
    .then(function (response) {
      const { message } = response.data;
      if (message == "Added Done") {
        getData();
      } else {
        alert(message);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

//delete card with id , card id
function deleteItem(id) {
  axios({
    method: "delete",
    url: `${baseURL}/deletecard/${id}/${localStorage.getItem("userID")}`,
  })
    .then(function (response) {
      const { message } = response.data;
      if (message == "Deleted Done") {
        // alert(message)
        getData();
      } else {
        alert(message);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
// redirect to update card page
function updateItem(id) {
  localStorage.setItem("cardID", id);
  window.location.replace("http://127.0.0.1:5500/Front-end%20Code//update.html")
}
