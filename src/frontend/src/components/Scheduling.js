import { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { Button, Table, Container, Row, Col, Dropdown } from "react-bootstrap";
import React from "react"
import axios from 'axios';
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";

function Teams({ selectedDates,selectedgrounds }) {

  const [data, setData] = useState([]);
  const[teams, setTeams]=useState(["Arizona State","Cal State","Texas State","Stanford University"]);
  const[teams1, setTeams1]=useState(["Washington State University","Carnegie Mellon University","UC Berkley","UC Riverdale"]);
  useEffect(() => {
    
    const data = selectedDates.map((date) => {
      return {
        date: date.format("dddd DD MMMM YYYY"),
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
          <th>Team1</th>
          <th>Team2</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {console.log(teams1)}
        {data?.map((date,i) => {
          return (
            <tr key={date.date}>
              <td>{date.date}</td>
              <td>{teams[Math.floor(Math.random()*teams.length)]}</td>
              <td>{teams1[Math.floor(Math.random()*teams1.length)]}</td>
              <td>{selectedgrounds[i]}</td>
            </tr>
          );
        })}
        
      </tbody>
    </Table>
    </div>
  );
}


axios({
  method: "post",
  url: "http://localhost:8080/v1/Scheduling",
})

function Scheduler() {
  const [value, setValue] = useState([]);
  const [showTeams, setTeams] = useState(false);
  const [dropdownItems,setDropdownItems] = useState(["Ground1","Ground2","Ground3","Ground4","Ground5","Ground6"]);
  const[selectedgrounds, setselectedgrounds]=useState([]);
  function removeItem(e){
    console.log(e.target.innerText);
      let filteredArray = dropdownItems.filter(item => item !== e.target.innerText)
      setDropdownItems(filteredArray);
      setselectedgrounds([...selectedgrounds, e.target.innerText]);
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
      {showTeams ? <Teams selectedDates={value} selectedgrounds={selectedgrounds}/> : null}
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


