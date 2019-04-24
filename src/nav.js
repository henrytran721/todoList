let nav = document.querySelector('.menuBar');
let navPanel = document.getElementById('menu');

function navToggle(){
  nav.addEventListener('click', function(){
    console.log('working');
    if(navPanel.style.display === "none"){
      navPanel.style.display = "block";
    } else {
      navPanel.style.display = "none";
    }

  });
}

export {
  navToggle
}
