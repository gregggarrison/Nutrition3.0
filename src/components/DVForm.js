import React, { Component } from 'react'

class DVForm extends Component {
    render() {

        return (
            <div className="col" id="row2-col2">
                <form>
                    <h4 className="form-title">DV</h4>
                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Calories:</label>
                        </div>
                        <input className="form-input" type="text" id="calories-input" defaultValue="2000"/>
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Sodium(mg):</label>
                        </div>
                        <input className="form-input" type="text" id="sodium-input" defaultValue="2400" />
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Sat. Fat(g):</label>
                        </div>
                        <input className="form-input" type="text" id="sFat-input" defaultValue="20" />
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Total Fat(g):</label>
                        </div>
                        <input className="form-input" type="text" id="tFat-input" defaultValue="65"/>
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Carbs(g):</label>
                        </div>
                        <input className="form-input" type="text" id="carbs-input" defaultValue="300"/>
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Cholesterol(mg):</label>
                        </div>
                        <input className="form-input" type="text" id="cholest-input" defaultValue="300" />
                    </div>

                    <div className="form-row">
                        <div className='col'>
                            <label className="form-label">Fiber(g):</label>
                        </div>
                        <input className="form-input" type="email" id="Fiber-input" defaultValue="25"/>
                    </div>

                </form>
            </div>
        )
    }
}


export default DVForm 