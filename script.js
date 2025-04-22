function myFunction() {
  // Declare variables
  var input, filter, ul, li, i, txtValue;

  // What the user inputs
  input = document.getElementById("myInput");

  // Convert input to uppercase for case-insensitive match
  filter = input.value.toUpperCase();

  // Reference the unordered list and its list items
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Loop through all list items
  for (i = 0; i < li.length; i++) {
    // Get text from the list item
    txtValue = li[i].textContent || li[i].innerText;

    // Check if user input exists in the item text
    li[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
  }
}

function filterAll() {
  const province = document.getElementById("provinceFilter").value;
  const taskType = document.getElementById("taskTypeFilter").value;
  const category = document.getElementById("categoryFilter").value;
  const priority = document.getElementById("priorityFilter").value;

  const li = document.querySelectorAll("#myUL li");

  li.forEach(item => {
    const matches =
      (province === "" || item.dataset.province === province) &&
      (taskType === "" || item.dataset.taskType === taskType) &&
      (category === "" || item.dataset.category === category) &&
      (priority === "" || item.dataset.priority === priority);

    item.style.display = matches ? "" : "none";
  });
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
window.onload = function () {
  const taskForm = document.getElementById("taskForm");
  const confirmationDiv = document.getElementById("confirmed");

  if (taskForm) {
    taskForm.addEventListener("submit", createTask);
  }

  function createTask(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const priority = document.getElementById("priority").value;

    document.getElementById("confirmation").textContent = "Task created";
  }
};

document.addEventListener("DOMContentLoaded", function (){

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
window.plusSlides = function(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
window.currentSlide = function(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
});