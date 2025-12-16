const video = document.getElementById('video');
const canvas = document.getElementById('canvas-image');
const btn = document.getElementById('photo-btn');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({video: true})
.then((stream) => {
  video.srcObject = stream;
})


function capturePhoto() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;


  context.drawImage(video, 0, 0, canvas.width, canvas.height);
}




btn.addEventListener('click', () => {
  let timer = 3000; 
   setTimeout(() => {
    capturePhoto();
  }, timer);
}
);