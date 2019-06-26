import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Loader from '../loader';

describe('Loader', () => {
  const wrapper = shallow(<Loader />);

  it('renders and matches snapshot', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the loading spinner', () => {
    expect(wrapper.find('i.fa-spinner').exists()).toBe(true);
  });

  it('renders the loading text', () => {
    expect(wrapper.find('.loader__text').text()).toContain('Loading...');
  });
});
