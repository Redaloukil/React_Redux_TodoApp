import React from 'react';

class InputForm extends React.Component {
    state = {
        title: "",
        description:""
    }
    submit(){
        
    }
    render(){
        return(
            <div className="">
                <form>
                    <button onClick={this.submit}></button>
                    <input value="title"></input>
                    <input value="description"></input>
                </form>
            </div>
        )
    }
}

export default InputForm;