import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ModalApp extends Component {
    constructor(props) {
      super(props)      
      this.state = { isModalOpen: props.isModalOpen }
    }

    componentWillReceiveProps(nextprops){      
      let propsModal = nextprops.isModalOpen;
      this.setState({
        isModalOpen : propsModal
      })
    }

    shouldComponentUpdate(nextProps, nextState){
      return true;
    }

    render() {
      return (
        <div>
        {
          (this.state.isModalOpen) ?
          <Modal {...this.props}>
              {this.props.children}
          </Modal> : null
        }
        </div>
      )
    }
  }

  class Modal extends Component {
    render() {
      let body = document.body,
        html = document.documentElement;

      let Totalheight = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

      let backdropStyle = {
        height: Totalheight,
      }

      if (this.props.backdropStyle) {
        for (let key in this.props.backdropStyle) {
          backdropStyle[key] = this.props.backdropStyle[key]
        }
      }

      
        if(this.props.override) {
          return (<div>{this.props.children} </div>);
        }          
        else {
          return( <div className={this.props.containerClassName}>
                    <div className="modal-style" id={this.props.modalId}>
                        {(this.props.withClose === true )?(<div onClick={this.props.closeFunc} className="bm-cross-button"
                              style={{position: "absolute", width: "16px", height: "17px", right: "8px", top: "8px"}}>
                            <span className="bm-cross" style={{width: "100%", height: "100%"}}><i
                                className="ga ga-close01 icon-button"></i></span>
                        </div>):null}
                      {this.props.children}
                    </div>
                    {(this.props.backDrop === true) ?
                    (<div className="backdrop-style" style={backdropStyle} />) : null }
                  </div>);
                 
        }       
      
    }
  }

ModalApp.propTypes = {
    override: PropTypes.bool,
    backDrop: PropTypes.bool
};
 
ModalApp.defaultProps = {
    override : false,
    backDrop : true
}
export default ModalApp ;
