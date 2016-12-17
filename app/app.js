/* entry point */
'use strict';
require('../styles/app.less');
var path = require('path');
var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
	render() {
		return (
            <div className="wrapper">
                <div className="block label">Electron + Webpack + React</div>
            </div>
        );
	}
});

ReactDom.render(<App/>, document.getElementById('root'));
