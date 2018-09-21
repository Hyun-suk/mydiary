import React, { Component } from 'react';
// import Calendar, {TileContent} from 'react-calendar';
import Calendar from 'react-calendar/dist/entry';

class Scheduler extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  test = ({ date, view }) => view === 'month' && date.getDay() === 1 ? <p>Its Sunday!</p> : null

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          tileContent={this.test}
          tileClassName="일"
        >
        </Calendar>
      </div>
    );
  }
}

export default Scheduler;
