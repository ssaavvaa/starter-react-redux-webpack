import React from 'react';
import github from '../../assets/github-square-512.png'


class  Github extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.parg = React.createRef()
      }

   

    render(){
    return (
        <div ref={div => this.parg = div} className="info">
        <a className ="github" href = "#">Github repository...</a>
        <img alt = "github" src = {github}></img>
 
        </div>
    );
}
}

export default Github;