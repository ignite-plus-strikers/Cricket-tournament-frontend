import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { green, yellow, blue, pink } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import classNames from "classnames";
import ScorecardDataService from "./service/ScorecardDataService";
import Clock from "./Clock";
import Header from "./Header";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "white",
    color: "black",
    border: 0,
  },
  body: {
    fontSize: 14,
    border: 0,
  },
}))(TableCell);

const styles = (theme) => ({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
  },
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    width: 500,
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  undoRoot: {
    width: 150,
    backgroundColor: green[500],
    color: "white",
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  endRoot: {
    width: 150,
    backgroundColor: yellow[700],
    color: "black",
    "&:hover": {
      backgroundColor: yellow[900],
    },
  },
  blueRoot: {
    margin: theme.spacing.unit,
    backgroundColor: "#1668b4",
    color: "white",
    "&:hover": {
      backgroundColor: "#6200ea",
    },
  },
  input: {
    display: "none",
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ScoringScreen extends React.Component {
  constructor(props) {
    super(props);
    if (JSON.parse(window.localStorage.getItem("data"))) {
      //if 'data' is not empty fetch values from localStorage itself
      this.state = {
        match_id: this.props.match.params.id,
        striker_batsman: JSON.parse(window.localStorage.getItem("data")).striker_batsman,
        non_striker_batsman: JSON.parse(window.localStorage.getItem("data")).non_striker_batsman,
        current_bowler: JSON.parse(window.localStorage.getItem("data")).current_bowler,
        previous_bowler: JSON.parse(window.localStorage.getItem("data")).previous_bowler,
        team2_players: JSON.parse(window.localStorage.getItem("data")).team2_players,
        team1_players: JSON.parse(window.localStorage.getItem("data")).team1_players,
        batting_team: JSON.parse(window.localStorage.getItem("data")).batting_team,
        bowling_team: JSON.parse(window.localStorage.getItem("data")).bowling_team,
        bowling_team_score: JSON.parse(window.localStorage.getItem("data")).bowling_team_score,
        bowling_team_wickets: JSON.parse(window.localStorage.getItem("data")).bowling_team_wickets,
        batting_team_score: JSON.parse(window.localStorage.getItem("data")).batting_team_score,
        batting_team_wickets: JSON.parse(window.localStorage.getItem("data")).batting_team_wickets,
        total_overs: JSON.parse(window.localStorage.getItem("data")).total_overs,
        previous_team_overs: JSON.parse(window.localStorage.getItem("data")).previous_team_overs,
        balls_per_over: JSON.parse(window.localStorage.getItem("data")).balls_per_over,
        striker: {
          out_by: JSON.parse(window.localStorage.getItem("data")).striker.out_by,
          runs: JSON.parse(window.localStorage.getItem("data")).striker.runs,
          balls: JSON.parse(window.localStorage.getItem("data")).striker.balls,
          strike_rate: JSON.parse(window.localStorage.getItem("data")).striker.strike_rate,
          fours: JSON.parse(window.localStorage.getItem("data")).striker.fours,
          sixes: JSON.parse(window.localStorage.getItem("data")).striker.sixes,
        },
        non_striker: {
          runs: JSON.parse(window.localStorage.getItem("data")).non_striker.runs,
          balls: JSON.parse(window.localStorage.getItem("data")).non_striker.balls,
          strike_rate: JSON.parse(window.localStorage.getItem("data")).non_striker.strike_rate,
          fours: JSON.parse(window.localStorage.getItem("data")).non_striker.fours,
          sixes: JSON.parse(window.localStorage.getItem("data")).non_striker.sixes,
        },
        bowler: {
          balls: JSON.parse(window.localStorage.getItem("data")).bowler.balls,
          maiden_count: JSON.parse(window.localStorage.getItem("data")).bowler.maiden_count,
          overs: JSON.parse(window.localStorage.getItem("data")).bowler.overs,
          maidens: JSON.parse(window.localStorage.getItem("data")).bowler.maidens,
          runs: JSON.parse(window.localStorage.getItem("data")).bowler.runs,
          wickets: JSON.parse(window.localStorage.getItem("data")).bowler.wickets,
        },
        p_bowler: {
          balls: JSON.parse(window.localStorage.getItem("data")).p_bowler.balls,
          maiden_count: JSON.parse(window.localStorage.getItem("data")).p_bowler.maiden_count,
          overs: JSON.parse(window.localStorage.getItem("data")).p_bowler.overs,
          maidens: JSON.parse(window.localStorage.getItem("data")).p_bowler.maidens,
          runs: JSON.parse(window.localStorage.getItem("data")).p_bowler.runs,
          wickets: JSON.parse(window.localStorage.getItem("data")).p_bowler.wickets,
        },
        open_initial_form: false,
        open_next_batsman_form: false,
        open_next_bowler_form: false,
        open_end_match_form: false,
        open_end_innings_form: false,
        open_no_player_selected_form: false,
        open_same_striker_non_striker_form: false,
        disabled: false,
      };
      window.localStorage.setItem("data", JSON.stringify(this.state));
    } else {
      this.state = {
        match_id: this.props.match.params.id,
        striker_batsman: null,
        non_striker_batsman: null,
        current_bowler: null,
        previous_bowler: null,
        team2_players: [],
        team1_players: [],
        batting_team: null,
        bowling_team: null,
        bowling_team_score: 0,
        bowling_team_wickets: 0,
        batting_team_score: 0,
        batting_team_wickets: 0,
        total_overs: 0,
        previous_team_overs: 0,
        balls_per_over: 0,
        striker: {
          out_by: null,
          runs: 0,
          balls: 0,
          strike_rate: 0,
          fours: 0,
          sixes: 0,
        },
        non_striker: {
          runs: 0,
          balls: 0,
          strike_rate: 0,
          fours: 0,
          sixes: 0,
        },
        bowler: {
          balls: 0,
          maiden_count: 0,
          overs: 0,
          maidens: 0,
          runs: 0,
          wickets: 0,
        },
        p_bowler: {
          balls: 0,
          maiden_count: 0,
          overs: 0,
          maidens: 0,
          runs: 0,
          wickets: 0,
        },
        open_initial_form: false,
        open_next_batsman_form: false,
        open_next_bowler_form: false,
        open_end_match_form: false,
        open_end_innings_form: false,
        open_no_player_selected_form: false,
        open_same_striker_non_striker_form: false,
        open_byes_form: false,
        open_no_ball_leg_byes_form: false,
        open_no_ball_form:false,
        open_leg_byes_form:false,
        open_run_out_form:false,
        disabled: false,
        exchange: false,
      };
    }
    window.localStorage.setItem("data", JSON.stringify(this.state));
    this.getPreMatchData = this.getPreMatchData.bind(this);
  }

  componentDidMount() {
    this.getPreMatchData();
  }

  getPreMatchData() {
    ScorecardDataService.getPreMatchData(this.state.match_id).then(
      (response) => {
        this.setState({
          batting_team: response.data.team1,
          bowling_team: response.data.team2,
          team1_players: response.data.team1_playing11,
          team2_players: response.data.team2_playing11,
        });
      }
    );
  }

  handleWicket = () => {
    this.setState({
      batting_team_wickets: this.state.batting_team_wickets + 1,
      balls_per_over: this.state.balls_per_over,
      striker: {
        runs: this.state.striker.runs,
        fours: this.state.striker.fours,
        sixes: this.state.striker.sixes,
        balls: this.state.striker.balls + 1,
        strike_rate: (
          (this.state.striker.runs * 100) /
          this.state.striker.balls
        ).toFixed(2),
        out_by: this.state.current_bowler,
      },
      bowler: {
        wickets: this.state.bowler.wickets + 1,
        runs: this.state.bowler.runs,
        maidens: this.state.bowler.maidens,
        overs: this.state.bowler.overs,
        balls: this.state.bowler.balls + 1,
        maiden_count: this.state.bowler.maiden_count,
      },
    });
    if (this.state.balls_per_over === 5) {
      if (this.state.bowler.balls === 5) {
        this.setState({
          balls_per_over: 0,
          total_overs: this.state.total_overs + 1,
          bowler: {
            overs: this.state.bowler.overs + 1,
            runs: this.state.bowler.runs,
            balls: this.state.bowler.balls + 1,
            wickets: this.state.bowler.wickets,
            maidens: this.state.bowler.maidens,
            maiden_count: 0,
          },
        });
      }
      this.openForm("NEXT_BOWLER");
    }
    this.handleCreateBatsmanAfterBowled();
    this.openForm("NEXT_BATSMAN");
    window.localStorage.setItem("data", JSON.stringify(this.state));
  }


  handleMaiden = () => {
    if (this.state.balls_per_over === 5) {
      if (this.state.bowler.maiden_count === 5) {
        this.setState({
          balls_per_over: 0,
          total_overs: this.state.total_overs + 1,
          bowler: {
            maiden_count: 0,
            maidens: this.state.bowler.maidens + 1,
            runs: this.state.bowler.runs,
            overs: this.state.bowler.overs + 1,
            wickets: this.state.bowler.wickets,
            balls: 0,
          },
        });
      }
    }
    this.handleCreateAfterOver();
    window.localStorage.setItem("data", JSON.stringify(this.state));
  }

  handleExtra = () => {
    if (
      this.state.striker_batsman === null ||
      this.state.non_striker_batsman === null ||
      this.state.current_bowler === null
    ) {
      this.openForm("NO_PLAYER");
    } else {
    this.setState({
      batting_team_score: this.state.batting_team_score + 1,
      balls_per_over: this.state.balls_per_over + 1,
      bowler: {
        maiden_count: this.state.bowler.maiden_count,
        maidens: this.state.bowler.maidens,
        runs: this.state.bowler.runs + 1,
        overs: this.state.bowler.overs,
        wickets: this.state.bowler.wickets,
        balls: this.state.bowler.balls + 1,
      },
    });
    if (this.state.balls_per_over === 5) {
      this.setState({
        balls_per_over: 0,
        total_overs: this.state.total_overs + 1,
        bowler: {
          overs: this.state.bowler.overs + 1,
          runs: this.state.bowler.runs + 1,
          balls: 0,
          wickets: this.state.bowler.wickets,
          maidens: this.state.bowler.maidens,
          maiden_count: 0,
        },
      });
      this.openForm("NEXT_BOWLER");
    }
      this.handleCreateAfterOver();
    localStorage.setItem("data", JSON.stringify(this.state));
  }
}

  increaseScore = (val) => {
    if (
      this.state.striker_batsman === null ||
      this.state.non_striker_batsman === null ||
      this.state.current_bowler === null
    ) {
      this.openForm("NO_PLAYER");
    } else {
      this.setState({
        batting_team_score: this.state.batting_team_score + val,
        balls_per_over: this.state.balls_per_over + 1,
        striker: {
          runs: this.state.striker.runs + val,
          balls: this.state.striker.balls + 1,
          strike_rate: (
            (this.state.striker.runs * 100) /
            this.state.striker.balls
          ).toFixed(2),
          sixes: this.state.striker.sixes,
          fours: this.state.striker.fours,
          out_by: this.state.striker.out_by,
        },
        bowler: {
          runs: this.state.bowler.runs + val,
          balls: this.state.bowler.balls + 1,
          wickets: this.state.bowler.wickets,
          maidens: this.state.bowler.maidens,
          overs: this.state.bowler.overs,
          maiden_count: this.state.bowler.maiden_count,
        },
      });
      if (val === 0) {
        this.setState({
          bowler: {
            runs: this.state.bowler.runs + val,
            balls: this.state.bowler.balls + 1,
            wickets: this.state.bowler.wickets,
            maidens: this.state.bowler.maidens,
            overs: this.state.bowler.overs,
            maiden_count: this.state.bowler.maiden_count + 1,
          },
        });
      }
      if (val === 4) {
        this.setState({
          striker: {
            runs: this.state.striker.runs + val,
            balls: this.state.striker.balls + 1,
            strike_rate: (
              (this.state.striker.runs * 100) /
              this.state.striker.balls
            ).toFixed(2),
            sixes: this.state.striker.sixes,
            fours: this.state.striker.fours + 1,
            out_by: this.state.striker.out_by,
          },
        });
      }
      if (val === 6) {
        this.setState({
          striker: {
            runs: this.state.striker.runs + val,
            balls: this.state.striker.balls + 1,
            strike_rate: (
              (this.state.striker.runs * 100) /
              this.state.striker.balls
            ).toFixed(2),
            sixes: this.state.striker.sixes + 1,
            fours: this.state.striker.fours,
            out_by: this.state.striker.out_by,
          },
        });
      }

      if (this.state.balls_per_over === 5) {
        this.setState({
          balls_per_over: 0,
          total_overs: this.state.total_overs + 1,
          bowler: {
            overs: this.state.bowler.overs + 1,
            runs: this.state.bowler.runs + val,
            balls: 0,
            wickets: this.state.bowler.wickets,
            maidens: this.state.bowler.maidens,
            maiden_count: 0,
          },
        });
        this.openForm("NEXT_BOWLER");
      }
      this.handleCreateAfterOver();
      this.handleCreateMatchResult();
      this.handleMaiden();
      if (val === 1 || val === 3 || val === 5) {
        var old_striker = this.state.striker_batsman;
        var old_non_striker = this.state.non_striker_batsman;
        var old_striker_runs = this.state.striker.runs;
        var old_striker_balls = this.state.striker.balls;
        var old_striker_fours = this.state.striker.fours;
        var old_striker_sixes = this.state.striker.sixes;
        var old_non_striker_runs = this.state.non_striker.runs;
        var old_non_striker_balls = this.state.non_striker.balls;
        var old_non_striker_fours = this.state.non_striker.fours;
        var old_non_striker_sixes = this.state.non_striker.sixes;

        this.setState({
          striker_batsman: old_non_striker,
          striker: {
            runs: this.state.non_striker.runs,
            balls: old_non_striker_balls,
            fours: old_non_striker_fours,
            sixes: old_non_striker_sixes,
            strike_rate: ((old_striker_runs * 100) / old_striker_balls).toFixed(
              2
            ),
            out_by: null,
          },
        });
        this.setState({
          non_striker_batsman: old_striker,
          non_striker: {
            runs: old_striker_runs + val,
            balls: old_striker_balls + 1,
            fours: old_striker_fours,
            sixes: old_striker_sixes,
            strike_rate: (
              (old_non_striker_runs * 100) /
              old_non_striker_balls
            ).toFixed(2),
            out_by: null,
          },
        });

        this.handleCreateAfterOver();
        this.handleCreateMatchResult();
      }
      window.localStorage.setItem("data", JSON.stringify(this.state));
      window.localStorage.getItem("data");
    }
  }
  
  handleByes = (val) => {
    if (
      this.state.striker_batsman === null ||
      this.state.non_striker_batsman === null ||
      this.state.current_bowler === null
    ) {
      this.openForm("NO_PLAYER");
    } else {
    this.setState({
      batting_team_score: this.state.batting_team_score + val,
      balls_per_over: this.state.balls_per_over + 1,
      bowler: {
        maiden_count: this.state.bowler.maiden_count,
        maidens: this.state.bowler.maidens,
        runs: this.state.bowler.runs,
        overs: this.state.bowler.overs,
        wickets: this.state.bowler.wickets,
        balls: this.state.bowler.balls + 1,
      },
      open_byes_form: false
    });
    if (this.state.balls_per_over === 5) {
      this.setState({
        balls_per_over: 0,
        total_overs: this.state.total_overs + 1,
        bowler: {
          overs: this.state.bowler.overs + 1,
          runs: this.state.bowler.runs,
          balls: 0,
          wickets: this.state.bowler.wickets,
          maidens: this.state.bowler.maidens,
          maiden_count: 0,
        },
        open_byes_form: false
      });
      this.openForm("NEXT_BOWLER");
    }
      this.handleCreateAfterOver();
    localStorage.setItem("data", JSON.stringify(this.state));
  }
}

handleNoBallAndLegByes = (val) => {
  if (
    this.state.striker_batsman === null ||
    this.state.non_striker_batsman === null ||
    this.state.current_bowler === null
  ) {
    this.openForm("NO_PLAYER");
  } else {
  this.setState({
    batting_team_score: this.state.batting_team_score + val,
    open_no_ball_leg_byes_form: false
  });
    this.handleCreateAfterOver();
  localStorage.setItem("data", JSON.stringify(this.state));
}
}

handleNoBall = (val) => {
  if(this.state.striker_batsman === null ||
    this.state.non_striker_batsman === null || 
    this.state.current_bowler ===null)
    {
      this.openForm("NO_PLAYER")
    }
  else{
    this.setState({
      batting_team_score:this.state.batting_team_score + val,
      balls_per_over : this.state.balls_per_over,
      bowler: {
        maiden_count: this.state.bowler.maiden_count,
        maidens: this.state.bowler.maidens,
        runs: this.state.bowler.runs+val,
        overs: this.state.bowler.overs,
        wickets: this.state.bowler.wickets,
        balls: this.state.bowler.balls,
      },
      open_no_ball_form :false
    });
    if (this.state.balls_per_over === 5) {
      this.setState({
        balls_per_over: 0,
        total_overs: this.state.total_overs + 1,
        bowler: {
          overs: this.state.bowler.overs + 1,
          runs: this.state.bowler.runs,
          balls: 0,
          wickets: this.state.bowler.wickets,
          maidens: this.state.bowler.maidens,
          maiden_count: 0,
        },
        open_no_ball_form: false
      });
      this.openForm("NEXT_BOWLER");
    }
      this.handleCreateAfterOver();
    localStorage.setItem("data", JSON.stringify(this.state));
  }
}

handleLegByes = (val) => {
  if(this.state.striker_batsman === null ||
    this.state.non_striker_batsman === null || 
    this.state.current_bowler ===null)
    {
      this.openForm("NO_PLAYER")
    }
  else{
    this.setState({
      batting_team_score:this.state.batting_team_score + val,
      balls_per_over : this.state.balls_per_over +1,
      bowler: {
        maiden_count: this.state.bowler.maiden_count,
        maidens: this.state.bowler.maidens,
        runs: this.state.bowler.runs,
        overs: this.state.bowler.overs,
        wickets: this.state.bowler.wickets,
        balls: this.state.bowler.balls+1,
      },
      open_leg_byes_form :false
    });
    if (this.state.balls_per_over === 5) {
      this.setState({
        balls_per_over: 0,
        total_overs: this.state.total_overs + 1,
        bowler: {
          overs: this.state.bowler.overs + 1,
          runs: this.state.bowler.runs,
          balls: 0,
          wickets: this.state.bowler.wickets,
          maidens: this.state.bowler.maidens,
          maiden_count: 0,
        },
        open_leg_byes_form: false
      });
      this.openForm("NEXT_BOWLER");
    }
      this.handleCreateAfterOver();
    localStorage.setItem("data", JSON.stringify(this.state));
  }
}

handleRunOut = (val) => {
  if(this.state.striker_batsman === null ||
    this.state.non_striker_batsman === null || 
    this.state.current_bowler ===null)
    {
      this.openForm("NO_PLAYER")
    }
  else{
    this.setState({
    batting_team_score:this.state.batting_team_score + val,
    batting_team_wickets: this.state.batting_team_wickets + 1,
    balls_per_over:this.state.balls_per_over,
    striker: {
      runs: this.state.striker.runs+val,
      fours: this.state.striker.fours,
      sixes: this.state.striker.sixes,
      balls: this.state.striker.balls + 1,
      strike_rate: (
        (this.state.striker.runs * 100) /
        this.state.striker.balls
      ).toFixed(2),
      out_by: this.state.current_bowler,
    },
    bowler: {
      maiden_count: this.state.bowler.maiden_count,
      maidens: this.state.bowler.maidens,
      runs: this.state.bowler.runs + val,
      overs: this.state.bowler.overs,
      wickets: this.state.bowler.wickets+1,
      balls: this.state.bowler.balls+1,
    },
    open_run_out_form :false
  });
  if (this.state.balls_per_over === 5) {
    this.setState({
      balls_per_over: 0,
      total_overs: this.state.total_overs + 1,
      bowler: {
        overs: this.state.bowler.overs + 1,
        runs: this.state.bowler.runs,
        balls: 0,
        wickets: this.state.bowler.wickets,
        maidens: this.state.bowler.maidens,
        maiden_count: 0,
      },
      open_run_out_form: false
    });
    this.openForm("NEXT_BOWLER");
  }
    this.handleCreateAfterOver();
    this.handleCreateBatsmanAfterBowled();
    this.openForm("NEXT_BATSMAN");
  localStorage.setItem("data", JSON.stringify(this.state));
  }
  
}

  openForm = (val) => {
    if(val === "NO_PLAYER") {
      this.setState({
        open_no_player_selected_form: true,
      });
    }
    if(val === "SAME_STRIKER_NON_STRIKER") {
      this.setState({
        open_same_striker_non_striker_form: true,
      });
    }
    if(val === "INITIAL_PLAYERS") {
      this.setState({
        open_initial_form: true,
      });
    }
    if(val === "NEXT_BATSMAN") {
      this.setState({
        open_next_batsman_form: true,
      });
    }
    if(val === "NEXT_BOWLER") {
      this.setState({
        open_next_bowler_form: true,
      });
    }
    if(val === "END_INNINGS") {
      this.setState({
        open_end_innings_form: true,
      });
    }
    if(val === "END_MATCH") {
      this.setState({
        open_end_match_form: true,
      });
      window.localStorage.removeItem("data");
    }
    if(val === "BYES") {
      this.setState({
        open_byes_form: true,
      });
    }
    if(val === "NO_BALL_LEG_BYES") {
      this.setState({
        open_no_ball_leg_byes_form: true,
      });
    }
    if(val==="NOBALL"){
      this.setState({
        open_no_ball_form:true,
      })
    }
    if(val==="RUN_OUT"){
      this.setState({
        open_run_out_form:true,
      })
    }
    if(val==="LEGBYES"){
      this.setState({
        open_leg_byes_form:true,
      })
    }

  }

  handleClose = () => {
    this.setState({
      open_initial_form: false,
      open_next_batsman_form: false,
      open_next_bowler_form: false,
    });
  };

  handleChange = (name) => (event) => {
    this.handlePreviousBowler();
    this.setState({
      [name]: event.target.value,
    });
  };

  handlePreviousBowler = () => {
    this.setState({
      previous_bowler: this.state.current_bowler,
      p_bowler: {
        overs: this.state.bowler.overs,
        runs: this.state.bowler.runs,
        balls: this.state.bowler.balls,
        wickets: this.state.bowler.wickets,
        maidens: this.state.bowler.maidens,
      },
    });
  };

  handleInitialPlayerSubmit = () => {
    if (
      this.state.striker_batsman === null ||
      this.state.non_striker_batsman === null ||
      this.state.current_bowler === null
    ) {
      this.openForm("NO_PLAYER");
    } else {
      if (this.state.striker_batsman === this.state.non_striker_batsman) {
        this.openForm("SAME_STRIKER_NON_STRIKER");
      } else {
        var player = {
          striker_batsman: this.state.striker_batsman,
          non_striker_batsman: this.state.non_striker_batsman,
          current_bowler: this.state.current_bowler,
        };
        this.setState({ open_initial_form: false });
        this.setState({ disabled: true });
        this.handleInitialMatchDetails();
      }
    }
  };

  handleNextBatsmanSubmit = () => {
    this.handleCreateAfterOver();
    if (this.state.striker_batsman === this.state.non_striker_batsman) {
      this.openForm("SAME_STRIKER_NON_STRIKER");
    }
    else{
    this.setState({
      striker: {
        runs: 0,
        balls: 0,
        strike_rate: 0,
        fours: 0,
        sixes: 0,
        out_by: null,
      },
      open_next_batsman_form: false
    });
  }
    window.localStorage.setItem("data", JSON.stringify(this.state));
  };

  handleNextBowlerSubmit = () => {
    // var bowler = {
    //   current_bowler: this.state.current_bowler,
    // };
    ScorecardDataService.retrieveBowlerByName(
      this.state.match_id,
      this.state.current_bowler
    ).then((response) => {
      this.setState({
        bowler: {
          balls: 0,
          maiden_count: 0,
          runs: response.data.runs,
          overs: response.data.overs,
          maidens: response.data.maiden_overs,
          wickets: response.data.wickets,
        },
        open_next_bowler_form: false,
      });
    });
    this.setState({
      bowler: {
        balls: 0,
        maiden_count: 0,
        overs: 0,
        maidens: 0,
        runs: 0,
        wickets: 0,
      },
      open_next_bowler_form: false,
    });
  };

  handleEndInningsClicked = () => {
    var old_batting_team = this.state.batting_team;
    var old_batting_team_score = this.state.batting_team_score;
    var old_batting_team_wickets = this.state.batting_team_wickets;
    var old_team1_players = this.state.team1_players;
    var old_total_overs = this.state.total_overs;
    this.setState({
      batting_team: this.state.bowling_team,
      bowling_team: old_batting_team,
      bowling_team_score: old_batting_team_score,
      bowling_team_wickets: old_batting_team_wickets,
      batting_team_score: 0,
      batting_team_wickets: 0,
      total_overs: 0,
      previous_team_overs: old_total_overs,
      balls_per_over: 0,
      striker: {
        runs: 0,
        balls: 0,
        strike_rate: 0,
        fours: 0,
        sixes: 0,
      },
      non_striker: {
        runs: 0,
        balls: 0,
        strike_rate: 0,
        fours: 0,
        sixes: 0,
      },
      bowler: {
        balls: 0,
        maiden_count: 0,
        overs: 0,
        maidens: 0,
        runs: 0,
        wickets: 0,
      },
      p_bowler: {
        balls: 0,
        maiden_count: 0,
        overs: 0,
        maidens: 0,
        runs: 0,
        wickets: 0,
      },
      open_initial_form: false,
      open_next_batsman_form: false,
      open_next_bowler_form: false,
      open_end_match_form: false,
      open_end_innings_form: false,
      striker_batsman: null,
      non_striker_batsman: null,
      current_bowler: null,
      previous_bowler: null,
      team2_players: old_team1_players,
      team1_players: this.state.team2_players,
      disabled: false,
      exchange: true,
    });
    window.localStorage.setItem("data", JSON.stringify(this.state));
    this.handleCreateAfterOver();
    this.handleCreateMatchResult();
  };

  handleEndMatchClicked = (id) => {
    this.handleFinalMatchResult();
    this.setState({ open_end_match_form: false });
    window.location.href = "/scorer/ScoreCard/" + id;
  };

  handleInitialMatchDetails = () => {
    var striker_batsman = {
      match_id: this.state.match_id,
      batsman_name: this.state.striker_batsman,
      team_name: this.state.batting_team,
    };

    var non_striker_batsman = {
      match_id: this.state.match_id,
      batsman_name: this.state.non_striker_batsman,
      team_name: this.state.batting_team,
    };

    var current_bowler = {
      match_id: this.state.match_id,
      bowler_name: this.state.current_bowler,
      team_name: this.state.bowling_team,
    };
    ScorecardDataService.createBatsmanInAMatch(striker_batsman).then(
      (response) => {
        console.log(response);
      }
    );
    ScorecardDataService.createBatsmanInAMatch(non_striker_batsman).then(
      (response) => {
        console.log(response);
      }
    );
    ScorecardDataService.createBowlerInAMatch(current_bowler).then(
      (response) => {
        console.log(response);
      }
    );

    var matchresult = {
      match_id: this.state.match_id,
      team1: this.state.batting_team,
      team2: this.state.bowling_team,
    };
    ScorecardDataService.createMatchResult(matchresult).then((response) => {
      console.log(response);
    });
  };

  handleCreateAfterOver = () => {
    var striker_batsman = {
      match_id: this.state.match_id,
      batsman_name: this.state.striker_batsman,
      team_name: this.state.batting_team,
      runs: this.state.striker.runs,
      balls: this.state.striker.balls,
      strike_rate: this.state.striker.strike_rate,
      fours: this.state.striker.fours,
      sixes: this.state.striker.sixes,
      out_by: this.state.striker.out_by,
    };

    var non_striker_batsman = {
      match_id: this.state.match_id,
      batsman_name: this.state.non_striker_batsman,
      team_name: this.state.batting_team,
      runs: this.state.non_striker.runs,
      balls: this.state.non_striker.balls,
      strike_rate: this.state.non_striker.strike_rate,
      fours: this.state.non_striker.fours,
      sixes: this.state.non_striker.sixes,
    };

    var bowler_overs = this.state.bowler.overs + "." + this.state.bowler.balls
    var current_bowler = {
      match_id: this.state.match_id,
      bowler_name: this.state.current_bowler,
      team_name: this.state.bowling_team,
      overs: bowler_overs,
      maiden_overs: this.state.bowler.maidens,
      runs: this.state.bowler.runs,
      wickets: this.state.bowler.wickets,
    };

    var previous_bowler = {
      match_id: this.state.match_id,
      bowler_name: this.state.previous_bowler,
      team_name: this.state.bowling_team,
      overs: this.state.p_bowler.overs + "." + this.state.p_bowler.balls,
      maiden_overs: this.state.p_bowler.maidens,
      runs: this.state.p_bowler.runs,
      wickets: this.state.p_bowler.wickets,
    };
    ScorecardDataService.createBatsmanInAMatch(striker_batsman).then(
      (response) => {
        console.log(response);
      }
    );
    ScorecardDataService.createBatsmanInAMatch(non_striker_batsman).then(
      (response) => {
        console.log(response);
      }
    );
    ScorecardDataService.createBowlerInAMatch(current_bowler).then(
      (response) => {
        console.log(response);
      }
    );
    ScorecardDataService.createBowlerInAMatch(previous_bowler).then(
      (response) => {
        console.log(response);
      }
    );
  };

  handleCreateBatsmanAfterBowled = () => {
    var striker_batsman = {
      match_id: this.state.match_id,
      batsman_name: this.state.striker_batsman,
      team_name: this.state.batting_team,
      runs: this.state.striker.runs,
      balls: this.state.striker.balls,
      strike_rate: this.state.striker.strike_rate,
      fours: this.state.striker.fours,
      sixes: this.state.striker.sixes,
      out_by: this.state.current_bowler,
    };
    ScorecardDataService.createBatsmanInAMatch(striker_batsman).then(
      (response) => {
        console.log(response);
      }
    );
  };

  handleCreateMatchResult = () => {
    if (!this.state.exchange) {
      var match_result = {
        match_id: this.state.match_id,
        team1: this.state.batting_team,
        team2: this.state.bowling_team,
        team1_result: {
          runs: this.state.batting_team_score,
          wickets: this.state.batting_team_wickets,
          overs: this.state.total_overs,
        },
        team2_result: {
          runs: this.state.bowling_team_score,
          wickets: this.state.bowling_team_wickets,
          overs: 0,
        },
      };
    } else {
      var match_result = {
        match_id: this.state.match_id,
        team2: this.state.batting_team,
        team1: this.state.bowling_team,
        team2_result: {
          runs: this.state.batting_team_score,
          wickets: this.state.batting_team_wickets,
          overs: this.state.total_overs,
        },
        team1_result: {
          runs: this.state.bowling_team_score,
          wickets: this.state.bowling_team_wickets,
          overs: this.state.previous_team_overs,
        },
      };
    }
    ScorecardDataService.createMatchResult(match_result).then((response) => {
      console.log(response);
    });
  };

  handleFinalMatchResult = () => {
    this.handleCreateAfterOver();
    if (this.state.bowling_team_score > this.state.batting_team_score) {
      var final_match_result = {
        match_id: this.state.match_id,
        team2: this.state.batting_team,
        team1: this.state.bowling_team,
        team2_result: {
          runs: this.state.batting_team_score,
          wickets: this.state.batting_team_wickets,
          overs: this.state.total_overs,
        },
        team1_result: {
          runs: this.state.bowling_team_score,
          wickets: this.state.bowling_team_wickets,
          overs: this.state.previous_team_overs,
        },
        match_result: this.state.bowling_team,
        winning_score: {
          runs: this.state.bowling_team_score - this.state.batting_team_score,
        },
      };
    } else if (this.state.bowling_team_score < this.state.batting_team_score) {
      var final_match_result = {
        match_id: this.state.match_id,
        team2: this.state.batting_team,
        team1: this.state.bowling_team,
        team2_result: {
          runs: this.state.batting_team_score,
          wickets: this.state.batting_team_wickets,
        },
        team1_result: {
          runs: this.state.bowling_team_score,
          wickets: this.state.bowling_team_wickets,
        },
        match_result: this.state.batting_team,
        winning_score: {
          wickets: 10 - this.state.batting_team_wickets,
        },
      };
    } else {
      var final_match_result = {
        match_id: this.state.match_id,
        team2: this.state.batting_team,
        team1: this.state.bowling_team,
        team2_result: {
          runs: this.state.batting_team_score,
          wickets: this.state.batting_team_wickets,
        },
        team1_result: {
          runs: this.state.bowling_team_score,
          wickets: this.state.bowling_team_wickets,
        },
        match_result: "Draw Match",
      };
    }
    ScorecardDataService.createMatchResult(final_match_result).then(
      (response) => {
        console.log(response);
      }
    );
  };

  handleSelect = (e) => {
    window.location.href = "/scorer/ScoreCard/" + e;
  };

  render() {
    const { classes } = this.props;
    if (
      Cookies.get("role") === undefined ||
      Cookies.get("role") != "CABI_APPL_SCORER"
    )
      return <Redirect to="/" />;
    return (
      <Container style={{ marginLeft: "6%" }}>
        <div style={{ marginTop: 100 }}>
          <Header />
          <Clock />
          <Grid align="center">
            <Typography
              align="center"
              style={{ marginRight: "8%", fontSize: "25px" }}
            >
              <b>{this.state.batting_team}</b> {this.state.batting_team_score}/
              {this.state.batting_team_wickets} ({this.state.total_overs}.
              {this.state.balls_per_over} Overs) //{" "}
              <b>{this.state.bowling_team}</b> {this.state.bowling_team_score}/
              {this.state.bowling_team_wickets}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "8%" }}
              className={classes.button}
              onClick={() => this.handleSelect(this.state.match_id)}
            >
              Live Scorecard
            </Button>
          </Grid>
          <Grid container spacing={10}>
            <Grid item>
              <Typography align="center">
                <b className="change_font">{this.state.batting_team}</b> -{" "}
                <i className="change_bowl_bat_font">
                  <b>Batting</b>
                </i>
              </Typography>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>Name</CustomTableCell>
                      <CustomTableCell align="right">R</CustomTableCell>
                      <CustomTableCell align="right">B</CustomTableCell>
                      <CustomTableCell align="right">S/R</CustomTableCell>
                      <CustomTableCell align="right">4s</CustomTableCell>
                      <CustomTableCell align="right">6s</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      className={classes.row}
                      style={{
                        borderTop: 1,
                        borderBottom: 1,
                        borderColor: "black",
                      }}
                    >
                      <CustomTableCell component="th" scope="row">
                        {this.state.striker_batsman} *
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.striker.runs}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.striker.balls}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {!isNaN(this.state.striker.strike_rate) &&
                          this.state.striker.strike_rate}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.striker.fours}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.striker.sixes}
                      </CustomTableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: "white" }}>
                      <CustomTableCell component="th" scope="row">
                        {this.state.non_striker_batsman}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.non_striker.runs}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.non_striker.balls}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {!isNaN(this.state.non_striker.strike_rate) &&
                          this.state.non_striker.strike_rate}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.non_striker.fours}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.non_striker.sixes}
                      </CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item>
              <Typography align="center">
                <b className="change_font">{this.state.bowling_team}</b> -{" "}
                <i className="change_bowl_bat_font">
                  <b>Bowling</b>
                </i>
              </Typography>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow className={classes.row}>
                      <CustomTableCell>Name</CustomTableCell>
                      <CustomTableCell align="right">Overs</CustomTableCell>
                      <CustomTableCell align="right">M</CustomTableCell>
                      <CustomTableCell align="right">Runs</CustomTableCell>
                      <CustomTableCell align="right">W</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={classes.row}>
                      <CustomTableCell component="th" scope="row">
                        {this.state.current_bowler}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.bowler.overs}.{this.state.bowler.balls}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.bowler.maidens}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.bowler.runs}
                      </CustomTableCell>
                      <CustomTableCell align="right">
                        {this.state.bowler.wickets}
                      </CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
              <br></br>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Grid container spacing={10}>
            <Grid item align="left">
              <Paper>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.increaseScore(0)}
                >
                  0
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.increaseScore(1)}
                >
                  1
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.increaseScore(2)}
                >
                  2
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.increaseScore(3)}
                >
                  3
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.increaseScore(4)}
                >
                  4
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.increaseScore(5)}
                >
                  5
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.increaseScore(6)}
                >
                  6
                </Button>

                <br></br>

                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={this.handleExtra}
                >
                  WIDE
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick ={() => this.openForm("NOBALL")}
                >
                  NO BALL
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.openForm("LEGBYES")}
                >
                  LEG BYES
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.openForm("BYES")}
                >
                  BYES
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  onClick={() => this.openForm("NO_BALL_LEG_BYES")}
                >
                  NO BALL + LEG BYES
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={(classes.button, classes.blueRoot)}
                  disabled
                >
                  NO BALL + BYES
                </Button>

                <br></br>

                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleWicket}
                >
                  CAUGHT
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleWicket}
                >
                  BOWLED
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleWicket}
                >
                  LBW
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={() => this.openForm("RUN_OUT")}
                >
                  RUN OUT
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleWicket}
                >
                  STUMPED
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleWicket}
                >
                  HIT WICKET
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  disabled
                >
                  RETIRED
                </Button>
              </Paper>
            </Grid>
            <Grid item align="center">
              <Button
                variant="contained"
                size="medium"
                color="primary"
                className={(classes.margin, classes.undoRoot)}
              >
                UNDO
              </Button>
              <br></br>
              <br></br>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={() => this.openForm("INITIAL_PLAYERS")}
                disabled={this.state.disabled}
                className={(classes.margin, classes.endRoot)}
              >
                START INNINGS
              </Button>
              <br></br>
              <br></br>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={() => this.openForm("END_INNINGS")}
                className={(classes.margin, classes.endRoot)}
              >
                END INNINGS
              </Button>
              <br></br>
              <br></br>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={() => this.openForm("END_MATCH")}
                className={(classes.margin, classes.endRoot)}
              >
                END MATCH
              </Button>
            </Grid>
          </Grid>
          <Dialog
            open={this.state.open_initial_form}
            TransitionComponent={Transition}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <Paper
                style={{
                  width: "500px",
                  height: "570px",
                  paddingLeft: "2%",
                  paddingRight: "0%",
                  paddingTop: "2%",
                }}
              >
                <center>
                  <h3>Select On-Filed Players</h3>
                </center>
                <TextField
                  style={{ width: "90%", marginLeft: "2%" }}
                  select
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Striker Batsman"
                  value={this.state.weightRange}
                  onChange={this.handleChange("striker_batsman")}
                >
                  {this.state.team1_players.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <br />
                <br />
                <br />
                <TextField
                  style={{ width: "90%", marginLeft: "2%" }}
                  select
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Non Striker Batsman"
                  value={this.state.weightRange}
                  onChange={this.handleChange("non_striker_batsman")}
                >
                  {this.state.team1_players.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <br />
                <br />
                <br />
                <TextField
                  style={{ width: "90%", marginLeft: "2%" }}
                  select
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Bowler"
                  value={this.state.weightRange}
                  onChange={this.handleChange("current_bowler")}
                >
                  {this.state.team2_players.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <br></br>
                <br></br>
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "150px" }}
                    className={classes.button}
                    onClick={this.handleInitialPlayerSubmit}
                  >
                    Select
                  </Button>
                </center>
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_initial_form: false });
                }}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.open_next_batsman_form}
            TransitionComponent={Transition}
            // onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <Paper
                style={{
                  width: "450px",
                  height: "500px",
                  paddingLeft: "2%",
                  paddingRight: "0%",
                  paddingTop: "2%",
                }}
              >
                <center>
                  <h3>Select Next Batsman</h3>
                </center>
                <TextField
                  style={{ width: "90%", marginLeft: "2%" }}
                  select
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Striker Batsman"
                  value={this.state.weightRange}
                  onChange={this.handleChange("striker_batsman")}
                >
                  {this.state.team1_players.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <br />
                <br />
                <br />
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "150px" }}
                    className={classes.button}
                    onClick={this.handleNextBatsmanSubmit}
                  >
                    Select
                  </Button>
                </center>
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_next_batsman_form: false });
                }}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.open_next_bowler_form}
            TransitionComponent={Transition}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <Paper
                style={{
                  width: "500px",
                  height: "570px",
                  paddingLeft: "2%",
                  paddingRight: "0%",
                  paddingTop: "1%",
                }}
              >
                <center>
                  <h3>Select Next Bowler</h3>
                </center>
                <TextField
                  style={{ width: "90%", marginLeft: "2%" }}
                  select
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Next Bowler"
                  value={this.state.weightRange}
                  onChange={this.handleChange("current_bowler")}
                >
                  {this.state.team2_players.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <br />
                <br />
                <br />
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "150px" }}
                    className={classes.button}
                    onClick={this.handleNextBowlerSubmit}
                  >
                    Select
                  </Button>
                </center>
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_next_bowler_form: false });
                }}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.open_end_match_form}
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
                  fontWeight: "bolder",
                }}
              >
                Do you want to end the match?
              </span>
            </DialogTitle>
            <DialogContent>You won’t be able to undo the action.</DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_end_match_form: false });
                  this.handleEndMatchClicked(this.state.match_id);
                }}
                variant="outlined"
                color="primary"
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  this.setState({ open_end_match_form: false });
                }}
                variant="outlined"
                color="secondary"
              >
                No
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.open_end_innings_form}
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
                  fontWeight: "bolder",
                }}
              >
                Do you want to end the innings?
              </span>
            </DialogTitle>

            <DialogContent>You won’t be able to undo the action.</DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_end_innings_form: false });
                  this.handleEndInningsClicked();
                }}
                variant="outlined"
                color="primary"
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  this.setState({ open_end_innings_form: false });
                }}
                variant="outlined"
                color="secondary"
              >
                No
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.open_no_player_selected_form}
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
                  fontWeight: "bolder",
                }}
              >
                Player Not selected!
              </span>
            </DialogTitle>
            <DialogContent>Please select all players first.</DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_no_player_selected_form: false });
                }}
                variant="outlined"
                color="secondary"
              >
                Okay
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.open_same_striker_non_striker_form}
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
                  fontWeight: "bolder",
                }}
              >
                Striker and Non Striker cannot be same!
              </span>
            </DialogTitle>
            <DialogContent>
              Please select different striker and non-striker batsman.
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_same_striker_non_striker_form: false });
                }}
                variant="outlined"
                color="secondary"
              >
                Okay
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.open_byes_form}
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
                  fontWeight: "bolder",
                }}
              >
                Byes
              </span>
            </DialogTitle>
            <DialogContent>
            <Paper
                style={{
                  width: '380px',
                  height: "15%",
                  padding: '2% 2% 2% 2%'
                }}
              >
            <Button
                onClick={() => {
                  this. handleByes(1)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                1
              </Button>
              <Button
                onClick={() => {
                  this. handleByes(2)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                2
              </Button>
              <Button
                onClick={() => {
                  this. handleByes(3)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                3
              </Button>
              <Button
                onClick={() => {
                  this. handleByes(4)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                4
              </Button>
              <Button
                onClick={() => {
                  this. handleByes(5)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                5
              </Button>
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_byes_form: false });
                }}
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.open_no_ball_leg_byes_form}
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
                  fontWeight: "bolder",
                }}
              >
                No Ball + Leg Byes
              </span>
            </DialogTitle>
            <DialogContent>
            <Paper
                style={{
                  width: '380px',
                  height: "15%",
                  padding: '2% 2% 2% 2%'
                }}
              >
            <Button
                onClick={() => {
                  this. handleNoBallAndLegByes(1)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                1
              </Button>
              <Button
                onClick={() => {
                  this. handleNoBallAndLegByes(2)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                2
              </Button>
              <Button
                onClick={() => {
                  this. handleNoBallAndLegByes(3)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                3
              </Button>
              <Button
                onClick={() => {
                  this. handleNoBallAndLegByes(4)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                4
              </Button>
              <Button
                onClick={() => {
                  this. handleNoBallAndLegByes(5)
                }}
                variant="contained"
                color="primary"
                style={{marginRight: '3%'}}
              >
                5
              </Button>
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_no_ball_leg_byes_form: false });
                }}
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={this.state.open_run_out_form}
            TransitionComponent={Transition}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
          <DialogTitle id="alert-dialog-slide-title">
              <span
                style={{
                  fontFamily: "HelveticaforTargetBold,Arial",
                  color: "#646566",
                  fontWeight: "bolder",
                }}
              >
                RUN OUT
              </span>
            </DialogTitle>
            <DialogContent>
            <Paper style={{
                  width: '500px',
                  height: "15%",
                  padding: '2% 2% 2% 2%'
                }}
              >
            <Button onClick ={() => this.handleRunOut(1)} variant="contained" color="primary" style={{marginRight: '3%'}}>1</Button>
            <Button onClick ={() => this.handleRunOut(2)} variant="contained" color="primary" style={{marginRight: '3%'}}>2</Button>
            <Button onClick ={() => this.handleRunOut(3)} variant="contained" color="primary" style={{marginRight: '3%'}}>3</Button>
            <Button onClick ={() => this.handleRunOut(4)} variant="contained" color="primary" style={{marginRight: '3%'}}>4</Button>
            <Button onClick ={() => this.handleRunOut(5)} variant="contained" color="primary" style={{marginRight: '3%'}}>5</Button>
            <Button onClick ={() => this.handleRunOut(6)} variant="contained" color="primary" style={{marginRight: '3%'}}>6</Button>

            </Paper></DialogContent>
            <DialogActions><Button onClick={() => {this.setState({ open_run_out_form: false }); }} variant="outlined" color="secondary">Cancel</Button></DialogActions>
            </Dialog>

            <Dialog open={this.state.open_no_ball_form}
            TransitionComponent={Transition}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
          <DialogTitle id="alert-dialog-slide-title">
              <span
                style={{
                  fontFamily: "HelveticaforTargetBold,Arial",
                  color: "#646566",
                  fontWeight: "bolder",
                }}
              >
                No Ball
              </span>
            </DialogTitle>
            <DialogContent>
              <Paper style={{
                  width: '500px',
                  height: "15%",
                  padding: '2% 2% 2% 2%'
                }}
              >
              <Button onClick={() => {this.handleNoBall(1)}} variant="contained" color="primary" style={{marginRight: '3%'}}>1</Button>
              <Button onClick={() => {this.handleNoBall(2)}} variant="contained" color="primary" style={{marginRight: '3%'}}>2</Button>
              <Button onClick={() => {this.handleNoBall(3)}} variant="contained" color="primary" style={{marginRight: '3%'}}>3</Button>
              <Button onClick={() => {this.handleNoBall(4)}} variant="contained" color="primary" style={{marginRight: '3%'}}>4</Button>
              <Button onClick={() => {this.handleNoBall(5)}} variant="contained" color="primary" style={{marginRight: '3%'}}>5</Button>
              <Button onClick={() => {this.handleNoBall(6)}} variant="contained" color="primary" style={{marginRight: '3%'}}>6</Button>
            
              </Paper> </DialogContent>
              <DialogActions><Button onClick={() => {this.setState({ open_no_ball_form: false }); }} variant="outlined" color="secondary">Cancel</Button></DialogActions>
          </Dialog>

          <Dialog open={this.state.open_leg_byes_form}
            TransitionComponent={Transition}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
          <DialogTitle id="alert-dialog-slide-title">
              <span
                style={{
                  fontFamily: "HelveticaforTargetBold,Arial",
                  color: "#646566",
                  fontWeight: "bolder",
                }}
              >
                Leg Byes
              </span>
            </DialogTitle>
            <DialogContent>
              <Paper style={{
                  width: '500px',
                  height: "15%",
                  padding: '2% 2% 2% 2%'
                }}
              >
              <Button onClick={() => {this.handleLegByes(1)}} variant="contained" color="primary" style={{marginRight: '3%'}}>1</Button>
              <Button onClick={() => {this.handleLegByes(2)}} variant="contained" color="primary" style={{marginRight: '3%'}}>2</Button>
              <Button onClick={() => {this.handleLegByes(3)}} variant="contained" color="primary" style={{marginRight: '3%'}}>3</Button>
              <Button onClick={() => {this.handleLegByes(4)}} variant="contained" color="primary" style={{marginRight: '3%'}}>4</Button>
              <Button onClick={() => {this.handleLegByes(5)}} variant="contained" color="primary" style={{marginRight: '3%'}}>5</Button>
              <Button onClick={() => {this.handleLegByes(6)}} variant="contained" color="primary" style={{marginRight: '3%'}}>6</Button>
            
              </Paper> </DialogContent>
              <DialogActions><Button onClick={() => {this.setState({ open_leg_byes_form: false }); }} variant="outlined" color="secondary">Cancel</Button></DialogActions>
          </Dialog>
        </div>
      </Container>
    );
  }
}

ScoringScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScoringScreen);
