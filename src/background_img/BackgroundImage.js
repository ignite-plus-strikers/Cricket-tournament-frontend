import React, { Component } from 'react'
import background from './background.png';

import './BGimage.css';

class BackgroundImage extends Component {
 
    constructor(props) {
        super(props)
       
    }
 
  
    render() {
        return (
            <div className="bi" style={{marginLeft:220}}>
                <img className="bi" src={background} alt="background_image"></img>
            </div>
        )
    }
    
}
 
export default BackgroundImage