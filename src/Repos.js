import React from 'react'
import { connect } from 'react-redux'
import Repo from './Repo'
import Avatar from 'material-ui/lib/avatar'
import { setActiveRepo } from './configureStore'

class Repos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(repo) {
    //this.props.handler(repo)
    //this.setState({active: repo})
    this.props.dispatch(setActiveRepo(repo))
    console.log('Repos Clicked, state=', this.state);
  }

  render() {
    console.log('repos render called')
    if (!this.props.repos) {
      return <div>loading...</div>
    } else {
      //const state = store.getState()
      const { active } = this.props
      return (

        <div style={styles.container}>
          <Avatar src="https://avatars2.githubusercontent.com/u/239742?v=3&s=400" />
          <div style={styles.repos}>
            {this.props.repos.map(repo =>
              <Repo
                onClick={this.handleClick}
                active={active===repo}
                repo={repo}
              />
            )}
          </div>
          <p style={styles.totalRepos}>
            total repos = {this.props.repos && this.props.repos.length}
          </p>
        </div>
      )
    }
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  repos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  totalRepos: { color:'gray'}
}

const mapStateToProps = (state) => {
  return { active: state.active }
}
export default connect(mapStateToProps)(Repos)
