import React, { Component } from 'react';
import ConnectedNotesTable from './ConnectedNotesTable';
import NewNotesForm from './NewNotesForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedNotesTable />
        <NewNotesForm />
      </div>
    );
  }
}
export default App;