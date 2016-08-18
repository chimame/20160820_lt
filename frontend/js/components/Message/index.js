import React, { Component } from 'react'
import $ from 'jquery'
import 'jquery.marquee'

export default class message extends Component {
  componentDidMount() {
console.log('componentDidMount')
  }

  componentDidUpdate() {
console.log('componentDidUpdate')
      $("div.message-body").marquee({delayBeforeStart: 0, direction: 'up', duplicated: true, duration: 2000, startVisible: true})
      $("div.message-body").marquee('resume')
  }
  componentWillUpdate() {
console.log('componentWillUpdate')
    if ($("div.message-body div.js-marquee-wrapper").length > 0) {
      $("div.message-body").marquee('destroy')
    }
  }

  render() {
    const { message } = this.props
    return (
        <div className="message-body" style={{height: 80, overflow: 'hidden'}}>
          <p style={{whiteSpace: 'pre'}}>
            {message}
          </p>
        </div>
    )
  }
}
