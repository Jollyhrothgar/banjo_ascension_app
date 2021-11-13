import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

/**
 * Defines a measure of tableture using an SVG box. These boxes are smashed
 * together with CSS.
 * 
 * @param {*} props = {
 *   state: {
 *     notes: The notes to be played in the measure
 *     nstrings: The number of strings in the tableture,
 *     box: {
 *       height: the height of the svg box containing the measure,
 *       width: the width of the svg box containing the measure,
 *       vertical_measure_scaling: the scale factor that shrinks the tableture
 *     }
 *   }
 * } 
 * @returns 
 */
function TabMeasure(props) {

  let measure_height = props.state.box.height * props.state.box.vertical_measure_scaling;
  let measure_height_offset = (props.state.box.height - measure_height) * 0.5;
  let nstrings = props.state.nstrings;
  let vertical_line_spacing = measure_height / (nstrings - 1);
  // 0 = 1st string, 1 = 2nd string, ...
  // TODO: why can't this be mapped properly?
  // let str_height = [];
  // for(let i = 0; i < nstrings; i++){
  //   str_height.push(measure_height_offset + i * vertical_line_spacing);
  // }
  return (
    <svg
      width={`${props.state.box.width}px`}
      height={`${props.state.box.height}`}
      className=""
    >

      {/* TabMeasure Lines  */}
      <line
        x1={0}
        y1={measure_height_offset}
        x2={props.state.box.width}
        y2={measure_height_offset}
        stroke="black"
        strokeWidth={2}/>
      <line
        x1={0}
        y1={measure_height_offset + vertical_line_spacing}
        x2={props.state.box.width}
        y2={measure_height_offset + vertical_line_spacing}
        stroke="black"
        strokeWidth={2}/>
      <line
        x1={0}
        y1={measure_height_offset + 2.0 * vertical_line_spacing}
        x2={props.state.box.width}
        y2={measure_height_offset + 2.0 * vertical_line_spacing}
        stroke="black"
        strokeWidth={2}/>
      <line
        x1={0}
        y1={measure_height_offset + 3.0 * vertical_line_spacing}
        x2={props.state.box.width}
        y2={measure_height_offset + 3.0 * vertical_line_spacing}
        stroke="black"
        strokeWidth={2}/>
      <line
        x1={0}
        y1={measure_height_offset + 4.0 * vertical_line_spacing}
        x2={props.state.box.width}
        y2={measure_height_offset + 4.0 * vertical_line_spacing}
        stroke="black"
        strokeWidth={2}/>

      {/* TabMeasure Edges */}
      <line
        x1={0}
        y1={measure_height_offset}
        x2={0}
        y2={measure_height_offset + 4.0 * vertical_line_spacing}
        stroke="black"
        strokeWidth={2}/>
      <line
        x1={props.state.box.width}
        y1={measure_height_offset}
        x2={props.state.box.width}
        y2={measure_height_offset + 4.0 * vertical_line_spacing}
        stroke="black"
        strokeWidth={2}/>

      {/*Render Notes*/}
      <text x="20" y="35" className="small">{props.state.notes}</text>
    </svg>
  )
}

function Composer(props) {

  let measures = [];

  for( let i = 0; i < 16; i++) {
    measures.push({
      notes: "a, b, c, d",
      nstrings: 5.0,
      box: {
        width: 300,
        height: 120,
        vertical_measure_scaling: 0.5
      }
    });
  }


  return (
    <div className="score devbox">
      {/* TODO: add a unique key */}
      {measures.map((state) => <TabMeasure state={state} />)}
    </div>
  );
};

ReactDOM.render(
  <Composer />,
  document.getElementById("root")
);