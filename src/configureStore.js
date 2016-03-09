import {createStore} from 'redux'

const FETCH_REPOS = 'FETCH_REPOS'
const SET_ACTIVE_REPO = 'SET_ACTIVE_REPO'

const initialState = {active: null}
const fetchUser = () => {
  return { type: FETCH_REPOS }
}

const setActiveRepo = (repo) => {
  return { type: SET_ACTIVE_REPO , repo}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_REPO:
      return Object.assign({},state, {active: action.repo})
    default:
      return state
  }
}


const store = createStore(reducer)

store.subscribe(() =>{
  console.log('State:',store.getState());
})
export { store, setActiveRepo }
