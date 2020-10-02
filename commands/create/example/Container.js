import { compose } from 'redux'
import { connect } from 'react-redux'

import {
} from './REPLACEHocs'

import {
  actions,
  localState
} from './REPLACEStateManager'

import Component from './REPLACEComponent'

const Container = compose(
  connect(localState, actions),
)(Component)

export default Container