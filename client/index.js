import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { IndexRoute, Route, hashHistory, Router } from "react-router";

import App from "./components/App";
import SongCreate from "./components/SongCreate";
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id
});

const Root = () => {
  return <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList}></IndexRoute>
        <Route path="new/song" component={SongCreate}></Route>
        <Route path="song/:id" component={SongDetail}></Route>
      </Route>
    </Router></ApolloProvider>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
