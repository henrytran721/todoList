import {taskArr} from './newTask'

let completedDropDown = document.querySelector('.completedDropDown');
let completedDiv = document.createElement('section');
let mainBody = document.querySelector('.mainBody');
let completedHeader = document.createElement('h2');
completedHeader.textContent = "Completed";
completedDiv.classList.add('completedDiv');
completedDiv.append(completedHeader);
completedDropDown.append(completedDiv);

function addToCompleted(){
  console.log(taskArr);
}


function dropDown(){
  let completedTask = document.querySelector('.completedTask');
  completedTask.addEventListener('click', function(){
    if(completedDiv.style.display === "none"){
      completedDiv.style.display = "block";
      mainBody.style.opacity = "0.5";
    } else {
      completedDiv.style.display = "none";
      mainBody.style.opacity = "1";
    }
  });

}


export {
  dropDown,
  addToCompleted,
  completedDiv
}
