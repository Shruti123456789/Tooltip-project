import React from 'react';
// Tooltip Component
const Components = (props) => { 
    const styles={
        display: props.hover ? 'block':'none'   
      }
    return (
        <div className="App">
          <div className="container">
          <div className="optionSelection" onClick={props.handlePosition}>
          <span>Select the Position of tooltip</span>
            <select id="Positions" >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
           </select>
          </div>
          <div ClassName="button">
              <button id="button" onMouseEnter={props.handleMouseIn} onMouseLeave={props.handleMouseOut} onMouseOver={props.handletooltip}>Press</button>
              <div id="text" style={styles} >Happy Tooltip</div>
          </div>
          </div>
          </div>
          
          );
          
    } 
    
export default Components;
  
