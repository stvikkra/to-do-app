window.onload = function() {
     onReady();
 };

 function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');
   addToDoForm.addEventListener('submit', event => {
     event.preventDefault();

      // get the text
     let title = newToDoText.value;

     // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    // add event addEventListener

    deleteBtn.addEventListener('click', function(event){
      //console.log(event);
      //this.parentElement = button's <li> parent"
       toDoList.removeChild(this.parentElement);

    })

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach delete button to li
    newLi.appendChild(deleteBtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });

  }
