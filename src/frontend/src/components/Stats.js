import React, { Component } from 'react';

class Stats extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/Stats/api');
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
  }

  render() {
    const {groups, isLoading} = this.state;
   
    return (
      <div class="container">
          <img src="images/pslcup.png" alt={"images/4.jpg"} width="150px" height="150px"/>
          <div class="container">
            <h2>Tournament Statistics</h2>
            <table style={{width:'500px' }}>
                <thead style={{backgroundColor:'orange' }}>
                  <tr>
                    <th>Position</th>
                    <th>Team Name</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Position</td>
                    <td>Arizona State University </td>
                    <td>92</td>
                  </tr>
                </tbody>
            </table>
            {groups.map(group =>
              <div key={group.id}>
                {group.name}
              </div>
            )}
          </div>
      </div>
    );
  }
}
export default Stats;