import React from "react";

function Stats() {
  return (
    <>
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
    </>
  );
}

export default Stats;