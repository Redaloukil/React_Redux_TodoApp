import React from 'react';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        setHappy : () => {},
        setMad : () => {},
        setNormal : () => {},
    }
}

const Header = (props) => {
    return(
        <header>
            <h5>Hello Dear this is you dashord</h5>
        </header>
    )
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Header)