
function myFunction() {
    // Declare variables
  var input, filter, ul, li, i, txtValue;
  //What the user inputs
  input = document.getElementById("myInput");
  //Filters the result to uppercase letters to eliminate case-sensitive results
  filter = input.value.toUpperCase();
  //Variable for unordered list
  ul = document.getElementById("myUL");
  //Variable for list item
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
//Getting text from the list item
      txtValue = li[i].textContent || li[i].innerText; 
//If statement to check if the user input is inside a certain list item
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          //If there is a matching item, that item stays visible
          li[i].style.display = "";
      } else {
        //Items that do not match will be hidden
          li[i].style.display = "none";
      }
  }
}


function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  let y = document.forms["myForm"]["message"].value;
  let z = document.forms["myForm"]["email"].value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (x == ""||y==""||z=="") {
    alert("Please fill out all fields before sending a message");
    return false;
  }else{
      if(pattern.test(z)==false){
          alert("Please enter a valid email address before sending a message")
      }else{
          alert("You have sent a message!")
      }
  }


}

