import React, { Component } from 'react';
import { Container, Button, Nav, Image } from 'react-bootstrap'
import bgimage from './assets/Image.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App-header'>
        <Container>
          <Nav className='Nav-Header pt-2'>
            <Nav.Item>
              <Nav.Link className='NavLogo'>
                <p>Alertz</p>
              </Nav.Link>
            </Nav.Item>


            <div className='d-md-flex d-none pt-2'>
              <Nav.Item >
                <Nav.Link className='Nav-Items ml-5'>
                  Why we?
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link className='Nav-Items ml-4'>
                  Pro
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link className='Nav-Items ml-4'>
                  Download the app
                </Nav.Link>
              </Nav.Item>
            </div>

            <div className='d-flex ml-auto pt-1'>
              <Nav.Item >
                <Nav.Link className='SignUp mr-2'>
                  Sign Up
                </Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Button className='Post-Btn'>
                  Post an SOS
              </Button>
              </Nav.Item>
            </div>

          </Nav>
        </Container>

        <Container className='Main-Header text-center pt-3'>
          <h1 className=''>
            Make your life simpler, <br />
            get more
          </h1>
          <Button className='SignUp-Btn mt-3'>
            Sign Up
          </Button>
          <div class="smartphone mt-4">
            <div class="content">
            <Image alt='logo'  src={bgimage} fluid style={{height:'100%'}} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
