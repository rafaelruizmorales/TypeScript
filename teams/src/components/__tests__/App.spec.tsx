import {shallow} from 'enzyme'
import * as React from 'react'
import {App} from '../App'

describe('App', () => {
  it('should match the snapshot', () => {
    expect(shallow(<App />)).toMatchSnapshot()
  })
})
