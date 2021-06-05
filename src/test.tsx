import React from 'react';

import SomeText from './some-text';

export default function Test(): JSX.Element {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

    return (
      <div id="wrapper">
        <button onClick={handleClick}>Clicked: {count}</button>
        <SomeText />
      </div>
    );
}