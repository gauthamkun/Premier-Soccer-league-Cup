import { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import schedule from './schedule.jpg'

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

function Scheduler() {
  const [value, setValue] = useState([]);
  const [showTeams, setTeams] = useState(false);

  return (
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
  );
}

function App() {
  return (
    <div>
      <Container className="mt-10">
        <Row>
        <Col >
         <img src={schedule} height='300' width='300'/>
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

export default App;
