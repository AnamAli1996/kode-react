import React from 'react';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountType: "",
            firstName: '',
            lastName: '',
            age:'',
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

                    <div className="form-group">
                        <label className="control-label"> Account Type </label>
                        <select
                            className="form-control"
                            name="accountType"
                            onChange={this.onChange}
                            value={this.state.accountType}>
                            <option value="" disabled>Account Type</option>
                            <option value="Student" >Student</option>
                            <option value="Mentor" > Mentor</option>
                            <option value="Parent" >Parent</option>
                        </select>
                    </div>

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
                    <label className="control-label"> Age </label>
                    <input
                        value={this.state.age}
                        onChange={this.onChange}
                        type="text"
                        name="age"
                        className="form-control"
                    />
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