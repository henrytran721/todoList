import {date} from './date';
import {addToCompleted, completedDiv} from './completedTasks';

function Task(taskName, completion, date){
  this.taskName = taskName;
  this.completion = completion;
  this.date = date;
}

let taskArr = [];

function submitTask(){
let submitBtn = document.querySelector('.submit');
let input = document.querySelector('input');

submitBtn.addEventListener('click', function(){
  let inputValue = input.value;
  input.value = '';

  let newInput = new Task(inputValue, false, date());
  function appendTaskToDOM(){
    if(!inputValue.length <= 0){
    let finalStr = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    let todaySection = document.querySelector('.todaySection');

    //create containing div
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');

    //append text
    let inputText = document.createElement('h1');
    inputText.textContent = finalStr;
    taskDiv.appendChild(inputText);
    //append the date created
    let dateValue = document.createElement('h3');
    dateValue.textContent = newInput.date;
    console.log(dateValue);
    //append completion button and indicate whether completed
    let completionBtn = document.createElement('button');
    let completionText = document.createElement('p');
    completionText.textContent = "Completed!";
    completionBtn.addEventListener('mouseover', () => completionText.style.visibility = "visible");
    completionBtn.addEventListener('mouseout', () => completionText.style.visibility = "hidden");
    completionBtn.classList.add('completionBtn');

    //create a delete task button
    let deleteBtn = document.createElement('h3');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = "Delete";

    taskDiv.append(dateValue, completionBtn, completionText, deleteBtn);

    todaySection.appendChild(taskDiv);

    //when completed push to taskArr
    completionBtn.addEventListener('click', function(){
      completionBtn.style.backgroundColor = "#ca2100";
      completionText.style.visibility = "visible";
      todaySection.removeChild(taskDiv);
      newInput.completion = true;
      taskArr.push(newInput);
      let completedInput = document.createElement('div');
      completedInput.classList.add('completedInput');
      completedInput.append(inputText, dateValue);
      completedDiv.append(completedInput);
    });

    //delete button function
    deleteBtn.addEventListener('click', () => todaySection.removeChild(taskDiv));

  } else {
    alert('Please enter a task');
  }
}
  appendTaskToDOM();
});

}


export {
  Task,
  submitTask,
  taskArr
}
