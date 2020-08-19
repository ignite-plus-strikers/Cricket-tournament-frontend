import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "../../App.css";
import Navbar from "./Navbar";
import {Container} from "@material-ui/core"

class Home extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    return (
      <div>
       <Navbar/>
        <br />
       <Container align="center">
        <GoogleLogin
          className="google-btn"
          clientId="573292673851-j44aqq6nae92a10ogpcu26ealqhr4hf3.apps.googleusercontent.com"
          buttonText="Create New Account"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        </Container>
        <h1
          style={{
            marginTop: 100,
            fontWeight: 80,
            textAlign: "center",
            marginBottom: 80,
          }}
        >
          Disabling inhibitions to excel in sports...
        </h1>
      </div>
    );
  }
}

export default Home;
