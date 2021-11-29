import { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { Button, Table, Container, Row, Col, Dropdown } from "react-bootstrap";
import React from "react"
import axios from 'axios';

function Teams({ selectedDates }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    
    const data = selectedDates.map((date) => {
      return {
        date: date.format("dddd DD MMMM YYYY"),
        team1: "USA",
        team2: "Germany",
        venue: "USA stadium",
      };
    });
  
    setData(data);
  }, []);

  return (
    <div>
      <h4>Schedule</h4>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Team 1</th>
          <th>Team 2</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((date) => {
          return (
            <tr key={date.date}>
              <td>{date.date}</td>
              <td>{date.team1}</td>
              <td>{date.team2}</td>
              <td>{date.venue}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </div>
  );
}

// handleDropdownChange1=(e) =>{
//   this.setState({ground:e.target.value});
// }
// handleChange2=(e) =>{
//   this.setState({team1:e.target.value});
// }
// handleChange3=(e) =>{
//   this.setState({team2:e.target.value});
// }
// handleChange4=(e) =>{
//   this.setState({date:e.target.value});
// }

axios({
  method: "post",
  url: "http://localhost:8080/v1/Scheduling",
})

function Scheduler() {
  const [value, setValue] = useState([]);
  const [showTeams, setTeams] = useState(false);
  const [dropdownItems,setDropdownItems] = useState(["Ground1","Ground2","Ground3","Ground4","Ground5","Ground6","Ground7","Ground8","Ground9"]);
  function removeItem(e){
    console.log(e.target.innerText);
      let filteredArray = dropdownItems.filter(item => item !== e.target.innerText)
      setDropdownItems(filteredArray);
  }

  return (
    <div>
    <div>
      <DatePicker
        multiple
        plugins={[<DatePanel />]}
        value={value}
        onChange={setValue}
      />
      <Button className="mx-3" variant="success" onClick={() => setTeams(true)}>
        Submit
      </Button>
      {showTeams ? <Teams selectedDates={value} /> : null}
    </div>
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Ground Scheduling
        </Dropdown.Toggle>
{
  console.log(dropdownItems)
}
  <Dropdown.Menu>
    {dropdownItems.map((item)=>
      <Dropdown.Item onClick={removeItem} value = {item}>{item}</Dropdown.Item>
    )
    }
  </Dropdown.Menu>
</Dropdown>
    </div>
    </div>
  );
}

function Scheduling() {
  return (
    <div>
      <Container className="mt-10">
        <Row>
        <Col >
         <img src={"images/schedule.jpeg"} height='300' width='300'/>
          </Col>
        
          <Col xs={2}>
            <h4>Select Date:</h4>
          </Col>
          <Col >
            <Scheduler />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Scheduling;