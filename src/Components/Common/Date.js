import React, { Component } from 'react'

export default class DateView extends Component {
  constructor(props) {
    super(props);
    this.dateData = React.createRef();
  }
  componentDidMount() {
    let date = this.dateData.current;
    console.log(date);
    let current = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    date.innerText = `${days[current.getDay()]}, ${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;
  }
  render() {
    return (
      <span ref={this.dateData} className="date"/>
    )
  }
}
