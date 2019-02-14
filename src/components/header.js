import React from 'react';
import { connect } from 'react-redux';


const Header = (props) => {
    return(
        <div>
            <h2>Hello Dear this is you dashord</h2>
            <p>Tell us what you want to do this day</p>
        </div>
    )
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps , {})(Header)