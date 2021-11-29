import React, { useState, useEffect } from "react";
import getPlayerData from './Referee1'


const Referee=()=>{
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
      getPlayerData().then(
          (response) => {
              setPlayerData(response.data)
          }
      )
  }, []);
/*  submitLogin(e) {
    e.preventDefault();

      const user = {name: this.state.name,
                  Id: this.state.Id,
                 } 
                  <button
                               type="button"
                               className="login-btn"
                                onClick={this.submitLogin
                                .bind(data)}>Yes</button>
                 
                 
                 */
    return <div className="app-container" 
    style={{ backgroundImage: "url(images/61449351.jpeg)",
    backgroundRepeat: 'no-repeat',
    width:'700px',
    opacity:0.7
     }}>
        <table style={{marginLeft:460,width:'500px' }}>
            <thead style={{backgroundColor:'grey' }}>
                <tr>
                    <th>Referee Name</th>
                    <th>Reg No</th>
                    <th>Selected</th>
                    
                </tr>
            </thead>
            <tbody>
            {playerData.map((data) => (
                        <tr key={data.Id}>
                            <td>{data.name}</td>
                            <td>{data.Id}</td>
                            
                            <td>
                               <button >No</button>
                               
                           </td>     
                           </tr>
                          ))}
            </tbody>    
            </table>
        </div>;
}
export default Referee;