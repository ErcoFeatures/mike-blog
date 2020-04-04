import React, {Component} from 'react'
import './styles.css'
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';


export const Loader = (props) => (
    <div className="animationLoading">
        <div id="container">
            <div id="one"></div>
            <div id="two"></div>
        </div>

        <div id="three"></div>
        <div id="four"></div>
        <div id="five"></div>
        <div id="six"></div>
    </div>
);






export  class PulseLeader extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="pulse-loader">
                <PulseLoader
                    color={this.props.color}
                    loading={true}
                    betweenSpace={this.props.betweenSpace}
                    size={this.props.size}
                />
            </div>
        )
    }
}

Loader.propTypes = {
    size : PropTypes.number,
    color : PropTypes.string,
    betweenSpace : PropTypes.string
};

Loader.defaultProps = {
    betweenSpace: "2px",
    color : '#ff540a',
    size : 15
};
