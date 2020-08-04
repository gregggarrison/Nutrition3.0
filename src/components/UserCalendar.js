import React, { Component } from 'react';
import Calendar from 'react-calendar';
import'react-calendar/dist/Calendar.css'
 
class UserCalendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className="col" id="row1-col3">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}


export default UserCalendar