//場景
const doorImage = new PANOLENS.ImagePanorama("images/door.jpg");

const aisle1Image = new PANOLENS.ImagePanorama("images/aisle1/aisle1.jpg");
const aisle2Image = new PANOLENS.ImagePanorama("images/aisle2/aisle2.jpg");
const aisle3Image = new PANOLENS.ImagePanorama("images/aisle3/aisle3.jpg");
const aisle4Image = new PANOLENS.ImagePanorama("images/aisle4/aisle4.jpg");
const aisle5Image = new PANOLENS.ImagePanorama("images/aisle5/aisle5.jpg");
const aisle6Image = new PANOLENS.ImagePanorama("images/aisle6/aisle6.jpg");
const aisle7Image = new PANOLENS.ImagePanorama("images/aisle7/aisle7.jpg");
const developmentImage = new PANOLENS.ImagePanorama(
  "images/development/development.jpg"
);
const showRoomImage = new PANOLENS.ImagePanorama(
  "images/show_room/show_room.jpg"
);
const administrativePorchImage = new PANOLENS.ImagePanorama(
  "images/administrative_porch/administrative_porch.jpg"
);
const administrativeImage = new PANOLENS.ImagePanorama(
  "images/administrative/administrative.jpg"
);
const meetingImage = new PANOLENS.ImagePanorama("images/meeting/meeting.jpg");

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
bikeInfo.position.set(-5100, -1500, -3800);
bikeInfo.addHoverText("自行車資訊");
bikeInfo.addEventListener("click", function () {
  btnFunction(1, false);
  bikeInfo.focus();
});

motorInfo = new PANOLENS.Infospot(350);
motorInfo.position.set(-5200, -1500, -1300);
motorInfo.addHoverText("電動汽車馬達資訊");
motorInfo.addEventListener("click", function () {
  btnFunction(2, false);
  motorInfo.focus();
});

ledInfo = new PANOLENS.Infospot(350);
ledInfo.position.set(-5200, -1500, 1400);
ledInfo.addHoverText("LDE車燈應用資訊");
ledInfo.addEventListener("click", function () {
  btnFunction(3, false);
  ledInfo.focus();
});

medicalInfo = new PANOLENS.Infospot(375);
medicalInfo.position.set(-5200, -1500, 4100);
medicalInfo.addHoverText("醫療接著膠材資訊");
medicalInfo.addEventListener("click", function () {
  btnFunction(4, false);
  medicalInfo.focus();
});

tireInfo = new PANOLENS.Infospot(400);
tireInfo.position.set(-5200, -1500, 6600);
tireInfo.addHoverText("胎壓偵測系統資訊");
tireInfo.addEventListener("click", function () {
  btnFunction(5, false);
  tireInfo.focus();
});

miniLedInfo = new PANOLENS.Infospot(350);
miniLedInfo.position.set(5800, -1500, 5950);
miniLedInfo.addHoverText("MINI LED資訊");
miniLedInfo.addEventListener("click", function () {
  btnFunction(6, false);
  miniLedInfo.focus();
});

electricInfo = new PANOLENS.Infospot(350);
electricInfo.position.set(5600, -1500, 3450);
electricInfo.addHoverText("電桿應用資訊");
electricInfo.addEventListener("click", function () {
  btnFunction(7, false);
  electricInfo.focus();
});

speakerInfo = new PANOLENS.Infospot(350);
speakerInfo.position.set(5400, -1500, 900);
speakerInfo.addHoverText("微型揚聲器(聲學產業)資訊");
speakerInfo.addEventListener("click", function () {
  btnFunction(8, false);
  speakerInfo.focus();
});

lensInfo = new PANOLENS.Infospot(350);
lensInfo.position.set(5200, -1500, -1600);
lensInfo.addHoverText("光學鏡頭資訊");
lensInfo.addEventListener("click", function () {
  btnFunction(9, false);
  lensInfo.focus();
});

communicationInfo = new PANOLENS.Infospot(350);
communicationInfo.position.set(5000, -1500, -4050);
communicationInfo.addHoverText("5G-光通訊-光通訊資訊");
communicationInfo.addEventListener("click", function () {
  btnFunction(10, false);
  communicationInfo.focus();
});

// 改變場景
function changeFunction(img, product) {
  switch (img) {
    case "aisle1":
      btnFunction(-1, false);
      viewer.setPanorama(aisle1Image);
      break;
    case "aisle2":
      btnFunction(-1, false);
      viewer.setPanorama(aisle2Image);
      break;
    case "aisle3":
      btnFunction(-1, false);
      viewer.setPanorama(aisle3Image);
      break;
    case "aisle4":
      btnFunction(-1, false);
      viewer.setPanorama(aisle4Image);
      break;
    case "aisle5":
      btnFunction(-1, false);
      viewer.setPanorama(aisle5Image);
      break;
    case "aisle6":
      btnFunction(-1, false);
      viewer.setPanorama(aisle6Image);
      break;
    case "aisle7":
      btnFunction(-1, false);
      viewer.setPanorama(aisle7Image);
      break;
    case "development":
      btnFunction(-1, false);
      viewer.setPanorama(developmentImage);
      break;
    case "showRoom":
      btnFunction(-1, false);
      viewer.setPanorama(showRoomImage);
      break;
    case "administrativePorch":
      btnFunction(-1, false);
      viewer.setPanorama(administrativePorchImage);
      break;
    case "administrative":
      btnFunction(-1, false);
      viewer.setPanorama(administrativeImage);
      break;
    case "meeting":
      viewer.setPanorama(meetingImage);
      setTimeout(focusItem, 100);
      function focusItem() {
        switch (product) {
          case "bike":
            btnFunction(1, false);
            bikeInfo.focus();
            break;
          case "motor":
            btnFunction(2, false);
            motorInfo.focus();
            break;
          case "led":
            btnFunction(3, false);
            ledInfo.focus();
            break;
          case "medical":
            btnFunction(4, false);
            medicalInfo.focus();
            break;
          case "tire":
            btnFunction(5, false);
            tireInfo.focus();
            break;
          case "miniled":
            btnFunction(6, false);
            miniLedInfo.focus();
            break;
          case "electric":
            btnFunction(7, false);
            electricInfo.focus();
            break;
          case "speaker":
            btnFunction(8, false);
            speakerInfo.focus();
            break;
          case "lens":
            btnFunction(9, false);
            lensInfo.focus();
            break;
          case "communication":
            btnFunction(10, false);
            communicationInfo.focus();
            break;
          default:
            break;
        }
      }
      break;
    default:
      btnFunction(-1, false);
      viewer.setPanorama(doorImage);
      break;
  }
}

let lookCheck = true;

//door
doorToAdministrativeArrow = new PANOLENS.Infospot(
  500,
  "./images/doorToAdministrativeArrow.png"
);
doorToAdministrativeArrow.position.set(-7000, -1500, 500);
// doorToAdministrativeArrow.addHoverText("大門");
doorToAdministrativeArrow.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("aisle1");
});

doorImage.add(doorToAdministrativeArrow);
//aisle1 ------------------------------------------------------------------------------------------------
// 走道1往走道2
aisle1ToAisle2 = new PANOLENS.Infospot(
  500,
  "./images/aisle1/aisle1-aisle2.png"
);
aisle1ToAisle2.position.set(-5000, -1500, -100);
// aisle1ToAisle2.addHoverText("行政大樓前");
aisle1ToAisle2.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("aisle2");
});
// 走道1往門口
aisle1ToDoor = new PANOLENS.Infospot(300, "./images/aisle1/aisle1-door.png");
aisle1ToDoor.position.set(3500, -800, 100);
// aisle1ToDoor.addHoverText("大門");
aisle1ToDoor.addEventListener("click", function () {
  changeFunction("door");
});

aisle1Image.add(aisle1ToDoor, aisle1ToAisle2);
//aisle2 ------------------------------------------------------------------------------------------------
// 走道2往行政大樓門口
aisle2ToAdministrativePorch = new PANOLENS.Infospot(
  500,
  "./images/aisle2/aisle2-administrative_porch.png"
);
aisle2ToAdministrativePorch.position.set(-5000, -1500, -100);
// aisle2ToAdministrativePorch.addHoverText("行政大樓門口");
aisle2ToAdministrativePorch.addEventListener("click", function () {
  changeFunction("administrativePorch");
});
// 走道2往走道1
aisle2ToAisle1 = new PANOLENS.Infospot(
  300,
  "./images/aisle2/aisle2-aisle1.png"
);
aisle2ToAisle1.position.set(1000, -500, 5000);
// aisle2ToAisle1.addHoverText("入口");
aisle2ToAisle1.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("aisle1");
});
// 走道2往走道3
aisle2ToAisle3 = new PANOLENS.Infospot(
  300,
  "./images/aisle2/aisle2-aisle3.png"
);
aisle2ToAisle3.position.set(200, -500, -5000);
// aisle2ToAisle3.addHoverText("走道3");
aisle2ToAisle3.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("aisle3");
});
aisle2Image.add(aisle2ToAdministrativePorch, aisle2ToAisle1, aisle2ToAisle3);
//aisle3 ------------------------------------------------------------------------------------------------
// 走道3往走道2
aisle3ToAisle2 = new PANOLENS.Infospot(
  300,
  "./images/aisle3/aisle3-aisle2.png"
);
aisle3ToAisle2.position.set(100, -500, 5000);
aisle3ToAisle2.addHoverText("走道2");
aisle3ToAisle2.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("aisle2");
});
// 走道3往走道4
aisle3ToAisle4 = new PANOLENS.Infospot(
  300,
  "./images/aisle3/aisle3-aisle4.png"
);
aisle3ToAisle4.position.set(00, -500, -5000);
// aisle3ToAisle4.addHoverText("走道4");
aisle3ToAisle4.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("aisle4");
});
aisle3Image.add(aisle3ToAisle2, aisle3ToAisle4);
//aisle4 ------------------------------------------------------------------------------------------------
// 走道4往走道3
aisle4ToAisle3 = new PANOLENS.Infospot(
  300,
  "./images/aisle4/aisle4-aisle3.png"
);
aisle4ToAisle3.position.set(-300, -500, 5000);
// aisle4ToAisle3.addHoverText("走道3");
aisle4ToAisle3.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("aisle3");
});
// 走道4往走道5
aisle4ToAisle5 = new PANOLENS.Infospot(
  300,
  "./images/aisle4/aisle4-aisle5.png"
);
aisle4ToAisle5.position.set(-300, -500, -5000);
// aisle4ToAisle5.addHoverText("走道5");
aisle4ToAisle5.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("aisle5");
});
aisle4Image.add(aisle4ToAisle3, aisle4ToAisle5);
//aisle5 ------------------------------------------------------------------------------------------------
// 走道5往走道4
aisle5ToAisle4 = new PANOLENS.Infospot(
  300,
  "./images/aisle5/aisle5-aisle4.png"
);
aisle5ToAisle4.position.set(-300, -500, -5000);
// aisle5ToAisle4.addHoverText("走道4");
aisle5ToAisle4.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("aisle4");
});
// 走道5往走道6
aisle5ToAisle6 = new PANOLENS.Infospot(
  300,
  "./images/aisle5/aisle5-aisle6.png"
);
aisle5ToAisle6.position.set(-300, -500, 5000);
// aisle5ToAisle6.addHoverText("走道6");
aisle5ToAisle6.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("aisle6");
});
aisle5Image.add(aisle5ToAisle4, aisle5ToAisle6);
//aisle6 ------------------------------------------------------------------------------------------------
// 走道6往走道5
aisle6ToAisle5 = new PANOLENS.Infospot(
  300,
  "./images/aisle6/aisle6-aisle5.png"
);
aisle6ToAisle5.position.set(-300, -500, -5000);
// aisle6ToAisle5.addHoverText("走道5");
aisle6ToAisle5.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("aisle5");
});
// 走道6往走道7
aisle6ToAisle7 = new PANOLENS.Infospot(
  300,
  "./images/aisle6/aisle6-aisle7.png"
);
aisle6ToAisle7.position.set(300, -500, 5000);
// aisle6ToAisle7.addHoverText("走道7");
aisle6ToAisle7.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("aisle7");
});
aisle6Image.add(aisle6ToAisle5, aisle6ToAisle7);
//aisle7 ------------------------------------------------------------------------------------------------
// 走道7往走道6
aisle7ToAisle6 = new PANOLENS.Infospot(
  300,
  "./images/aisle7/aisle7-aisle6.png"
);
aisle7ToAisle6.position.set(-5000, -500, -300);
// aisle7ToAisle6.addHoverText("走道6");
aisle7ToAisle6.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("aisle6");
});
// 走道7往研究發展大樓門口
aisle7ToDevelopment = new PANOLENS.Infospot(
  300,
  "./images/aisle7/aisle7-development.png"
);
aisle7ToDevelopment.position.set(-300, -1500, -5000);
// aisle7ToDevelopment.addHoverText("研究發展大樓門口");
aisle7ToDevelopment.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("development");
});
aisle7Image.add(aisle7ToDevelopment, aisle7ToAisle6);
//development ------------------------------------------------------------------------------------------------
// 走道7往走道6
developmentToAisle7 = new PANOLENS.Infospot(
  300,
  "./images/development/development-aisle7.png"
);
developmentToAisle7.position.set(300, -500, 5000);
// developmentToAisle7.addHoverText("走道6");
developmentToAisle7.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("aisle7");
});
// 研究發展大樓門口往小展示間
developmentToShowRoom = new PANOLENS.Infospot(
  500,
  "./images/development/development-show_room.png"
);
developmentToShowRoom.position.set(-7000, -1500, -1500);
// developmentToShowRoom.addHoverText("小展示間");
developmentToShowRoom.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("showRoom");
});

developmentImage.add(developmentToAisle7, developmentToShowRoom);
//show_room ------------------------------------------------------------------------------------------------
// 小展示間往研究大樓門口
showRoomToDevelopment = new PANOLENS.Infospot(
  300,
  "./images/show_room/show_room-development.png"
);
showRoomToDevelopment.position.set(800, -1000, 4000);
// showRoomToDevelopment.addHoverText("資訊大樓門口");
showRoomToDevelopment.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("development");
});

showRoomImage.add(showRoomToDevelopment);
//administrativePorch ------------------------------------------------------------------------------------------------
// 門廊到走道2
administrativePorchToAisle2 = new PANOLENS.Infospot(
  500,
  "./images/administrative_porch/administrative_porch-aisle2.png"
);
administrativePorchToAisle2.position.set(-5000, -1500, -100);
// administrativePorchToAisle2.addHoverText("走道2");
administrativePorchToAisle2.addEventListener("click", function () {
  changeFunction("aisle2");
});

// 門廊到行政大樓
administrativePorchToAdministrative = new PANOLENS.Infospot(
  500,
  "./images/administrative_porch/administrative_porch-administrative.png"
);
administrativePorchToAdministrative.position.set(7000, -1500, 300);
administrativePorchToAdministrative.addEventListener("click", function () {
  changeFunction("administrative");
});
administrativePorchImage.add(
  administrativePorchToAisle2,
  administrativePorchToAdministrative
);

//administrative ------------------------------------------------------------------------------------------------
administrativeToMeeting = new PANOLENS.Infospot(
  300,
  "./images/administrative/administrative-meeting.png"
);
administrativeToMeeting.position.set(-1150, -1200, 3500);
// administrativeToMeeting.addHoverText("會議室");
administrativeToMeeting.addEventListener("click", function () {
  changeFunction("meeting");
});

administrativeToAdministrativeDoor = new PANOLENS.Infospot(
  300,
  "./images/administrative/administrative-administrative_porch.png"
);
administrativeToAdministrativeDoor.position.set(2500, -1500, -1500);
// administrativeToAdministrativeDoor.addHoverText("行政大樓門廊");
administrativeToAdministrativeDoor.addEventListener("click", function () {
  changeFunction("administrativePorch");
});

administrativeImage.add(
  administrativeToAdministrativeDoor,
  administrativeToMeeting
);
//meeting ------------------------------------------------------------------------------------------------
meetingToAdministrative = new PANOLENS.Infospot(
  800,
  "./images/meeting/meeting-administrative.png"
);
meetingToAdministrative.position.set(4300, -1500, -7500);
// meetingToAdministrative.addHoverText("行政大樓");
meetingToAdministrative.addEventListener("click", function () {
  changeFunction("administrative");
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
  meetingToAdministrative
);

viewer.add(
  doorImage,
  aisle1Image,
  aisle2Image,
  aisle3Image,
  aisle4Image,
  aisle5Image,
  aisle6Image,
  aisle7Image,
  developmentImage,
  showRoomImage,
  administrativePorchImage,
  administrativeImage,
  meetingImage
);
var lookAtPositions = [
  new THREE.Vector3(-7000, -1500, 500), //door
  new THREE.Vector3(-5000, -500, -100), //asile2
  new THREE.Vector3(7000, -1500, 300), //administrative_porch
  new THREE.Vector3(-5000, -1500, 3500), //administrative
  new THREE.Vector3(5500, -1500, -8500), //meeting
  [new THREE.Vector3(-300, -500, -5000), new THREE.Vector3(-300, -500, 5000)], //asile3
  [new THREE.Vector3(-300, -500, -5000), new THREE.Vector3(-300, -500, 5000)], //asile4
  [new THREE.Vector3(-300, -500, 5000), new THREE.Vector3(-300, -500, -5000)], //asile5
  [new THREE.Vector3(300, -500, 5000), new THREE.Vector3(-300, -500, -5000)], //asile6
  [new THREE.Vector3(-300, -1500, -5000), new THREE.Vector3(-5000, -500, -300)], //asile7
  [new THREE.Vector3(-5000, -500, -300), new THREE.Vector3(300, -500, 5000)], //development
  [new THREE.Vector3(-5000, -1500, -100), new THREE.Vector3(3500, -800, 100)], //asile1
  new THREE.Vector3( 800, -1000, 4000), //show_room 
 
];

doorImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});

aisle1Image.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[11][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[11][1], 0);
  }
});

aisle2Image.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[1], 0);
});

aisle3Image.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[5][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[5][1], 0);
  }
});

aisle4Image.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[6][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[6][1], 0);
  }
});

aisle5Image.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[7][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[7][1], 0);
  }
});

aisle6Image.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[8][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[8][1], 0);
  }
});

aisle7Image.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[9][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[9][1], 0);
  }
});

developmentImage.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[10][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[10][1], 0);
  }
});

showRoomImage.addEventListener("enter-fade-start", function () {
    viewer.tweenControlCenter(lookAtPositions[12], 0); 
});
administrativePorchImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[2], 0);
});

administrativeImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[3], 0);
});

meetingImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[4], 0);
});

var menuBtn = document.querySelector(".menu-box__menu");
var mapBtn = document.querySelector(".menu-box__map");

var mapMenu = document.querySelector(".map-box");
var infoMenu = document.querySelector(".guide-box");
menuBtn.addEventListener("click", function () {
  infoMenu.classList.toggle("active");
  if (mapMenu.className.indexOf("active") !== -1) {
    mapMenu.classList.toggle("active");
  }
});

mapBtn.addEventListener("click", function () {
  mapMenu.classList.toggle("active");
  if (infoMenu.className.indexOf("active") !== -1) {
    infoMenu.classList.toggle("active");
  }
});
