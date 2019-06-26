const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/cards', (req, res) => {
  const allCards = [
    {
      id: 1,
      cardType: 'Anywhere Card',
      apr: '33.9',
      balanceTransferDuration: 0,
      purchaseOfferDuration: 0,
      credit: 300,
      requirements: false
    },
    {
      id: 2,
      cardType: 'Student Life',
      apr: '18.9',
      balanceTransferDuration: 0,
      purchaseOfferDuration: 6,
      credit: 1200,
      requirements: {
        employmentStatus: 'student'
      }
    },
    {
      id: 3,
      cardType: 'Liquid Card',
      apr: '33.9',
      balanceTransferDuration: 12,
      purchaseOfferDuration: 6,
      credit: 3000,
      requirements: {
        annualIncome: 16000
      }
    }
  ];

  if (Object.entries(req.query).length != 0) {
    const { annualIncome, employmentStatus } = req.query;
    let availableCards = allCards.filter(
      ({ requirements }) =>
        !requirements ||
        ((!requirements.employmentStatus ||
          requirements.employmentStatus === employmentStatus) &&
          (!requirements.annualIncome ||
            requirements.annualIncome <= annualIncome))
    );
    return res.send(availableCards);
  }
  return res.send(allCards);
});

app.listen(process.env.PORT || 5050);
