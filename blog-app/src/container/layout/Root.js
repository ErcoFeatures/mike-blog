import React, {Component} from 'react';
import Home from '../pages/Home';
import Footer from './Footer';
import Sport from '../pages/Sport';
import Politics from '../pages/Politics';
import PostShow from '../pages/PostShow';
import Study from '../pages/Study';
import Various from '../pages/Various';
import LeftContent from './LeftContent';
import {Route, Router, Switch, HashRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css'
import Header from "./header";
import NewPost from "../newPost";

const AuthRoute = ({component: Component, ...rest}) => {

    return (
        <div className={"main-container"}>
            <div className={"col-xs-12"}>
                <div className={"col-xs-2 left-content"}>
                    <LeftContent/>
                </div>
                <div className={"col-xs-10 right-content"}>
                    <Header/>
                    <NewPost/>
                    <Route {...rest} render={props => (<Component {...props} />)} />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

class Root extends Component {

    render() {
        let state = {};
        return (
            <div>
                <HashRouter>
                    <div>

                        <div>
                            <Switch>
                                <AuthRoute pageName="Home" state={state} exact path="/" component={Home}/>
                                <AuthRoute pageName="Sport" state={state} exact path="/sport" component={Sport}/>
                                <AuthRoute pageName="Post" state={state} exact path="/post?:id" component={PostShow}/>
                                <AuthRoute pageName="Study" state={state} exact path="/study" component={Study}/>
                                <AuthRoute pageName="Politics" state={state} exact path="/politics" component={Politics}/>
                                <AuthRoute pageName="Various" state={state} exact path="/various" component={Various}/>
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

Root.contextTypes = {
    store: PropTypes.object
}

export default Root;

