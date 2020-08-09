import React from 'react';
import './index.css';
import Components from './Components';
class App extends React.Component{
      constructor()
      {
          super();
          this.state={
            hover:false,
            position:'top'
          }
      }
      //Handling the press button when mouse hover over it
      handleMouseIn = () => {
        this.setState({ hover: true })
      }
      // when mouse is out from the button
      handleMouseOut = () => {
        this.setState({ hover: false })
      }
      //Option Selected from dropdown menu
      handlePosition = () =>{
        let pos=document.getElementById("Positions");
        let val=pos.value;
        console.log(val);
        this.setState({ position: val })
        //console.log("new");
        //console.log(this.state.position);
      }
      // handling tooltip direction on the basis of option selected from drop down menu
      handletooltip =()=>{
        let tip=document.getElementById("text");
        const {position}=this.state;
        const {hover}=this.state;
        //console.log(this.state.position);
        // when dropdwon selected menu is top
        if(position ==='top')
        {
           tip.style.marginTop="-100px";
           tip.style.marginLeft="40px";
        }
        // when dropdwon selected menu is bottom

        else if(position ==='bottom')
        {
           tip.style.marginLeft="40px";
           tip.style.marginTop="50px"
        }
       // when dropdwon selected menu is left
        else if(position ==='left')
        {
           tip.style.marginLeft="-150px";
           tip.style.marginTop="-30px";
        }
        // when dropdwon selected menu is right

        else
        {
          tip.style.marginLeft="230px";
          tip.style.marginTop="-30px";

        }
      }
     // }
      render()
      {
        // Rendering Tooltip component
        return( 
            <Components hover={this.state.hover} handleMouseIn={this.handleMouseIn}  handleMouseOut={this.handleMouseOut}  
            handlePosition={this.handlePosition}  handletooltip={this.handletooltip} />
        );
      }
}
export default App;
