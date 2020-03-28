import React from "react";
import "./Social.scss";

const Social = ({screenSize}) => {
  const handleClick = link => {
    window.open(link);
  };
  console.log(screenSize)
  return (
    <div className={`icon-list social${screenSize === "mobile" ? "-mobile":"-desktop"}`}>
      <i
        className="nes-icon github is-medium navbar-social nes-pointer"
        onClick={() => handleClick("https://github.com/hubeen")}
      />
      <a href="mailto:mhubeen@gmail.com">
        <i className="social nes-icon gmail is-medium navbar-social nes-pointer" />
      </a>
      <i
        className="nes-icon facebook is-medium navbar-social nes-pointer"
        onClick={() => handleClick("https://fb.com/mhubeen")}
      />
      <i
        className="nes-icon star is-medium navbar-social nes-pointer"
        onClick={()=> handleClick("https://blog.naver.com/mhubeen")}
      />
    </div>
  );
};

export default Social;
