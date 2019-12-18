import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Auth, API, graphqlOperation} from 'aws-amplify'
import awsconfig from './aws-exports'
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'
import {withAuthenticator} from "aws-amplify-react";
import { IntlProvider, addLocaleData } from 'react-intl';
import messages_en from "./Localization/en.json";
import messages_fr from "./Localization/fr.json";
import Root from "./container/layout/Root";

Auth.configure(awsconfig)
API.configure(awsconfig)
function App() {

  // const oneBlog = API.graphql(graphqlOperation(queries.getBlog, {id:"5d6b2f24-cb41-4cc9-b7e9-90cb30128159"}))
  // console.log(oneBlog)
  //
  // Auth.currentAuthenticatedUser({
  //   bypassCache: false
  // }).then((user) =>{
  //   console.log("user: " + JSON.stringify(user))
  // })
  // const blog = {name: "Etudes"};
  // const newBlog = API.graphql(graphqlOperation(mutations.createBlog, {input: blog}))
  // console.log(newBlog)

  // const updateBlog= (blog, newName) => {
  //   blog['name'] = newName;
  //   API.graphql(graphqlOperation(mutations.updateBlog, {input:blog}))
  // }
  // const deleteBlog= (blog) => {
  //   API.graphql(graphqlOperation(mutations.deleteBlog, {input:{'id':blog['id']}}))
  // }
  //
  // const blogToUpdate = API.graphql(graphqlOperation(queries.getBlog, {id:"09f53874-7ddb-4acb-a1e8-821eae2cf939"}))
  //
  const etudeBlog = API.graphql(graphqlOperation(queries.listBlogs, {filter:{'name':{'eq':"Etudes"}}}))
    //
    // const etudeBlog  =API.graphql(graphqlOperation(queries.listBlogs, {filter:{'name':{'eq':"Etudes"}}}))
    console.log(etudeBlog)

    // const allblogs = API.graphql(graphqlOperation(queries.listBlogs))
    // console.log(allblogs)
  const messagesList = {
    'en': messages_en,
    'fr':messages_fr
  };
  const languageWithoutRegionCode = 'en';// TODO should refactor when other languages are supported

// Try full locale, fallback to locale without region code, fallback to en
  const messages = messagesList.fr;


  return (
      <IntlProvider locale={languageWithoutRegionCode} messages={messages}>
            <Root api={API} auth={Auth}/>
      </IntlProvider>
  );
}

export default withAuthenticator(App, {includeGreetings:true});
