import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { incrementar, decrementar, setear } from './reducers'
// import logo from './logo.svg';
import UserForm from './components/UserForm'
import './App.css';

class App extends Component {


  handleSubmit = payload => {
    console.log(payload)
  }

  // handleSetear = e => {
  //   const { valor } = this.state
  //   const { setear } = this.props
  //   setear(valor)

  // }

  // handleChange = e => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }

  render() {
    // const { incrementar, decrementar, valor } = this.props
    return (
      <div className="App">
        {/* <p>{valor}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <input name="valor" onChange={this.handleChange}/>
        <button onClick={this.handleSetear}>Setear</button> */}
        <UserForm onSubmit={this.handleSubmit}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // valor: state.contador
  }
}

const mapDispatchToProps = dispatch => ({
  // incrementar: () => dispatch(incrementar()),
  // decrementar: () => dispatch(decrementar()),
  // setear: payload => dispatch(setear(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
