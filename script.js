const input =document.querySelector(".input");
const addbtn = document.querySelector(".addbtn");
const display = document.querySelector(".display");
const result = document.querySelector(".result")
addbtn.addEventListener("click", function(){
  // const newtext = document.createElement("p");
  // newtext.textContent=input.value;
  // result.appendChild(newtext);

  // Adding the each div
    const singlediv = document.createElement("div");
    singlediv.classList.add("singlediv");

  // Adding the text
    const newtext = document.createElement("p");
    newtext.textContent=input.value;
    singlediv.appendChild(newtext); //add the text to the single div

  //Adding the detele button
  const deletebtn = document.createElement("button");
  // deletebtn.textContent = 'delete'; // add the letter to the button
  
  //create the delete icons
  const deleteicon = document.createElement("img");
  deleteicon.src= "https://cdn-icons-png.flaticon.com/512/1214/1214428.png";
  deleteicon.classList.add("deleteicon");
  deletebtn.appendChild(deleteicon);

  deletebtn.classList.add("deletebtn");
  deletebtn.addEventListener("click",function(){
    result.removeChild(singlediv); //remove the div that contain the info div which is the single div
  });

  singlediv.appendChild(deletebtn); //add the deletebtn to the single div

    //Adding all to the big div 
  result.appendChild(singlediv)

// remove after click add task button
input.value = '';
});


// dark and light mode icon change: 
const darkmodebtn = document.querySelector(".darkbtn");
const darkmodepic = document.querySelector(".dark-icon");
let isdark =false;  // set to false to use the if else condition
darkmodebtn.addEventListener("click", function(){
  if(!isdark){
    darkmodepic.src = "image/light-icon.svg";
    document.body.classList.add("darkmode");
   isdark=true;
  }else{
    darkmodepic.src= "image/dark-icon.svg";
    document.body.classList.remove("darkmode")
    isdark=false;
  }
})