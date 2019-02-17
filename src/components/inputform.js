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
        }
    }
    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    
    validate = (title , description) =>{
        if(title.length()>0 && description.length()){
            console.log("validated")
            return true;
        }
        return false;
    }
    
    submit =(e) => {
        e.preventDefault()
        const title = this.state.data.title
        const description = this.state.data.description
        
        this.props.addTodo(title,description);    
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
                    
                    <input  className="form-input"
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