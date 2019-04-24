function today(){
  let todaySection = document.createElement('section');
  let header = document.createElement('header');
  todaySection.classList.add('todaySection');
  let todayText = document.createElement('h1');
  todayText.textContent = "Today";
  header.appendChild(todayText);

  //Date
  function date(){
  let today = new Date();
  let d = String(today.getDate());
  let m = String(today.getMonth() + 1);
  let y = today.getFullYear();
  let dateText = m + '/' + d + '/' + y;
  let date = document.createElement('p');
  date.textContent = dateText;
  date.classList.add('date');
  header.appendChild(date);
  return dateText;
  }

  function addTask(){
    let addText = document.createElement('span');
    addText.textContent = "+";
    addText.classList.add('plusText');
    let addTask = document.createElement('p');
    addTask.textContent = "Add Task";
    addTask.classList.add('addTaskText');
    header.append(addText, addTask);
  }

  function inputForm(){
    let inputFormDiv = document.createElement('div');
    inputFormDiv.classList.add('inputFormDiv');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('input');
    let submit = document.createElement('button');
    submit.classList.add('submit');
    submit.textContent = "Add Task";
    inputFormDiv.append(input,submit);
    return inputFormDiv;
  }
  date();
  addTask();
  inputForm();
  todaySection.append(header, inputForm());
  return todaySection;
}

export {
  today
}
