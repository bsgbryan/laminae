import React from 'react'

import { create } from 'react-test-renderer'

import REPLACE from 'PATH/REPLACEComponent'

describe('The REPLACE component', () => {
  it('renders correctly', () => {
    const root = create(<REPLACE
    />)
  
    expect(root.toJSON()).toMatchSnapshot()
  })
})