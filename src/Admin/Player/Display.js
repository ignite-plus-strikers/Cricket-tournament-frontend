import React from 'react';
import '../../App.css';
function Display () {
    return(
        <div>
            <div class="sidenav">
                
          <a href="#about">Dashboard</a><hr></hr>
          <a href="#services">Fixtures</a><hr></hr>
          <a href="#clients">Series Mastar</a><hr></hr>
          <a href="#contact">Team Master</a><hr></hr>
          <a href="#contact"><div className="Selected_color">Player Master</div></a><hr></hr>
        </div>
        <div className = "playerdetails">
        
            <div>
                <button type="button" className="newbutton">New</button>
            </div>
                <table id="playerTable">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Nick Name</th>
                        <th>Gender</th>
                        <th>Date of Birth </th>
                        <th>Visual Classification</th>
                        <th>Nationality</th>
                        <th>Batting Style</th>
                        <th>Bowling Style </th>
                        <th>Player Role </th>
                        <th>Retired or Playing</th>
                        
                    </tr>
                    <tr>
                        <td>Arun</td>
                        <td>Vinod</td>
                        <td>Arun</td>
                        <td>Male</td>
                        <td>12.03.1999</td>
                        <td>B1</td>
                        <td>Indian</td>
                        <td>Stance</td>
                        <td>Spin bowler</td>
                        <td>Batsman </td>
                        <td>Playing</td>
                    </tr>
                    <tr>
                        <td>Arun</td>
                        <td>Vinod</td>
                        <td>Arun</td>
                        <td>Male</td>
                        <td>12.03.1999</td>
                        <td>B1</td>
                        <td>Indian</td>
                        <td>Stance</td>
                        <td>Spin bowler</td>
                        <td>Batsman </td>
                        <td>Playing</td>
                    </tr>
                </table>
               

       </div>
       </div>

    )
}

export default Display