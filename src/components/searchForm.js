import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/search_form.scss';

const SearchForm = ({ data, handleChange, submitSearch }) => (
  <form className="search-form" onSubmit={submitSearch}>
    <div className="search-form__group">
      <label className="search-form__label">Title</label>
      <div className="search-form__radio-wrapper">
        <div className="search-form__radio">
          <input
            className="search-form__radio-input"
            type="radio"
            name="title"
            id="mr"
            value="Mr"
            onChange={handleChange}
            defaultChecked
          />
          <label className="search-form__radio-label" htmlFor="mr">
            Mr
          </label>
        </div>
        <div className="search-form__radio">
          <input
            className="search-form__radio-input"
            type="radio"
            name="title"
            id="mrs"
            value="Mrs"
            onChange={handleChange}
          />
          <label className="search-form__radio-label" htmlFor="mrs">
            Mr
          </label>
        </div>
        <div className="search-form__radio">
          <input
            className="search-form__radio-input"
            type="radio"
            name="title"
            id="ms"
            value="Ms"
            onChange={handleChange}
          />
          <label className="search-form__radio-label" htmlFor="ms">
            Ms
          </label>
        </div>
        <div className="search-form__radio">
          <input
            className="search-form__radio-input"
            type="radio"
            name="title"
            id="miss"
            value="Miss"
            onChange={handleChange}
          />
          <label className="search-form__radio-label" htmlFor="miss">
            Miss
          </label>
        </div>
        <div className="search-form__radio">
          <input
            className="search-form__radio-input"
            type="radio"
            name="title"
            id="dr"
            value="Dr"
            onChange={handleChange}
          />
          <label className="search-form__radio-label" htmlFor="dr">
            Dr
          </label>
        </div>
      </div>
    </div>
    <div className="search-form__group">
      <label className="search-form__label">Name</label>
      <div className="search-form__input-wrapper">
        <input
          className="search-form__text-input"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={handleChange}
        />
        <input
          className="search-form__text-input"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="search-form__group">
      <label className="search-form__label">Date of Birth</label>
      <div className="search-form__input-wrapper">
        <input
          className="search-form__text-input"
          type="number"
          name="day"
          placeholder="DD"
          min="1"
          max="31"
          value={data.day}
          onChange={handleChange}
        />
        <input
          className="search-form__text-input search-form__input-month"
          type="number"
          name="month"
          placeholder="MM"
          min="1"
          max="12"
          value={data.month}
          onChange={handleChange}
        />
        <input
          className="search-form__text-input"
          type="number"
          name="year"
          placeholder="YYYY"
          min="1900"
          max="2019"
          value={data.year}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="search-form__group">
      <label className="search-form__label">
        What is your annual Income before tax?
      </label>
      <div className="search-form__input-wrapper">
        <input
          className="search-form__text-input"
          type="number"
          name="annualIncome"
          placeholder="Annual Income"
          value={data.annualIncome}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="search-form__group">
      <label className="search-form__label">
        What is you employment status?
      </label>
      <div className="search-form__radio-wrapper">
        <div className="search-form__radio">
          <input
            className="search-form__radio-input"
            type="radio"
            name="employmentStatus"
            id="fullTime"
            value="fullTime"
            onChange={handleChange}
          />
          <label className="search-form__radio-label" htmlFor="fullTime">
            Full Time
          </label>
        </div>
        <div className="search-form__radio">
          <input
            className="search-form__radio-input"
            type="radio"
            name="employmentStatus"
            id="partTime"
            value="partTime"
            onChange={handleChange}
          />
          <label className="search-form__radio-label" htmlFor="partTime">
            Part Time
          </label>
        </div>
        <div className="search-form__radio">
          <input
            className="search-form__radio-input"
            type="radio"
            name="employmentStatus"
            id="student"
            value="student"
            onChange={handleChange}
          />
          <label className="search-form__radio-label" htmlFor="student">
            Student
          </label>
        </div>
      </div>
    </div>
    <div className="search-form__group">
      <label className="search-form__label">Postcode</label>
      <div className="search-form__input-wrapper">
        <input
          className="search-form__text-input"
          type="text"
          name="postcode"
          placeholder="Postcode"
          value={data.postcode}
          onChange={handleChange}
        />
      </div>
    </div>
    <div>
      <button className="search-form__button">Get Results</button>
    </div>
  </form>
);

SearchForm.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    annualIncome: PropTypes.string.isRequired,
    employmentStatus: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired
  }),
  handleChange: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired
};

export default SearchForm;
