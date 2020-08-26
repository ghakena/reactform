import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            nin: '',
            occupation: '',
            firstaddress: '',
            secondaddress: '',
            boxnumber: '',
            category: '',
            approval: '',
            age: '',
        }
    }

    changeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    } 

    changeLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    changeNin = (event) => {
        this.setState({
            nin: event.target.value
        })
    }

    changeOccupation = (event) => {
        this.setState({
            occupation: event.target.value
        })
    }

    changeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    changeFirstAddress = (event) => {
        this.setState({
            firstaddress: event.target.value
        })
    }

    changeSecondAddress = (event) => {
        this.setState({
            secondaddress: event.target.value
        })
    }

    changeBoxNumber = (event) => {
        this.setState({
            boxnumber: event.target.value
        })
    }

    changeCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    changeApproval = (event) => {
        this.setState({
            approval: event.target.value
        })
    }

    render() { 
        return ( 
            <div className="container muted-text">
                <form>
                    <div>
                        <div class="text-center">
                            <img src="https://res.cloudinary.com/rokuirie/image/upload/v1598436702/react-form/logo_original_cuetvw.png" class="rounded" alt="..." />
                        </div>
                        <h3 style={{textAlign: "center"}}>Voter's Registeration Form for the Republic of Uganda</h3>
                        <br />
                    </div>
                    <hr className="first-line" />
                    <br />
                    <br/>
                    <p style={{textAlign: "center", fontSize: "18px", fontStyle: "italic"}}>
                        By filling this form, you agree that you are 18 years and older, and that you are eligible
                        to participate in the electoral process.
                    </p>
                    <br/>
                    <div className="personal-details">
                        <h4>Personal Details</h4>
                        <label htmlFor="first-name">FIRST NAME</label>
                        <input type="text"
                            placeholder="First Name"
                            onChange={this.changeFirstName}
                            value={this.state.firstname}
                            className="form-group form-control"
                            id="first-name"
                        />
                        <label htmlFor="last-name">LAST NAME</label>
                        <input type="text"
                            placeholder="Last Name"
                            onChange={this.changeLastName}
                            value={this.state.lastname}
                            className="form-group form-control"
                            id="last-name"
                        />
                        <label htmlFor="nin">NATIONAL ID NIN</label>
                        <input type="text"
                            placeholder="National ID NIN"
                            onChange={this.changeNin}
                            value={this.state.nin}
                            className="form-group form-control"
                            id="nin"
                        />
                        <label htmlFor="occupation">OCCUPATION</label>
                        <input type="text"
                            placeholder="Occupation"
                            onChange={this.changeOccupation}
                            value={this.state.occupation}
                            className="form-group form-control"
                            id="occupation"
                        />
                        <label htmlFor="age">AGE</label>
                        <input type="number"
                            placeholder="Age"
                            onChange={this.changeAge}
                            value={this.state.age}
                            className="form-group form-control"
                            id="age"
                        />
                        <br/>
                        <p>Please, select your gender</p>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">Male</label><br/>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label for="female">Female</label><br/>
                        <input type="radio" id="other" name="gender" value="other" />
                        <label for="other">Other</label>

                    </div>
                    <br/>
                    <div className="addresses">
                        <h4>Addresses</h4>
                        <label htmlFor="first-address">FIRST ADDRESS</label>
                        <input type="text"
                            placeholder="First Address"
                            onChange={this.changeFirstAddress}
                            value={this.state.firstaddress}
                            className="form-group form-control"
                            id="first-address"
                        />

                        <label htmlFor="second-address">SECOND ADDRESS</label>
                        <input type="text"
                            placeholder="Second Address"
                            onChange={this.changeSecondAddress}
                            value={this.state.secondaddress}
                            className="form-group form-control"
                            id="second-address"
                        />

                        <label htmlFor="box-number">Postal Address (P.O. Box/ C.O. Box)</label>
                        <input type="text"
                            placeholder="Postal Address"
                            onChange={this.changeBoxNumber}
                            value={this.state.boxnumber}
                            className="form-group form-control"
                            id="box-number"
                        />
                    </div>
                    <br/>
                    <div className="election-choice">
                        <h4>Election Category</h4>
                        <label>Please choose the voting category(ies) you would like to participate in during the final elections.</label>
                        <br/>
                        <select name="categories" id="categories" onChange={this.changeCategory}>
                            <option value="President">President</option>
                            <option value="Member of Parliament">Member of Parliament (MP)</option>
                            <option value="District Leader">District Leader</option>
                            <option value="President & MP">President & MP</option>
                            <option value="President & District Leader">President & District Leader</option>
                            <option value="MP & District Leader">MP & District Leader</option>
                            <option value="All">All</option>
                        </select>
                    </div>
                    <br/> 
                    <br/>
                    <div className="approval">
                        <input type="checkbox" id="approval" name="approval" value="Completed Approval" onChange={this.changeApproval}/>
                        <label for="vehicle1"><p style={{ marginLeft: "5px" }}>I hereby agree that I am a citizen of Uganda and I am liable to legal prosecution for unlawful misuse of this document.</p></label>
                    </div>   
                    <br/>                

                    <button className="submit-btn"><h5>Submit Details</h5></button>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
                <p>{this.state.age}</p>
                <p className="warning">This is property of the Electoral Commission of Uganda. Unlawful use of this document will lead to prosecution in the Highest Court of Law</p>
            </div>
         );
    }
}
 
export default App;