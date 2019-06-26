import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SearchForm from '../searchForm';

const handleChange = jest.fn();
const submitSearch = jest.fn();

const data = {
  title: 'Mr',
  firstName: 'Test',
  lastName: 'McTest',
  day: '17',
  month: '07',
  year: '1990',
  annualIncome: '12000',
  employmentStatus: 'Full Time',
  postcode: 'BN21 3RS'
};

describe('SearchForm', () => {
  it('renders and matches snapshot', () => {
    const tree = renderer
      .create(
        <SearchForm
          data={data}
          handleChange={handleChange}
          submitSearch={submitSearch}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
