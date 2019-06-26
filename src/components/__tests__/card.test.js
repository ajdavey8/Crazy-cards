import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Card from '../card';

const selectCard = jest.fn();

const card = {
  id: 1,
  cardType: 'Anywhere Card',
  apr: '33.9',
  balanceTransferDuration: 0,
  purchaseOfferDuration: 0,
  credit: 300
};

describe('Card', () => {
  const wrapper = shallow(<Card card={card} selectCard={selectCard} />);

  it('renders and matches snapshot', () => {
    const tree = renderer
      .create(
        <Card card={{ ...card, selected: true }} selectCard={selectCard} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an unselected card', () => {
    expect(wrapper.find('.card__heading').text()).toContain('Anywhere Card');
    expect(wrapper.find('.card__header-detail').text()).toContain(
      'Credit Available: £300'
    );
    expect(wrapper.find('.card__details').exists()).toBe(false);
  });

  it('renders a selected card', () => {
    wrapper.setProps({ card: { ...card, selected: true } });
    expect(wrapper.find('.card__heading').text()).toContain('Anywhere Card');
    expect(wrapper.find('.card__header-detail').text()).toContain(
      'Credit Available: £300'
    );
    expect(wrapper.find('.card__details').exists()).toBe(true);
  });
});
