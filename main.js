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
const developmentDoorImage = new PANOLENS.ImagePanorama(
  "images/developmentDoor/developmentDoor.jpg"
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

const administrativePorchImage = new PANOLENS.ImagePanorama(
  "images/administrative_porch/administrative_porch.jpg"
);
const administrativeImage = new PANOLENS.ImagePanorama(
  "images/administrative/administrative.jpg"
);

const storehouse8Image = new PANOLENS.ImagePanorama("images/storehouse/8.jpg");
const storehouse7Image = new PANOLENS.ImagePanorama("images/storehouse/7.jpg");
const storehouse6Image = new PANOLENS.ImagePanorama("images/storehouse/6.jpg");
const storehouse5Image = new PANOLENS.ImagePanorama("images/storehouse/5.jpg");
const storehouse4Image = new PANOLENS.ImagePanorama("images/storehouse/4.jpg");
const storehouse3Image = new PANOLENS.ImagePanorama("images/storehouse/3.jpg");
const storehouse2Image = new PANOLENS.ImagePanorama("images/storehouse/2.jpg");
const storehouse1Image = new PANOLENS.ImagePanorama("images/storehouse/1.jpg");

const storehouse2F1Image = new PANOLENS.ImagePanorama(
  "images/storehouse2F/1.jpg"
);

const meetingImage = new PANOLENS.ImagePanorama("images/meeting/meeting.jpg");

const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  // autoRotateSpeed: 0.3,
  controlBar: false,
  passiveRendering: true,
  autoHideControlBar: false,
  autoHideInfospot: false,
  cameraFov: 70,
});

// var parent = new THREE.Object3D();
// viewer.add( parent );

// var direction = new THREE.Vector3( 0, 0, -1 );
// var origin = new THREE.Vector3( 1, 0, 0 );
// var length = 1;
// var color = 0xff0000;

// var arrowHelper = new THREE.ArrowHelper( direction, origin, length, color );
// parent.add( arrowHelper );

// viewer.addEventListener( 'panolens-viewer-handler', function ( event ) {
//   console.log('event.position',event.position);
//   console.log('event.quaternion',event.quaternion);
// } );

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

bikeInfo = new PANOLENS.Infospot(500);
bikeInfo.position.set(-5100, -1800, -3800);
bikeInfo.addHoverText("自行車資訊");
bikeInfo.addEventListener("click", function () {
  btnFunction(1, false);
  bikeInfo.focus();
});

motorInfo = new PANOLENS.Infospot(500);
motorInfo.position.set(-5200, -1800, -1300);
motorInfo.addHoverText("電動汽車馬達資訊");
motorInfo.addEventListener("click", function () {
  btnFunction(2, false);
  motorInfo.focus();
});

ledInfo = new PANOLENS.Infospot(500);
ledInfo.position.set(-5200, -1800, 1400);
ledInfo.addHoverText("LDE車燈應用資訊");
ledInfo.addEventListener("click", function () {
  btnFunction(3, false);
  ledInfo.focus();
});

medicalInfo = new PANOLENS.Infospot(525);
medicalInfo.position.set(-5200, -1800, 4100);
medicalInfo.addHoverText("醫療接著膠材資訊");
medicalInfo.addEventListener("click", function () {
  btnFunction(4, false);
  medicalInfo.focus();
});

tireInfo = new PANOLENS.Infospot(600);
tireInfo.position.set(-5200, -1800, 6600);
tireInfo.addHoverText("胎壓偵測系統資訊");
tireInfo.addEventListener("click", function () {
  btnFunction(5, false);
  tireInfo.focus();
});

miniLedInfo = new PANOLENS.Infospot(500);
miniLedInfo.position.set(5800, -1800, 5950);
miniLedInfo.addHoverText("MINI LED資訊");
miniLedInfo.addEventListener("click", function () {
  btnFunction(6, false);
  miniLedInfo.focus();
});

electricInfo = new PANOLENS.Infospot(500);
electricInfo.position.set(5600, -1800, 3450);
electricInfo.addHoverText("電桿應用資訊");
electricInfo.addEventListener("click", function () {
  btnFunction(7, false);
  electricInfo.focus();
});

speakerInfo = new PANOLENS.Infospot(500);
speakerInfo.position.set(5400, -1800, 900);
speakerInfo.addHoverText("微型揚聲器(聲學產業)資訊");
speakerInfo.addEventListener("click", function () {
  btnFunction(8, false);
  speakerInfo.focus();
});

lensInfo = new PANOLENS.Infospot(500);
lensInfo.position.set(5200, -1800, -1600);
lensInfo.addHoverText("光學鏡頭資訊");
lensInfo.addEventListener("click", function () {
  btnFunction(9, false);
  lensInfo.focus();
});

communicationInfo = new PANOLENS.Infospot(500);
communicationInfo.position.set(5000, -1800, -4050);
communicationInfo.addHoverText("5G-光通訊-光通訊資訊");
communicationInfo.addEventListener("click", function () {
  btnFunction(10, false);
  communicationInfo.focus();
});
//大展示間1資訊
TopInfo = new PANOLENS.Infospot(550);
TopInfo.position.set(-3500, 0, -4500);
TopInfo.addHoverText("光電類");
TopInfo.addEventListener("click", function () {
  btnFunction("show1", false);
  TopInfo.focus();
});

MidInfo = new PANOLENS.Infospot(550);
MidInfo.position.set(-3500, -3000, -4500);
MidInfo.addHoverText("光電產業");
MidInfo.addEventListener("click", function () {
  btnFunction("show2", false);
  MidInfo.focus();
});
let lookCheck = true;
// 大展示間2資訊
showRoom2Info1 = new PANOLENS.Infospot(350);
showRoom2Info1.position.set(0, -400, -4000);
// showRoom2Info1.addHoverText("LED車燈灌注密封應用");
showRoom2Info1.addEventListener("click", function () {
  btnFunction("show4", false);
  showRoom2Info1.focus();
});

showRoom2Info2 = new PANOLENS.Infospot(450);
showRoom2Info2.position.set(-2600, -1500, 1100);
// showRoom2Info2.addHoverText("5");
showRoom2Info2.addEventListener("click", function () {
  btnFunction("show5", false);
  showRoom2Info2.focus();
});

showRoom2Info3 = new PANOLENS.Infospot(450);
showRoom2Info3.position.set(-2450, -1500, -1650);
// showRoom2Info3.addHoverText("6");
showRoom2Info3.addEventListener("click", function () {
  btnFunction("show6", false);
  showRoom2Info3.focus();
});
showRoom2Info4 = new PANOLENS.Infospot(350);
showRoom2Info4.position.set(2500, -500, -50);
// showRoom2Info4.addHoverText("7");
showRoom2Info4.addEventListener("click", function () {
  btnFunction("show7", false);
  showRoom2Info4.focus();
});

showRoom2Info5 = new PANOLENS.Infospot(450);
showRoom2Info5.position.set(3300, -800, 3000);
// showRoom2Info5.addHoverText("8");
showRoom2Info5.addEventListener("click", function () {
  btnFunction("show8", false);
  showRoom2Info5.focus();
});
// 大展示間3資訊
showRoom3Info1 = new PANOLENS.Infospot(350);
showRoom3Info1.position.set(-2800, -1300, -1800);
// showRoom3Info1.addHoverText("10");
showRoom3Info1.addEventListener("click", function () {
  btnFunction("show10", false);
  showRoom3Info1.focus();
});

showRoom3Info2 = new PANOLENS.Infospot(350);
showRoom3Info2.position.set(-3000, -1300, 2000);
// showRoom3Info2.addHoverText("11");
showRoom3Info2.addEventListener("click", function () {
  btnFunction("show11", false);
  showRoom3Info2.focus();
});

// 大展示間4資訊
showRoom4Info1 = new PANOLENS.Infospot(350);
showRoom4Info1.position.set(-1000, -1000, -2000);
// showRoom4Info1.addHoverText("12");
showRoom4Info1.addEventListener("click", function () {
  btnFunction("show12", false);
  showRoom4Info1.focus();
});

// 大展示間5資訊
showRoom5Info1 = new PANOLENS.Infospot(350);
showRoom5Info1.position.set(2000, -600, 2500);
showRoom5Info1.addHoverText("14");
showRoom5Info1.addEventListener("click", function () {
  btnFunction("show14", false);
  showRoom5Info1.focus();
});

showRoom5Info2 = new PANOLENS.Infospot(450);
showRoom5Info2.position.set(3500, -800, -500);
showRoom5Info2.addHoverText("15");
showRoom5Info2.addEventListener("click", function () {
  btnFunction("show15", false);
  showRoom5Info2.focus();
});

showRoom5Info3 = new PANOLENS.Infospot(350);
showRoom5Info3.position.set(-2000, -1000, -1000);
showRoom5Info3.addHoverText("17");
showRoom5Info3.addEventListener("click", function () {
  btnFunction("show17", false);
  showRoom5Info3.focus();
});

// 大展示間6資訊
showRoom6Info1 = new PANOLENS.Infospot(350);
showRoom6Info1.position.set(2500, -1000, 1000);
// showRoom6Info1.addHoverText("18");
showRoom6Info1.addEventListener("click", function () {
  btnFunction("show18", false);
  showRoom6Info1.focus();
});

//設置箭頭的function
function arrowSetting(arrowName, x, y, z, hoverText, check, changeSite) {
  arrowName.position.set(x, y, z);
  arrowName.addHoverText(hoverText, 80, 50);
  arrowName.addEventListener("click", function () {
    lookCheck = check;
    changeFunction(changeSite);
  });
}

//door
doorToAdministrativeArrow = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(doorToAdministrativeArrow, -7000, -1500, 500, "", true, "aisle1");

doorImage.add(doorToAdministrativeArrow);
//aisle1 ------------------------------------------------------------------------------------------------
// 走道1往走道2
aisle1ToAisle2 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle1ToAisle2, -5000, -1500, -100, "", true, "aisle2");

// 走道1往門口
aisle1ToDoor = new PANOLENS.Infospot(300, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle1ToDoor, 3500, -800, 100, "", true, "door");

aisle1Image.add(aisle1ToDoor, aisle1ToAisle2);
//aisle2 ------------------------------------------------------------------------------------------------
// 走道2往行政大樓門口
aisle2ToAdministrativePorch = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  aisle2ToAdministrativePorch,
  -5000,
  0,
  -100,
  "",
  true,
  "administrativePorch"
);

// 走道2往走道1
aisle2ToAisle1 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle2ToAisle1, 1000, -500, 5000, "", false, "aisle1");

// 走道2往走道3
aisle2ToAisle3 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle2ToAisle3, 200, -500, -5000, "", true, "aisle3");

aisle2Image.add(aisle2ToAdministrativePorch, aisle2ToAisle1, aisle2ToAisle3);
//aisle3 ------------------------------------------------------------------------------------------------
// 走道3往走道2
aisle3ToAisle2 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle3ToAisle2, 100, -500, 5000, "", false, "aisle2");

// 走道3往走道4
aisle3ToAisle4 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle3ToAisle4, 0, -500, -5000, "", true, "aisle4");

aisle3Image.add(aisle3ToAisle2, aisle3ToAisle4);
//aisle4 ------------------------------------------------------------------------------------------------
// 走道4往走道3
aisle4ToAisle3 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle4ToAisle3, -300, -500, 5000, "", false, "aisle3");

// 走道4往走道5
aisle4ToAisle5 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle4ToAisle5, -300, -500, -5000, "", true, "aisle5");

aisle4Image.add(aisle4ToAisle3, aisle4ToAisle5);
//aisle5 ------------------------------------------------------------------------------------------------
// 走道5往走道4
aisle5ToAisle4 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle5ToAisle4, -300, -500, -5000, "", false, "aisle4");

// 走道5往走道6
aisle5ToAisle6 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle5ToAisle6, -300, -500, 5000, "", true, "aisle6");

aisle5Image.add(aisle5ToAisle4, aisle5ToAisle6);
//aisle6 ------------------------------------------------------------------------------------------------
// 走道6往走道5
aisle6ToAisle5 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle6ToAisle5, -300, -500, -5000, "", false, "aisle5");

// 走道6往走道7
aisle6ToAisle7 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle6ToAisle7, 300, -500, 5000, "", true, "aisle7");

aisle6Image.add(aisle6ToAisle5, aisle6ToAisle7);
//aisle7 ------------------------------------------------------------------------------------------------
// 走道7往走道6
aisle7ToAisle6 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(aisle7ToAisle6, -5000, -500, -300, "", false, "aisle6");

// 走道7往研究發展大樓門口
aisle7TodevelopmentDoor = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  aisle7TodevelopmentDoor,
  -300,
  -1500,
  -5000,
  "",
  true,
  "developmentDoor"
);

aisle7Image.add(aisle7TodevelopmentDoor, aisle7ToAisle6);
//研究大樓門口 ------------------------------------------------------------------------------------------------
// 研究大樓門口往走道7
developmentDoorToAisle7 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(developmentDoorToAisle7, 300, -500, 5000, "", false, "aisle7");

// 研究發展大樓門口往研究發展大樓
developmentDoorTodevelopment = new PANOLENS.Infospot(
  900,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  developmentDoorTodevelopment,
  -7000,
  -1500,
  -250,
  "",
  true,
  "development"
);

developmentDoorImage.add(developmentDoorToAisle7, developmentDoorTodevelopment);
// 研究大樓 ------------------------------------------------------------------
// 研究大樓往研究大樓門口
developmentToDevelopmentDoor = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  developmentToDevelopmentDoor,
  100,
  -500,
  4000,
  "",
  false,
  "developmentDoor"
);

// 研究大樓往小展示間
developmentToshowRoom = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(developmentToshowRoom, 2000, -500, -1600, "", false, "showRoom");

// 研究大樓往大展示間
developmentToBshowRoom = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  developmentToBshowRoom,
  -2500,
  -500,
  -5000,
  "",
  true,
  "bshowRoom1"
);

// 研究大樓往倉庫8
developmentToStorehouse8 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  developmentToStorehouse8,
  200,
  -500,
  -5000,
  "",
  true,
  "storehouse8"
);

// 研究大樓往倉庫二樓
developmentToStorehouse2F1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.LeftFrontArrow
);
arrowSetting(
  developmentToStorehouse2F1,
  200,
  300,
  -5000,
  "",
  true,
  "storehouse2F1"
);

developmentImage.add(
  developmentToDevelopmentDoor,
  developmentToshowRoom,
  developmentToBshowRoom,
  developmentToStorehouse8,
  developmentToStorehouse2F1
);
//倉庫8-------------------------------------------------------------------------
//倉庫8往倉庫7
storehouse8toStorhouse7 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse8toStorhouse7,
  -100,
  -500,
  -5000,
  "",
  true,
  "storehouse7"
);

//倉庫8往研究大樓
storehouse8toDevelopment = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.LeftFrontArrow
);
arrowSetting(
  storehouse8toDevelopment,
  4000,
  -500,
  2500,
  "研究大樓",
  false,
  "development"
);

//倉庫8往倉庫二樓
storehouse8toStorehouse2F1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.RightFrontArrow
);
arrowSetting(
  storehouse8toStorehouse2F1,
  4000,
  -500,
  1800,
  "二樓",
  true,
  "storehouse2F1"
);

storehouse8Image.add(
  storehouse8toStorhouse7,
  storehouse8toDevelopment,
  storehouse8toStorehouse2F1
);
//倉庫7-------------------------------------------------------------------------
//倉庫7往倉庫8
storehouse7toStorhouse8 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse7toStorhouse8,
  -100,
  -500,
  -5000,
  "",
  false,
  "storehouse8"
);

//倉庫7往倉庫6
storehouse7toStorhouse6 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse7toStorhouse6,
  -100,
  -500,
  5000,
  "",
  true,
  "storehouse6"
);

storehouse7Image.add(storehouse7toStorhouse8, storehouse7toStorhouse6);
//倉庫6-------------------------------------------------------------------------
//倉庫6往倉庫7
storehouse6toStorhouse7 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse6toStorhouse7,
  -200,
  -500,
  -5000,
  "",
  false,
  "storehouse7"
);

//倉庫6往倉庫5
storehouse6toStorhouse5 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(storehouse6toStorhouse5, 0, -500, 5000, "", true, "storehouse5");

storehouse6Image.add(storehouse6toStorhouse5, storehouse6toStorhouse7);

//倉庫5-------------------------------------------------------------------------
//倉庫5往倉庫6
storehouse5toStorhouse6 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse5toStorhouse6,
  1500,
  -500,
  -5000,
  "",
  false,
  "storehouse6"
);

//倉庫5往倉庫4
storehouse5toStorhouse4 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse5toStorhouse4,
  -1500,
  -500,
  5000,
  "",
  true,
  "storehouse4"
);

storehouse5Image.add(storehouse5toStorhouse6, storehouse5toStorhouse4);

//倉庫4-------------------------------------------------------------------------
//倉庫4往倉庫5
storehouse4toStorhouse5 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse4toStorhouse5,
  -250,
  -500,
  -5000,
  "",
  false,
  "storehouse5"
);

//倉庫4往倉庫3
storehouse4toStorhouse3 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(storehouse4toStorhouse3, 250, -500, 5000, "", true, "storehouse3");

storehouse4Image.add(storehouse4toStorhouse5, storehouse4toStorhouse3);

//倉庫3-------------------------------------------------------------------------
//倉庫3往倉庫4
storehouse3toStorhouse4 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3toStorhouse4,
  450,
  -500,
  5000,
  "",
  false,
  "storehouse4"
);

//倉庫3往倉庫2
storehouse3toStorhouse2 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  storehouse3toStorhouse2,
  -2500,
  -500,
  -2000,
  "",
  true,
  "storehouse2"
);

storehouse3Image.add(storehouse3toStorhouse4, storehouse3toStorhouse2);

//倉庫2-------------------------------------------------------------------------
//倉庫2往倉庫3
storehouse2toStorhouse3 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2toStorhouse3,
  3500,
  -500,
  300,
  "",
  false,
  "storehouse3"
);

//倉庫2往倉庫1
storehouse2toStorhouse1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2toStorhouse1,
  450,
  -500,
  -5000,
  "",
  true,
  "storehouse1"
);

storehouse2Image.add(storehouse2toStorhouse3, storehouse2toStorhouse1);

//倉庫1-------------------------------------------------------------------------
//倉庫1往倉庫2
storehouse1toStorhouse2 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  storehouse1toStorhouse2,
  -2750,
  -500,
  -2500,
  "",
  false,
  "storehouse2"
);

//倉庫1往走道3
// storehouse1toAisle3 = new PANOLENS.Infospot(600, PANOLENS.DataImage.RightArrow);
// storehouse1toAisle3.position.set(0, -500, -5000);
// storehouse1toAisle3.addEventListener("click", function () {
//   lookCheck = false;
//   changeFunction("aisle3");
// });
storehouse1Image.add(storehouse1toStorhouse2);

//小展示間 ------------------------------------------------------------------------------------------------
// 小展示間往研究大樓門口
showRoomToDevelopment = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  showRoomToDevelopment,
  800,
  -1000,
  4000,
  "",
  "fromShowRoom",
  "development"
);

showRoomImage.add(showRoomToDevelopment);
//大展示間1 ------------------------------------------------------------------------------------------------
// 大展示間1往大展示間2
bShowRoom1ToBShowRoom2 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(bShowRoom1ToBShowRoom2, 5000, -1000, 800, "", true, "bshowRoom2");

// 大展示間1往研究大樓
bShowRoom1ToDevelopment = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  bShowRoom1ToDevelopment,
  -750,
  -1000,
  -4000,
  "",
  "fromBShowRoom",
  "development"
);

bShowRoom1Image.add(bShowRoom1ToBShowRoom2, bShowRoom1ToDevelopment);
//大展示間2 ------------------------------------------------------------------------------------------------
// 大展示間2往大展示間3
bShowRoom2ToBShowRoom3 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(bShowRoom2ToBShowRoom3, 200, -1000, 4000, "", true, "bshowRoom3");

// bShowRoom2ToBShowRoom3.addHoverText("資訊大樓門口");
bShowRoom2ToBShowRoom3.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("bshowRoom3");
});

// 大展示間2往大展示間1
bShowRoom2ToBShowRoom1 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  bShowRoom2ToBShowRoom1,
  1800,
  -1000,
  -1500,
  "",
  false,
  "bshowRoom1"
);

bShowRoom2Image.add(bShowRoom2ToBShowRoom3, bShowRoom2ToBShowRoom1);
//大展示間3 ------------------------------------------------------------------------------------------------
// 大展示間3往大展示間4
bShowRoom3ToBShowRoom4 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(bShowRoom3ToBShowRoom4, 0, -1000, 4000, "", true, "bshowRoom4");

// 大展示間3往大展示間2
bShowRoom3ToBShowRoom2 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(bShowRoom3ToBShowRoom2, 0, -1000, -4000, "", false, "bshowRoom2");

bShowRoom3Image.add(bShowRoom3ToBShowRoom4, bShowRoom3ToBShowRoom2);
//大展示間4 ------------------------------------------------------------------------------------------------
// 大展示間4往大展示間5
bShowRoom4ToBShowRoom5 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(bShowRoom4ToBShowRoom5, 1000, -1000, 4000, "", true, "bshowRoom5");

// 大展示間4往大展示間3
bShowRoom4ToBShowRoom3 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  bShowRoom4ToBShowRoom3,
  5000,
  -1000,
  -3500,
  "",
  false,
  "bshowRoom3"
);

bShowRoom4Image.add(bShowRoom4ToBShowRoom5, bShowRoom4ToBShowRoom3);
//大展示間5 ------------------------------------------------------------------------------------------------
// 大展示間5往大展示間6
bShowRoom5ToBShowRoom6 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  bShowRoom5ToBShowRoom6,
  -100,
  -2000,
  -4000,
  "",
  true,
  "bshowRoom6"
);

// 大展示間5往大展示間4
bShowRoom5ToBShowRoom4 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  bShowRoom5ToBShowRoom4,
  -4000,
  -2000,
  4000,
  "",
  false,
  "bshowRoom4"
);

bShowRoom5Image.add(bShowRoom5ToBShowRoom6, bShowRoom5ToBShowRoom4);
//大展示間6 ------------------------------------------------------------------------------------------------
// 大展示間6往研究大樓
bShowRoom6ToDevelopment = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.LeftArrow
);
arrowSetting(
  bShowRoom6ToDevelopment,
  2500,
  -500,
  -4000,
  "",
  "fromBShowRoom",
  "development"
);

// 大展示間6往大展示間5
bShowRoom6ToBShowRoom5 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(bShowRoom6ToBShowRoom5, 0, -1000, 3000, "", false, "bshowRoom5");

bShowRoom6Image.add(bShowRoom6ToDevelopment, bShowRoom6ToBShowRoom5);

//行政大樓門廊 ------------------------------------------------------------------------------------------------
// 門廊到走道2(面對走道1)
administrativePorchToAisle2_1 = new PANOLENS.Infospot(
  800,
  "./images/administrative_porch/administrative_porch-aisle2_1.png"
);
arrowSetting(
  administrativePorchToAisle2_1,
  -5000,
  -1500,
  -1500,
  "往入口",
  false,
  "aisle2"
);

// 門廊到走道2(面對走道3)
administrativePorchToAisle2_3 = new PANOLENS.Infospot(
  800,
  "./images/administrative_porch/administrative_porch-aisle2_3.png"
);
arrowSetting(
  administrativePorchToAisle2_3,
  -5000,
  -1500,
  1400,
  "往右",
  true,
  "aisle2"
);

// 門廊到行政大樓
administrativePorchToAdministrative = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  administrativePorchToAdministrative,
  7000,
  -1500,
  300,
  "",
  true,
  "administrative"
);

administrativePorchImage.add(
  administrativePorchToAisle2_1,
  administrativePorchToAisle2_3,
  administrativePorchToAdministrative
);

// 行政大樓 ------------------------------------------------------------------------------------------------
administrativeToMeeting = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(administrativeToMeeting, -1150, -1200, 3500, "", true, "meeting");

administrativeToAdministrativeDoor = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  administrativeToAdministrativeDoor,
  2500,
  -1500,
  -1500,
  "",
  false,
  "administrativePorch"
);

administrativeImage.add(
  administrativeToAdministrativeDoor,
  administrativeToMeeting
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
  developmentDoorImage,
  developmentImage,
  showRoomImage,
  bShowRoom1Image,
  bShowRoom2Image,
  bShowRoom3Image,
  bShowRoom4Image,
  bShowRoom5Image,
  bShowRoom6Image,
  administrativePorchImage,
  administrativeImage,
  meetingImage,
  storehouse8Image,
  storehouse7Image,
  storehouse6Image,
  storehouse5Image,
  storehouse4Image,
  storehouse3Image,
  storehouse2Image,
  storehouse1Image,
  storehouse2F1Image
);
// 可以方便直接定位的function
function position(site) {
  return new THREE.Vector3(site.position.x, site.position.y, site.position.z);
}

var lookAtPositions = [
  [
    new THREE.Vector3(
      administrativePorchToAdministrative.position.x,
      administrativePorchToAdministrative.position.y,
      administrativePorchToAdministrative.position.z
    ),
    new THREE.Vector3(-5000, -1500, -100),
  ], //administrative_porch
  [
    new THREE.Vector3(-5000, -1500, 3500),
    new THREE.Vector3(
      administrativeToAdministrativeDoor.position.x,
      administrativeToAdministrativeDoor.position.y + 800,
      administrativeToAdministrativeDoor.position.z
    ),
  ], //administrative
  [new THREE.Vector3(5400, 0, 100)], //meeting
  [
    new THREE.Vector3(-5000, -500, -300),
    new THREE.Vector3(
      developmentDoorToAisle7.position.x,
      developmentDoorToAisle7.position.y,
      developmentDoorToAisle7.position.z
    ),
  ], //developmentDoor
  [new THREE.Vector3(-4000, -250, -1000)], //show_room new THREE.Vector3(800, -1000, 4000)
];

//大展示間----------------------------------------------------------------
bShowRoom1Image.add(TopInfo, MidInfo);
bShowRoom2Image.add(
  showRoom2Info1,
  showRoom2Info2,
  showRoom2Info3,
  showRoom2Info4,
  showRoom2Info5
);
bShowRoom3Image.add(showRoom3Info1, showRoom3Info2);
bShowRoom4Image.add(showRoom4Info1);
bShowRoom5Image.add(showRoom5Info1, showRoom5Info2, showRoom5Info3);
bShowRoom6Image.add(showRoom6Info1);

var lookAtShowRoom = [
  [position(bShowRoom1ToBShowRoom2), position(bShowRoom1ToDevelopment)], //b_show_room1
  [position(bShowRoom2ToBShowRoom3), position(bShowRoom2ToBShowRoom1)], //b_show_room2
  [position(bShowRoom3ToBShowRoom4), position(bShowRoom3ToBShowRoom2)], //b_show_room3
  [position(bShowRoom4ToBShowRoom5), position(bShowRoom4ToBShowRoom3)], //b_show_room4
  [position(bShowRoom5ToBShowRoom6), position(bShowRoom5ToBShowRoom4)], //b_show_room5
  [position(bShowRoom6ToDevelopment), position(bShowRoom6ToBShowRoom5)], //b_show_room6
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

// 門口
var lookAtDoor = [
  [
    new THREE.Vector3(
      doorToAdministrativeArrow.position.x,
      doorToAdministrativeArrow.position.y,
      doorToAdministrativeArrow.position.z
    ),
  ], //door
];

doorImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtDoor[0][0], 0);
});
//走道----------------------------------------------------------------
var lookAtAisle = [
  [position(aisle1ToAisle2), position(aisle1ToDoor)], //asile1
  [position(aisle2ToAisle3), position(aisle2ToAisle1)], //asile2
  [position(aisle3ToAisle4), position(aisle3ToAisle2)], //asile3
  [position(aisle4ToAisle5), position(aisle4ToAisle3)], //asile4
  [position(aisle5ToAisle6), position(aisle5ToAisle4)], //asile5
  [position(aisle6ToAisle7), position(aisle6ToAisle5)], //asile6
  [position(aisle7TodevelopmentDoor), position(aisle7ToAisle6)], //asile7
];
function focusAisle(key, index) {
  switch (key) {
    case true:
      viewer.tweenControlCenter(lookAtAisle[index][0], 0);
      break;
    case false:
      viewer.tweenControlCenter(lookAtAisle[index][1], 0);
      break;
    default:
      break;
  }
}
aisle1Image.addEventListener("enter-fade-start", function () {
  focusAisle(lookCheck, 0);
});

aisle2Image.addEventListener("enter-fade-start", function () {
  focusAisle(lookCheck, 1);
});

aisle3Image.addEventListener("enter-fade-start", function () {
  focusAisle(lookCheck, 2);
});

aisle4Image.addEventListener("enter-fade-start", function () {
  focusAisle(lookCheck, 3);
});

aisle5Image.addEventListener("enter-fade-start", function () {
  focusAisle(lookCheck, 4);
});

aisle6Image.addEventListener("enter-fade-start", function () {
  focusAisle(lookCheck, 5);
});

aisle7Image.addEventListener("enter-fade-start", function () {
  focusAisle(lookCheck, 6);
});
//研究發展大樓門口----------------------------------------------------------------
developmentDoorImage.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[3][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[3][1], 0);
  }
});
//研究發展大樓----------------------------------------------------------------
var lookAtDevelopment = [
  [
    new THREE.Vector3(-500, -500, -5000),
    new THREE.Vector3(-1000, 0, 0),
    new THREE.Vector3(5000, 0, -500),
    new THREE.Vector3(
      developmentToDevelopmentDoor.position.x,
      developmentToDevelopmentDoor.position.y,
      developmentToDevelopmentDoor.position.z
    ),
  ], // development
];

developmentImage.addEventListener("enter-fade-start", function () {
  if (lookCheck === true) {
    viewer.tweenControlCenter(lookAtDevelopment[0][0], 0);
  } else if (lookCheck === "fromShowRoom") {
    viewer.tweenControlCenter(lookAtDevelopment[0][1], 0);
  } else if (lookCheck === "fromBShowRoom") {
    viewer.tweenControlCenter(lookAtDevelopment[0][2], 0);
  } else {
    viewer.tweenControlCenter(lookAtDevelopment[0][3], 0);
  }
});

//倉庫----------------------------------------------------------------
var lookAtStorehouse = [
  [position(storehouse8toStorhouse7), position(storehouse8toDevelopment)], //storehouse8
  [position(storehouse7toStorhouse6), position(storehouse7toStorhouse8)], //storehouse7
  [position(storehouse6toStorhouse5), position(storehouse6toStorhouse7)], //storehouse6
  [position(storehouse5toStorhouse4), position(storehouse5toStorhouse6)], //storehouse5
  [position(storehouse4toStorhouse3), position(storehouse4toStorhouse5)], //storehouse4
  [position(storehouse3toStorhouse2), position(storehouse3toStorhouse4)], //storehouse3
  [position(storehouse2toStorhouse1), position(storehouse2toStorhouse3)], //storehouse2
  [new THREE.Vector3(5000, -500, 0)], //storehouse1
];

function focusStorehouse(key, index) {
  switch (key) {
    case true:
      viewer.tweenControlCenter(lookAtStorehouse[index][0], 0);
      break;
    case false:
      viewer.tweenControlCenter(lookAtStorehouse[index][1], 0);
      break;
    default:
      break;
  }
}

storehouse8Image.addEventListener("enter-fade-start", function () {
  focusStorehouse(lookCheck, 0);
});

storehouse7Image.addEventListener("enter-fade-start", function () {
  focusStorehouse(lookCheck, 1);
});

storehouse6Image.addEventListener("enter-fade-start", function () {
  focusStorehouse(lookCheck, 2);
});

storehouse5Image.addEventListener("enter-fade-start", function () {
  focusStorehouse(lookCheck, 3);
});

storehouse4Image.addEventListener("enter-fade-start", function () {
  focusStorehouse(lookCheck, 4);
});

storehouse3Image.addEventListener("enter-fade-start", function () {
  focusStorehouse(lookCheck, 5);
});

storehouse2Image.addEventListener("enter-fade-start", function () {
  focusStorehouse(lookCheck, 6);
});

storehouse1Image.addEventListener("enter-fade-start", function () {
  focusStorehouse(lookCheck, 7);
});

//小展示間----------------------------------------------------------------
showRoomImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[4][0], 0);
});

//行政大樓門廊----------------------------------------------------------------
administrativePorchImage.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[0][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[0][1], 0);
  }
});
//行政大樓----------------------------------------------------------------
administrativeImage.addEventListener("enter-fade-start", function () {
  if (lookCheck) {
    viewer.tweenControlCenter(lookAtPositions[1][0], 0);
  } else {
    viewer.tweenControlCenter(lookAtPositions[1][1], 0);
  }
});
//會議室----------------------------------------------------------------
meetingToAdministrative = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  meetingToAdministrative,
  4300,
  -1500,
  -7500,
  "",
  false,
  "administrative"
);

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

meetingImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[2][0], 0);
});

var menuBtn = document.querySelector(".menu-box__menu");
var mapBtn = document.querySelector(".menu-box__map");

var mapMenu = document.querySelector(".map-box");
var infoMenu = document.querySelector(".guide-box");

var point = document.querySelector(".map-point");

menuBtn.addEventListener("click", function () {
  infoMenu.classList.toggle("active");
  if (mapMenu.className.indexOf("active") !== -1) {
    mapMenu.classList.toggle("active");
    point.classList.toggle("active");
  }
});

mapBtn.addEventListener("click", function () {
  mapMenu.classList.toggle("active");
  point.classList.toggle("active");
  if (infoMenu.className.indexOf("active") !== -1) {
    infoMenu.classList.toggle("active");
  }
});
