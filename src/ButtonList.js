import React,{Component} from "react";
import Button from "./Button";
class ButtonList extends Component{
    static defaultProps = {
        colors: ["tomato","pink","green","cyan"]
    }
    constructor(props){
        super(props);
        this.state ={
            colorx : "grey"
        }
        
    }

   

    changeColor(newColor){
        this.setState({colorx:newColor})
    }

    render(){
        return(
          <div className="ButtonList-container" style={{ backgroundColor: this.state.colorx }} >
              {this.props.colors.map(color=>{
                
            return  <Button
            style={{ backgroundColor: color }}
            onClick={ this.changeColor.bind(this,color)}
             />

            })}
          </div>
        )
    }

}

export default ButtonList;