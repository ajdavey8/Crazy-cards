import React, { Component } from 'react';
import getCards from './helpers/mockRequests';
import SearchForm from './components/searchForm';
import Cards from './components/cards';
import Card from './components/card';
import Loader from './components/loader';
import Header from './components/header';

export class App extends Component {
  state = {
    formData: {
      title: 'Mr',
      firstName: '',
      lastName: '',
      day: '',
      month: '',
      year: '',
      annualIncome: '',
      employmentStatus: 'Full Time',
      postcode: ''
    },
    totalCreditAvailable: 0
  };

  async componentDidMount() {
    this.setState({ loaded: false });
    const { data } = await getCards();
    this.setState({
      cards: data,
      loaded: true
    });
  }

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  checkEligiblity = async event => {
    event.preventDefault();
    this.setState({
      loaded: false
    });
    const { data } = await getCards(
      this.state.formData.annualIncome,
      this.state.formData.employmentStatus
    );
    this.setState({
      cards: data,
      loaded: true,
      totalCreditAvailable: 0
    });
  };

  checkCardSelection = cardId => {
    const selectedCard = this.state.cards.findIndex(card => card.id === cardId);
    this.setState(
      prevState => {
        const updatedCards = [...prevState.cards];
        updatedCards[selectedCard].selected = !prevState.cards[selectedCard]
          .selected;
        return { cards: updatedCards };
      },
      () => {
        this.updateTotalCredit(selectedCard);
      }
    );
  };

  updateTotalCredit = cardIndex => {
    const selectedCard = this.state.cards[cardIndex];
    if (selectedCard.selected) {
      return this.setState(prevState => ({
        totalCreditAvailable:
          prevState.totalCreditAvailable + selectedCard.credit
      }));
    }
    return this.setState(prevState => ({
      totalCreditAvailable: prevState.totalCreditAvailable - selectedCard.credit
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <SearchForm
          data={this.state.formData}
          handleChange={this.handleInputChange}
          submitSearch={this.checkEligiblity}
        />

        <Cards creditTotal={this.state.totalCreditAvailable}>
          {this.state.loaded ? (
            this.state.cards.map(card => {
              return (
                <Card
                  key={card.id}
                  card={card}
                  selectCard={this.checkCardSelection}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </Cards>
      </div>
    );
  }
}
