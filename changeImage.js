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
