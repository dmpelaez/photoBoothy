document.getElementById('dataButton')
.addEventListener('click', () => {
  fetch("http://localhost:5500/frontend.html")
  .then(res => res.json())
  .then(info => console.log(info));
})