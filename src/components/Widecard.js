import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return(
            <div className="widecard">
                <div className="wide-con">
                    <h3>{this.props.name}</h3>
                    <h4 className="secondtext">{this.props.title}</h4>
                    
                </div>
            </div>
        );
    }
}

export default Widecard;
