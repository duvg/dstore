import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Preloader from './components/common/Preload';
import { connect } from 'react-redux';


// Rutas
import Routes from './Routes';
import { IState } from './redux/ducks';
import { ICategories } from './Interfaces/CategoryInterfaces';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { getCategoryProductsThunk } from './redux/ducks/CategoryDuck';

interface IAppProps {
  data?: ICategories
}

function App(props: ReduxType & IAppProps) {  

  const { loadProductsThunk } = props;

  const loadProductsCategory = (id: string) => {
    console.log(id);
    loadProductsThunk(id);
  }
  return (
    
    <div className="h-100">
      <Navbar links={props.data} loadProductsCategory={loadProductsCategory}/>
      <Routes />
    </div>
  );
}

const mapStateToProps = (state: IState) => {
  const { categories: { data } } = state;
  return { data };
}

type ReduxType = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  loadProductsThunk: (payload: string) => dispatch(getCategoryProductsThunk(payload)) 
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
