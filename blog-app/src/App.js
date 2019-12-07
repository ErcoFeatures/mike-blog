import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Auth, API, graphqlOperation} from 'aws-amplify'
import awsconfig from './aws-exports'
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'
import {withAuthenticator} from "aws-amplify-react";
import {getBlog} from "./graphql/queries";


Auth.configure(awsconfig)
API.configure(awsconfig)
function App() {
  const allblogs = API.graphql(graphqlOperation(queries.listBlogs))
  console.log(allblogs)
  const oneBlog = API.graphql(graphqlOperation(queries.getBlog, {id:"5d6b2f24-cb41-4cc9-b7e9-90cb30128159"}))
  console.log(oneBlog)

  Auth.currentAuthenticatedUser({
    bypassCache: false
  }).then((user) =>{
    console.log("user: " + JSON.stringify(user))
  })
  // const blog = {name: "Etudes"};
  // const newBlog = API.graphql(graphqlOperation(mutations.createBlog, {input: blog}))
  // console.log(newBlog)

  const updateBlog= (blog, newName) => {
    blog['name'] = newName;
    API.graphql(graphqlOperation(mutations.updateBlog, {input:blog}))
  }
  const deleteBlog= (blog) => {
    API.graphql(graphqlOperation(mutations.deleteBlog, {input:{'id':blog['id']}}))
  }

  const blogToUpdate = API.graphql(graphqlOperation(queries.getBlog, {id:"09f53874-7ddb-4acb-a1e8-821eae2cf939"}))

  const etudeBlog = API.graphql(graphqlOperation(queries.listBlogs, {filter:{'name':{'eq':"Etudes"}}}))

  console.log(etudeBlog)
  // query liste{
  //   listBlogs(filter:{name:{eq:"Etudes"}}){
  //     items {id name posts(limit:2){
  //       items {id title}
  //     }}
  //   }
  // }
  console.log(blogToUpdate)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App, {includeGreetings:true});
