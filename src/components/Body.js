import React, { Component } from "react";
import { connect } from 'react-redux';
import Layer18 from '../img/Layer18.jpg';
import Layer19 from '../img/Layer19.png';
import Layer20 from '../img/Layer20.png';
import Layer21 from '../img/Layer21.jpg';
import Layer22 from '../img/Layer22.jpg';
import Layer30 from '../img/Layer30.png';
import Layer31 from '../img/Layer31.png';
import Layer32 from '../img/Layer32.png';
import Layer33 from '../img/Layer33.png';
import Layer35 from '../img/Layer35.png';
import Layer36 from '../img/Layer36.png';
import Layer37 from '../img/Layer37.png';
import Layer38 from '../img/Layer38.png';
import Layer39 from '../img/Layer39.png';
import Layer40 from '../img/Layer40.png';
import Layer41 from '../img/Layer41.png';
import Layer42 from '../img/Layer42.png';
import fb from '../img/fb.png';
import tw from '../img/tw.png';
import LinkedIn from '../img/LinkedIn.png';

const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
  }

class Body extends Component {
       
    state = {
        images: [
            Layer18,
            Layer19,
            Layer20,
            Layer21,
            Layer22
        ],
        info_bio: [
            { 
                bio: "“Integer posuere erat a ante vene natis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu...”",
                info: "HELEN GREY, ASTRONAUT"
            },
            { 
                bio: "“Suspendisse faucibus quam eu odio mattis, ac tincidunt ipsum convallis. Mauris at turpis scelerisque...”",
                info: "SUSAN SIMS, INTERACTION DESIGNER AT XYZ"
            },
            { 
                bio: "“Phasellus suscipit placerat egestas. Vestibulum convallis posuere nisl, eget convallis elit commodo...”",
                info: "NICK PERRY, SCIENTIST"
            },
            { 
                bio: "“Nam ornare nunc cursus feugiat fringilla. Nam eget efficitur ligula, sed mollis justo. Integer fringi...”",
                info: "BEAR GRYLLS, TV MAKER"
            },
            { 
                bio: "“Praesent accumsan diam sit amet erat convallis, non faucibus libero varius. Phasellus nec risus sit...”",
                info: "GIGI HAUPER, WRITTER"
            }
        ],
        currentInfo_bio: { 
            bio: "“Integer posuere erat a ante vene natis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu...”",
            info: "HELEN GREY, ASTRONAUT"
        },
        currentIndex: 0,
        translateValue: 0,        
        width: 0,
        height: 0
    }
    
    componentWillMount =() => {       
        this.updateDimensions();
    }
    componentDidMount =() => { 
        window.addEventListener("resize", this.updateDimensions);       
    }
    componentWillUnmount =() => {
        window.removeEventListener("resize", this.updateDimensions);        
    }

    goToSlide = (index) => {        
        const value = index - this.state.currentIndex;
        const {info_bio} = this.state;
        
        value > 0 ?
            this.setState(prevState => ({
                currentIndex: index,
                translateValue: prevState.translateValue + -(value)*this.slideWidth(),
                currentInfo_bio: info_bio[index]
            })) : 
            this.setState(prevState => ({
                currentIndex: index,
                translateValue: prevState.translateValue + (-value)*this.slideWidth(),
                currentInfo_bio: info_bio[index]
            }))        
    }   

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    updateDimensions =() => {
        const width =  document.documentElement.clientWidth;
        const {currentIndex} = this.state;

        if (width>946) {
            this.setState({translateValue: -currentIndex*951})
        } else if (width<548) {
            this.setState({translateValue: -currentIndex*350})
        } else {
            this.setState({translateValue: -currentIndex*570})
        }        
    }   
    
    render() {
        const {visibleBlocks} = this.props;
        const {currentIndex, currentInfo_bio} = this.state;
        return (
            <>
            <div className="body">           
                <div className="wrapper-block container-wrapper">
                    <div className="container-fluid block-container">
                        <div className="row">
                        { visibleBlocks && visibleBlocks.map((block, index) => (
                             <div key={index} className="col-12 col-xl-4 block">
                                 <img src={block.thumbnailUrl}></img>
                                 <div className="title">{block.title}</div>
                                 <div className="text">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus
                                    eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                                  </div>
                             </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                <div className="container-fluid projects-table container-wrapper">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-3 project" >
                            <img src={Layer35} ></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer36}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer37}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer38}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer39}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer40}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer41}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer42}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper-team container-wrapper">
                    <div className="container-fluid team-container">
                        <div className="row">
                            <div className="col-12  col-md-7 col-lg-6  col-xl-3 team">
                                <div className="info">
                                    <img src={Layer30}></img>
                                    <div className="title">
                                        Ruth Woods
                                        <div className="sub-title">FOUNDER, CEO</div>
                                    </div>
                                    <div className="text">
                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                        ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius
                                        blandit sit amet non magna. Nullam quis risus aget urna mollis ornare vel eu leo.
                                    </div>
                                    <div className="socials d-flex">
                                        <div className="social"><img src={fb}></img></div>
                                        <div className="social"><img src={tw}></img></div>
                                        <div className="social"><img src={LinkedIn}></img></div>                             
                                    </div>
                                </div>                                
                            </div>
                            <div className="col-12  col-md-7 col-lg-6  col-xl-3 team">
                                <div className="info">
                                    <img src={Layer31}></img>
                                    <div className="title">
                                        Timothy Reed
                                        <div className="sub-title">Co-FOUNDER, DEVELOPER</div>
                                    </div>
                                    <div className="text">
                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                        ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius
                                        blandit sit amet non magna. Nullam quis risus aget urna mollis ornare vel eu leo.
                                    </div>
                                    <div className="socials d-flex">
                                        <div className="social"><img src={fb}></img></div>
                                        <div className="social"><img src={tw}></img></div>
                                        <div className="social"><img src={LinkedIn}></img></div>                             
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-6  col-xl-3 team">
                                <div className="info">
                                    <img src={Layer32}></img>
                                    <div className="title">
                                        Victoria Valdez
                                        <div className="sub-title">UI DESIGNER</div>
                                    </div>
                                    <div className="text">
                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                        ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius
                                        blandit sit amet non magna. Nullam quis risus aget urna mollis ornare vel eu leo.
                                    </div>
                                    <div className="socials d-flex">
                                        <div className="social"><img src={fb}></img></div>
                                        <div className="social"><img src={tw}></img></div>
                                        <div className="social"><img src={LinkedIn}></img></div>                             
                                    </div>
                                </div>
                            </div>
                            <div className="col-12  col-md-7 col-lg-6  col-xl-3 team">
                                <div className="info">
                                    <img src={Layer33}></img>
                                    <div className="title">
                                        Beverly Little
                                        <div className="sub-title">DATA SCIENTIST</div>
                                    </div>
                                    <div className="text">
                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                        ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius
                                        blandit sit amet non magna. Nullam quis risus aget urna mollis ornare vel eu leo.
                                    </div>
                                    <div className="socials d-flex">
                                        <div className="social"><img src={fb}></img></div>
                                        <div className="social"><img src={tw}></img></div>
                                        <div className="social"><img src={LinkedIn}></img></div>                             
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid review-table container-wrapper">
                    <div className="row">
                        <div className="col-12 col-xl-6 no-padding">                            
                            <div className="slider">
                                <div className="slider-wrapper" style={{
                                    transform: `translateX(${this.state.translateValue}px)`,
                                    transition: 'transform ease-out 0.45s'
                                }}>
                                    {this.state.images.map((image, i) => (
                                        <Slide key={i} image={image} />
                                    ))}
                                </div>                               
                            </div>
                        </div>
                        <div className="col-12 col-xl-6 review" >                           
                            <div className="col-xl-9 title">
                                {currentInfo_bio.bio}
                            </div>
                            <div className="text">
                                {currentInfo_bio.info}
                            </div> 
                           <div className="review-toggle d-flex">
                               <div className={"toggle " + (currentIndex === 0 ? "active" : '')} onClick={() => this.goToSlide(0)}></div>
                               <div className={"toggle " + (currentIndex === 1 ? "active" : '')} onClick={() => this.goToSlide(1)}></div>                              
                               <div className={"toggle " + (currentIndex === 2 ? "active" : '')} onClick={() => this.goToSlide(2)}></div>
                               <div className={"toggle " + (currentIndex === 3 ? "active" : '')} onClick={() => this.goToSlide(3)}></div>
                               <div className={"toggle " + (currentIndex === 4 ? "active" : '')} onClick={() => this.goToSlide(4)}></div>
                           </div>
                        </div>
                    </div>
                </div>   
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2 download">
                            <div className="title">Are You Ready to Start? Download Now For Free!</div>
                            <div className="text">FUSCE DAPIBUS, TELLUS AC CURSUS COMMODO</div>
                            <div className="button">DOWNLOAD HERE</div>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        );
    }
}

const mapStateToProps = store => {
    return {
      visibleBlocks: store.reducers.visibleBlocks
  }
}

export default connect(mapStateToProps)(Body)
