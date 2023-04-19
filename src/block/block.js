import "../block/block.css";
import React from "react";
import img from "../block/img.png";
import img2 from "../block/img2.png";
import icon from "../block/icon.png";

function Block() {
  return (
    <div className="conteiner1">
      <div className="lift">
        <div className="top">
          <div className="user">
            <img className="img2" src={img2} />
            <p className="b1">Authors name</p>
            <p className="b2">in</p>
            <p className="b1">Topics Name</p>
            <p className="b2">·</p>
            <p className="b2">7 july</p>
          </div>
          <div className="news">7 Practical CSS Tips</div>
          <div className="main">
            You not only learn more Python by implementing what you already know
            but, in the end, you can see how all your hard work pays off.
          </div>
        </div>
        <div className="bottom">
          <div className="botMenu">
            <button className="but">Java Script</button>
            <p>12 min read</p>
            <p>·</p>
            <p>Selected for you</p>
          </div>
          <div className="icons">
            <img src={icon} />
            <img src={icon} />
            <img src={icon} />
          </div>
        </div>
      </div>

      <img className="image" src={img} />

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Kanit:ital,wght@0,100;0,400;0,500;1,400&display=swap');
      </style>
    </div>
  );
}
export default Block;
