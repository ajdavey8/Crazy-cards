import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/cards.scss';

const Cards = ({ creditTotal, children }) => (
  <div className="cards">
    <h3>Available Cards</h3>
    <p className="">(select cards to see further details)</p>
    {children}
    <p className="cards__total">Total Credit Available: £{creditTotal}</p>
  </div>
);

Cards.propTypes = {
  creditTotal: PropTypes.number.isRequired
};

export default Cards;
