import React, { Component } from 'react';
import picture from '../img/tuga.JPG';



class About extends Component {
    render() {
        return (
            <div className="condiv4">
            <h2>Hi welcome my about,</h2>
            <img src={picture} alt="Pic" className="picture"></img>
            <h3>About My Self :</h3>
            <h3>I'm Rey Sinso Arbiol </h3>
            <h3>I'm 26 yrs old now </h3>
            <br></br>
            <p1>         I started my journey in  computers sciences from an young age,
                now I’m 23 years old, Pursuing my Degree in Nemsu North Estern mindanao State University, 
            </p1>
            
            </div>
            )
        }
    }
    
export default About
    