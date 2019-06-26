import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../header';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  it('renders and matches snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the header', () => {
    expect(wrapper.find('.header h1').text()).toContain('Crazy Cards');
    expect(wrapper.find('.header p').text()).toContain(
      'Fill in your details to see which cards you are eligble for'
    );
  });
});
