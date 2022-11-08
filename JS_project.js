// If user adds a movei, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let moveilist = localStorage.getItem("moveilist");
  if (moveilist == null) {
    moveiObj = [];
  } else {
    moveiObj = JSON.parse(moveilist);
  }
  moveiObj.push(addTxt.value);
  localStorage.setItem("moveilist", JSON.stringify(moveiObj));
  addTxt.value = "";
//   console.log(moveiObj);
  moveiLists();
});

// Function to show elements from localStorage
function moveiLists() {
  let moveilist = localStorage.getItem("moveilist");
  if (moveilist == null) {
    moveiObj = [];
  } else {
    moveiObj = JSON.parse(moveilist);
  }
  let html = "";
  moveiObj.forEach(function(element, index) {
    html += `
                <div class="moveiCard my-1 mx-1 card" style="width: 100%;">
                        <div class="card-body">
                        <button id="${index}"onclick="moveiDelete(this.id)" class="btn btn-primary" style="float: right;">Delete</button>
                        <h6 class="card-title">Movie ${index + 1}</h6>
                        <p class="card-text"> <strong> ${element} </strong></p>
                        </div>
                </div> <br/>`;
  });
  let moviesElm = document.getElementById("moveilist");
  if (moveiObj.length != 0) {
    moviesElm.innerHTML = html;
  } else {
    moviesElm.innerHTML = `Nothing to show! Use "Add a Movies here" section Below to Add Movies button.`;
  }
}

// Function to delete a moveilist
function moveiDelete(index) {
//   console.log("I am deleting", index);

  let moveilist = localStorage.getItem("moveilist");
  if (moveilist == null) {
    moveiObj = [];
  } else {
    moveiObj = JSON.parse(moveilist);
  }

  moveiObj.splice(index, 1);
  localStorage.setItem("moveilist", JSON.stringify(moveiObj));
  moveiLists();
}

//this is search section
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let moveicards = document.getElementsByClassName('moveiCard');
    Array.from(moveicards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
});

// //this is hide button
const targetDiv = document.getElementById("hidecard");
const chek = document.getElementById("hide");
chek.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

//Press the "Enter" key inside the input field to trigger the button.

var input = document.getElementById("addTxt");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addBtn").click();
  }
});



