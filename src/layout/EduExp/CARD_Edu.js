import React from "react";
import sprite from "./ICON_sprite.svg";
import "./CARD_edu.scss";
import "./_CARD_edu.scss";

import { info } from "./info/info";

const CardEdu = () => {
  return (
    <>
      {info.map((ele) => {
        return (
          <div key={ele.title} className="CardEdu">
            <div className="CardEdu_IMG_Con">
              <img src={ele.image}></img>
            </div>

            <div className="CardEdu_INFO_Con">

              <div className='CardEdu_INFO_Con_Partitoin Partitoin_up'>
                  <div className="CardEdu_header">
                        {ele.icon}
                        <h3 extrainfo={ele.date} className="CardEdu_header_main_title">
                          {ele.title} <span className="CardEdu_header_year"> </span>
                        </h3>
                  </div>
              </div>

              <div className='CardEdu_INFO_Con_Partitoin Partitoin_down '>
                  <h4 className="CardEdu_second_title">{ele.subtitle}</h4>
                  <p className="CardEdu_paragraph">{ele.brief}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardEdu;
