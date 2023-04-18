"Use sctric";

async function getElements() {
  const response = await fetch(
    " https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl"
  );
  const resJson = await response.json();
  console.log(resJson.results);
  const res = resJson.results;
  console.log(res);

  const mainDiv = document.getElementById("Main");

  res.map((item,_index) => {
    const html = `
    <div class="conteiner1">
    <div class="left">
        <div class="left01">    
            <img class="img2" src="./Img (2).png">
        <div class="s1">${item.byline}</div>    
        <div class="s2">in</div> 
        <div class="s3">Topics Name</div> 
        <div class="s4">.</div> 
        <div class="s5">${item.updated_date}</div> 
        </div>
        <div class="left02">${item.title}</div>
        <div class="left03">${item.selection}</div>
        <div class="left04">
            <div class="infoBottom">
                <button class="but">${item.subsection}</button>
                <div class="min">12 min read</div>
                <div class="dot">·</div> 
                <div class="select">Selected for you</div>
            </div>
            <div class="square">
                <img src="./Icon (1).png">
                <img src="./Icon (1).png">
                <img src="./Icon (1).png">
            </div>
            

        </div>
     </div>
     <img class="img1" src="${item.multimedia[0].url}">
     </div>`;

    mainDiv.innerHTML += html;
  });
}

getElements();

// const mainDiv = document.getElementById("Main");

// model.map((item,) =>{
//     const html = `
//     <div class="conteiner1">
//     <div class="left">
//         <div class="left01">
//             <img class="img2" src="./Img (2).png">
//         <div class="s1">${item.author}</div>
//         <div class="s2">in</div>
//         <div class="s3">Topics Name</div>
//         <div class="s4">.</div>
//         <div class="s5">${item.date}</div>
//         </div>
//         <div class="left02">${item.title}</div>
//         <div class="left03">${item.caption}</div>
//         <div class="left04">
//             <div class="infoBottom">
//                 <button class="but">${item.topic}</button>
//                 <div class="min">12 min read</div>
//                 <div class="dot">·</div>
//                 <div class="select">Selected for you</div>
//             </div>
//             <div class="square">
//                 <img src="./Icon (1).png">
//                 <img src="./Icon (1).png">
//                 <img src="./Icon (1).png">
//             </div>

//         </div>
//      </div>
//      <img class="img1" src="./Img.png">
//      </div>`;
// mainDiv.innerHTML += html;
// });

// async function getElements (){
//     const response = await fetch(' https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl');
//     const resJson = await response.json();
//     console.log(resJson);
// }
// getElements();
