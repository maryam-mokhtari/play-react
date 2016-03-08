import React from 'react'

export default class Message extends React.Component {

  componentDidMount() {
    console.log('Message did mount')
  }

  componentWillReceiveProps(props) {
    console.log('Message will receive props', props);

  }

  shouldComponentUpdate(newProps) {
      console.log('Message should update', newProps, this.props)
      return false
  }

  componentWillMount() {
    console.log('Message will mount')
  }

  componentWillUpdate(){
    console.log('Message will update');
  }

  componentWillReceiveProps() {
    console.log('Message will receive props');
  }

  render() {
    return <p>My Message {this.props.number}!!</p>
  }
}
