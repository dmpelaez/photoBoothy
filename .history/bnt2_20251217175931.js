document.getElementById('dataButton')
.addEventListener('click', () => {
  fetch("http://localhost:5500/data")
  .then(res => res.json())
  .then(info => console.log(info));
})