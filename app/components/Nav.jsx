const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
  render: function () {
    return (
      <nav className='navbar navbar-default'>
        <h2>React Weather</h2>
        <IndexLink to='/' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
        <Link to='/about' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>About</Link>
        <Link to='/examples' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
      </nav>
    )
  }
});

module.exports = Nav;
