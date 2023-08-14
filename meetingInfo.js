function btnFunction(selectDataId, btn) {
  if (!btn) {
    let openDom = document.querySelector(".active-menu");
    if (openDom !== null) {
      openDom.classList.toggle("active-menu");
    }
  }
  if (selectDataId !== -1) {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          (entry.target.className === "meeting-menu more-img active-menu" ||
            entry.target.className === "meeting-menu active-menu")
        ) {
          Object.values(entry.target.children).forEach((data) => {
            let childImageUrl = data.getAttribute("data-img");
            if (childImageUrl) {
              data.src = childImageUrl;
              observer.unobserve(entry.target);
            }
          });
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.getElementById(selectDataId));

    let getDom = document.getElementById(selectDataId);
    getDom.classList.toggle("active-menu");
    console.log('檢查', getDom)
  }
}

fetch("meetingInfo.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (infos) {
    let placeData = document.querySelector(".info-container");
    let out = "";
    infos.map((dom, index) => {
      out += `
        <div class="meeting-menu ${dom.more_img ? "more-img" : ""}" id="${
        index + 1
      }">
        <img data-img="${dom.image_one}" alt=""></img>
        <img data-img="${dom.image_two}" alt=""></img>
        
        <div class="info">
                <div class="title">${dom.title}</div>

                <span>
                ${dom.introduction}
                </span>
                
                <p>
                ${dom.content}
                </p>                
                </div>
                
                <button class="close-btn" onclick="btnFunction(${
                  index + 1
                },true)">
                <span >關閉</span>
            </button>
            </div>
            `;
    });

    placeData.innerHTML = out;
  });
