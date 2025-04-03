
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

