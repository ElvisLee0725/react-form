import React, { Fragment } from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);   
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHobbyChange = this.handleHobbyChange.bind(this);
        this.hobbiesArray = ['sports', 'music', 'theater'];

        this.state = {
            username: '',
            password: '',
            description: '',
            age: 'Young',
            gender: 'Male',
            isAgree: false,
            hobbies: this.hobbiesArray.reduce((allHobbies, hobby) => {
                return {
                    ...allHobbies,
                    [hobby]: false
                }
            }, {})
        }
        
    }

    handleChange({ target: {name, value, type, checked} }) {
        value = type === 'checkbox' ? checked : value;

        this.setState({
            [name]: value
        });
    }

    handleHobbyChange({ target: { name }}) {
        this.setState({
            hobbies: {
                ...this.state.hobbies,
                [name]: !this.state.hobbies[name]
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, password, description, age, isAgree, gender, hobbies } = this.state;
        console.log("username", username);
        console.log("password", password);
        console.log("description", description);
        console.log("age", age);
        console.log("gender", gender);
        // console.log("isAgree", isAgree);
        console.log("hobbies", hobbies);
    }
    
    render() {
        const { username, password, description, age, gender, isAgree, hobbies} = this.state;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Username" name="username" value={username} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Example textarea</label>
                        <textarea className="form-control" id="description" rows="3" placeholder="Say something..." name="description" value={description} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <select className="form-control" id="age" name="age" value={age} onChange={this.handleChange}>
                            <option value="Young">&lt; 20</option>
                            <option value="Young Adult">21 - 40</option>
                            <option value="Mid Age">41 - 60</option>
                            <option value="Old">&gt; 60</option>
                        </select>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="Male" checked={gender === "Male"} onChange={this.handleChange}/>
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="Female" checked={gender === "Female"} onChange={this.handleChange}/>
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>

                    { this.hobbiesArray.map((hobby, index) => (
                        <div className="form-check" key={index}>
                            <input type="checkbox" className="form-check-input" id={hobby} name={hobby} checked={hobbies[hobby]} onChange={this.handleHobbyChange}/>
                            <label className="form-check-label" htmlFor={hobby}>{hobby}</label>
                        </div>
                    ))}

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Fragment>
        );
    }
}

export default UserForm;