import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/font image.jpg';
import Social from '../components/Social'


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <p7> welcome my website!! </p7>
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Rey Sinso Arbiol','Computer sciences']} speed={100} eraseDelay={500}/>
            <Social />
    
            </div>
            )
        }
    }
    

    export default Home
    