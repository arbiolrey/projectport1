import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import picture7 from '../img/nemsuan.jpg';
import picture8 from '../img/hes.jpg';

class Education extends Component {
    render() {
        return (
            <div className="condiv3">
            <h1 className="subtopic">My Education</h1>
            <h4>Computer Sciences</h4>
     
            <Widecard title="" where="Nemsu-LC" from="Ausgust 23" to="Present"/> 
             <img src={picture7} alt="Pic" className="picture7"></img>
             <h4> SNNHS / HES</h4>
            <Widecard title="" where="Senior and Secondary School" from="2010" to="2018"/>
            <img src={picture8} alt="Pic" className="picture8"></img>
            </div>
            )
        }
    }
    
export default Education
    