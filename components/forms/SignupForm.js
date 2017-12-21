import React from 'react';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            level:'',
            email:'',
            password:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }


    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        this.props.userSignupRequest(this.state);
    }



    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="control-label"> First Name </label>
                    <input
                        value={this.state.firstName}
                        onChange={this.onChange}
                        type="text"
                        name="firstName"
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label"> Last Name </label>
                    <input
                        value={this.state.lastName}
                        onChange={this.onChange}
                        type="text"
                        name="lastName"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label"> Level </label>
                    <select
                        className="form-control"
                        name="level"
                        onChange={this.onChange}
                        value={this.state.level}>
                        <option value="" disabled>Choose your level</option>
                        <option value="Beginner" >Beginner</option>
                        <option value="Advanced" >Advanced</option>
                        <option value="Intermediate" >Intermediate</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="control-label"> Email </label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="control-label"> Password </label>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>


        );
    }
}

SignupForm.propsTypes ={
    userSignupRequest: React.PropTypes.func.isRequired
};

export default SignupForm;