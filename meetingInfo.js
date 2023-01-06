function btnFunction(selectDataId, btn) {
  if (!btn) {
    let openDom = document.querySelector(".active-menu");
    if (openDom !== null) {
      openDom.classList.toggle("active-menu");
    }
  }
  if (selectDataId !== -1) {
    let getDom = document.getElementById(selectDataId);
    getDom.classList.toggle("active-menu");
  }
}
fetch("meetingInfo.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (infos) {
    console.log('infos',infos);
    let placeData = document.querySelector(".info-container");
    let out = "";
    infos.map(
      (dom, index) =>
        (out += `
        <div class="meeting-menu ${dom.more_img ? "more-img" : ""}" id="${index + 1}">
            <img src="${dom.image_one}" alt=""></img>
            <img src="${dom.image_two}" alt=""></img>

            <div class="info">
                <div class="title">${dom.title}</div>

                <span>
                    ${dom.introduction}
                </span>

                <p>
                    ${dom.content}
                </p>                
            </div>

            <button class="close-btn" onclick="btnFunction(${index + 1},true)">
                <span >關閉</span>
            </button>
        </div>
        `)
    );
    placeData.innerHTML = out;
  });
