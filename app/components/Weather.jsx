const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    let self = this;

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({ location, temp, isLoading: false });
    }, function (error) {
      self.setState({ isLoading: false });
      alert(error);
    });

  },
  render: function () {

    let { isLoading, temp, location } = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className='text-center'>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={ temp } location={ location }/>
      }
    }

    return (
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch={ this.handleSearch }/>
        { renderMessage() }
      </div>
    )
  }
});

module.exports = Weather;
