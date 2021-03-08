import { compose } from 'redux'
import { connect } from 'react-redux'

import {
} from './REPLACEHOFs'

import {
  actions,
  localState
} from './REPLACEPropsManager'

import Component from './REPLACEComponent'

const Container = compose(
  connect(localState, actions),
)(Component)

export default Container