import React from 'react';
import  {TimelineLite} from 'gsap/all';
const animate = new TimelineLite()

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.image = React.createRef()
      }
      componentDidMount(){
        animate.fromTo(this.image, 1, {scale:0.6,  borderRadius:"100%",width:250,height:200},
                                       {scale:1,  borderRadius:0 ,width:500,height:400});
    }
      render(){
    return (
        <div className="main">
        <img ref={div => this.image = div} className="main__image" alt={"anton"}  src={require('../../assets/sila.png')} />
        <p className="main__paragraph">React, WebPack, Babel, Redux </p> 
        <p className="main__paragraph-2">Starter kit for loosers who don't think they are...</p>  
        </div>
    )
}
}

export default Main;