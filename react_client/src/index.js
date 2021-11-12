import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Score(props) {
  return (
    <div>Todo...</div>
  );
}

function ScoreLine(props) {
  return (
    <div>Todo...</div>
  );
}

function Measure(props) {
  return (
    <div className="measure devbox"> 
      <div>
        {props.state.notes}
      </div>
      <div>
        <svg
          width={`${props.state.box.width}px`}
          height={`${props.state.box.height}`}
          className=""
        >

          {/* Measure Lines  */}
          <line
            x1={0}
            y1={0}
            x2={props.state.box.width}
            y2={0}
            stroke="black"
            stroke-width={2}/>
          <line
            x1={0}
            y1={props.state.box.height/4.0}
            x2={props.state.box.width}
            y2={props.state.box.height / 4.0}
            stroke="black"
            stroke-width={2}/>
          <line
            x1={0}
            y1={2.0 * props.state.box.height/4.0}
            x2={props.state.box.width}
            y2={2.0 * props.state.box.height / 4.0}
            stroke="black"
            stroke-width={2}/>
          <line
            x1={0}
            y1={3.0 * props.state.box.height/4.0}
            x2={props.state.box.width}
            y2={3.0 * props.state.box.height / 4.0}
            stroke="black"
            stroke-width={2}/>
          <line
            x1={0}
            y1={props.state.box.height}
            x2={props.state.box.width}
            y2={props.state.box.height}
            stroke="black"
            stroke-width={2}/>

          {/* Measure Edges */}
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={props.state.box.height}
            stroke="black"
            stroke-width={2}/>
          <line
            x1={props.state.box.width}
            y1={0}
            x2={props.state.box.width}
            y2={props.state.box.height}
            stroke="black"
            stroke-width={2}/>
        </svg>
      </div>
    </div>
  );
}

class Composer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dummy_state: "The state!",
    }
  }
  
  render () {
    return (
      <div className="composer devbox">
        <div>
          {this.state.dummy_state}
        </div>
        <div className="score">
          <Measure
            state={{
              notes: "a b c d",
              box: {
                width: 300,
                height: 100
              },
            }}
          />
          <Measure
            state={{
              notes: "1 2 3 4",
              box: {
                width: 400,
                height: 100
              },
            }}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Composer />,
  document.getElementById("root")
);