//To make the video appear in html
//I use <video></video> html element
const video = document.getElementById('video');
//canvas element is where the photos will appear
const canvas = document.getElementById('canvas-image');
const btn = document.getElementById('photo-btn');
//I set the canvas into 2d to get the copy
//of the photo taken
const context = canvas.getContext('2d');


//I use navigator.mediDevices.getUsermedia 
//to get access on the camera by allowing the
//video and use it to assigned as value of
//video element 
navigator.mediaDevices.getUserMedia({video: true})
.then((stream) => {
  video.srcObject = stream;
})


function capturePhoto() {
  //the value canvas width and height 
  // is the same as the video width and height;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  //
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
}


let timer = 5;


btn.addEventListener('click', () => {
settimer();
})

function settimer() {
  document.querySelector('.timer').innerHTML = timer;

  if (timer > 0) {
    timer --;
    setTimeout(settimer, 1000);
  } else {
    capturePhoto();
    timer = 5;
    document.querySelector('.timer').innerHTML = timer;
  }
}