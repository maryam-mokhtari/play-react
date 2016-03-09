import React from 'react'

const RepoDetail = (props) => {
  console.log(props.repo);
  return props.repo?
  <div style={styles.container}>
  <h2 style={styles.header}>{props.repo.full_name}</h2>
  <div style={styles.main}>
  <div style={styles.description}>{props.repo.description}</div>
  <div style={styles.sideBar}>
  <div style={styles.starGazer}>{props.repo.stargazers_count}</div>
  <div style={styles.watcher}>{props.repo.watchers_count}</div>
  </div>
  </div>
  <div style={styles.footer}>{props.repo.url}</div>
  </div>
  : <div>Select one!</div>
}

const styles = {

  container: {
    display: 'flex',
    flexDirection: 'column',
    // border: 'dashed blue 1px',
  },
  header: {
    color: 'teal'
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    // border: 'dashed red 1px',
  },
  description: {
    flexGrow: 2,
    // border: 'dashed blue 1px',
  },
  sideBar: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    // border: 'dashed blue 1px',
  },
  starGazer: {
    // border: 'dashed blue 1px',

  },
  watcher:{
    // border: 'dashed blue 1px',ß
  },
  footer: {

  }
}

export default  RepoDetail
