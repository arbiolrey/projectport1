import React, { Component } from 'react'

import picture1 from '../img/ui.jpg';
import picture2 from '../img/androidstdio.jpg';
import picture3 from '../img/figmalogo.png';
import picture4 from '../img/htmml.png';
import picture5 from '../img/css.png';
import picture6 from '../img/kotlin.png';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['UI/UIX',   'ANDROID STUDIO',  'FIGMA' ,   'HTML',  'CSS',   'KOTLIN']
            
        };
        
    }

    render() {
        return (
            <div className="condiv2 skills">
            <h4 className="subtopics">My Skills</h4>
           
          
            <p2> Passionate about crafting seamless digital experiences, I specialize in UI/UX design with a strong focus
            on intuitive and user-friendly interfaces. Combining clean, efficient code with modern design principles, I 
            create visually appealing and highly functional web applications. From front-end development using HTML, CSS,
            JavaScript, and React to optimizing user experiences with responsive and accessible designs, I strive to bridge 
            the gap between aesthetics and functionality. Explore my portfolio to see how I bring ideas to life through thoughtful
            design and innovative coding solutions."</p2>
            <ul><br></br>
            <img src={picture1} alt="Pic" className="picture1"></img>
            <img src={picture2} alt="Pic" className="picture2"></img>
            <img src={picture3} alt="Pic" className="picture3"></img>
            <img src={picture4} alt="Pic" className="picture4"></img>
            <img src={picture5} alt="Pic" className="picture5"></img>
            <img src={picture6} alt="Pic" className="picture6"></img>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    