const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    let self = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({ location, temp, isLoading: false });
    }, function (error) {
      self.setState({
        isLoading: false,
        errorMessage: error.message
      });
      alert(error);
    });

  },
  render: function () {

    let { isLoading, temp, location, errorMessage } = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className='text-center'>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={ temp } location={ location }/>
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={ errorMessage }/>
        )
      }
    }

    return (
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch={ this.handleSearch }/>
        { renderMessage() }
        { renderError() }
      </div>
    )
  }
});

module.exports = Weather;
