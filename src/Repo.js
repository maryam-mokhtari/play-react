import React from 'react'

const Repo = (props) => (
  <div
  onClick={() => {props.onClick(props.repo)}}
  style={{...styles.repo, color: props.active? 'red':'teal'}}
  >
  {props.repo.full_name}
  </div>
)
const styles = {
  repo: {
    display: 'flex',
    padding: 5,
    //border: '1px solid teal'
  },
}

export default Repo
