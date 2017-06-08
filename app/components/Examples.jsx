const React = require('react');
const { Link } = require('react-router');

const Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className='text-center page-title'>Examples</h1>
        <p>Here are a few example locations to try out...</p>
        <ol>
          <li>
            <Link to='/?location=springdale'>Springdale, AR</Link>
          </li>
          <li>
            <Link to='/?location=los%20angeles'>Los Angeles, CA</Link>
          </li>
          <li>
            <Link to='/?location=new&20york'>New York, NY</Link>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = Examples;
