import {shallow} from 'enzyme'
import * as React from 'react'
import {PageHeader} from '../PageHeader'

describe('PageHeader component', () => {
  it('should match the snapshot', () => {
    expect(shallow(<PageHeader title="Page Header" />)).toMatchSnapshot()
  });

  it('should render the title inside an H1 tag', () => {
    const title = 'Page Header'
    const component = shallow(<PageHeader title={title} />)
    expect(component.find('h1').text()).toBe(title)
  });
});
