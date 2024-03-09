import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    constructor() {
        super()
        this.state = {


            name1: "Bangalore to fdkljjkfhdsifh",
            name2: "Gujarat to bharat",
            welcome: "Welcome to Edureka",
            value: 0
        }
    }

    handleIncrement = () => {
        let { value } = this.state;
        this.setState({ value: value + 1 });
    }

    handleDecrement = () => {
        let { value } = this.state;
        this.setState({ value: value - 1 });
    }

    render() {
        const { value, welcome, name1, name2 } = this.state
        return (
            <div>

                <Child name3="Delhi" />
                {/* <Child name4={this.state.name1} /> */}
                <Child name4={name1} />
                <br />
                {/* {this.state.welcome} */}
                {welcome}
                <br />
                Parent Component
                <br />
                <h2>{value}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>

                <br />
                {/* <Child name5={this.state.name2} /> */}
                <Child name5={name2} />
                <Child name6="Pune" />

            </div>
        )
    }


}
export default Parent;
