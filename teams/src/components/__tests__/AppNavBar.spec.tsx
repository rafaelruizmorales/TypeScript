import {shallow} from 'enzyme'
import * as React from 'react'
import {AppNavBar} from '../AppNavBar'

describe('AppNavBar', () => {
  it('should match the snapshot', () => {
    expect(shallow(<AppNavBar />)).toMatchSnapshot()
  })
})
