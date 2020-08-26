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
            firstaddress: '',
            secondaddress: '',
            boxnumber: '',


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
                        <select name="categories" id="categories">
                            <option value="presidential elections">President</option>
                            <option value="member of parliament">Member of Parliament (MP)</option>
                            <option value="district leaders">District Leader</option>
                            <option value="local council">President & MP</option>
                            <option value="">President & District Leader</option>
                            <option value="">MP & District Leader</option>
                            <option value="all">All</option>
                        </select>
                    </div>
                    <br/>    
                    <br/>                

                    <button className="submit-btn"><h5>Submit Details</h5></button>

                </form>
            </div>
         );
    }
}
 
export default App;