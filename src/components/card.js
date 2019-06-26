import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/card.scss';

const Card = ({ card, selectCard }) => (
  <div
    className={card.selected ? 'card card--selected' : 'card'}
    onClick={() => selectCard(card.id)}
  >
    <div className="card__header">
      <h3 className="card__heading">{card.cardType}</h3>
      <p className="card__header-detail">Credit Available: £{card.credit}</p>
    </div>
    {card.selected ? (
      <div className="card__details">
        <p>Apr: {card.apr}%</p>
        <p>Balance Transfer Duration: {card.balanceTransferDuration}</p>
        <p>Purchase Offer Duration: {card.purchaseOfferDuration}</p>
      </div>
    ) : null}
  </div>
);

Card.propTypes = {
  card: PropTypes.shape({
    apr: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
    balanceTransferDuration: PropTypes.number.isRequired,
    balanceTransferDuration: PropTypes.number.isRequired,
    selected: PropTypes.bool
  }),
  selectCard: PropTypes.func.isRequired
};

export default Card;
