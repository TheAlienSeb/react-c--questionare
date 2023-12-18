import React, {component} from "react";

class play extends Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increaseCount = () =>{
        this.setState({
            counter: 5
        });
    };
    render() {
        return(
            <div>
            <p>Counter: {this.state.counter} </p>
            <button onClick={this.increaseCount}>click me</button>
            </div>
        );
    }
}


export default play;