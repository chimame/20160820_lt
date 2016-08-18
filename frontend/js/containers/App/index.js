import React, { Component } from 'react'
import Message from '../../components/Test'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.startPolling()
  }

  render() {
    const { data, actions } = this.props
    return (
      <Message {...data} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
