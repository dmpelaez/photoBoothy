const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({video: true, audio: true,})
.then((stream) => {
  video.srcObject = stream;
})