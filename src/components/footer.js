import React  from 'react';
import { connect } from 'react-redux';



const Footer = (props) => {
    return(
        <div>
            {}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todos : state.todos
    }
}

export default connect(mapStateToProps , {})(Footer);