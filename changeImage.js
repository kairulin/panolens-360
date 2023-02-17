// 改變場景
function changeFunction(img, product) {
  switch (img) {
    case "aisle1":
      point.style.top = "85%";
      point.style.left = "40%";

      btnFunction(-1, false);
      viewer.setPanorama(aisle1Image);
      break;
    case "aisle2":
      point.style.top = "77%";
      point.style.left = "40%";

      btnFunction(-1, false);
      viewer.setPanorama(aisle2Image);
      break;
    case "aisle3":
      point.style.top = "65%";
      point.style.left = "40%";

      btnFunction(-1, false);
      viewer.setPanorama(aisle3Image);
      break;
    case "aisle4":
      point.style.top = "50%";
      point.style.left = "40%";

      btnFunction(-1, false);
      viewer.setPanorama(aisle4Image);
      break;
    case "aisle5":
      point.style.top = "40%";
      point.style.left = "40%";

      btnFunction(-1, false);
      viewer.setPanorama(aisle5Image);
      break;
    case "aisle6":
      point.style.top = "25%";
      point.style.left = "40%";

      btnFunction(-1, false);
      viewer.setPanorama(aisle6Image);
      break;
    case "aisle7":
      point.style.top = "13%";
      point.style.left = "45%";

      btnFunction(-1, false);
      viewer.setPanorama(aisle7Image);
      break;
    case "developmentDoor":
      point.style.top = "13%";
      point.style.left = "50%";

      btnFunction(-1, false);
      viewer.setPanorama(developmentDoorImage);
      break;
    case "development":
      point.style.top = "20%";
      point.style.left = "50%";
      btnFunction(-1, false);
      viewer.setPanorama(developmentImage);
      break;
    case "showRoom":
      btnFunction(-1, false);
      viewer.setPanorama(showRoomImage);
      break;
    case "bshowRoom1":
      btnFunction(-1, false);
      viewer.setPanorama(bShowRoom1Image);
      break;
    case "bshowRoom2":
      btnFunction(-1, false);
      viewer.setPanorama(bShowRoom2Image);
      break;
    case "bshowRoom3":
      btnFunction(-1, false);
      viewer.setPanorama(bShowRoom3Image);
      break;
    case "bshowRoom4":
      btnFunction(-1, false);
      viewer.setPanorama(bShowRoom4Image);
      break;
    case "bshowRoom5":
      btnFunction(-1, false);
      viewer.setPanorama(bShowRoom5Image);
      break;
    case "bshowRoom6":
      btnFunction(-1, false);
      viewer.setPanorama(bShowRoom6Image);
      break;
    case "bshowRoom7":
      btnFunction(-1, false);
      viewer.setPanorama(bShowRoom7Image);
      break;
    case "administrativePorch":
      point.style.top = "77%";
      point.style.left = "47%";

      btnFunction(-1, false);
      viewer.setPanorama(administrativePorchImage);
      break;
    case "administrative":
      point.style.top = "77%";
      point.style.left = "55%";

      btnFunction(-1, false);
      viewer.setPanorama(administrativeImage);
      break;
    case "meeting":
      point.style.top = "77%";
      point.style.left = "55%";
      
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
    case "storehouse8":
      point.style.top = "25%";
      point.style.left = "50%";

      btnFunction(-1, false);
      viewer.setPanorama(storehouse8Image);
      break;
    case "storehouse7":
      point.style.top = "30%";
      point.style.left = "50%";

      btnFunction(-1, false);
      viewer.setPanorama(storehouse7Image);
      break;
    case "storehouse6":
      point.style.top = "35%";
      point.style.left = "50%";

      btnFunction(-1, false);
      viewer.setPanorama(storehouse6Image);
      break;
    case "storehouse5":
      point.style.top = "45%";
      point.style.left = "50%";

      btnFunction(-1, false);
      viewer.setPanorama(storehouse5Image);
      break;
    case "storehouse4":
      point.style.top = "50%";
      point.style.left = "50%";

      btnFunction(-1, false);
      viewer.setPanorama(storehouse4Image);
      break;
    case "storehouse3":
      point.style.top = "55%";
      point.style.left = "50%";

      btnFunction(-1, false);
      viewer.setPanorama(storehouse3Image);
      break;
    case "storehouse2":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse2Image);
      break;
    case "storehouse1":
      point.style.top = "65%";
      point.style.left = "50%";

      btnFunction(-1, false);
      viewer.setPanorama(storehouse1Image);
      break;
    case "storehouse2F1":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse2F1Image);
      break;
    case "storehouse2F2":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse2F2Image);
      break;
    case "storehouse2F3":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse2F3Image);
      break;
    case "storehouse2F4":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse2F4Image);
      break;
    case "storehouse2F5":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse2F5Image);
      break;
    case "storehouse2F6":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse2F6Image);
      break;
    case "storehouse2F7":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse2F7Image);
      break;
    case "storehouse3F1":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse3F1Image);
      break;
    case "storehouse3F2":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse3F2Image);
      break;
    case "storehouse3F3":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse3F3Image);
      break;
    case "storehouse3F4":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse3F4Image);
      break;
    case "storehouse3F5":
      btnFunction(-1, false);
      viewer.setPanorama(storehouse3F5Image);
      break;
    default:
      point.style.top = "90%";
      point.style.left = "40%";

      btnFunction(-1, false);
      viewer.setPanorama(doorImage);
      break;
  }
}
