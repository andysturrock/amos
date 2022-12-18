/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';

import {useIsAuthenticated} from '@azure/msal-react';
import {SignInButton} from './SignInButton';
import {SignOutButton} from './SignOutButton';


// Really weird this is missing from @types/react
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export function PageLayout(props:any) {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">AMOS</Navbar.Brand>
          {isAuthenticated ? 
            <Nav className="me-auto">
              {/* <LinkContainer to="/newcase"> */}
              <Nav.Link href="/newcase">New Case</Nav.Link>
              {/* </LinkContainer> */}
              <Nav.Link href="/transfercase">Transfer Case</Nav.Link>
              <Nav.Link href="/viewcases">View Cases</Nav.Link>
            </Nav>
            :
            <Nav/>}
        </Container>
        <div className="collapse navbar-collapse justify-content-end">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
      </Navbar>
      <h5>
        <center>Welcome to AMOS</center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
  );
}
