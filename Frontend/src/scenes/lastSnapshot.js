/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import './styles.sass';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const LastSnapshot = () => {
  const [currentSnapshot, setCurrentSnapshot] = useState('');

  function replacer(name, val) {
    // Ignore the key that is the name of the state variable
    if (name === 'currentSnapshot') return undefined;

    return val;
  }

  useEffect(() => {
    window.addEventListener('message', ({ data: { action, payload } }) => {
      if (action === 'recordSnap') {
        const payloadContent = JSON.stringify(payload, replacer, 2);

        setCurrentSnapshot(payloadContent);
      }
    });
  }, []);

  return (
    <div>
      <div className="ml-5 mt-2" style={{ whiteSpace: 'pre' }}>
        {currentSnapshot}
      </div>
    </div>
  );
};

export default LastSnapshot;
