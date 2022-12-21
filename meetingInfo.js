// fetch("meetingInfo.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (infos) {
//     let placeData = document.querySelector(".meeting-info-output");
//     let out = "";
//     for (let info of infos) {
//       out += `
//         <div class="${info.class_name}">

//             <img src="${info.image_one}" alt=""></img>
//             <img src="${info.image_two}" alt=""></img>

//             <div class="info">
//                 <div class="title">${info.title}</div>

//                 <span>
//                     ${info.introduction}
//                 </span>

//                 <p>
//                     ${info.content}
//                 </p>                
//             </div>

//             <button class="close-btn" onclick="closeFunction(${info.button_id})">
//                 <span >關閉</span>
//             </button>
//         </div>
//         `;
//     }
//     // console.log('out',out);
//     // console.log('placeData',placeData);
//     placeData.innerHTML = out;
//   });
