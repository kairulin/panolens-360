//場景
const doorImage = new PANOLENS.ImagePanorama("images/door.jpg");
// const aisle1Image = new PANOLENS.ImagePanorama("images/aisle1/aisle1.jpg");
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

// const administrativePorchImage = new PANOLENS.ImagePanorama(
//   "images/administrative_porch/administrative_porch.jpg"
// );
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
const storehouse2F2Image = new PANOLENS.ImagePanorama(
  "images/storehouse2F/2.jpg"
);
const storehouse2F3Image = new PANOLENS.ImagePanorama(
  "images/storehouse2F/3.jpg"
);
const storehouse2F4Image = new PANOLENS.ImagePanorama(
  "images/storehouse2F/4.jpg"
);
const storehouse2F5Image = new PANOLENS.ImagePanorama(
  "images/storehouse2F/5.jpg"
);
const storehouse2F6Image = new PANOLENS.ImagePanorama(
  "images/storehouse2F/6.jpg"
);
const storehouse2F7Image = new PANOLENS.ImagePanorama(
  "images/storehouse2F/7.jpg"
);

const storehouse3F1Image = new PANOLENS.ImagePanorama(
  "images/storehouse3F/1.jpg"
);
const storehouse3F2Image = new PANOLENS.ImagePanorama(
  "images/storehouse3F/2.jpg"
);
const storehouse3F3Image = new PANOLENS.ImagePanorama(
  "images/storehouse3F/3.jpg"
);
const storehouse3F4Image = new PANOLENS.ImagePanorama(
  "images/storehouse3F/4.jpg"
);
const storehouse3F5Image = new PANOLENS.ImagePanorama(
  "images/storehouse3F/5.jpg"
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
  cameraFov: 90,
  output: "console",
});
let lookCheck = true;
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

function infoSetting(infoName, positionXYZ, hoverText, idx) {
  infoName.position.set(positionXYZ[0], positionXYZ[1], positionXYZ[2]);
  infoName.addHoverText(hoverText[0],hoverText[1],hoverText[2],hoverText[3]);
  infoName.addEventListener("click", function () {
    btnFunction(idx, false);
    infoName.focus();
  });
}

bikeInfo = new PANOLENS.Infospot(500);
infoSetting(bikeInfo, [-5100, -1800, -3800], ["自行車資訊",-50,24,"yellow"], 1);

motorInfo = new PANOLENS.Infospot(500);
infoSetting(motorInfo, [-5200, -1800, -1300], ["電動汽車馬達資訊",-50,24,"yellow"], 2);

ledInfo = new PANOLENS.Infospot(500);
infoSetting(ledInfo, [-5200, -1800, 1400], ["LDE車燈應用資訊",-50,24,"yellow"], 3);

medicalInfo = new PANOLENS.Infospot(525);
infoSetting(medicalInfo, [-5200, -1800, 4100], ["醫療接著膠材資訊",-50,24,"yellow"], 4);

tireInfo = new PANOLENS.Infospot(600);
infoSetting(tireInfo, [-5200, -1800, 6600], ["胎壓偵測系統資訊",-50,24,"yellow"], 5);

miniLedInfo = new PANOLENS.Infospot(500);
infoSetting(miniLedInfo, [5800, -1800, 5950], ["MINI LED資訊",-50,24,"yellow"], 6);

electricInfo = new PANOLENS.Infospot(500);
infoSetting(electricInfo, [5600, -1800, 3450], ["電感應用資訊",-50,24,"yellow"], 7);

speakerInfo = new PANOLENS.Infospot(500);
infoSetting(speakerInfo, [5400, -1800, 900], ["微型揚聲器(聲學產業)資訊",-50,24,"yellow"], 8);

lensInfo = new PANOLENS.Infospot(500);
infoSetting(lensInfo, [5200, -1800, -1600], ["光學鏡頭資訊",-50,24,"yellow"], 9);

communicationInfo = new PANOLENS.Infospot(500);
infoSetting(
  communicationInfo,
  [5000, -1800, -4050],
  ["5G-光通訊-光通訊資訊",-50,24,"yellow"],
  10
);

//大展示間1資訊
TopInfo = new PANOLENS.Infospot(550);
infoSetting(TopInfo, [-3500, 0, -4500], "光電類", "show1");

MidInfo = new PANOLENS.Infospot(550);
infoSetting(MidInfo, [-3500, -3000, -4500], "光電產業", "show2");

// 大展示間2資訊
showRoom2Info1 = new PANOLENS.Infospot(350);
infoSetting(showRoom2Info1, [0, -400, -4000], "", "show4");

showRoom2Info2 = new PANOLENS.Infospot(450);
infoSetting(showRoom2Info2, [-2600, -1500, 1100], "", "show5");

showRoom2Info3 = new PANOLENS.Infospot(450);
infoSetting(showRoom2Info3, [-2450, -1500, -1650], "", "show6");

showRoom2Info4 = new PANOLENS.Infospot(350);
infoSetting(showRoom2Info4, [2500, -500, -50], "", "show7");

showRoom2Info5 = new PANOLENS.Infospot(450);
infoSetting(showRoom2Info5, [3300, -800, 3000], "", "show8");

// 大展示間3資訊
showRoom3Info1 = new PANOLENS.Infospot(350);
infoSetting(showRoom3Info1, [-2800, -1300, -1800], "", "show10");

showRoom3Info2 = new PANOLENS.Infospot(350);
infoSetting(showRoom3Info2, [-3000, -1300, 2000], "", "show11");

// 大展示間4資訊
showRoom4Info1 = new PANOLENS.Infospot(350);
infoSetting(showRoom4Info1, [-1000, -1000, -2000], "", "show12");

// 大展示間5資訊
showRoom5Info1 = new PANOLENS.Infospot(350);
infoSetting(showRoom5Info1, [2000, -600, 2500], "", "show14");

showRoom5Info2 = new PANOLENS.Infospot(450);
infoSetting(showRoom5Info2, [3500, -800, -500], "", "show15");

showRoom5Info3 = new PANOLENS.Infospot(350);
infoSetting(showRoom5Info3, [-2000, -1000, -1000], "", "show17");

// 大展示間6資訊
showRoom6Info1 = new PANOLENS.Infospot(350);
infoSetting(showRoom6Info1, [2500, -1000, 1000], "", "show18");

//設置箭頭的function
function arrowSetting(arrowName, positionXYZ, hoverText, check, changeSite) {
  arrowName.position.set(positionXYZ[0], positionXYZ[1], positionXYZ[2]);
  // arrowName.addHoverText(hoverText, 100, 50);
  arrowName.addHoverText(
    hoverText[0],
    hoverText[1],
    hoverText[2],
    hoverText[3]
  );

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
arrowSetting(
  doorToAdministrativeArrow,
  [-7000, -1500, 500],
  "",
  true,
  "aisle2"
);

doorImage.add(doorToAdministrativeArrow);
//aisle1 ------------------------------------------------------------------------------------------------
// // 走道1往走道2
// aisle1ToAisle2 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
// arrowSetting(aisle1ToAisle2, -5000, -1500, -100, "", true, "aisle2");

// // 走道1往門口
// aisle1ToDoor = new PANOLENS.Infospot(300, PANOLENS.DataImage.MoveArrow);
// arrowSetting(aisle1ToDoor, 3500, -800, 100, "", true, "door");

// aisle1Image.add(aisle1ToDoor, aisle1ToAisle2);
//aisle2 ------------------------------------------------------------------------------------------------
// 走道2往行政大樓
aisle2ToAdministrative = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  aisle2ToAdministrative,
  [-5000, 0, -100],
  ["行政大樓", 100, 50, "yellow"],
  true,
  "administrative"
);

// 走道2往大門
aisle2ToDoor = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle2ToDoor,
  [1000, -500, 5000],
  ["大門", 100, 50, "yellow"],
  false,
  "door"
);

// 走道2往走道3
aisle2ToAisle3 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle2ToAisle3,
  [200, -500, -5000],
  ["車道", 100, 50, "yellow"],
  true,
  "aisle3"
);

aisle2Image.add(aisle2ToAdministrative, aisle2ToDoor, aisle2ToAisle3);
//aisle3 ------------------------------------------------------------------------------------------------
// 走道3往走道2
aisle3ToAisle2 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle3ToAisle2,
  [100, -500, 5000],
  ["車道", 100, 50, "yellow"],
  false,
  "aisle2"
);

// 走道3往走道4
aisle3ToAisle4 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle3ToAisle4,
  [0, -500, -5000],
  ["車道", 100, 50, "yellow"],
  true,
  "aisle4"
);
// 走道3往廠區1
aisle3ToStorehouse1 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle3ToStorehouse1,
  [-5000, -500, -500],
  ["廠區門口", 100, 50, "yellow"],
  false,
  "storehouse1"
);

aisle3Image.add(aisle3ToAisle2, aisle3ToAisle4, aisle3ToStorehouse1);
//aisle4 ------------------------------------------------------------------------------------------------
// 走道4往走道3
aisle4ToAisle3 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle4ToAisle3,
  [-300, -500, 5000],
  ["車道", 100, 50, "yellow"],
  false,
  "aisle3"
);

// 走道4往走道5
aisle4ToAisle5 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle4ToAisle5,
  [-300, -500, -5000],
  ["倉庫前車道", 100, 50, "yellow"],
  true,
  "aisle5"
);
// 走道4往廠區4
aisle4ToStorehouse4 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle4ToStorehouse4,
  [-4500, -500, 0],
  ["一二廠交接處", 100, 50, "yellow"],
  "go",
  "storehouse4"
);

aisle4Image.add(aisle4ToAisle3, aisle4ToAisle5, aisle4ToStorehouse4);
//aisle5 ------------------------------------------------------------------------------------------------
// 走道5往走道4
aisle5ToAisle4 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle5ToAisle4,
  [-300, -500, -5000],
  ["車道", 100, 50, "yellow"],
  false,
  "aisle4"
);

// 走道5往走道6
aisle5ToAisle6 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle5ToAisle6,
  [-300, -500, 5000],
  ["出貨區車道", 100, 50, "yellow"],
  true,
  "aisle6"
);
//走道5往廠區6
aisle5ToStorehouse2 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle5ToStorehouse2,
  [4500, -500, 500],
  ["環測室", 100, 50, "yellow"],
  "go",
  "storehouse6"
);

aisle5Image.add(aisle5ToAisle4, aisle5ToAisle6, aisle5ToStorehouse2);
//aisle6 ------------------------------------------------------------------------------------------------
// 走道6往走道5
aisle6ToAisle5 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle6ToAisle5,
  [-300, -500, -5000],
  ["倉庫前車道", 100, 50, "yellow"],
  false,
  "aisle5"
);

// 走道6往走道7
aisle6ToAisle7 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle6ToAisle7,
  [300, -500, 5000],
  ["研發大樓車道", 100, 50, "yellow"],
  true,
  "aisle7"
);
//走道6往廠區8
aisle6ToStorehouse8 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle6ToStorehouse8,
  [4500, -500, -100],
  ["出貨區", 100, 50, "yellow"],
  false,
  "storehouse8"
);

aisle6Image.add(aisle6ToAisle5, aisle6ToAisle7, aisle6ToStorehouse8);
//aisle7 ------------------------------------------------------------------------------------------------
// 走道7往走道6
aisle7ToAisle6 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  aisle7ToAisle6,
  [-5000, -500, -300],
  ["出貨區車道", 100, 50, "yellow"],
  false,
  "aisle6"
);

// 走道7往研究發展大樓門口
aisle7TodevelopmentDoor = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  aisle7TodevelopmentDoor,
  [-300, -1500, -5000],
  ["研發大樓門口", 100, 50, "yellow"],
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
arrowSetting(
  developmentDoorToAisle7,
  [300, -500, 5000],
  ["研發大樓車道", -100, 50, "yellow"],
  false,
  "aisle7"
);

// 研究發展大樓門口往研究發展大樓
developmentDoorTodevelopment = new PANOLENS.Infospot(
  900,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  developmentDoorTodevelopment,
  [-7000, -1500, -250],
  ["研發大樓", 100, 50, "yellow"],
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
  [100, -500, 4000],
  ["研發大樓門口", 150, 50,"yellow"],
  false,
  "developmentDoor"
);

// 研究大樓往小展示間
developmentToshowRoom = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.LeftArrow
);
developmentToshowRoom.position.set(2000, -500, -1600);
developmentToshowRoom.addHoverText("會客室", 150, 50,"yellow");
developmentToshowRoom.addEventListener("click", function () {
  lookCheck = false;
  changeFunction("showRoom");
});
// arrowSetting(
//   developmentToshowRoom,
//   2000,
//   -500,
//   -1600,
//   "小展示間",
//   false,
//   "showRoom"
// );

// 研究大樓往大展示間
developmentToBshowRoom = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  developmentToBshowRoom,
  [-2500, -500, -5000],
  ["大展示間", 100, 50,"yellow"],
  true,
  "bshowRoom1"
);

// 研究大樓往廠區8
developmentToStorehouse8 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
developmentToStorehouse8.position.set(200, -500, -5000);
developmentToStorehouse8.addHoverText("出貨區", -100, 50,"yellow");
developmentToStorehouse8.addEventListener("click", function () {
  lookCheck = true;
  changeFunction("storehouse8");
});
// arrowSetting(
//   developmentToStorehouse8,
//   200,
//   -500,
//   -5000,
//   "廠區",
//   true,
//   "storehouse8"
// );

// 研究大樓往廠區二樓
developmentToStorehouse2F1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.LeftFrontArrow
);
arrowSetting(
  developmentToStorehouse2F1,
  [200, 300, -5000],
  ["二樓", 100, 50, "yellow"],
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
//廠區8-------------------------------------------------------------------------
//廠區8往廠區7
storehouse8toStorhouse7 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse8toStorhouse7,
  [-100, -500, -5000],
  ["垂直離心區", -100, 50, "yellow"],
  true,
  "storehouse7"
);

//廠區8往研究大樓
storehouse8toDevelopment = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.LeftFrontArrow
);
arrowSetting(
  storehouse8toDevelopment,
  [4000, -500, 2000],
  ["研究大樓", 100, 50, ""],
  false,
  "development"
);

// //廠區8往廠區二樓
// storehouse8toStorehouse2F1 = new PANOLENS.Infospot(
//   600,
//   PANOLENS.DataImage.RightFrontArrow
// );
// arrowSetting(
//   storehouse8toStorehouse2F1,
//   [4000, -500, 1800],
//   "二樓",
//   true,
//   "storehouse2F1"
// );
//廠區8往走道6
storehouse8ToAisle6 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  storehouse8ToAisle6,
  [-4500, -500, 1500],
  ["出貨區車道", -100, 50, "yellow"],
  true,
  "aisle6"
);

storehouse8Image.add(
  storehouse8toStorhouse7,
  storehouse8toDevelopment,
  // storehouse8toStorehouse2F1,
  storehouse8ToAisle6
);
//廠區7-------------------------------------------------------------------------
//廠區7往廠區8
storehouse7toStorhouse8 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse7toStorhouse8,
  [-100, -500, -5000],
  ["出貨區", -100, 50, "yellow"],
  false,
  "storehouse8"
);

//廠區7往廠區6
storehouse7toStorhouse6 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse7toStorhouse6,
  [-100, -500, 5000],
  ["測環室", -100, 50, "yellow"],
  true,
  "storehouse6"
);

storehouse7Image.add(storehouse7toStorhouse8, storehouse7toStorhouse6);
//廠區6-------------------------------------------------------------------------
//廠區6往廠區7
storehouse6toStorhouse7 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse6toStorhouse7,
  [-200, -500, -5000],
  ["垂直離心區", -100, 50, "yellow"],
  false,
  "storehouse7"
);

//廠區6往廠區5
storehouse6toStorhouse5 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);

arrowSetting(
  storehouse6toStorhouse5,
  [0, -500, 5000],
  ["往倉庫", -100, 50, "yellow"],
  true,
  "storehouse5"
);
//廠區6往走道5
storehouse6ToAisle5 = new PANOLENS.Infospot(800, PANOLENS.DataImage.RightArrow);
arrowSetting(
  storehouse6ToAisle5,
  [4500, -500, 5000],
  ["倉庫前車道", -100, 50, "yellow"],
  true,
  "aisle5"
);

storehouse6Image.add(
  storehouse6toStorhouse5,
  storehouse6toStorhouse7,
  storehouse6ToAisle5
);

//廠區5-------------------------------------------------------------------------
//廠區5往廠區6
storehouse5toStorhouse6 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse5toStorhouse6,
  [1500, -500, -5000],
  ["測環室", -100, 50, "yellow"],
  false,
  "storehouse6"
);

//廠區5往廠區4
storehouse5toStorhouse4 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse5toStorhouse4,
  [-1500, -500, 5000],
  ["一二廠交接處", -100, 50, "yellow"],
  true,
  "storehouse4"
);

//廠區5往走道5
storehouse5ToAisle5 = new PANOLENS.Infospot(800, PANOLENS.DataImage.LeftArrow);
arrowSetting(
  storehouse5ToAisle5,
  [4500, -500, -5000],
  ["倉庫前車道", -100, 50, "yellow"],
  true,
  "aisle5"
);

storehouse5Image.add(
  storehouse5toStorhouse6,
  storehouse5toStorhouse4,
  storehouse5ToAisle5
);

//廠區4-------------------------------------------------------------------------
//廠區4往廠區5
storehouse4toStorhouse5 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse4toStorhouse5,
  [-250, -500, -5000],
  ["往倉庫", -100, 50, "yellow"],
  false,
  "storehouse5"
);

//廠區4往廠區3
storehouse4toStorhouse3 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse4toStorhouse3,
  [250, -500, 5000],
  ["下料區", -100, 50, "yellow"],
  true,
  "storehouse3"
);
//廠區4往走道4
storehouse4ToAisle4 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(
  storehouse4ToAisle4,
  [4500, -500, 0],
  ["往車道", -100, 50, "yellow"],
  true,
  "aisle4"
);

storehouse4Image.add(
  storehouse4toStorhouse5,
  storehouse4toStorhouse3,
  storehouse4ToAisle4
);

//廠區3-------------------------------------------------------------------------
//廠區3往廠區4
storehouse3toStorhouse4 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3toStorhouse4,
  [450, -500, 5000],
  ["下料區", -100, 50, "yellow"],
  false,
  "storehouse4"
);

//廠區3往廠區2
storehouse3toStorhouse2 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.LeftFrontArrow
);
arrowSetting(
  storehouse3toStorhouse2,
  [-2500, -500, 1500],
  ["抽真空區", -150, 50, "yellow"],
  true,
  "storehouse2"
);

//廠區3往廠區1
storehouse3toStorhouse1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3toStorhouse1,
  [-450, -500, -5000],
  ["製造部門口", -100, 50, "yellow"],
  true,
  "storehouse1"
);
storehouse3Image.add(
  storehouse3toStorhouse4,
  storehouse3toStorhouse2,
  storehouse3toStorhouse1
);

//廠區2-------------------------------------------------------------------------
//廠區2往廠區3
storehouse2toStorhouse3 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2toStorhouse3,
  [1500, -500, 150],
  ["研磨區", -200, 50, "yellow"],
  false,
  "storehouse3"
);

//廠區2往廠區1
storehouse2toStorhouse1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2toStorhouse1,
  [450, -500, -5000],
  ["製造部門口", -100, 50, "yellow"],
  true,
  "storehouse1"
);

storehouse2Image.add(storehouse2toStorhouse3, storehouse2toStorhouse1);

//廠區1-------------------------------------------------------------------------
//廠區1往廠區2
storehouse1toStorhouse2 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.RightFront2Arrow
);
arrowSetting(
  storehouse1toStorhouse2,
  [-2750, -500, -2500],
  ["抽真空區", -100, 50, "yellow"],
  false,
  "storehouse2"
);
//廠區1往走道3
storehouse1ToAisle3 = new PANOLENS.Infospot(800, PANOLENS.DataImage.MoveArrow);
arrowSetting(storehouse1ToAisle3, [-500, -500, -5000], ["車道",-100,50,"yellow"], true, "aisle3");

//廠區1往廠區3
storehouse1ToStorehouse3 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.LeftFrontArrow
);
arrowSetting(
  storehouse1ToStorehouse3,
  [-2750, -500, 1500],
  ["研磨區", -100, 50, "yellow"],
  false,
  "storehouse3"
);

storehouse1Image.add(
  storehouse1toStorhouse2,
  storehouse1ToAisle3,
  storehouse1ToStorehouse3
);

// 廠區二樓1 -----------------------------------------------------------------------------------------------------
// 往一樓
storehouse2F1toStorehouse8 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.DownArrow
);
arrowSetting(
  storehouse2F1toStorehouse8,
  [-700, -500, 2500],
  "",
  true,
  "storehouse8"
);

//前進
storehouse2F1toStorehouse2F2 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F1toStorehouse2F2,
  [3000, -500, 500],
  "",
  true,
  "storehouse2F2"
);
//視聽教室
storehouse2F1toStorehouse2F7 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F1toStorehouse2F7,
  [700, -500, -2500],
  ["視聽教室", -100, 50, "yellow"],
  true,
  "storehouse2F7"
);

storehouse2F1Image.add(
  storehouse2F1toStorehouse8,
  storehouse2F1toStorehouse2F2,
  storehouse2F1toStorehouse2F7
);
// 廠區二樓7(視聽教室) -----------------------------------------------------------------------------------------------------
storehouse2F7toStroehouse2F1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F7toStroehouse2F1,
  [-700, -500, 2500],
  ["走道", -100, 50, "yellow"],
  false,
  "storehouse2F1"
);

storehouse2F7Image.add(storehouse2F7toStroehouse2F1);
// 廠區二樓2 -----------------------------------------------------------------------------------------------------
//前進
storehouse2F2toStroehouse2F3 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F2toStroehouse2F3,
  [-250, -500, 3000],
  ["2F製成模擬室", -100, 50, "yellow"],
  true,
  "storehouse2F3"
);
//退回
storehouse2F2toStroehouse2F1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  storehouse2F2toStroehouse2F1,
  [100, -500, -3000],
  "",
  "back",
  "storehouse2F1"
);
storehouse2F2Image.add(
  storehouse2F2toStroehouse2F3,
  storehouse2F2toStroehouse2F1
);
// 廠區二樓3 -----------------------------------------------------------------------------------------------------
//前進
storehouse2F3toStroehouse2F4 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F3toStroehouse2F4,
  [500, -500, -3000],
  ["藥品室", -100, 50, "yellow"],
  true,
  "storehouse2F4"
);
//退回
storehouse2F3toStroehouse2F2 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F3toStroehouse2F2,
  [-500, -500, 3000],
  "",
  false,
  "storehouse2F2"
);
storehouse2F3Image.add(
  storehouse2F3toStroehouse2F4,
  storehouse2F3toStroehouse2F2
);
// 廠區二樓4 -----------------------------------------------------------------------------------------------------
//前進
storehouse2F4toStroehouse2F5 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F4toStroehouse2F5,
  [0, -500, 3000],
  ["小批量工作室", -100, 50, "yellow"],
  true,
  "storehouse2F5"
);
//退回
storehouse2F4toStroehouse2F3 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F4toStroehouse2F3,
  [100, -500, -3000],
  ["2F製成模擬室", -100, 50, "yellow"],
  false,
  "storehouse2F3"
);
//往三樓
storehouse2F4toStroehouse3F1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.LeftArrow
);
arrowSetting(
  storehouse2F4toStroehouse3F1,
  [-800, -500, 3000],
  ["三樓", -100, 50, "yellow"],
  "go",
  "storehouse3F1"
);
storehouse2F4Image.add(
  storehouse2F4toStroehouse2F5,
  storehouse2F4toStroehouse2F3,
  storehouse2F4toStroehouse3F1
);
// 廠區二樓5 -----------------------------------------------------------------------------------------------------
//前進
storehouse2F5toStroehouse2F6 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F5toStroehouse2F6,
  [-1200, -500, 350],
  "",
  true,
  "storehouse2F6"
);
//退回
storehouse2F5toStroehouse2F4 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse2F5toStroehouse2F4,
  [0, -500, 3000],
  ["藥品室", -100, 50, "yellow"],
  false,
  "storehouse2F4"
);

//往三樓
storehouse2F5toStorehouse3F1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  storehouse2F5toStorehouse3F1,
  [700, -500, 3000],
  ["三樓", -100, 50, "yellow"],
  "go",
  "storehouse3F1"
);
storehouse2F5Image.add(
  storehouse2F5toStroehouse2F6,
  storehouse2F5toStroehouse2F4,
  storehouse2F5toStorehouse3F1
);
// 廠區二樓6 -----------------------------------------------------------------------------------------------------
//退回
storehouse2F6toStroehouse2F5 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  storehouse2F6toStroehouse2F5,
  [-4500, -500, 2000],
  "",
  false,
  "storehouse2F5"
);

storehouse2F6Image.add(storehouse2F6toStroehouse2F5);
// 廠區三樓1 -----------------------------------------------------------------------------------------------------
// 往二樓
storehouse3F1toStorehouse2F = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  storehouse3F1toStorehouse2F,
  [3000, -500, 1500],
  ["二樓", -100, 50, "yellow"],
  false,
  "storehouse2F4"
);
//左轉
storehouse3F1toStorehouse3F2 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3F1toStorehouse3F2,
  [0, -500, -5000],
  ["研發三課", -100, 50, "yellow"],
  true,
  "storehouse3F2"
);
//右轉
storehouse3F1toStorehouse3F3 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3F1toStorehouse3F3,
  [0, -500, 5000],
  ["儀器室", -100, 50, "yellow"],
  true,
  "storehouse3F3"
);
storehouse3F1Image.add(
  storehouse3F1toStorehouse2F,
  storehouse3F1toStorehouse3F2,
  storehouse3F1toStorehouse3F3
);
// 廠區三樓2 -----------------------------------------------------------------------------------------------------
storehouse3F2toStorehouse3F1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3F2toStorehouse3F1,
  [0, -500, 5000],
  ["無塵室", -100, 50, "yellow"],
  true,
  "storehouse3F1"
);
storehouse3F2Image.add(storehouse3F2toStorehouse3F1);
// 廠區三樓3 -----------------------------------------------------------------------------------------------------
storehouse3F3toStorehouse3F1 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3F3toStorehouse3F1,
  [0, -500, -5000],
  ["製成模擬室", -100, 50, "yellow"],
  false,
  "storehouse3F1"
);

storehouse3F3toStorehouse3F4 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3F3toStorehouse3F4,
  [0, -500, 5000],
  ["圖書室", -100, 50, "yellow"],
  true,
  "storehouse3F4"
);
storehouse3F3Image.add(
  storehouse3F3toStorehouse3F1,
  storehouse3F3toStorehouse3F4
);
// 廠區三樓4(圖書館) -----------------------------------------------------------------------------------------------------
storehouse3F4toStorehouse3F5 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3F4toStorehouse3F5,
  [-5000, -500, 0],
  "",
  false,
  "storehouse3F5"
);
storehouse3F4toStorehouse3F3 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3F4toStorehouse3F3,
  [1000, -500, 850],
  "",
  false,
  "storehouse3F3"
);
storehouse3F4Image.add(
  storehouse3F4toStorehouse3F5,
  storehouse3F4toStorehouse3F3
);
// 廠區三樓5(圖書館) -----------------------------------------------------------------------------------------------------
storehouse3F5toStorehouse3F4 = new PANOLENS.Infospot(
  600,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  storehouse3F5toStorehouse3F4,
  [5000, -500, 500],
  "",
  false,
  "storehouse3F4"
);
storehouse3F5Image.add(storehouse3F5toStorehouse3F4);

// //視聽教室(三樓)
// storehouse2F1toStorehouse2F7 = new PANOLENS.Infospot(
//   600,
//   PANOLENS.DataImage.MoveArrow
// );
// arrowSetting(
//   storehouse2F1toStorehouse2F7,
//   [700, -500, -2500],
//   "",
//   true,
//   "storehouse2F7"
// );

// storehouse2F1Image;
//小展示間 ------------------------------------------------------------------------------------------------
// 小展示間往研究大樓門口
showRoomToDevelopment = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  showRoomToDevelopment,
  [800, -1000, 4000],
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
  [-750, -1000, -4000],
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
arrowSetting(
  bShowRoom2ToBShowRoom3,
  [200, -1000, 4000],
  "",
  true,
  "bshowRoom3"
);

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
  [1800, -1000, -1500],
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
arrowSetting(bShowRoom3ToBShowRoom4, [0, -1000, 4000], "", true, "bshowRoom4");

// 大展示間3往大展示間2
bShowRoom3ToBShowRoom2 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  bShowRoom3ToBShowRoom2,
  [0, -1000, -4000],
  "",
  false,
  "bshowRoom2"
);

bShowRoom3Image.add(bShowRoom3ToBShowRoom4, bShowRoom3ToBShowRoom2);
//大展示間4 ------------------------------------------------------------------------------------------------
// 大展示間4往大展示間5
bShowRoom4ToBShowRoom5 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  bShowRoom4ToBShowRoom5,
  [1000, -1000, 4000],
  "",
  true,
  "bshowRoom5"
);

// 大展示間4往大展示間3
bShowRoom4ToBShowRoom3 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  bShowRoom4ToBShowRoom3,
  [5000, -1000, -3500],
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
  [-100, -2000, -4000],
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
  [-4000, -2000, 4000],
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
  [2500, -500, -4000],
  "",
  "fromBShowRoom",
  "development"
);

// 大展示間6往大展示間5
bShowRoom6ToBShowRoom5 = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(bShowRoom6ToBShowRoom5, [0, -1000, 3000], "", false, "bshowRoom5");

bShowRoom6Image.add(bShowRoom6ToDevelopment, bShowRoom6ToBShowRoom5);

//行政大樓門廊 ------------------------------------------------------------------------------------------------
// // 門廊到走道2(面對走道1)
// administrativePorchToAisle2_1 = new PANOLENS.Infospot(
//   800,
//   PANOLENS.DataImage.LeftFrontArrow
// );
// arrowSetting(
//   administrativePorchToAisle2_1,
//   -5000,
//   -1500,
//   -1500,
//   "往入口",
//   false,
//   "aisle2"
// );

// // 門廊到走道2(面對走道3)
// administrativePorchToAisle2_3 = new PANOLENS.Infospot(
//   800,
//   PANOLENS.DataImage.RightFrontArrow
// );
// arrowSetting(
//   administrativePorchToAisle2_3,
//   -5000,
//   -1500,
//   1400,
//   "往廠區",
//   true,
//   "aisle2"
// );

// // 門廊到行政大樓
// administrativePorchToAdministrative = new PANOLENS.Infospot(
//   800,
//   PANOLENS.DataImage.MoveArrow
// );
// arrowSetting(
//   administrativePorchToAdministrative,
//   7000,
//   -1500,
//   300,
//   "",
//   true,
//   "administrative"
// );

// administrativePorchImage.add(
//   administrativePorchToAisle2_1,
//   administrativePorchToAisle2_3,
//   administrativePorchToAdministrative
// );

// 行政大樓 ------------------------------------------------------------------------------------------------
administrativeToMeeting = new PANOLENS.Infospot(
  800,
  PANOLENS.DataImage.MoveArrow
);
arrowSetting(
  administrativeToMeeting,
  [-1150, -1200, 3500],
  ["簡報會議室",120,50],
  true,
  "meeting"
);

// administrativeToAisle2 = new PANOLENS.Infospot(
//   800,
//   PANOLENS.DataImage.MoveArrow
// );
// arrowSetting(
//   administrativeToAisle2,
//   2500,
//   -1500,
//   -1500,
//   "",
//   false,
//   "aisle2"
// );

// 門廊到走道2(面對走道1)
administrativeToAisle2_1 = new PANOLENS.Infospot(
  1100,
  PANOLENS.DataImage.LeftArrow
);
arrowSetting(
  administrativeToAisle2_1,
  [7500, -1500, -3000],
  ["往入口", 100, 50],
  false,
  "aisle2"
);

// 門廊到走道2(面對走道3)
administrativeToAisle2_3 = new PANOLENS.Infospot(
  1100,
  PANOLENS.DataImage.RightArrow
);
arrowSetting(
  administrativeToAisle2_3,
  [6000, -1500, -5000],
  ["往廠區", 100, 50],
  true,
  "aisle2"
);

administrativeImage.add(
  administrativeToMeeting,
  administrativeToAisle2_1,
  administrativeToAisle2_3
);

viewer.add(
  doorImage,
  // aisle1Image,
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
  // administrativePorchImage,
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
  storehouse2F1Image,
  storehouse2F2Image,
  storehouse2F3Image,
  storehouse2F4Image,
  storehouse2F5Image,
  storehouse2F6Image,
  storehouse2F7Image,
  storehouse3F1Image,
  storehouse3F2Image,
  storehouse3F3Image,
  storehouse3F4Image,
  storehouse3F5Image
);
viewer.outputPosition();

// 可以方便直接定位的function
function position(site) {
  return new THREE.Vector3(site.position.x, site.position.y, site.position.z);
}

var lookAtPositions = [
  [
    // new THREE.Vector3(
    //   administrativePorchToAdministrative.position.x,
    //   administrativePorchToAdministrative.position.y,
    //   administrativePorchToAdministrative.position.z
    // ),
    // new THREE.Vector3(-5000, -1500, -100),
  ], //administrative_porch
  [new THREE.Vector3(-5000, -1500, 3500), new THREE.Vector3(4236.66, -963.86, -2464.80)], //administrative
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
  [new THREE.Vector3(-3000, -500, 0)], //storehouse2F1
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
  [new THREE.Vector3(-5000, 0, -500), position(bShowRoom1ToDevelopment)], //b_show_room1
  [new THREE.Vector3(-2450, -1500, 0), position(bShowRoom2ToBShowRoom1)], //b_show_room2
  [new THREE.Vector3(-3000, -1300, 0), position(bShowRoom3ToBShowRoom2)], //b_show_room3
  [new THREE.Vector3(-1000, -1000, -2000), position(bShowRoom4ToBShowRoom3)], //b_show_room4
  [new THREE.Vector3(2000, -600, 0), position(bShowRoom5ToBShowRoom4)], //b_show_room5
  [new THREE.Vector3(2500, -1000, 1000), position(bShowRoom6ToBShowRoom5)], //b_show_room6
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
  [new THREE.Vector3(-3941.23, 277.68, -3049.87)], //door
];

doorImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtDoor[0][0], 0);
});
//走道----------------------------------------------------------------
var lookAtAisle = [
  [], //aisle1
  [position(aisle2ToAisle3), position(aisle2ToDoor)], //aisle2
  [position(aisle3ToAisle4), position(aisle3ToAisle2)], //aisle3
  [position(aisle4ToAisle5), position(aisle4ToAisle3)], //aisle4
  [position(aisle5ToAisle6), position(aisle5ToAisle4)], //aisle5
  [position(aisle6ToAisle7), position(aisle6ToAisle5)], //aisle6
  [position(aisle7TodevelopmentDoor), position(aisle7ToAisle6)], //aisle7
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
// aisle1Image.addEventListener("enter-fade-start", function () {
//   focusAisle(lookCheck, 0);
// });

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

//廠區----------------------------------------------------------------
var lookAtStorehouse = [
  [position(storehouse8toStorhouse7), position(storehouse8toDevelopment)], //storehouse8
  [position(storehouse7toStorhouse6), position(storehouse7toStorhouse8)], //storehouse7
  [
    position(storehouse6toStorhouse5),
    position(storehouse6toStorhouse7),
    new THREE.Vector3(-1000, 0, 0),
  ], //storehouse6
  [position(storehouse5toStorhouse4), position(storehouse5toStorhouse6)], //storehouse5
  [
    position(storehouse4toStorhouse3),
    position(storehouse4toStorhouse5),
    new THREE.Vector3(0, 0, 0),
  ], //storehouse4
  [position(storehouse3toStorhouse1), position(storehouse3toStorhouse4)], //storehouse3
  [position(storehouse2toStorhouse1), new THREE.Vector3(-350, -500, 5000)], //storehouse2
  [new THREE.Vector3(5000, -500, 0), new THREE.Vector3(0, 0, 500)], //storehouse1
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
      viewer.tweenControlCenter(lookAtStorehouse[index][2], 0);
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
//廠區二樓----------------------------------------------------------------------
var lookAtStorehouse2F = [
  [
    new THREE.Vector3(700, 300, -2500),
    position(storehouse2F1toStorehouse2F2),
    position(storehouse2F1toStorehouse8),
  ], //2F1
  [
    position(storehouse2F2toStroehouse2F3),
    position(storehouse2F2toStroehouse2F1),
  ], //2F2
  [
    position(storehouse2F3toStroehouse2F4),
    position(storehouse2F3toStroehouse2F2),
  ], // 2F3
  [
    position(storehouse2F4toStroehouse2F5),
    position(storehouse2F4toStroehouse2F3),
  ], //2F4
  [new THREE.Vector3(0, -500, -3000), position(storehouse2F5toStroehouse2F4)], //2F5
  [new THREE.Vector3(3000, -500, 0)], //2F6
  [new THREE.Vector3(5000, -500, 0)], //視聽教室
];
function focusStorehouse2F(key, index) {
  switch (key) {
    case true:
      viewer.tweenControlCenter(lookAtStorehouse2F[index][0], 0);
      break;
    case false:
      viewer.tweenControlCenter(lookAtStorehouse2F[index][1], 0);
      break;
    default:
      viewer.tweenControlCenter(lookAtStorehouse2F[index][2], 0);
      break;
  }
}
storehouse2F1Image.addEventListener("enter-fade-start", function () {
  focusStorehouse2F(lookCheck, 0);
});

storehouse2F2Image.addEventListener("enter-fade-start", function () {
  focusStorehouse2F(lookCheck, 1);
});
storehouse2F3Image.addEventListener("enter-fade-start", function () {
  focusStorehouse2F(lookCheck, 2);
});
storehouse2F4Image.addEventListener("enter-fade-start", function () {
  focusStorehouse2F(lookCheck, 3);
});
storehouse2F5Image.addEventListener("enter-fade-start", function () {
  focusStorehouse2F(lookCheck, 4);
});
storehouse2F6Image.addEventListener("enter-fade-start", function () {
  focusStorehouse2F(lookCheck, 5);
});
storehouse2F7Image.addEventListener("enter-fade-start", function () {
  focusStorehouse2F(lookCheck, 6);
});
//廠區三樓----------------------------------------------------------------------
var lookAtStorehouse3F = [
  [
    position(storehouse3F1toStorehouse3F3),
    position(storehouse3F1toStorehouse3F2),
    new THREE.Vector3(-3000, -500, 0),
  ], //3F1
  [
    position(storehouse3F3toStorehouse3F4),
    position(storehouse3F3toStorehouse3F1),
  ], //3F3
  [
    position(storehouse3F4toStorehouse3F5),
    position(storehouse3F4toStorehouse3F3),
  ], //3F4
];
function focusStorehouse3F(key, index) {
  switch (key) {
    case true:
      viewer.tweenControlCenter(lookAtStorehouse3F[index][0], 0);
      break;
    case false:
      viewer.tweenControlCenter(lookAtStorehouse3F[index][1], 0);
      break;
    default:
      viewer.tweenControlCenter(lookAtStorehouse3F[index][2], 0);
      break;
  }
}
storehouse3F1Image.addEventListener("enter-fade-start", function () {
  focusStorehouse3F(lookCheck, 0);
});
storehouse3F3Image.addEventListener("enter-fade-start", function () {
  focusStorehouse3F(lookCheck, 1);
});
storehouse3F4Image.addEventListener("enter-fade-start", function () {
  focusStorehouse3F(lookCheck, 2);
});
//小展示間----------------------------------------------------------------
showRoomImage.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[4][0], 0);
});

//行政大樓門廊----------------------------------------------------------------
// administrativePorchImage.addEventListener("enter-fade-start", function () {
//   if (lookCheck) {
//     viewer.tweenControlCenter(lookAtPositions[0][0], 0);
//   } else {
//     viewer.tweenControlCenter(lookAtPositions[0][1], 0);
//   }
// });
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
  [4300, -1500, -7500],
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

//控制左上menu
var menuBtn = document.querySelector(".menu-box__menu");
var mapBtn = document.querySelector(".menu-box__map");

var mapMenu = document.querySelector(".map-box");
var infoMenu = document.querySelector(".guide-box");

//獲取會議室menu區塊
var allInfoBtn = infoMenu.getElementsByTagName("button");
var meetingMenu = document.querySelector(".meeting-info");

var point = document.querySelector(".point");

menuBtn.addEventListener("click", function () {
  infoMenu.classList.toggle("active");
  //加上infoMenu下滑動畫
  if (infoMenu.className.indexOf("active") !== -1) {
    infoMenu.style.animation = "boxMoveDown 0.5s forwards";
    for (let index = 0; index < allInfoBtn.length; index++) {
      allInfoBtn[index].addEventListener("mousemove", function () {
        if (index === 2) {
          meetingMenu.classList.add("active", "InfoMoveDown");
        } else {
          meetingMenu.classList.remove("active", "InfoMoveDown");
        }
      });
    }
    meetingMenu.addEventListener("mouseleave", function () {
      this.classList.remove("active", "InfoMoveDown");
    });
  }
  if (mapMenu.className.indexOf("active") !== -1) {
    mapMenu.classList.toggle("active");
    point.classList.toggle("active");
  }
  //關閉第二層導覽
  if (meetingMenu.className.indexOf("active") !== -1) {
    meetingMenu.classList.toggle("active");
  }
});

mapBtn.addEventListener("click", function () {
  mapMenu.classList.toggle("active");
  point.classList.toggle("active");
  if (infoMenu.className.indexOf("active") !== -1) {
    infoMenu.classList.toggle("active");
  }
  //關閉第二層導覽
  if (meetingMenu.className.indexOf("active") !== -1) {
    meetingMenu.classList.toggle("active");
  }
});
