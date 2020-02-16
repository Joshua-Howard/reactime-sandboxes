import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
// import { connect } from 'react-redux';
import './styles.sass';
import UseState from './sandboxes/useState';
import UseEffect from './sandboxes/useEffect';
import UseContext from './sandboxes/useContext';
import UseMemo from './sandboxes/useMemo';
import Redux from './sandboxes/redux';
import Router from './sandboxes/router';
import SetState from './sandboxes/setState';
import ComponentDidMount from './sandboxes/componentDidMount';
import AppContextProvider from '../context/appContextProvider';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const Scenes = () => {
  const [activeSandbox, setActiveSandbox] = useState('Redux');

  function changeSandbox(e) {
    const { innerText } = e.target;
    setActiveSandbox(innerText);
  }

  function sandboxButtons() {
    return (
      <>
        <button
          type="button"
          onClick={changeSandbox}
          style={
            activeSandbox === 'UseState'
              ? { outline: 'none', backgroundColor: 'cornflowerblue' }
              : null
          }
        >
          UseState
        </button>
        <button
          type="button"
          onClick={changeSandbox}
          style={
            activeSandbox === 'UseEffect'
              ? { outline: 'none', backgroundColor: 'cornflowerblue' }
              : null
          }
        >
          UseEffect
        </button>
        <button
          type="button"
          onClick={changeSandbox}
          style={
            activeSandbox === 'UseContext'
              ? { outline: 'none', backgroundColor: 'cornflowerblue' }
              : null
          }
        >
          UseContext
        </button>
        <button
          type="button"
          onClick={changeSandbox}
          style={
            activeSandbox === 'UseMemo'
              ? { outline: 'none', backgroundColor: 'cornflowerblue' }
              : null
          }
        >
          UseMemo
        </button>
        <div>|</div>
        <button
          type="button"
          onClick={changeSandbox}
          style={
            activeSandbox === 'Redux'
              ? { outline: 'none', backgroundColor: 'cornflowerblue' }
              : null
          }
        >
          Redux
        </button>
        <button
          type="button"
          onClick={changeSandbox}
          style={
            activeSandbox === 'Router'
              ? { outline: 'none', backgroundColor: 'cornflowerblue' }
              : null
          }
        >
          Router
        </button>
        <div>|</div>
        <button
          type="button"
          onClick={changeSandbox}
          style={
            activeSandbox === 'SetState'
              ? { outline: 'none', backgroundColor: 'cornflowerblue' }
              : null
          }
        >
          SetState
        </button>
        <button
          type="button"
          onClick={changeSandbox}
          style={
            activeSandbox === 'ComponentDidMount'
              ? { outline: 'none', backgroundColor: 'cornflowerblue' }
              : null
          }
        >
          ComponentDidMount
        </button>
      </>
    );
  }

  function displaySandbox() {
    switch (activeSandbox) {
      case 'UseState':
        return <UseState />;

      case 'UseEffect':
        return <UseEffect />;

      case 'UseContext':
        return (
          <AppContextProvider>
            <UseContext />
          </AppContextProvider>
        );

      case 'UseMemo':
        return <UseMemo />;

      case 'Redux':
        return (
          <Provider store={store}>
            <Redux />
          </Provider>
        );

      case 'Router':
        return <Router />;

      case 'SetState':
        return <SetState />;

      case 'ComponentDidMount':
        return <ComponentDidMount />;

      default:
        return <UseState />;
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-around m-3">
          {sandboxButtons()}
        </div>
      </div>

      <div className="row">
        <div className="col text-white bg-secondary text-center font-weight-bold p-1">
          Sandbox Below
        </div>
      </div>

      <div className="row">
        <div className="col m-5 justify-content-center">{displaySandbox()}</div>
      </div>
    </div>
  );
};

export default Scenes;
// export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
