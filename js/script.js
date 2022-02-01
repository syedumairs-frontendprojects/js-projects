//Variables
const videoElement = document.getElementById("video");
const button = document.getElementById("button");
const URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
//Functions

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("An error occured:", error);
  }
}

//Event listeners
button.addEventListener("click", async () => {
  button.disabled = true;

  await videoElement.requestPictureInPicture();

  button.disabled = false;
});

selectMediaStream();
