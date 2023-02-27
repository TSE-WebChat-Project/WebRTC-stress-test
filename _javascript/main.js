document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!!');
});

let myFunction = (a, b) => a + b;
document.getElementById("add").innerHTML = myFunction(1, 3);




let info = { 
  firstName: "Fred", 
  lastName: "Okogie", 
  course: "javascript" 
} 

console.log(delete info.course);
console.log(info);




function addListItemWithButton(id, ip, callback) {
  //create a new list item element
  const li = document.createElement('li');

  //create a new button element
  const button = document.createElement('button');

  //set the text content of the butoon to 'Call function'
  button.textContent = "Call function";

  //Add a click listener to the button that calls the callback function with the id and ip as arguments
  button.addEventListener('click', function() {
    callback(id, ip);
  });

  //set the text context of the list item to "ID: {id}, IP: {ip}"
  li.appendChild(button);

  //Append the list item to the unordered list on the page
  const ul = document.querySelector('ul');
  ul.appendChild(li);
}