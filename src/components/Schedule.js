import React, { Component } from 'react';
import dateFns from 'date-fns';
import ko from 'date-fns/locale/ko';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Icon from 'components/Icon'
import colors from 'constants/colors'
import spaces from 'constants/spaces'
import styles from './Schedule.css'
// import Calendar, {TileContent} from 'react-calendar';

const Table = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 80%;
`;

const Header = styled.div`
  border-top: 1px solid ${colors.mercury};
  border-bottom: 1px solid ${colors.mercury};
  background-color: ${colors.ghost};
  font-size: 1rem;
  font-weight: bold;
  padding: 1em 0em;
  display: block;
`

const Logo = styled.div`
  font-size: 175%;
  text-align: center;
  color: var(--main-color);
  line-height: 1;
`

const Row = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Col = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
`

const Calendar = styled.div`
  display: block;
  positioin: relative;
  width: 100%;
  background: var(--neutral-color);
  border: 1px solid var(--border-color);
`

const Cell = styled.div`
  flex-grow: 0;
  flex-basis: calc(100%/7);
  width: calc(100%/7);

  &.number {
    font-size: 82.5%;
    line-height: 1;
    top: .75em;
    right: .75em;
    font-weight: 700;
  }

  &:last-chid {
    border-right: none;
  }
`

const CellNumber = styled.span`
  font-size: 100%;
  line-height: 1;
  top: .75em;
  right: .75em;
  font-weight: 700;
`

const BgNumber = styled.span`
  font-weight: 700;
  line-height: 1;
  color: ${colors.maincolor};
  font-size: 70%;
  padding: .75em 0;
  border-bottom: 1px solid ${colors.bordercolor};
`

class Schedule extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Schedule;
