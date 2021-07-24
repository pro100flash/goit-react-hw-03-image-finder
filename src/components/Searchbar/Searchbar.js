import { Component } from "react";
import PropTypes from "prop-types";

class SearchForm extends Component {
  state = { qwery: "" };

  handleChange = (e) => {
    this.setState({ qwery: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.qwery);
    this.setState({ qwery: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

SearchForm.propTypes = {
  qwery: PropTypes.string,
};

export default SearchForm;
