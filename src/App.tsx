import React from 'react';
/* Components */
import Column from './components/Column';
import Card from './components/Card';
/* CSS */
import './style.scss';

const App = () => {
  return (
    <section className="app">
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
    </section>
  );
}

export default App;
