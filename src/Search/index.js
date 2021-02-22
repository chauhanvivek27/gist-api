import React, { Component, Fragment } from 'react';
import SearchResults from '../searchResult';
import { connect } from 'react-redux';
import { fetchAllGists } from '../redux/actions/gist';

class Search extends Component {
  state = {
    username: '',
    gistList: []
  }

  handleChange = () => (event) => {
    const { value } = event.target;
    this.setState({
      username: value,
    });
  };
  onSubmit = async () => {
    const { username } = this.state;
    this.props.fetchAllGists(username);
  };

  render() {
    const {
      username
    } = this.state;
    return (
      <Fragment>
        <h2>Gist API Search </h2>
        <div className="search">
          <label for="txtCity" className="topLabel">
            Gist Username
              </label>
          <input
            id="txtusername"
            type="text"
            value={username}
            className="txtuser"
            onChange={this.handleChange()}
            placeholder="Gist User name"
          />
          <input
            type="submit"
            value="Search"
            className="btnsumbit"
            onClick={this.onSubmit}
          />
        </div>

        <div className="container">
          <SearchResults />
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGists: (username) => {
      dispatch(fetchAllGists(username));
    }
  }
}

let SearchConnect = connect(null, mapDispatchToProps)(Search);
export default SearchConnect;