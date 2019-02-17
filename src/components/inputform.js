import React from 'react';

class InputForm extends React.Component {
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)

    }

    state = {
        data : {
            title: "",
            description:""
        },
        errors :{

        }
    }
    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    
    validate = (data) =>{
        const errors = {};
        if (!(data.title)) errors.title = "Title cannot be empty !";
        if (!data.description) errors.description = "Description cannot be empty !";
        return errors;
    }
    
    submit =(e) => {
        e.preventDefault()
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.addTodo(this.state.data.title , this.state.data.description)
            
}
        }   
    
    render(){
        return(
            <div className="">
                <form>
                    <input className="form-input"
                            type="text"
                            id="title"
                            name="title"
                            value={this.state.data.title}
                            onChange={this.onChange}
                    />
                    
                    <input className="form-input"
                                type="text"
                                id="description"
                                name="description"
                                value={this.state.data.description}
                                onChange={this.onChange}
                    />
                    <button onClick={this.submit}>Add</button>
                </form>
            </div>
        )
    }
}

export default InputForm;