import React, { useState } from 'react';
import { connect } from 'react-redux';
import './styles.sass';

// import * as actions from '../redux/actions/actions';
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const UseState = ({}) => {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(1000);

  return (
    <div>
      <div>
        <div>Count {count}</div>

        <button onClick={() => setCount(lastCount => lastCount + 1)}>
          Click Here to Increase the Count
        </button>
      </div>

      <div className="bg-primary p-1 my-3 mx-5 vh-5 text-white text-center font-weight-bold">
        New Test Below
      </div>

      <div>
        <div>Count Increase {count2}</div>
        <div>Count Decrease {count3}</div>

        <button
          onClick={() => {
            setCount2(lastCount => lastCount + 1);
            setCount3(lastCount => lastCount - 1);
          }}
        >
          Click Here to Change 2 Counts Simultaneously
        </button>
      </div>
    </div>
  );
};

export default UseState;
// export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
