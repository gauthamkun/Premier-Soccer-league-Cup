import React from "react";

const Details=()=>{
    
    return <div style={{
           backgroundImage:"images/match.jpg" ,
           backgroundRepeat: 'no-repeat',
    width:'300px',
    opacity:0.7
     }}
           >
             <header style={{
               margincenter: 600, width:'500px',
               backgroundColor: "black"
             }}>Day-1 Schedule</header>
        <table style={{margincenter:600,width:'500px',
 }}>
            <thead style={{backgroundColor:'grey',
        }}>
                <tr>
                    <th>Group1</th>
                    <th>Group2</th>
                    <th>Venue</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arizona State</td>
                    <td>Cal State</td>
                    <td>Ground1</td>
                    <td>05 November 2021</td>
                </tr>
                <tr>
                    <td>Texas State</td>
                    <td>Stanford University</td>
                    <td>Ground3</td>
                    <td>06 November 2021</td>
                </tr>
                <tr>
                    <td>Washington State University</td>
                    <td>Carnegie Mellon University</td>
                    <td>Ground4</td>
                    <td>10 November 2021</td>
                </tr>
                <tr>
                    <td>UC Berkley</td>
                    <td>UC Riverdale</td>
                    <td>Ground4</td>
                    <td>10 November 2021</td>
                </tr>
            </tbody>    
            </table>
            <header style={{
               marginLeft: 600, width:'500px',
               backgroundColor: "black"
             }}>Day-2 Schedule</header>
        <table style={{marginLeft:600,width:'500px',
 }}>
            <thead style={{backgroundColor:'grey',
        }}>
                <tr>
                    <th>Group1</th>
                    <th>Group2</th>
                    <th>Venue</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arizona State</td>
                    <td>Stanford University</td>
                    <td>Ground1</td>
                    <td>15 November 2021</td>
                </tr>
                <tr>
                    <td>UC Berkley</td>
                    <td>Carnegie Mellon University</td>
                    <td>Ground3</td>
                    <td>16 November 2021</td>
                </tr>
                <tr>
                    <td>UC Riveside</td>
                    <td>Cal State</td>
                    <td>Ground4</td>
                    <td>17 November 2021</td>
                </tr>
            </tbody>    
            </table>
            <header style={{
               margincenter: 600, width:'500px',
               backgroundColor: "black"
             }}>Day-3 Schedule</header>
        <table style={{margincenter:600,width:'500px',
 }}>
            <thead style={{backgroundColor:'grey',
        }}>
                <tr>
                    <th>Group1</th>
                    <th>Group2</th>
                    <th>Venue</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Carnegie Mellon University</td>
                    <td>Uc Riverside</td>
                    <td>Ground1</td>
                    <td>30 November 2021</td>
                </tr>
            </tbody>    
            </table>
            
        </div>;
}
export default Details;