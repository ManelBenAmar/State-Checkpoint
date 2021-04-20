import React, { Component } from "react";
import Person from "./components/Person/Person";
import Time from "./components/Time/Time";
import "./App.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.togglebutton = () => {
            this.setState({ show: !this.state.show });
        };
    }

    render() {
        return (
            <div className="App">
                <h1>Welcome to react state checkpoint</h1>
                <button onClick={() => this.togglebutton()}>
                    {this.state.show ? "hidden" : "show"}{" "}
                </button>
                {this.state.show ? <Person /> : null}
                <Time />
            </div>
        );
    }
}
