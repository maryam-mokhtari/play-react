import React from 'react'
import Repo from './Repo'


class Repos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(repo) {
    this.setState({active: repo})
    console.log('Repos Clicked, state=', this.state);
  }

  render() {
    if (!this.props.repos) {
      return <div>loading...</div>
    } else {
      return (
        <div style={styles.container}>
          <div style={styles.repos}>
            {this.props.repos.map(repo =>
              <Repo
                onClick={this.handleClick}
                active={this.state.active===repo}
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
export default Repos
