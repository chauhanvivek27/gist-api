import React, { Component, Fragment } from 'react';
import SearchResults from '../searchResult';
import { connect } from 'react-redux';
import { fetchAllGists } from '../redux/actions/gistAction';

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
    //gaearon
    const {
      username
    } = this.state;
    return (
      <Fragment>
        <h2>Gist API Search </h2>
        <div className="search">
          <input
            id="txtusername"
            type="text"
            value={username}
            className="txtuser"
            onChange={this.handleChange()}
            placeholder="Enter Username"
          />
          <input
            type="submit"
            value="Search"
            className="btnsubmit"
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