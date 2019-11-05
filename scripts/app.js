let buttonPicture = document.querySelector('.button-picture')
let boxRotate = document.querySelector('.y-axis')
let cvs = document.querySelector('.cvs')
let buttonPrint = document.querySelector('.button-picture1')
let sheetPicture = document.querySelector('.sheet-picture')
let linkDownload = document.querySelector('.download')

function init() {
    boxRotate.style.animationName = "none"
    linkDownload.style.animationName = "none"
    sheetPicture.style.display = 'none'
    linkDownload.style.display = 'none'


}
/*WEBCAM*/
function webcam() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: 800,
            height: 800
        }
    }).then(function (mediaStream) {

        let video = document.querySelector('.sourcevid')
        video.srcObject = mediaStream;

        video.onloadedmetadata = function (e) {
            video.play();
        };
    }).catch(function (err) {
        console.log(err.name + ": " + err.message);
    });
}
/*ROTATE CAMERA To VIEWFINDER*/
buttonPicture.addEventListener('click', () => {
    if (sheetPicture.style.display = 'none') {
        boxRotate.style.animationName = "rotate-camera-scale"
        webcam();
    } else {
        init()
    }

})

/*DRAW IMAGE*/
function clone() {
    let vivi = document.querySelector('.sourcevid')
    let cvs = document.querySelector('.cvs').getContext('2d');
    cvs.drawImage(vivi, 0, 0, 800, 800, 0, 0, 300, 170);
}
/*ROTATE CAMERA To FRONT*/
buttonPrint.addEventListener('click', () => {
    clone();
    boxRotate.style.animationName = 'rotate-camera-scale1'
    linkDownload.style.animationName = 'download-appear'
    cvs.style.animationName = 'appears-cvs'
    sheetPicture.style.display = 'block'
    linkDownload.style.display = 'block'
})
/*DOWNLOAD IMAGE*/
linkDownload.addEventListener('click', () => {
    linkDownload.href = cvs.toDataURL();
    linkDownload.download = "screen.png";
})