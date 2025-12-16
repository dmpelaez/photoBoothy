const video = document.getElementById('video');

nagivator.mediaDevices.getUserMedia({video: true, audio: true,})
.then((stream) => {
  video.srcObject = stream;
})