import React,{Component} from "react";
import "./Button.css"
class Button extends Component{
    render(){
        return(
            <button
             style={this.props.style}
             onClick={this.props.onClick}
             >Click ME !</button>
        )
    }
}

export default Button;