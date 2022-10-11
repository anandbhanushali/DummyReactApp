import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { ListVM } from './VM/ListVM';
class App extends React.Component {
  render() {
    return (
      <ListVM />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);