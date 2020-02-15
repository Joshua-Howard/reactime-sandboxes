import React, { useState } from 'react';
import { connect } from 'react-redux';
import './styles.sass';
import UseState from './sandboxes/useState';
import UseEffect from './sandboxes/useEffect';
import UseContext from './sandboxes/useContext';
import UseMemo from './sandboxes/useMemo';
import Redux from './sandboxes/redux';
import Router from './sandboxes/router';
import SetState from './sandboxes/setState';
import ComponentDidMount from './sandboxes/componentDidMount';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const Scenes = ({}) => {
  const [activeSandbox, setActiveSandbox] = useState('UseState');

  function changeSandbox(e) {
    const { innerText } = e.target;
    setActiveSandbox(innerText);
  }

  function sandboxButtons() {
    return (
      <>
        <button onClick={changeSandbox}>UseState</button>
        <button onClick={changeSandbox}>UseEffect</button>
        <button onClick={changeSandbox}>UseContext</button>
        <button onClick={changeSandbox}>UseMemo</button>
        <div>|</div>
        <button onClick={changeSandbox}>Redux</button>
        <button onClick={changeSandbox}>Router</button>
        <div>|</div>
        <button onClick={changeSandbox}>SetState</button>
        <button onClick={changeSandbox}>ComponentDidMount</button>
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
        return <UseContext />;

      case 'UseMemo':
        return <UseMemo />;

      case 'Redux':
        return <Redux />;

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
