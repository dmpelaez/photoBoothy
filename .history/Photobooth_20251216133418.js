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

let isVideo = true;
let stream = null;

async function camera() {
document.getElementById('btn-toggle')
.addEventListener('click', () => {
  
  
  if (isVideo) {
  
  stream =  navigator.mediaDevices.getUserMedia({video: true});
  video.srcObject = stream;
   document.getElementById('btn-toggle').innerHTML = 'ON';
     isVideo = false;
  
} else if (!isVideo) {
 
    stream.getTracks().forEach(track => track.stop());
    video.srcObject = null;
    stream = null;
   document.getElementById('btn-toggle').innerHTML = 'OFF';
   isVideo = true;
 
}
console.log(isVideo);
});
}

function capturePhoto() {
  //the value canvas width and height 
  // is the same as the video width and height;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  //
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
}


let timer = 5;

if (isVideo === true) {  
btn.addEventListener('click', () => {
settimer();
})


function settimer() {
  document.querySelector('.timer').innerHTML = timer;
  const timer2 =  document.querySelector('.timer');

  if (timer > 0) {
    timer --;
    setTimeout(settimer, 1000);
    timer2.classList.add("timerPhoto");
  } else {
    capturePhoto();
    timer = 5;
   timer2.innerHTML = timer;
   timer2.classList.remove("timerPhoto");
  }
}
}