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

const bShowRoom1Image = new PANOLENS.ImagePanorama(
  "images/b_show_room/b_show1.jpg"
);
const bShowRoom2Image = new PANOLENS.ImagePanorama(
  "images/b_show_room/b_show2.jpg"
);
const bShowRoom3Image = new PANOLENS.ImagePanorama(
  "images/b_show_room/b_show3.jpg"
);
const bShowRoom4Image = new PANOLENS.ImagePanorama(
  "images/b_show_room/b_show4.jpg"
);
const bShowRoom5Image = new PANOLENS.ImagePanorama(
  "images/b_show_room/b_show5.jpg"
);
const bShowRoom6Image = new PANOLENS.ImagePanorama(
  "images/b_show_room/b_show6.jpg"
);
const bShowRoom7Image = new PANOLENS.ImagePanorama(
  "images/b_show_room/b_show7.jpg"
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
  meetingArrow;
  
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
//大展示間1資訊
TopInfo = new PANOLENS.Infospot(350);
TopInfo.position.set(-5500, 1000, 0);
TopInfo.addHoverText("光電類");

MidInfo = new PANOLENS.Infospot(350);
MidInfo.position.set(-5500, -3000, 0);
MidInfo.addHoverText("光電產業");

ledTopInfo = new PANOLENS.Infospot(350);
ledTopInfo.position.set(-5500, 1000, 0);
ledTopInfo.addHoverText("光電類");
ledbacklightInfo = new PANOLENS.Infospot(350);
ledbacklightInfo.position.set(-5500, -5200, 0);
ledbacklightInfo.addHoverText("LCD 背光");
ITOInfo = new PANOLENS.Infospot(350);
ITOInfo.position.set(-5500, -3000, -1300);
ITOInfo.addHoverText("ITO");
let lookCheck = true;
// 大展示間2資訊
ledHeadLightsInfo = new PANOLENS.Infospot(350);
ledHeadLightsInfo.position.set(3300, -400, 4000);
ledHeadLightsInfo.addHoverText("LED車燈灌注密封應用");

showRoom2Info2 = new PANOLENS.Infospot(350);
showRoom2Info2.position.set(3300, -1500, -1500);
showRoom2Info2.addHoverText("5");

showRoom2Info3 = new PANOLENS.Infospot(350);
showRoom2Info3.position.set(1050, -1500, -5250);
showRoom2Info3.addHoverText("6");
// vibratorInfo = new PANOLENS.Infospot(350);
// vibratorInfo.position.set(3300, -1500, -1500);
// vibratorInfo.addHoverText("超音波震動器應用");

// microMotorInfo = new PANOLENS.Infospot(350);
// microMotorInfo.position.set(3100, -1600, -2300);
// microMotorInfo.addHoverText("微型馬達接著應用");
// 大展示間3資訊
showRomm3Info1 = new PANOLENS.Infospot(350);
showRomm3Info1.position.set(2500, -1300, -2800);
showRomm3Info1.addHoverText("7");

showRomm3Info2 = new PANOLENS.Infospot(350);
showRomm3Info2.position.set(3000, -1300, 500);
showRomm3Info2.addHoverText("8");
// solarEnergyInfo = new PANOLENS.Infospot(350);
// solarEnergyInfo.position.set(-3300, -900, 2800);
// solarEnergyInfo.addHoverText("太陽能電池模組防水密封應用");

// fuelCellInfo = new PANOLENS.Infospot(350);
// fuelCellInfo.position.set(-4200, -900, -500);
// fuelCellInfo.addHoverText("燃料電池密封應用");
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
aisle3ToAisle4.position.set(0, -500, -5000);
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
//研究大樓 ------------------------------------------------------------------------------------------------
// 研究大樓往走道7
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
// 研究發展大樓門口往大展示間
developmentToBShowRoom = new PANOLENS.Infospot(
  480,
  "./images/development/development-b_show_room.png"
);
developmentToBShowRoom.position.set(-7000, -1465, 1000);
// developmentToBShowRoom.addHoverText("大展示間");
developmentToBShowRoom.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("bshowRoom1");
});
developmentImage.add(
  developmentToAisle7,
  developmentToShowRoom,
  developmentToBShowRoom
);
//小展示間 ------------------------------------------------------------------------------------------------
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
//大展示間1 ------------------------------------------------------------------------------------------------
// 大展示間1往大展示間2
bShowRoom1ToBShowRoom2 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show1-b_show2.png"
);
bShowRoom1ToBShowRoom2.position.set(800, -1000, 4000);
// bShowRoom1ToBShowRoom2.addHoverText("資訊大樓門口");
bShowRoom1ToBShowRoom2.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("bshowRoom2");
});
console.log(
  "bShowRoom1ToBShowRoom2",
  Object.values(bShowRoom1ToBShowRoom2.position).toString()
);
// 大展示間1往大展示間7
bShowRoom1ToBShowRoom7 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show1-b_show7.png"
);
bShowRoom1ToBShowRoom7.position.set(5000, -1000, -1000);
// bShowRoom1ToBShowRoom7.addHoverText("資訊大樓門口");
bShowRoom1ToBShowRoom7.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("bshowRoom7");
});
// 大展示間1往研究大樓
bShowRoom1ToDevelopment = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show1-development.png"
);
bShowRoom1ToDevelopment.position.set(-1000, -1000, -4000);
// bShowRoom1ToDevelopment.addHoverText("資訊大樓門口");
bShowRoom1ToDevelopment.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("development");
});

bShowRoom1Image.add(
  bShowRoom1ToBShowRoom2,
  bShowRoom1ToBShowRoom7,
  bShowRoom1ToDevelopment
);
//大展示間2 ------------------------------------------------------------------------------------------------
// 大展示間2往大展示間3
bShowRoom2ToBShowRoom3 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show2-b_show3.png"
);
bShowRoom2ToBShowRoom3.position.set(-2200, -1000, -4000);
// bShowRoom2ToBShowRoom3.addHoverText("資訊大樓門口");
bShowRoom2ToBShowRoom3.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("bshowRoom3");
});
// 大展示間2往大展示間1
bShowRoom2ToBShowRoom1 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show2-b_show1.png"
);
bShowRoom2ToBShowRoom1.position.set(-1800, -1000, 1500);
// bShowRoom2ToBShowRoom1.addHoverText("資訊大樓門口");
bShowRoom2ToBShowRoom1.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("bshowRoom1");
});
bShowRoom2Image.add(bShowRoom2ToBShowRoom3, bShowRoom2ToBShowRoom1);
//大展示間3 ------------------------------------------------------------------------------------------------
// 大展示間3往大展示間4
bShowRoom3ToBShowRoom4 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show3-b_show4.png"
);
bShowRoom3ToBShowRoom4.position.set(1800, -1000, 4000);
// bShowRoom3ToBShowRoom4.addHoverText("資訊大樓門口");
bShowRoom3ToBShowRoom4.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("bshowRoom4");
});
// 大展示間3往大展示間2
bShowRoom3ToBShowRoom2 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show3-b_show2.png"
);
bShowRoom3ToBShowRoom2.position.set(-1800, -1000, -4000);
// bShowRoom3ToBShowRoom2.addHoverText("資訊大樓門口");
bShowRoom3ToBShowRoom2.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("bshowRoom2");
});
bShowRoom3Image.add(bShowRoom3ToBShowRoom4, bShowRoom3ToBShowRoom2);
//大展示間4 ------------------------------------------------------------------------------------------------
// 大展示間4往大展示間5
bShowRoom4ToBShowRoom5 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show4-b_show5.png"
);
bShowRoom4ToBShowRoom5.position.set(0, -1000, 4000);
// bShowRoom4ToBShowRoom5.addHoverText("資訊大樓門口");
bShowRoom4ToBShowRoom5.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("bshowRoom5");
});
// 大展示間4往大展示間3
bShowRoom4ToBShowRoom3 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show4-b_show3.png"
);
bShowRoom4ToBShowRoom3.position.set(0, -1000, -4000);
// bShowRoom4ToBShowRoom3.addHoverText("大展示間4往大展示間3");
bShowRoom4ToBShowRoom3.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("bshowRoom3");
});
bShowRoom4Image.add(bShowRoom4ToBShowRoom5, bShowRoom4ToBShowRoom3);
//大展示間5 ------------------------------------------------------------------------------------------------
// 大展示間5往大展示間6
bShowRoom5ToBShowRoom6 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show5-b_show6.png"
);
bShowRoom5ToBShowRoom6.position.set(3000, -2000, 4000);
// bShowRoom5ToBShowRoom6.addHoverText("資訊大樓門口");
bShowRoom5ToBShowRoom6.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("bshowRoom6");
});
// 大展示間5往大展示間4
bShowRoom5ToBShowRoom4 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show5-b_show4.png"
);
bShowRoom5ToBShowRoom4.position.set(4000, -2000, -4000);
// bShowRoom5ToBShowRoom4.addHoverText("資訊大樓門口");
bShowRoom5ToBShowRoom4.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("bshowRoom4");
});
bShowRoom5Image.add(bShowRoom5ToBShowRoom6, bShowRoom5ToBShowRoom4);
//大展示間6 ------------------------------------------------------------------------------------------------
// 大展示間6往大展示間7
bShowRoom6ToBShowRoom7 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show6-b_show7.png"
);
bShowRoom6ToBShowRoom7.position.set(-1000, -2000, -4000);
// bShowRoom6ToBShowRoom7.addHoverText("資訊大樓門口");
bShowRoom6ToBShowRoom7.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("bshowRoom7");
});
// 大展示間6往大展示間5
bShowRoom6ToBShowRoom5 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show6-b_show5.png"
);
bShowRoom6ToBShowRoom5.position.set(-5000, -1000, 2000);
// bShowRoom6ToBShowRoom5.addHoverText("資訊大樓門口");
bShowRoom6ToBShowRoom5.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("bshowRoom5");
});
bShowRoom6Image.add(bShowRoom6ToBShowRoom7, bShowRoom6ToBShowRoom5);
//大展示間7 ------------------------------------------------------------------------------------------------
// 大展示間7往大展示間1
bShowRoom7ToBShowRoom1 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show7-b_show1.png"
);
bShowRoom7ToBShowRoom1.position.set(0, -2000, 4000);
// bShowRoom7ToBShowRoom1.addHoverText("資訊大樓門口");
bShowRoom7ToBShowRoom1.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("bshowRoom1");
});
// 大展示間7往大展示間6
bShowRoom7ToBShowRoom6 = new PANOLENS.Infospot(
  300,
  "./images/b_show_room/b_show7-b_show6.png"
);
bShowRoom7ToBShowRoom6.position.set(0, -2000, -4000);
// bShowRoom7ToBShowRoom6.addHoverText("資訊大樓門口");
bShowRoom7ToBShowRoom6.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("bshowRoom6");
});
bShowRoom7Image.add(bShowRoom7ToBShowRoom1, bShowRoom7ToBShowRoom6);
//會議大樓門廊 ------------------------------------------------------------------------------------------------
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

// 行政大樓 ------------------------------------------------------------------------------------------------
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
//會議室 ------------------------------------------------------------------------------------------------
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
// ledTopInfo,
//   ledbacklightInfo,
//   ITOInfo
bShowRoom1Image.add(
  TopInfo,
  MidInfo
)
// vibratorInfo,
// microMotorInfo
bShowRoom2Image.add(
  ledHeadLightsInfo,
  showRoom2Info2,
  showRoom2Info3
)
// solarEnergyInfo,
// fuelCellInfo
bShowRoom3Image.add(
  showRomm3Info1,
  showRomm3Info2
 
)
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
  bShowRoom1Image,
  bShowRoom2Image,
  bShowRoom3Image,
  bShowRoom4Image,
  bShowRoom5Image,
  bShowRoom6Image,
  bShowRoom7Image,
  administrativePorchImage,
  administrativeImage,
  meetingImage
);
var lookAtPositions = [
  new THREE.Vector3(
    doorToAdministrativeArrow.position.x,
    doorToAdministrativeArrow.position.y,
    doorToAdministrativeArrow.position.z
  ), //door
  new THREE.Vector3(
    aisle2ToAdministrativePorch.position.x,
    aisle2ToAdministrativePorch.position.y,
    aisle2ToAdministrativePorch.position.z
  ), //asile2
  new THREE.Vector3(7000, -1500, 300), //administrative_porch
  new THREE.Vector3(-5000, -1500, 3500), //administrative
  new THREE.Vector3(5500, -1500, -8500), //meeting
  [
    new THREE.Vector3(
      aisle3ToAisle4.position.x,
      aisle3ToAisle4.position.y,
      aisle3ToAisle4.position.z
    ),
    new THREE.Vector3(
      aisle3ToAisle2.position.x,
      aisle3ToAisle2.position.y,
      aisle3ToAisle2.position.z
    ),
  ], //asile3
  [
    new THREE.Vector3(
      aisle4ToAisle5.position.x,
      aisle4ToAisle5.position.y,
      aisle4ToAisle5.position.z
    ),
    new THREE.Vector3(
      aisle4ToAisle3.position.x,
      aisle4ToAisle3.position.y,
      aisle4ToAisle3.position.z
    ),
  ], //asile4
  [
    new THREE.Vector3(
      aisle5ToAisle6.position.x,
      aisle5ToAisle6.position.y,
      aisle5ToAisle6.position.z
    ),
    new THREE.Vector3(
      aisle5ToAisle4.position.x,
      aisle5ToAisle4.position.y,
      aisle5ToAisle4.position.z
    ),
  ], //asile5
  [
    new THREE.Vector3(
      aisle6ToAisle7.position.x,
      aisle6ToAisle7.position.y,
      aisle6ToAisle7.position.z
    ),
    new THREE.Vector3(
      aisle6ToAisle5.position.x,
      aisle6ToAisle5.position.y,
      aisle6ToAisle5.position.z
    ),
  ], //asile6
  [
    new THREE.Vector3(
      aisle7ToDevelopment.position.x,
      aisle7ToDevelopment.position.y,
      aisle7ToDevelopment.position.z
    ),
    new THREE.Vector3(
      aisle7ToAisle6.position.x,
      aisle7ToAisle6.position.y,
      aisle7ToAisle6.position.z
    ),
  ], //asile7
  [
    new THREE.Vector3(-5000, -500, -300),
    new THREE.Vector3(
      developmentToAisle7.position.x,
      developmentToAisle7.position.y,
      developmentToAisle7.position.z
    ),
  ], //development
  [
    new THREE.Vector3(
      aisle1ToAisle2.position.x,
      aisle1ToAisle2.position.y,
      aisle1ToAisle2.position.z
    ),
    new THREE.Vector3(
      aisle1ToDoor.position.x,
      aisle1ToDoor.position.y,
      aisle1ToDoor.position.z
    ),
  ], //asile1
  new THREE.Vector3(800, -1000, 4000), //show_room
];
var lookAtShowRoom = [
  [
    new THREE.Vector3(
      bShowRoom1ToBShowRoom2.position.x,
      bShowRoom1ToBShowRoom2.position.y,
      bShowRoom1ToBShowRoom2.position.z
    ),
    new THREE.Vector3(
      bShowRoom1ToDevelopment.position.x,
      bShowRoom1ToDevelopment.position.y,
      bShowRoom1ToDevelopment.position.z
    ),
  ], //b_show_room1
  [
    new THREE.Vector3(
      bShowRoom2ToBShowRoom3.position.x,
      bShowRoom2ToBShowRoom3.position.y,
      bShowRoom2ToBShowRoom3.position.z
    ),
    new THREE.Vector3(
      bShowRoom2ToBShowRoom1.position.x,
      bShowRoom2ToBShowRoom1.position.y,
      bShowRoom2ToBShowRoom1.position.z
    ),
  ], //b_show_room2
  [
    new THREE.Vector3(
      bShowRoom3ToBShowRoom4.position.x,
      bShowRoom3ToBShowRoom4.position.y,
      bShowRoom3ToBShowRoom4.position.z
    ),
    new THREE.Vector3(
      bShowRoom3ToBShowRoom2.position.x,
      bShowRoom3ToBShowRoom2.position.y,
      bShowRoom3ToBShowRoom2.position.z
    ),
  ], //b_show_room3
  [
    new THREE.Vector3(
      bShowRoom4ToBShowRoom5.position.x,
      bShowRoom4ToBShowRoom5.position.y,
      bShowRoom4ToBShowRoom5.position.z
    ),
    new THREE.Vector3(
      bShowRoom4ToBShowRoom3.position.x,
      bShowRoom4ToBShowRoom3.position.y,
      bShowRoom4ToBShowRoom3.position.z
    ),
  ], //b_show_room4
  [
    new THREE.Vector3(
      bShowRoom5ToBShowRoom6.position.x,
      bShowRoom5ToBShowRoom6.position.y,
      bShowRoom5ToBShowRoom6.position.z
    ),
    new THREE.Vector3(
      bShowRoom5ToBShowRoom4.position.x,
      bShowRoom5ToBShowRoom4.position.y,
      bShowRoom5ToBShowRoom4.position.z
    ),
  ], //b_show_room5
  [
    new THREE.Vector3(
      bShowRoom6ToBShowRoom7.position.x,
      bShowRoom6ToBShowRoom7.position.y,
      bShowRoom6ToBShowRoom7.position.z
    ),
    new THREE.Vector3(
      bShowRoom6ToBShowRoom5.position.x,
      bShowRoom6ToBShowRoom5.position.y,
      bShowRoom6ToBShowRoom5.position.z
    ),
  ], //b_show_room6
  [
    new THREE.Vector3(
      bShowRoom7ToBShowRoom1.position.x,
      bShowRoom7ToBShowRoom1.position.y,
      bShowRoom7ToBShowRoom1.position.z
    ),
    new THREE.Vector3(
      bShowRoom7ToBShowRoom6.position.x,
      bShowRoom7ToBShowRoom6.position.y,
      bShowRoom7ToBShowRoom6.position.z
    ),
  ], //b_show_room7
];
function focusBShowRoom(key, index) {
  switch (key) {
    case true:
      viewer.tweenControlCenter(lookAtShowRoom[index][0], 0);
      break;
    case false:
      viewer.tweenControlCenter(lookAtShowRoom[index][1], 0);
      break;
    default:
      break;
  }
}

bShowRoom1Image.addEventListener("enter-fade-start", function () {
  focusBShowRoom(lookCheck, 0);
});
bShowRoom2Image.addEventListener("enter-fade-start", function () {
  focusBShowRoom(lookCheck, 1);
});
bShowRoom3Image.addEventListener("enter-fade-start", function () {
  focusBShowRoom(lookCheck, 2);
});
bShowRoom4Image.addEventListener("enter-fade-start", function () {
  focusBShowRoom(lookCheck, 3);
});
bShowRoom5Image.addEventListener("enter-fade-start", function () {
  focusBShowRoom(lookCheck, 4);
});
bShowRoom6Image.addEventListener("enter-fade-start", function () {
  focusBShowRoom(lookCheck, 5);
});
bShowRoom7Image.addEventListener("enter-fade-start", function () {
  focusBShowRoom(lookCheck, 6);
});
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
