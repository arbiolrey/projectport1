import React, { Component } from 'react';
import Social from '../components/Social';
import picture9 from '../img/about1.JPG';
class Contact extends Component {
    render() {
        return (
            <div className="condiv5"> 
            <img src={picture9} alt="Pic" className="picture9"></img>
            <h1 className="subtopic">Contact <span>Me!</span></h1>

            
            <div class="input-box"> 
             </div>
            <input type="text" placeholder="Full Name"></input>
            <input type="email" placeholder="Email Address"></input>
            <div>
            </div><br></br>
            <input type="number" placeholder="Mobile Number"></input>
            <input type="text" placeholder="Email Subject"></input>
            <div>
            </div><br></br>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea><br></br>
            <input type="submit" value="send Message" class="btn"></input>
        
            <div>
            </div>
            <Social />
    
            </div>
            )
        }
        
    }
    
    export default Contact
    