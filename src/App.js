import React from 'react'

import Message from './Message'
import Repos from './Repos'
import RepoDetail from './RepoDetail'

export default class App extends React.Component {

  constructor(props) {
      super(props)
      this.count = 5
      this.state = {
        messagesData: [1,2,3,4],
        count: 5
      }
      console.log("Constructor Called!");
      this.handleClick = this.handleClick.bind(this)
      this.handleRepoActiveChange = this.handleRepoActiveChange.bind(this)
  }

  componentDidMount() {
    console.log('App did mount')

    fetch('https://api.github.com/users/petehunt/repos')
    .then(res=> res.json())
    .then(res=> {
      this.setState({myRepos: res})
      console.log('got response')
    })

  }

  componentWillReceiveProps(props) {
    console.log('App will receive props', props);

  }
  componentWillUpdate(){
    console.log('App will update');
  }
  componentWillMount() {
    console.log('App will mount')
  }
  componentWillReceiveProps() {
    console.log('App will receive props')
  }
  shouldComponentUpdate() {
      console.log('App should update')
      return true
  }

  handleClick() {
    console.log('Clicked!!!');
    this.count++

    //this.setState({count: this.state.count+1})
    this.state.messagesData.push(1)
    // this.setState({
    //   messagesData: [...this.state.messagesData, 1]
    // })
    this.forceUpdate()
  }

  handleRepoActiveChange(repo) {
    console.log('Handle Repo active change');
    this.setState({repo})
  }

  render() {

    return <div>
        <h2>Welcome to React {this.count} -- {this.state.count}</h2>
        {this.state.messagesData.map((x)=> <Message number={x+this.count}/> )}
        <Repos handler={this.handleRepoActiveChange} repos={this.state.myRepos}/>
        <RepoDetail repo={this.state.repo} />
    </div>
  }
}
