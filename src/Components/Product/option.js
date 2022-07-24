import React, { Component } from "react";

class Option extends Component{
    render(){
        let select='';
        if(this.props.id==this.props.value)
        {
                 select='selected';
        }
        return(
            <>
              <option value={this.props.value}   selected={select}>{this.props.name}</option>
            </>
        )
    }
}
export default Option;