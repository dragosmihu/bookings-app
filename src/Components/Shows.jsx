import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      loading: true,
      error: null,
      searchPattern: '',
    };
  }

  componentDidMount() {
    fetch('/api/show')
      .then(response => response.json())
      .then(data => {
        this.setState({
          shows: data,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: 'Error fetching data.',
        });
      });
  }

  handleSearch = event => {
    this.setState({ searchPattern: event.target.value });
  };

  render() {
    const { shows, loading, error, searchPattern } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    const filteredShows = shows.filter(show =>
      show.name.toLowerCase().includes(searchPattern.toLowerCase())
    );

    return (
      <div>
        <div className="searchContainer">
          <p>Cauta spectacol: </p>
          <input
            type="text"
            value={searchPattern}
            onChange={this.handleSearch}
            placeholder="Search..."
          />
        </div>
        {filteredShows.map(show => (
          <div className="showsContainer" key={show.id}>
            <img className="showsImg" src="../img/poza.png" alt="" />
            <div className="showsContent">
              <h2>{show.name}</h2>
              <Link to={`/show/${show.id}`}>
                <button
                  className="showsButton"
                >
                  Vezi spectacol
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  showDetails = (showId) => {
    this.props.history.push(`/show/${showId}`);
  };
}

export default ShowList;