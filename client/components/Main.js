import React from 'react';
import {Link} from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavBar from './NavBar';

const Main = React.createClass({
	render() {
        const { children, ...props } = this.props;
        return (
          <div>
            <NavBar />
            {React.cloneElement(children, props)}
          </div>
        )
	}
});


function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
