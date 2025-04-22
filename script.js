function searchBar() {
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
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("createTaskForm");
  const confirmed = document.getElementById("confirmed");
  const taskList = document.getElementById("tasks");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function(task){
    const newTask = document.createElement("li");
    newTask.innerHTML = `
          <strong>Title:</strong> ${task.title} 
          <strong>Description:</strong> ${task.description} 
          <strong>Location:</strong> ${task.location} 
          <strong>Priority:</strong> ${task.priority} `;
    
    taskList.appendChild(newTask);
  })

  if (form) {
    form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const priority = document.getElementById("priority").value;
    
    confirmed.innerHTML = `
    <P>Task created successfully</p>
    <ul>
          <li><strong>Title:</strong> ${title}</li> 
          <li><strong>Description:</strong> ${description}</li> 
          <li><strong>Location:</strong> ${location}</li> 
          <li><strong>Priority:</strong> ${priority}</li> 
    </ul>`;

    const task = {title, description, location, priority};
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const newTask = document.createElement("li");
    newTask.innerHTML = `
     <strong>Title:</strong> ${title} 
     <strong>Description:</strong> ${description} 
     <strong>Location:</strong> ${location} 
     <strong>Priority:</strong> ${priority}`;

     taskList.appendChild(newTask);
  });
 }
});

//event added due to error on slideshow loading all pictures instead of one by one
document.addEventListener("DOMContentLoaded", function (){

let slideIndex = 1;
showSlides(slideIndex);


window.plusSlides = function(n) {
  showSlides(slideIndex += n);
}


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