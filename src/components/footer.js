import React  from 'react';
import { connect } from 'react-redux';



const Footer = (props) => {
    return(
        <footer>
            <div>
            </div>
        </footer>
    )
}

function mapStateToProps(state) {
    return {
        todos : state.todos
    }
}

export default connect(mapStateToProps , {})(Footer);