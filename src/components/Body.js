import React, { Component } from "react";
import { connect } from 'react-redux';
import {getBlocks} from '../store/actions';
import Layer35 from '../img/Layer35.png';
import Layer36 from '../img/Layer36.png';
import Layer38 from '../img/Layer38.png';
import Layer39 from '../img/Layer39.png';
import Layer40 from '../img/Layer40.png';
import Layer41 from '../img/Layer41.png';
import Layer42 from '../img/Layer42.png';

class Body extends Component {
    
    render() {
        const {visibleBlocks} = this.props;
        return (
            <>
            <div className="body">
                <div className="wrapper">
                    <div className="container-fluid block-container">
                        <div className="row">
                        { visibleBlocks && visibleBlocks.map((block) => (
                             <div className="col-12 col-xl-4 block">
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
                <div className="container-fluid projects-table">
                    <div className="row">
                        <div className="col-12 col-xl-3 project">
                            <img src={Layer35}></img>
                        </div>
                        <div className="col-12 col-xl-3 project">
                            <img src={Layer36}></img>
                        </div>
                        <div className="col-12 col-xl-3 project">
                            <img src={Layer41}></img>
                        </div>
                        <div className="col-12 col-xl-3 project">
                            <img src={Layer38}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-xl-3 project">
                            <img src={Layer39}></img>
                        </div>
                        <div className="col-12 col-xl-3 project">
                            <img src={Layer40}></img>
                        </div>
                        <div className="col-12 col-xl-3 project">
                            <img src={Layer41}></img>
                        </div>
                        <div className="col-12 col-xl-3 project">
                            <img src={Layer42}></img>
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

// const mapDispatchToProps = dispatch => {
//     return {
//       getBlocks: () => dispatch(getBlocks())    
//     }
//   }
export default connect(mapStateToProps)(Body)
