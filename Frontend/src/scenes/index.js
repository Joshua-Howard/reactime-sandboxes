import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './styles.sass';

import App from '../component/App';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const Scenes = ({}) => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(last => last + 1);

  //     console.log(count);
  //   }, 300);
  // }, []);

  return (
    <div>
      {/* <div>Count {count}</div>

      <button onClick={() => setCount(lastCount => lastCount + 1)}>
        Click Here to Increase the Count
      </button> */}
      <App />
    </div>
  );
};

export default Scenes;
// export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
