import React, { useState } from 'react';
import './Feat_proj.scss';
import './Feat_projCanvs.scss';
import Info from './Feat_projInfo';
import './Feat_projBtn.scss';
import './Feat_projBtn_MatEditor.scss';
import MyPlotly from '../../components/plotly/MyPlotly';
import NumericInput from './numericInput/NumericInput';
import sprite from './sprity.svg';
import { ReactComponent as GraphHint } from './graph_hint.svg';

export default function Feat_proj() {
  const [mulMatrix, setMulMatrix] = useState([1, 0, 0, 0, 2, 0, 0, 0, 1]);
  const [bgcolor, setBGcolor] = useState("#eeeeee");
  const [showCanvas, setShowCanvas] = useState(false);

  // Icons
  const matrix_Icon = (
    <svg className="ftP-svg">
      <use href={sprite + "#matrix"}></use>
    </svg>
  );

  const graph_Icon = (
    <svg className="ftP-svg">
      <use href={sprite + "#graph"}></use>
    </svg>
  );

  const theme_Icon = (
    <svg className="ftP-svg">
      <use href={sprite + "#theme"}></use>
    </svg>
  );

  const exit_Icon = (
    <svg className="ftP-svg">
      <use href={sprite + "#exit"}></use>
    </svg>
  );

  function toggleShowCanvas() {
    setShowCanvas((s) => !s);
  }

  function onMatChange(value, index) {
    let temp = [...mulMatrix];
    temp[index] = value;
    setMulMatrix(temp);
  }

  function colorChanged() {
    setBGcolor((c) => c === "#eeeeee" ? "#111111" : "#eeeeee");
  }

  return (
    <section className='ftStrip'>
      <div className="ftStrip_titleCon">
        <div className='ftStrip_titleCon-flip '>
          <h2 className='title'>
            3D Matrix Space Simulator
          </h2>
        </div>
      </div>

      <div className='ftStrip_canvasCon'>
        <Info></Info>
        <div className={'ftStrip_canvas ' + (showCanvas || ' moveOutScreen')}>
          <div className='ftStrip_canvas_btnCon'>
            <div className='ftStrip_canvas_btnCon_btn ftStrip_canvas_btnCon_btn-color' onClick={colorChanged}>
              {theme_Icon}
            </div>
            <div className='ftStrip_canvas_btnCon_btn ftStrip_canvas_btnCon_btn-info' onClick={toggleShowCanvas}>
              {showCanvas ? exit_Icon : graph_Icon}
              <GraphHint className="see_the_graph_SVG" />
            </div>
            <div className='ftStrip_canvas_btnCon_btn ftStrip_canvas_btnCon_btn-matEditor'>
              {matrix_Icon}
              <input className='ftStrip_canvas_btnCon_btn-matEditor_checkbox' type='checkbox' />
              <div className='ftStrip_canvas_btnCon_btn-matEditor_EditorCon'>
                <input className='ftStrip_canvas_btnCon_btn-matEditor_EditorCon_checkbox' type='checkbox' />
                {mulMatrix.map((elem, i) =>
                  <NumericInput initvalue={elem} change={onMatChange} key={`a${i}`} index={i} />
                )}
              </div>
            </div>
          </div>

          <div className='ftStrip_canvas_Decor-1'>
            <div className='ftStrip_canvas_Decor-2'>
              <MyPlotly mulMatrix={mulMatrix} bgcolor={bgcolor}></MyPlotly>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
