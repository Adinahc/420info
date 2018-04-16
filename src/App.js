import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Button, Col, Grid, Row } from 'react-bootstrap';
import './App.css';
import Nav from './Nav';
import Register from './Register';
import Home from './Home';
import ForgotPassword from './ForgotPassword';


class App extends Component {
  
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Nav></Nav>    
          </Col>
        </Row>  
        <Row>
          <Col className="contentDiv">
            <Router>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Register' component={Register}/>
                <Route path='/ForgotPassword' component={ForgotPassword}/>
              </Switch>
            </Router>    
          </Col>
        </Row>  
      </Grid>
    );
  }
}

export default App;
