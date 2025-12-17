document.getElementById('dataButton')
.addEventListener('click', () => {
  fetch("http://localhost:6700/data")
  .then(res => res.json())
  .then(info => console.log(info));
})