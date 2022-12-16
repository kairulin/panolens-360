//資訊
var bikeMenu = document.querySelector(".bike-menu");
var motorMenu = document.querySelector(".motor-menu");
var ledMenu = document.querySelector(".led-menu");
var medicalMenu = document.querySelector(".medical-menu");
var tireMenu = document.querySelector(".tire-menu");
var miniledMenu = document.querySelector(".miniled-menu");
var electricMenu = document.querySelector(".electric-menu");
var speakerMenu = document.querySelector(".speaker-menu");
var lensMenu = document.querySelector(".lens-menu");
var communicationMenu = document.querySelector(".communication-menu");
//  一開始把所有資訊關閉
function startClose(...props) {
  props.map((item) => (item.style.display = "none"));
}
startClose(
  bikeMenu,
  motorMenu,
  ledMenu,
  medicalMenu,
  tireMenu,
  miniledMenu,
  electricMenu,
  speakerMenu,
  lensMenu,
  communicationMenu
);
//關閉資訊
function closeFunction(selectData) {
  selectData.style.display = "none";
}

const meetingImage = new PANOLENS.ImagePanorama("images/meeting.jpg");
const doorImage = new PANOLENS.ImagePanorama("images/door.jpg");

const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

var bikeInfo,
  motorInfo,
  ledInfo,
  medicalInfo,
  tireInfo,
  miniLedInfo,
  electricInfo,
  speakerInfo,
  lensInfo,
  communicationInfo;
bikeInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
bikeInfo.position.set(5100, -1500, 5500);
bikeInfo.addHoverText("自行車資訊");
bikeInfo.addEventListener( 'click', function(){
  bikeMenu.style.display="flex"
} );

motorInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
motorInfo.position.set(5200, -1500, 2900);
motorInfo.addHoverText("電動汽車馬達資訊");
motorInfo.addEventListener( 'click', function(){
  motorMenu.style.display="flex"
} );

ledInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
ledInfo.position.set(5300, -1500, 100);
ledInfo.addHoverText("LDE車燈應用資訊");
ledInfo.addEventListener( 'click', function(){
  ledMenu.style.display="flex"
} );

medicalInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
medicalInfo.position.set(5400, -1500, -2500);
medicalInfo.addHoverText("醫療接著膠材資訊");
medicalInfo.addEventListener( 'click', function(){
  medicalMenu.style.display="flex"
} );

tireInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
tireInfo.position.set(5500, -1500, -5000);
tireInfo.addHoverText("胎壓偵測系統資訊");
tireInfo.addEventListener( 'click', function(){
  tireMenu.style.display="flex"
} );

miniLedInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
miniLedInfo.position.set(-5500, -1500, -5550);
miniLedInfo.addHoverText("MINI LED資訊");
miniLedInfo.addEventListener( 'click', function(){
  miniLedMenu.style.display="flex"
} );

electricInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
electricInfo.position.set(-5600, -1500, -3050);
electricInfo.addHoverText("電桿應用資訊");
electricInfo.addEventListener( 'click', function(){
  electricMenu.style.display="flex"
} );

speakerInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
speakerInfo.position.set(-5700, -1500, -500);
speakerInfo.addHoverText("微型揚聲器(聲學產業)資訊");
speakerInfo.addEventListener( 'click', function(){
  speakerInfoMenu.style.display="flex"
} );

lensInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
lensInfo.position.set(-5800, -1500, 2000);
lensInfo.addHoverText("光學鏡頭資訊");
lensInfo.addEventListener( 'click', function(){
  lensMenu.style.display="flex"
} );

communicationInfo = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
communicationInfo.position.set(-5900, -1500, 4550);
communicationInfo.addHoverText("5G-光通訊-光通訊資訊");
communicationInfo.addEventListener( 'click', function(){
  communicationMenu.style.display="flex"
} );

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
  communicationInfo
);

viewer.add(meetingImage, doorImage);
