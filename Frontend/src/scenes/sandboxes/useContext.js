import React, { useState } from 'react';
import { connect } from 'react-redux';
import './styles.sass';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const Scenes = ({}) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count {count}</div>

      <button onClick={() => setCount(lastCount => lastCount + 1)}>
        Click Here to Increase the Count
      </button>
    </div>
  );
};

export default Scenes;
// export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
