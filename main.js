//場景
const doorImage = new PANOLENS.ImagePanorama("images/door.jpg");
const administrativeImage = new PANOLENS.ImagePanorama(
  "images/administrative.jpg"
);
const porchImage = new PANOLENS.ImagePanorama("images/porch.jpg");
const meetingImage = new PANOLENS.ImagePanorama("images/meeting.jpg");

const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

//會議室資訊
var bikeInfo,
  motorInfo,
  ledInfo,
  medicalInfo,
  tireInfo,
  miniLedInfo,
  electricInfo,
  speakerInfo,
  lensInfo,
  communicationInfo,
  porchArrow1,
  porchArrow2,
  meetingArrow,
  bikeInfo = new PANOLENS.Infospot(350);
bikeInfo.position.set(5100, -1500, 5500);
bikeInfo.addHoverText("自行車資訊");
bikeInfo.addEventListener("click", function () {
  btnFunction(1,false);
  bikeInfo.focus();
});

motorInfo = new PANOLENS.Infospot(350);
motorInfo.position.set(5200, -1500, 2900);
motorInfo.addHoverText("電動汽車馬達資訊");
motorInfo.addEventListener("click", function () {
  btnFunction(2,false);
  motorInfo.focus();
});

ledInfo = new PANOLENS.Infospot(350);
ledInfo.position.set(5300, -1500, 100);
ledInfo.addHoverText("LDE車燈應用資訊");
ledInfo.addEventListener("click", function () {
  btnFunction(3,false);
  ledInfo.focus();
});

medicalInfo = new PANOLENS.Infospot(350);
medicalInfo.position.set(5400, -1500, -2500);
medicalInfo.addHoverText("醫療接著膠材資訊");
medicalInfo.addEventListener("click", function () {
  btnFunction(4,false);
  medicalInfo.focus();
});

tireInfo = new PANOLENS.Infospot(350);
tireInfo.position.set(5500, -1500, -5000);
tireInfo.addHoverText("胎壓偵測系統資訊");
tireInfo.addEventListener("click", function () {
  btnFunction(5,false);
  tireInfo.focus();
});

miniLedInfo = new PANOLENS.Infospot(350);
miniLedInfo.position.set(-5500, -1500, -5550);
miniLedInfo.addHoverText("MINI LED資訊");
miniLedInfo.addEventListener("click", function () {
  btnFunction(6,false);
  miniLedInfo.focus();
});

electricInfo = new PANOLENS.Infospot(350);
electricInfo.position.set(-5600, -1500, -3050);
electricInfo.addHoverText("電桿應用資訊");
electricInfo.addEventListener("click", function () {
  btnFunction(7,false);
  electricInfo.focus();
});

speakerInfo = new PANOLENS.Infospot(350);
speakerInfo.position.set(-5700, -1500, -500);
speakerInfo.addHoverText("微型揚聲器(聲學產業)資訊");
speakerInfo.addEventListener("click", function () {
  btnFunction(8,false);
  speakerInfo.focus();
});

lensInfo = new PANOLENS.Infospot(350);
lensInfo.position.set(-5800, -1500, 2000);
lensInfo.addHoverText("光學鏡頭資訊");
lensInfo.addEventListener("click", function () {
  btnFunction(9,false);
  lensInfo.focus();
});

communicationInfo = new PANOLENS.Infospot(350);
communicationInfo.position.set(-5900, -1500, 4550);
communicationInfo.addHoverText("5G-光通訊-光通訊資訊");
communicationInfo.addEventListener("click", function () {
  btnFunction(10,false);
  communicationInfo.focus();
});

// 改變場景
function changeFunction(img, product) {  
  switch (img) {
    case "administrative":
      viewer.setPanorama(administrativeImage);
      break;
    case "porch":
      viewer.setPanorama(porchImage);
      break;
    case "meeting":
      viewer.setPanorama(meetingImage);
      setTimeout(focusItem, 100);
      function focusItem() {
        switch (product) {
          case "bike":
            btnFunction(1,false);
            bikeInfo.focus();
            break;
          case "motor":
            btnFunction(2,false);
            motorInfo.focus();
            break;
          case "led":
            btnFunction(3,false);
            ledInfo.focus();
            break;
          case "medical":
            btnFunction(4,false);
            medicalInfo.focus();
            break;
          case "tire":
            btnFunction(5,false);
            tireInfo.focus();
            break;
          case "miniled":
            btnFunction(6,false);
            miniLedInfo.focus();
            break;
          case "electric":
            btnFunction(7,false);
            electricInfo.focus();
            break;
          case "speaker":
            btnFunction(8,false);
            speakerInfo.focus();
            break;
          case "lens":
            btnFunction(9,false);
            lensInfo.focus();
            break;
          case "communication":
            btnFunction(10,false);
            communicationInfo.focus();
            break;
          default:
            break;
        }
      }
      break;
    default:
      viewer.setPanorama(doorImage);
      break;
  }
}

//door
doorToAdministrativeArrow = new PANOLENS.Infospot(
  500,
  "./images/doorToAdministrativeArrow.png"
);
doorToAdministrativeArrow.position.set(7000, -1500, 500);
doorToAdministrativeArrow.addHoverText("大門");
doorToAdministrativeArrow.addEventListener("click", function () {
  changeFunction("administrative");
});

doorImage.add(doorToAdministrativeArrow);

//administrative
administrativeToProchArrow = new PANOLENS.Infospot(
  300,
  "./images/administrativeToProchArrow.png"
);
administrativeToProchArrow.position.set(-800, -1500, 3500);
administrativeToProchArrow.addHoverText("行政大樓");
administrativeToProchArrow.addEventListener("click", function () {
  changeFunction("porch");
});
administrativeToDoorArrow = new PANOLENS.Infospot(
  300,
  "./images/administrativeToDoorArrow.png"
);
administrativeToDoorArrow.position.set(7000, -500, 0);
administrativeToDoorArrow.addHoverText("入口");
administrativeToDoorArrow.addEventListener("click", function () {
  changeFunction("door");
});

administrativeImage.add(administrativeToProchArrow, administrativeToDoorArrow);

//proch
prochToMeetingArrow = new PANOLENS.Infospot(
  300,
  "./images/prochToMeetingArrow.png"
);
prochToMeetingArrow.position.set(-1150, -1200, 3500);
prochToMeetingArrow.addHoverText("會議室");
prochToMeetingArrow.addEventListener("click", function () {
  changeFunction("meeting");
});

prochToAdministrativeArrow = new PANOLENS.Infospot(
  300,
  "./images/prochToAdministrativeArrow.png"
);
prochToAdministrativeArrow.position.set(2500, -1500, -1500);
prochToAdministrativeArrow.addHoverText("大門");
prochToAdministrativeArrow.addEventListener("click", function () {
  changeFunction("administrative");
});

porchImage.add(prochToAdministrativeArrow, prochToMeetingArrow);

//meeting
meetingToProchArrow = new PANOLENS.Infospot(
  800,
  "./images/meetingToProchArrow.png"
);
meetingToProchArrow.position.set(-5000, -1500, 7500);
meetingToProchArrow.addHoverText("行政大樓");
meetingToProchArrow.addEventListener("click", function () {
  changeFunction("porch");
});

meetingImage.add(
  bikeInfo,
  motorInfo,
  ledInfo,
  medicalInfo,
  tireInfo,
  miniLedInfo,
  electricInfo,
  speakerInfo,
  lensInfo,
  communicationInfo,
  meetingToProchArrow
);

viewer.add(doorImage, administrativeImage, porchImage, meetingImage);

var lookAtPositions = [
  new THREE.Vector3(7000, -1500, 500), //door
  new THREE.Vector3(-800, -500, 3500), //administrative
  new THREE.Vector3(-5000, -1500, 3500), //porch
  new THREE.Vector3(-5500, -1500, 8500), //meeting
];

doorImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});

administrativeImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[1], 0);
});

porchImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[2], 0);
});

meetingImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[3], 0);
});

var menuBtn = document.querySelector(".menu");
var infoMenu = document.querySelector(".guide-box");
menuBtn.addEventListener("click", function () {
  infoMenu.classList.toggle("active");
});
