import {today} from './today';
import {navToggle} from './nav';
import {Task, submitTask} from './newTask';
import {date} from './date';
import {dropDown} from './completedTasks';

const mainBody = document.querySelector('.mainBody');

mainBody.appendChild(today());

let addTask = document.querySelector('.plusText');
console.log(addTask);
let inputFormDiv = document.querySelector('.inputFormDiv');
let topAddTask = document.querySelector('.addTask');

topAddTask.addEventListener('click', function(e){
  if(inputFormDiv.style.visibility === "hidden"){
    inputFormDiv.style.visibility = "visible";
  } else {
    inputFormDiv.style.visibility = "hidden";
  }
});
addTask.addEventListener('click', function(e){
  console.log('working');
  if(inputFormDiv.style.visibility === "hidden"){
    inputFormDiv.style.visibility = "visible";
  } else {
    inputFormDiv.style.visibility = "hidden";
  }
});

let submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', submitTask());

dropDown();
navToggle();
