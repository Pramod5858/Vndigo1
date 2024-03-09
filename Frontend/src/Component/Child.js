import React from "react";

class Child extends React.Component{
    render(){
        return(
            <div>
                Child Component


                Wel COme to "{this.props.name3}"
                Wel COme to "{this.props.name4}"
                Wel COme to "{this.props.name5}"
                Wel COme to "{this.props.name6}"
            </div>
        )
    }
}
export default Child