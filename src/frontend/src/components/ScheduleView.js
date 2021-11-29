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
                    <td>Newcastle</td>
                    <td>Brentford</td>
                    <td>Ground1</td>
                    <td>05 November 2021</td>
                </tr>
                <tr>
                    <td>Leeds United</td>
                    <td>Crystal Palace</td>
                    <td>Ground3</td>
                    <td>06 November 2021</td>
                </tr>
                <tr>
                    <td>Man City</td>
                    <td>West Ham</td>
                    <td>Ground4</td>
                    <td>10 November 2021</td>
                </tr>
                <tr>
                    <td>Chelsea</td>
                    <td>Man United</td>
                    <td>Ground4</td>
                    <td>10 November 2021</td>
                </tr>
                <tr>
                    <td>Man United</td>
                    <td>West Ham</td>
                    <td>Ground5</td>
                    <td>11 November 2022</td>
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
                    <td>Newcastle</td>
                    <td>Crystal Palace</td>
                    <td>Ground1</td>
                    <td>15 November 2021</td>
                </tr>
                <tr>
                    <td>Leeds United</td>
                    <td>Chelsea</td>
                    <td>Ground3</td>
                    <td>16 November 2021</td>
                </tr>
                <tr>
                    <td>Man City</td>
                    <td>Man United</td>
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
                    <td>Newcastle</td>
                    <td>Leeds United</td>
                    <td>Ground1</td>
                    <td>30 November 2021</td>
                </tr>
            </tbody>    
            </table>
            
        </div>;
}
export default Details;