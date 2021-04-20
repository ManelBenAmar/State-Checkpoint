import React, { Component } from "react";
import "./Person.css";
import MyWonderfulPhoto from "./Web photo.jpg";
export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Manel Ben Amar",
            bio: "GO MY CODE student",
            profession: "Web Developer",
        };
    }

    render() {
        return (
            <div className="user">
                <br />
                <img
                    src={MyWonderfulPhoto}
                    alt="me"
                    style={{ height: "300px" }}
                />
                <br />
                <h1>{this.state.fullName}</h1>
                <h2>{this.state.bio}</h2>
                <h2>{this.state.profession}</h2>
            </div>
        );
    }
}
