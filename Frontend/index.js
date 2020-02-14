import React from 'react';
import ReactDOM from 'react-dom';
import reactime from 'reactime';
import App from './app';

const rootContainer = document.getElementById('root');

ReactDOM.render(<App />, rootContainer);

reactime(rootContainer);

// const getCircularReplacer = () => {
//   const seen = new WeakSet();
//   return (key, value) => {
//     if (typeof value === 'object' && value !== null) {
//       if (seen.has(value)) {
//         return;
//       }
//       seen.add(value);
//     }
//     return value;
//   };
// };

// console.log(JSON.stringify(rootContainer, getCircularReplacer()));
