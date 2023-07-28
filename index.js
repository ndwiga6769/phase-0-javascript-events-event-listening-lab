let input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

// input.addEventListener('click', clickAlert);
function addingEventListener(){
  input.addEventListener('click', clickAlert);

}
addingEventListener()

