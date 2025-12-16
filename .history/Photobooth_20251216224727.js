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

///-----------------------------------------------------------------///
//Default value false
let isVideo = false;


//This is a btn for on and off to the camera
document.getElementById('btn-toggle')
.addEventListener('click', () => {
  
  //Condition where it looks for the opposite
  //value of isVideo by using NOT operator
  //which will result to having a value of TRUE
  if (!isVideo) {
  //once it becomes true
  //navigator.mediaDevices.getUserMedia will activate
  //and the access to video will open
  navigator.mediaDevices.getUserMedia({video: true})
  .then((stream) => {
  //access to camera 
  video.srcObject = stream;
  //btn ON
   document.getElementById('btn-toggle').innerHTML = 'ON';
   //Value was change to true
   //so once the btn is click again
   //the else if is the one that will be open
     isVideo = true;
    
  });
} else if (isVideo) {
  //access to camera again
 navigator.mediaDevices.getUserMedia({video: true})
  .then((stream) => {
    //To stop the camera access
    stream.getTracks().forEach(track => track.stop());
    //To stop the webcam light we need to track all
    //the access video.srcObject have
    for (const track of video.srcObject.getTracks()) {
      track.stop();
    }
    //no value
    stream = null;
    //no value
   video.srcObject = null;
   //Display btn as OFF
   document.getElementById('btn-toggle').innerHTML = 'OFF';
   //Value is changed to false
   isVideo = false;
   
  })
  
}
console.log(isVideo);
});

///------------------------------------------------------------///
//capturePhoto is a function where 
// the canvas width and height have the 
// values of videos' 
//and context.drawImage capture everything
//and replicate the videos into photo
//and before that we change its value 
//to the canvas.getContext('2d')
function capturePhoto() {
  //the value canvas width and height 
  // is the same as the video width and height;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  //
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

///------------------------------------------------------------------------///
//btn for camera to capture
btn.addEventListener('click', () => {
//Finally after minutes of thinking how
//to activate the timer if the camera is open

//This will only activate if the isVideo value
// is true but its default value stop it from triggering
//the settimer() because it didn't meet the condition
if (isVideo === true) {
settimer();

}
})

document.body.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    if (isVideo === true) {
      settimer();
  }
 } 
})

///-----------------------------------------------------------------////








//Timer default setTime

let timer = 0;
let timeInterval = null;

const setTime = document.querySelector('.select');

setTime.addEventListener('change', () => {
  timer = Number(setTime.value);
})
 
//This is timer function 
// where after five seconds 
//it will capture a picture
function settimer() {
  
  clearTimeout(timeInterval);
   let timeChange = timer;
  //Display
 
  const timer2 =  document.querySelector('.timer');
  //if statement condition where if 
  //the timer is greater than 0 then it will
  //activate the specific function
  if (timeChange > 0) {
    console.log(timeChange);
    //setTimeout is updating the settimer function every
    // one second to update the display number 
    
    timeInterval = setInterval(() => {
       document.querySelector('.timer').innerHTML = timeChange;
       if (timeChange === 0) {
        clearInterval(timeInterval);
       }
       timeChange --;
       timer2.classList.add("timerPhoto");
    }, 1000);
    
   
    //added a new class to design the timer
    
  } else  if (timeChange === 0) {
    //after 0 the else will run this part of function 
    // where capturePhoto(); is activated
    //timer goes back to default and display it 
    //but remove the design in the webpage

    capturePhoto();
   timer2.innerHTML = timer;
   timer2.classList.remove("timerPhoto");
   clearInterval(timeInterval);
 
  }
}

