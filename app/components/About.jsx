const React = require('react');
const { Link } = require('react-router');

const About = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className='text-center page-title'>About</h1>
        <p>
          This is a weather application built on React. I have built for the Complete React Web App
          Developer Course.
        </p>
        <p>
          This app uses...
          <ul>
            <li><a href='http://http://openweathermap.org/' target='_blank'>Open Weather Map</a> to search weather.</li>
            <li><a href='https://facebook.github.io/react/' target='_blank'>React</a> as a Javascript Framework.</li>
            <li><a href='http://foundation.zurb.com' target='_blank'>Foundation</a> for display and formatting.</li>
            <li><a href='https://www.github.com' target='_blank'>Github</a> for version control.</li>
            <li><a href='https://www.heroku.com/' target='_blank'>Heroku</a> for dev ops.</li>
          </ul>
        </p>
      </div>
    )
  }
});

module.exports = About;
