import React from 'react';
import '../App.css';
 
function AdminDashboard() {
  return (
 
    <div>
      <div class = "container2">
        <div class="sidenav">
        <a href="/admin/dashboard"><div className="Selected_color">Dashboard</div></a><hr></hr>
          <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
          <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
          <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
          <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
          <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
          <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
        </div>
        <div class = "heading">
          Backbone
          <hr></hr>
        </div>
        <div class="row">
          <div class="card">
            <div id="card-header1">
              <p>55794<br></br>Total Players!</p>
            </div>
            <div>
              <div class="card-body">
              <a href="/admin/dashboard/PlayerDisplay" class="btn">View Details</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div id="card-header2">
              <p>1474<br></br>Total Teams!</p>
            </div>
            <div>
              <div class="card-body">
              <a href="/admin/dashboard/TeamDisplay" class="btn">View Details</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div id="card-header3">
              <p>2306<br></br>Total Series!</p>
            </div>
            <div>
              <div class="card-body">
                <a href="/admin/dashboard/SeriesDisplay" class="btn">View Details</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div id="card-header4">
              <p>415<br></br>Upcoming Fixtures</p>
            </div>
            <div>
              <div class="card-body">
              <a href="/admin/dashboard/FixtureDisplay" class="btn">View Details</a>
              </div>
            </div>
          </div>          
        </div>
      </div>
      <div id="lefttable">
      <table class="ui single line table">
  <thead>
    <tr>
      <th>User</th>
      <th>Logged From</th>
      <th>Signin Time</th>
      <th>Signout Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kishore Aditani</td>
      <td>1::</td>
      <td>12th August 2019 01:37 PM</td>
      <td></td>
    </tr>
    <tr>
      <td>Kishore Aditani</td>
      <td>1::</td>
      <td>8th August 2019 09:48 PM</td>
      <td></td>
    </tr>
    <tr>
      <td>Kishore Aditani</td>
      <td>1::</td>
      <td>24th July 2019 09:24 AM</td>
      <td>24th July 2019 10:24 AM</td>
    </tr>
    <tr>
      <td>Kishore Aditani</td>
      <td>1::</td>
      <td>23rd July 2019 10:52 PM</td>
      <td>23rd July 2019 11:11 PM</td>
    </tr>
    <tr>
      <td>Kishore Aditani</td>
      <td>1::</td>
      <td>23rd July 2019 10:42 PM</td>
      <td></td>
    </tr>
    
    
  </tbody>
</table>
</div>
<div id="righttable">
      <table class="ui single line table">
  <thead>
    <tr>
      <th>User</th>
      <th>Action</th>
      <th>Date</th>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Lilki</td>
      <td>Delete</td>
      <td>24th July 2019 09:38 AM</td>
      <td>Player Anand has been deleted from team India</td>
    </tr>
    <tr>
      <td>Jamie Harington</td>
      <td>Create</td>
      <td>24th July 2019 09:37 AM</td>
      <td>Player Rajesh been added to team India</td>
    </tr>
  </tbody>
</table>
</div>
    </div>
  );
}
 
export default AdminDashboard;
 

