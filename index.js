const model = [{
    title:"7 Practical CSS Tips",
    caption:"You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic:"JavaScript",
    date:"7 july",
    author:"erke",
},{
    title:"7 Practical CSS Tips",
    caption:"You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic:"JavaScript",
    date:"7 july",
    author:"erke",
},{
    title:"7 Practical CSS Tips",
    caption:"You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic:"JavaScript",
    date:"7 july",
    author:"erke",
}];

const mainDiv = document.getElementById("Main");

model.map((item, _index) =>{
    const html = `<div id="Main">
    <div class="conteiner1">
    <div class="left">
        <div class="left01">    
            <img class="img2" src="./Img (2).png">
        <div class="s1">${item.author}</div>    
        <div class="s2">in</div> 
        <div class="s3">Topics Name</div> 
        <div class="s4">.</div> 
        <div class="s5">${item.date}</div> 
        </div>
        <div class="left02">${item.title}</div>
        <div class="left03">${item.caption}</div>
        <div class="left04">
            <div class="infoBottom">
                <button class="but">Java Script</button>
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
     <img class="img1" src="./Img.png">
     </div>
     



</div>`;
mainDiv.innerHTML += html;
});