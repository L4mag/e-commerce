import React from 'react';

import {  Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/home.component';
import CatalogPage from './pages/catalog/catalog.component';
import Header from './components/header/header.component';

import db from './firebase/firebase.utils';

function App() {
  db.collection("categories/smartphones/products").get().then((querySnapshot) => {
    console.log(querySnapshot.docs.length);
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/catalog' component={CatalogPage} />
      </Switch>
    </>
  );
}

export default App;
