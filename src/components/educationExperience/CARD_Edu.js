import React from "react";
import "./CARD_edu.scss";
import "./_CARD_edu.scss";

import { info } from "./info/info";
const CardEdu = () => {
  return (
    <>
      {info.map((ele) => {
        // Split the brief content into an array by bullet points
        const briefLines = ele.brief.split('• ').filter(line => line);

        return (
          <div key={ele.title} className="CardEdu">
            <div className="CardEdu_IMG_Con">
              <img src={ele.image} alt=""></img>
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
                  <p className="CardEdu_paragraph">
                    {/* Render each line with a bullet point and a break */}
                    {briefLines.map((line, index) => (
                      <React.Fragment key={index}>
                        {/* Add the bullet point back except for the first line */}
                        {index > 0 && '• '}
                        {line}
                        {/* Add a break if it's not the last line */}
                        {index < briefLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardEdu;
