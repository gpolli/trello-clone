import React from 'react';
/* Context */
import { useAppState } from './context/AppStateContext';
/* Components */
import Column from './components/Column';
import AddNewItem from './components/AddNewItem';
/* CSS */
import './style.scss';

const App = () => {
  const { state } = useAppState();

  return (
    <section className="app">
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </section>
  );
}

export default App;
