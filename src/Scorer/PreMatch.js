import React from "react";
import './Scorecard.css';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from '@material-ui/core/FormControl';
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import { Grid,Container } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import PreMatchDataService from './service/PreMatchDataService';
import RadioGroup from '@material-ui/core/RadioGroup';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Header from "./Header";
import Clock from "./Clock"



const toss = [
  {
    value: "batting",
    label: "batting"
  },
  {
    value: "fielding",
    label: "fielding"
  },
  
];
const captain1 = [
  
];
const captain2 = [
  
];
const wicket1 = [
  
];
const wicket2 = [
  
];
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  
  margin: {
    margin: theme.spacing.unit
  },
  
  list: {
    width: "100%",
    maxWidth: "300px",
    position: "fixed"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  stem: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "1000px"
  },
  formControl: {
    margin: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit * 3
  },
  checked: {},
 
});


function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class PreMatch extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    map: new Map(),
      player: "",
      fixture_id:this.props.match.params.id,
    selectedValue: 'a',
    selectedValue: 'b',
    toss: "",
   
    list:[],
    
    app: new Map(),
    team:[],
    

    umpires: [],
    first_name: "",
    middle_name: "",
    last_name: "",
    referees: [],
    first_name:"",
    middle_name:"",
    last_name:"",
    teamplayers: [],
   
    player_first_name: "",
    player_last_name: "",
    player_initials: "",
    captain1: "",
    wicket1: "",
    captain2: "",
    wicket2: "",
    teamplayers1:[],
    teamplayers2:[],
    team1:"",
    team2:"",
    series_name:"",
    fixture_date:"",
    fixture_time:"",
    venue:"",
    teams:[],
    team1_id:"",
    team2_id:"",
    toss_decision:"",
    umpire1:"",
    umpire2:"",
    umpire3:"",
    referee:"",
    tps1:[],
    tps2:[],
    umpire_names:[],
    referee_names:[],
    player_cat1:new Map(),
    player_cat2:new Map(),
    open1:false,
    open2:false,
    open3:false,
    open4:false,
    open5:false
    
  };
  this.refreshReferees = this.refreshReferees.bind(this)
  this.refreshUmpires = this.refreshUmpires.bind(this)
this.onSubmit=this.onSubmit.bind(this)
this.finalSubmit=this.finalSubmit.bind(this)
  this.getFixturedetails=this.getFixturedetails.bind(this)

  }
  getChckeboxValue(event) {
    const value = event.target.value;
}

getTeamID1(){
  PreMatchDataService.retrieveAllTeams()
  .then(
      response => {
          console.log(response);
          this.setState({ teams : response.data })
      }
  )
  
}
handleElement=event=>{
  this.setState({[event.target.name]:event.target.value})
  console.log(this.state.umpire1+this.state.umpire2+this.state.umpire3+this.state.referee)
}
onSelectChange1 = (event,values) => {
  this.setState({
    umpire1 : values
  
  });
 
}
onSelectChange2 = (event,values) => {
  this.setState({
    umpire2 : values
  
  });
 
}
onSelectChange3 = (event,values) => {
  this.setState({
    umpire3 : values
  
  });
  
   
  }
  onSelectChange4 = (event,values) => {
    this.setState({
      referee : values
    
    });
}


handleChange = (prop,name,category)=> event => {
 console.log(this.state.map)
  this.state.map.set(name,event.target.checked )
  this.state.player_cat1.set(name,category )
 
 var play=this.state.map.keys()

 var tempLList= ""
 for(var ele of play) 
 {
   if(this.state.map.get(ele))
   {
   //this.state.tps1.push(ele)
   tempLList=tempLList+ele+"\n\n"
  
   }
 }

 this.setState({player:tempLList})
}
 
handleChange1 = (prop,name,category)=> event => {
  console.log(this.state.app)
   this.state.app.set(name,event.target.checked )
   this.state.player_cat2.set(name,category )
 
  var play=this.state.app.keys()
 
  var tempLList= ""
  for(var ele of play) 
  {
    if(this.state.app.get(ele))
    {
      //this.state.tps2.push(ele)
    tempLList=tempLList+ele+"\n\n"
    
    }
  }
 
  this.setState({team:tempLList})
 }

 handleClose = () => {
  this.setState({ open1: false,open2:false,open3:false,open4:false,open5:false });
};
 
 
handleCaptainWicket = name=>event=>{
  this.setState({ [name]: event.target.value });
}



  componentDidMount() { 
    this.getFixturedetails();
    this.refreshReferees();
    this.refreshUmpires();
    
    
  }

  getFixturedetails(){
    PreMatchDataService.retrieveFixture(this.state.fixture_id)
    .then(response => this.setState({
        team1: response.data.team1,
        team2:response.data.team2,
        team1_id:response.data.team1_id,
        team2_id:response.data.team2_id,
        series_name:response.data.series_name,
        fixture_date:response.data.fixture_date,
        fixture_time:response.data.fixture_start_time,
        venue:response.data.venue 
        
    },()=>{ PreMatchDataService.retrieveAllTeamPlayers(this.state.team1_id)
      .then(
          response => {
              
              this.setState({ teamplayers1: response.data })
              console.log(this.state.teamplayers1)
            }
  
      );
      PreMatchDataService.retrieveAllTeamPlayers(this.state.team2_id)
      .then(
          response => {
              
              this.setState({ teamplayers2: response.data })
              console.log(this.state.teamplayers2)
            }
  
      )})
    
    )
    

  }

  
  
  
  refreshReferees() {
    PreMatchDataService.retrieveAllReferees()
        .then(
            response => {
                console.log(response);
                this.setState({ referees: response.data },()=>{
                  this.state.referees.map(u=>{
                    this.state.referee_names.push(u.first_name+" "+u.middle_name+" "+u.last_name)
                  })
                });
            }
        )
  }
  refreshUmpires() {
    PreMatchDataService.retrieveAllUmpires()
        .then(
            response => {
                console.log(response);
                this.setState({ umpires: response.data },()=>{
                  this.state.umpires.map(u=>{
                    this.state.umpire_names.push(u.first_name+" "+u.middle_name+" "+u.last_name)
                  })
                });
            }
        )
}

onSubmit(){

 var t1B1=0
 var t1B2=0
 var t1B3=0
 var t2B1=0
 var t2B2=0
 var t2B3=0
  var play=this.state.map.keys()
  for(var ele of play) 
  {
    if(this.state.map.get(ele))
    {
    this.state.tps1.push(ele)
    if(this.state.player_cat1.get(ele)==='B1')
      t1B1=t1B1+1;
    else if(this.state.player_cat1.get(ele)==='B2') 
     t1B2=t1B2+1;
    else if(this.state.player_cat1.get(ele)==='B3')
      t1B3=t1B3+1;

    }
  }

  
  var play2=this.state.app.keys()
  for(var ele of play2) 
  {
    if(this.state.app.get(ele))
    {
      this.state.tps2.push(ele)
      if(this.state.player_cat2.get(ele)==='B1')
      t2B1=t2B1+1;
    else if(this.state.player_cat2.get(ele)==='B2') 
     t2B2=t2B2+1;
    else if(this.state.player_cat2.get(ele)==='B3')
      t2B3=t2B3+1;

  
    }
  }
  if(t1B1!=4)
  this.setState({open1:true})
  else if((t1B2+t1B3)!==7 || (t1B2<3) ||(t1B2>4))
  this.setState({open2:true})
  else if(t2B1!=4)
  this.setState({open3:true})
  else if((t2B2+t2B3)!==7 || (t2B2<3) ||(t2B2>4))
  this.setState({open4:true})
  else
  this.setState({open5:true})



}

finalSubmit(){
  this.setState({open5:false})

  var umpires=[this.state.umpire1,this.state.umpire2,this.state.umpire3];
  var team1_captain_wicket_keeper={
    captain:this.state.captain1 ,
    wicket_keeper:this.state.wicket1
  };
  var team2_captain_wicket_keeper={
    captain:this.state.captain2 ,
    wicket_keeper:this.state.wicket2
  };


var fixture = {
  match_id:this.state.fixture_id,
 team1:this.state.team1,
 team2:this.state.team2,
 series_name:this.state.series_name,
 match_date:this.state.fixture_date,
 match_time:this.state.fixture_time,
 venue:this.state.venue,
 toss:this.state.toss,
 toss_decision:this.state.toss_decision,
umpires:umpires,
referee:this.state.referee,
team1_playing11:this.state.tps1,
team2_playing11:this.state.tps2,
team1_captain_wicket_keeper:team1_captain_wicket_keeper,
team2_captain_wicket_keeper:team2_captain_wicket_keeper 
}

console.log(fixture);
let fixtureid=this.state.fixture_id
  PreMatchDataService.createPreMatch(fixtureid,fixture)
      .then(() => this.props.history.push(`/scorer/ScoringScreen/${fixtureid}`))
}

  render() {
    const { classes } = this.props;
    var player = this.state.player;
    const { checkedA, checkedB,checkedC,checkedD,checkedE,checkedF,checkedG,checkedH,checkedI,checkedJ,checkedK,checkedL,checkedM,checkedN,checkedO} = this.state;
    const { checked1, checked2,checked3,checked4,checked5,checked6,checked7,checked8,checked9,checked10,checked11,checked12,checked13} = this.state;
    const error = [checkedA, checkedB,checkedC,checkedD,checkedE,checkedF,checkedG,checkedH,checkedI,checkedJ,checkedK,checkedL,checkedM,checkedN,checkedO,checked1, checked2,checked3,checked4,checked5,checked6,checked7,checked8,checked9,checked10,checked11,checked12,checked13].filter(v => v).length !== 22;
    var team1_id
    var team2_id
    return (
         <div style = {{marginTop:100}}>
           <Header />
           <Clock />
      <Container>
      <div> 
                       <div className="match_n_series">
                         <h2>{this.state.team1} Vs {this.state.team2}</h2>
                        {this.state.series_name}<br/>
                        {this.state.venue} <br/>
                        {this.state.fixture_date} {this.state.fixture_time}
                       </div>
                                  
                      
                      <hr/>               
      <Grid container spacing={2} >
      <Grid item xs={4}
            
          >
            <br />

            <Paper
            
              elevation={3}
              style={{
                width: "400px",
                height: "1150px",
                paddingLeft: "2%",
                paddingRight: "0%",
                paddingTop: "4%"
              }}
            >
              <FormLabel
                component="legend"
                className={classes.margin}
              >
               <b>Toss:</b> 
              </FormLabel>
              <RadioGroup aria-label="toss" name="toss" onChange={this.handleElement}>
              <FormControlLabel
            control={<Radio color="primary" />}
            value={this.state.team1}
            label={this.state.team1}
            
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label={this.state.team2}
            value={this.state.team2}
          
          />
          </RadioGroup>
          
               
              <br />
              <br />
              <br />
              <label><b> Toss Decision:</b> </label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                name="toss_decision"
                onChange={this.handleElement}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select toss decision--
                    </InputAdornment>
                  )
                }}
              >
                {toss.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
             
              <br />
              <br />
              <br />
              <br />
              <label><b> Match Officials</b> </label>
              
              <br />
              <br />
              <label><b> On Field Umpire 1:</b> </label><br/>
              <Autocomplete
                className={classes.margin}
                options={this.state.umpire_names}
                name="umpire1"
                onChange={this.onSelectChange1}
                
                style={{ width: 300 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Search Umpire 1"
                    variant="outlined"
                  />
                )}
              />
             
              <br />
              <br />
              <br />
              <label><b> On Field Umpire 2:</b></label><br/>
              <Autocomplete
                className={classes.margin}
                options={this.state.umpire_names}
                name="umpire2"
                onChange={this.onSelectChange2}
                
                style={{ width:300 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Search Umpire 2"
                    variant="outlined"
                  />
                )}
              />
             
              <br />
              <br />
              <br />
              <label><b>Third Umpire:</b></label><br/>
              <Autocomplete
                className={classes.margin}
                options={this.state.umpire_names}
                name="umpire3"
                onChange={this.onSelectChange3}
               
                style={{ width: 300 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Search Third Umpire"
                    variant="outlined"
                  />
                )}
              />
             
              <br />
              <br />
              <br />
              <label><b>Match Refree:</b></label><br/>
              <Autocomplete
                className={classes.margin}
                options={this.state.referee_names}
                name="referee"
                onChange={this.onSelectChange4}
               
                style={{ width: 300 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Search Referee"
                    variant="outlined"
                  />
                )}
              />
          
            </Paper>
          </Grid>
          
                      <Grid item xs={4}
            
          >
            <br />
            <Paper
             elevation={3}
              style={{
                width: "400px",
                height: "1150px",
                paddingLeft: "2%",
                paddingRight: "1%",
                paddingTop: "4%"
              }}
            >
              <center>
                <h3 className="team_name_prematch">{this.state.team1}</h3>
              </center>
              <br />

             
              

              <Grid container spacing={1}>

              <Grid item xs={7}>
              <h3 style={{marginLeft : "50px"}}>SQUAD</h3>
              <br />
              <FormControl required error={error} component="fieldset" className={classes.formControl}>
        
              <FormGroup column>
                <FormLabel component="legend">B1</FormLabel>

              
                 {this.state.teamplayers1.map((tp) =>{
                    if(tp.category=="B1")
                 return <div>
                 <FormControlLabel
                  control={
                    <Checkbox
                      
                      onChange={this.handleChange(tp.player_first_name+tp.player_last_name+tp.player_initials,tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials,tp.category)}
                      value={tp.player_first_name+tp.player_last_name+tp.player_initials}
                      color="primary"
                      
                   
                    />
                      
                  }
                  label = {tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials}
                />
                </div>
                 } )}

                <Divider />
                <FormLabel component="legend">B2</FormLabel>

              
                 {this.state.teamplayers1.map((tp) =>{
                    if(tp.category=="B2")
                 return <div>
                 <FormControlLabel
                  control={
                    <Checkbox
                      
                      onChange={this.handleChange(tp.player_first_name+tp.player_last_name+tp.player_initials,tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials,tp.category)}
                      value={tp.player_first_name+tp.player_last_name+tp.player_initials}
                      color="primary"
                      
                   
                    />
                      
                  }
                  label = {tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials}
                />
                </div>
                 } )}

                <Divider />
                <FormLabel component="legend">B3</FormLabel>

              
                 {this.state.teamplayers1.map((tp) =>{
                    if(tp.category=="B3")
                 return <div>
                 <FormControlLabel
                  control={
                    <Checkbox
                      
                      onChange={this.handleChange(tp.player_first_name+tp.player_last_name+tp.player_initials,tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials,tp.category)}
                      value={tp.player_first_name+tp.player_last_name+tp.player_initials}
                      color="primary"
                      
                   
                    />
                      
                  }
                  label = {tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials}
                />
                </div>
                 } )}

                <Divider />
              </FormGroup>
              </FormControl>

              </Grid>
              
              <Grid item xs={4}>
              <h3 style={{marginLeft : "20px"}}>Playing 11</h3><br/><br/>
              <TextareaAutosize aria-label="minimum height" rowsMin={45} type="text" id="selectedtext"   value={this.state.player} />
            
              </Grid>
              </Grid>
              <br />
             
              <label><b>Captain:</b></label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                onChange={this.handleCaptainWicket("captain1")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select Captain--
                    </InputAdornment>
                  )
                }}
              >
                { 
                this.state.teamplayers1.map(option => (
                  <MenuItem key={option.player_first_name + " "+option.player_last_name +" "+option.player_initials
                  } value={option.player_first_name + " "+option.player_last_name +" "+option.player_initials }>
                    {option.player_first_name + " "+option.player_last_name +" "+option.player_initials}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <label><b>Wicket Keeper:</b></label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                
                onChange={this.handleCaptainWicket("wicket1")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select Wicket Keeper--
                    </InputAdornment>
                  )
                }}
              >
               {  this.state.teamplayers1.map(option => (
                  <MenuItem key={option.player_first_name + " "+option.player_last_name +" "+option.player_initials
                } value={option.player_first_name + " "+option.player_last_name +" "+option.player_initials }>
                  {option.player_first_name + " "+option.player_last_name +" "+option.player_initials}
                </MenuItem>
                ))}
              </TextField>
              
              <br />
              <br />
              <br />
            </Paper>
          </Grid>
          <Grid item xs={4}
          >
            <br />
            <Paper
             elevation={3}
              style={{
                width: "400px",
                height: "1150px",
                paddingLeft: "2%",
                paddingRight: "1%",
                paddingTop: "4%"
              }}
            >
              <center>
                <h3 className="team_name_prematch">{this.state.team2}</h3>
              </center>
              <br />
              
              <Grid container spacing={1}>
                <Grid item xs={7}>
                <h3 style={{marginLeft : "50px"}}>SQUAD</h3>
                <br />
                <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormGroup column>
                <FormLabel component="legend">B1</FormLabel>

              
                 {this.state.teamplayers2.map((tp) =>{
                    if(tp.category=="B1")
                 return <div>
                 <FormControlLabel
                  control={
                    <Checkbox
                      
                      onChange={this.handleChange1(tp.player_first_name+tp.player_last_name+tp.player_initials,tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials,tp.category)}
                      value={tp.player_first_name+tp.player_last_name+tp.player_initials}
                      color="primary"
                      
                   
                    />
                      
                  }
                  label = {tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials}
                />
                </div>
                 } )}

                <Divider />
                <FormLabel component="legend">B2</FormLabel>

              
                 {this.state.teamplayers2.map((tp) =>{
                    if(tp.category=="B2")
                 return <div>
                 <FormControlLabel
                  control={
                    <Checkbox
                      
                      onChange={this.handleChange1(tp.player_first_name+tp.player_last_name+tp.player_initials,tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials,tp.category)}
                      value={tp.player_first_name+tp.player_last_name+tp.player_initials}
                      color="primary"
                      
                   
                    />
                      
                  }
                  label = {tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials}
                />
                </div>
                 } )}

                <Divider />
                <FormLabel component="legend">B3</FormLabel>

              
                 {this.state.teamplayers2.map((tp) =>{
                    if(tp.category=="B3")
                 return <div>
                 <FormControlLabel
                  control={
                    <Checkbox
                      
                      onChange={this.handleChange1(tp.player_first_name+tp.player_last_name+tp.player_initials,tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials,tp.category)}
                      value={tp.player_first_name+tp.player_last_name+tp.player_initials}
                      color="primary"
                      
                   
                    />
                      
                  }
                  label = {tp.player_first_name+" "+tp.player_last_name+" "+tp.player_initials}
                />
                </div>
                 } )}

                <Divider />
              </FormGroup>
              </FormControl>
        
              </Grid>
              
              <Grid item xs={4}>
              <h3 style={{marginLeft : "20px"}}>Playing 11</h3><br/><br/>
              <TextareaAutosize aria-label="minimum height" rowsMin={45} type="text" id="selectedtext"  value={this.state.team} style={{height : 700}}/>
              </Grid>
              </Grid>
              <br />
              <label><b>Captain:</b></label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                onChange={this.handleCaptainWicket("captain2")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select Captain--
                    </InputAdornment>
                  )
                }}
              >
                {this.state.teamplayers2.map(option => (
                  <MenuItem key={option.player_first_name + " "+option.player_last_name +" "+option.player_initials
                } value={option.player_first_name + " "+option.player_last_name +" "+option.player_initials }>
                  {option.player_first_name + " "+option.player_last_name +" "+option.player_initials}
                </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <label><b>Wicket Keeper:</b></label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                onChange={this.handleCaptainWicket("wicket2")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select Wicket Keeper--
                    </InputAdornment>
                  )
                }}
              >
                {this.state.teamplayers2.map(option => (
                  <MenuItem key={option.player_first_name + " "+option.player_last_name +" "+option.player_initials
                } value={option.player_first_name + " "+option.player_last_name +" "+option.player_initials }>
                  {option.player_first_name + " "+option.player_last_name +" "+option.player_initials}
                </MenuItem>
                ))}
              </TextField>
              <br />
            
              <center>
              <Button
                variant="contained"
                style={{ width: "150px" }}
                className={classes.button}
                href="/"
                color="primary"
              >
                Back
              </Button>
              <Button
                variant="contained"
                style={{ width: "150px" }}
                className={classes.button}
                type="submit"
                onClick={this.onSubmit}
                color="primary"
              >
                Submit
              </Button>
              </center>
              <br />
              <br /> <br />
              <br />
            </Paper>
                </Grid>
    </Grid>



    <Dialog
          open={this.state.open1}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder"
              }}
            >
             Select 4 B1 players in team {this.state.team1}
            </span>
          </DialogTitle>

          <DialogContent>
         
          </DialogContent>
          <DialogActions>
            
            <Button
             onClick={() => {
                this.setState({ open1: false});
              }}
              variant="outlined"
            >
            OK
            </Button>
          </DialogActions>
        </Dialog>

       

        <Dialog
          open={this.state.open2}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder"
              }}
            >
             Select 4 B2 and 3 B3 players or 3 B2 and 4 B3 players in team {this.state.team1}
            </span>
          </DialogTitle>

          <DialogContent>
         
          </DialogContent>
          <DialogActions>
            
            <Button
             onClick={() => {
                this.setState({ open2: false});
              }}
              variant="outlined"
            >
            OK
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.open3}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder"
              }}
            >
             Select 4 B1 players in team {this.state.team2}
            </span>
          </DialogTitle>

          <DialogContent>
         
          </DialogContent>
          <DialogActions>
            
            <Button
             onClick={() => {
                this.setState({ open3: false});
              }}
              variant="outlined"
            >
            OK
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.open4}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder"
              }}
            >
             Select 4 B2 and 3 B3 players or 3 B2 and 4 B3 players in team {this.state.team2}
            </span>
          </DialogTitle>

          <DialogContent>
         
          </DialogContent>
          <DialogActions>
            
            <Button
             onClick={() => {
                this.setState({ open4: false});
              }}
              variant="outlined"
            >
            OK
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.open5}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder"
              }}
            >
            Are you sure you want to submit?
            </span>
          </DialogTitle>

          <DialogContent>
         You won't be able to make changes later.
          </DialogContent>
          <DialogActions>
            
            <Button
             onClick={this.finalSubmit}
              
              variant="outlined"
            >
            Yes
            </Button>
            <Button
             onClick={() => {
                this.setState({ open5: false});
              }}
              variant="outlined"
            >
            No
            </Button>
          </DialogActions>
        </Dialog>

  </div>
  </Container>    
  </div>    
    );
  }
}

PreMatch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PreMatch);