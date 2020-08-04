import React, { Component } from 'react'

class UserForm extends Component {
    state = {


        user: [
            {
                username: "Gregg",
                age: 35,
                height: 74,
                weight: 245,
                sex: "male",
                location: "Denver, CO",
                email: "g.garrison@noemail.com",
                pal: "veryAct"
            }
        ],
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.getBMR()
        this.getTDEE()
    }


    getBMR = () => {
        const height = this.state.user[0].height
        const cmConv = 2.54
        const heightCM = height * cmConv

        const weight = this.state.user[0].weight
        const kgConv = 0.453592
        const weightKG = weight * kgConv

        const age = this.state.user[0].age
        const s = this.state.user[0].sex === "male" ? 5 : -161

        const bmr = Math.floor(10 * weightKG + 6.25 * heightCM - 5 * age + s)
        return bmr
    }



    getTDEE = () => {
        let multiplier = 0
        if (this.state.user[0].pal === "sedentary") {
            let number = 1.2
            return Math.floor((multiplier + number) * this.getBMR())

        } else if (this.state.user[0].pal === "lightlyAct") {
            let number = 1.375
            return Math.floor((multiplier + number) * this.getBMR())

        } else if (this.state.user[0].pal === "moderatelyAct") {
            let number = 1.55
            return Math.floor((multiplier + number) * this.getBMR())

        } else if (this.state.user[0].pal === "veryAct") {
            let number = 1.725
            return Math.floor((multiplier + number) * this.getBMR())

        } else {
            let number = 1.9
            return Math.floor((multiplier + number) * this.getBMR())
        }
    }



    handleChange = (event) => {
        let { name, value } = event.target
        console.log({ name, value })
        this.setState({
            [name]: value
        })
    }


    render() {
        const usernamee = this.state.user[0].username
        const age = this.state.user[0].age
        const location = this.state.user[0].location
        const email = this.state.user[0].email
        const sex = this.state.user[0].sex
        const weight = this.state.user[0].weight
        const heightFT = Math.floor(this.state.user[0].height / 12)
        const heightIN = this.state.user[0].height - heightFT * 12
        const pal = this.getTDEE()

        return (
            <div className="col" id="row2-col1">
                <form onSubmit={this.handleSubmit}>
                    <h4 className="form-title">Info</h4>
                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Name:</label>
                        </div>
                        <input
                            className="form-input"
                            type="text" id="name-input"
                            defaultValue={this.state.user[0].username}
                            onChange={this.handleChange}
                            name="username"
                        />
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Location:</label>
                        </div>
                        <input className="form-input" type="text" id="location-input" defaultValue={location} />
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Email:</label>
                        </div>
                        <input
                            className="form-input"
                            type="email"
                            id="email-input"
                            style={{ width: 200, fontSize: 12 }}
                            defaultValue={email}
                        />
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Age:</label>
                        </div>
                        <input
                            className="form-input"
                            type="number"
                            id="age-input"
                            style={{ width: 100 }}
                            defaultValue={age}
                        />
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Sex:</label>
                        </div>
                        <input
                            className="form-input"
                            type="text"
                            id="sex-input"
                            style={{ width: 100 }}
                            defaultValue={sex}
                        />
                    </div>


                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Weight:</label>
                        </div>
                        <input
                            className="form-input"
                            type="number"
                            id="weight-input"
                            style={{ width: 100 }}
                            defaultValue={weight}
                        />
                    </div>
                    <div className="form-row align-items-center">
                        <div className="col-auto my-1">
                            <label>Height:</label>
                        </div>
                        <div className="col-auto my-1" id="height-ft">
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option onChange={this.handleChange} defaultValue={heightFT}>{heightFT}'</option>
                                <option value="4">4'</option>
                                <option value="5">5'</option>
                                <option value="6">6'</option>
                            </select>
                        </div>
                        <div className="col-auto my-1" id="height-in">
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option defaultValue>{heightIN}"</option>
                                <option value="1">1"</option>
                                <option value="2">2"</option>
                                <option value="3">3"</option>
                                <option value="4">4"</option>
                                <option value="5">5"</option>
                                <option value="6">6"</option>
                                <option value="7">7"</option>
                                <option value="8">8"</option>
                                <option value="9">9"</option>
                                <option value="10">10"</option>
                                <option value="11">11"</option>
                                <option value="12">12"</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">PAL:</label>
                        </div>
                        <select className="form-input">
                            <option defaultValue="">choose...</option>
                            <option value="sedentary">Sedentary</option>
                            <option value="lightlyAct">Lightly Active</option>
                            <option value="moderatelyAct">Moderately Active</option>
                            <option value="veryActive">Very Active</option>
                            <option value="extraAct">Extra Active</option>
                        </select>

                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">BMR:</label>
                        </div>
                        <input
                            className="form-input"
                            type="text"
                            id="BMR-input"
                            style={{ width: 100 }}
                            defaultValue={this.getBMR()}
                        />
                    </div>
                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">TDEE:</label>
                        </div>
                        <input
                            className="form-input"
                            type="text"
                            id="TDEE-input"
                            style={{ width: 100 }}
                            defaultValue={this.getTDEE()}
                        />
                    </div>



                    <input type="submit"></input>
                </form>
            </div>


        )
    }
}


export default UserForm 