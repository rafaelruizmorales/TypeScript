import {shallow} from 'enzyme'
import * as React from 'react'
import {AppRoutes} from '../AppRoutes'

describe('AppRoutes', () => {
  it('should match the snapshot', () => {
    expect(shallow(<AppRoutes />)).toMatchSnapshot()
  })
})
