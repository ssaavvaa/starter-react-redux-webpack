import React from 'react';
import  {TimelineLite} from 'gsap/all';
const animate = new TimelineLite()


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.image = React.createRef()
        this.paragraph = React.createRef()
 
      }
    componentDidMount(){

        animate.to(this.image,.6,{scale:0.6, rotation: 360, borderRadius:"100%",width:250,height:200})
                .to(this.paragraph,.6,{scale:1.6})
    }

    render(){
    return (
        <div className="about">
        <img ref={img => this.image = img}  className="about__image" alt={"about"}  src={require('../../assets/sila.png')} />
        <p ref={p => this.paragraph = p} className="about__paragraph">Sa__na Baron</p> 
        <p ref={p => this.text = p} className="about__text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
        </div>
    );
    }
}


export default About;