import React, { Component } from 'react';
import './styles.sass';

class SetState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <div>
          Count
          {` ${count}`}
        </div>

        <button
          type="button"
          onClick={() =>
            // eslint-disable-next-line prettier/prettier
            this.setState(prevState => ({ count: prevState.count + 1 }))}
        >
          Click Here to Increase the Count (setState)
        </button>
      </div>
    );
  }
}
export default SetState;
