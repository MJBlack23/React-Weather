const React = require('react');

const WeatherMessage = React.createClass({
  render: function () {
    let { temp, location } = this.props;
    return (
      <div>
        <h3 className='text-center'>It is { Math.round(temp) }&#8457; in { toTitleCase(location) }.</h3>
      </div>
    )
  }
});

module.exports = WeatherMessage;

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
