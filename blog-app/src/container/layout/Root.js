import React, {Component} from 'react';
import Home from '../pages/Home';
import Footer from './Footer';
import Blog from '../pages/Blog';
import PostShow from '../pages/PostShow';
import LeftContent from './LeftContent';
import {Route, Switch, HashRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css'
import Header from "./header";
import {AddPostButton} from '../../component/AddPostCTAButton'
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
                    <AddPostButton/>
                    <Route {...rest} render={props => (<Component {...props} {...rest}/>)} />
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
                                <AuthRoute {...this.props} pageName="Home" state={state} exact path="/" component={Home}/>
                                <AuthRoute  {...this.props} pageName="Post" state={state} exact path="/post/:id" component={PostShow}/>
                                <AuthRoute  {...this.props} pageName="Blog" state={state} exact path="/blog/:id" component={Blog}/>
                                <AuthRoute  {...this.props} pageName="New" state={state} exact path="/new" component={NewPost}/>
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

