import React from 'react';
import { Button, FormControl, FormGroup, MenuItem, Nav, Navbar, NavDropdown, NavItem, Table } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Navbar, 'custom');

const navBar = () => (
    <Navbar bsStyle="custom" collapseOnSelect fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="/">420Info</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem href="#">
                    Link
                </NavItem>
                <NavItem href="#">
                    Link
                </NavItem>
            </Nav>
                <Navbar.Form pullRight>
                <FormGroup>
                    <Table className="nav-table" responsive>
                        <tbody>
                        <tr>
                            <td><FormControl type="text" placeholder="USERNAME" /></td>
                            <td><FormControl type="text" placeholder="PASSWORD" /></td>
                            <td rowSpan="2"><Button type="submit">Sign in</Button></td>
                        </tr>
                        <tr>
                            <td className="navLinkCell"><a href="/ForgotPassword">Forgot Password?</a></td>
                            <td className="navLinkCell"><a href="/Register">Register</a></td>
                        </tr>
                        </tbody>
                    </Table>    
                    </FormGroup>{' '}
                </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>);

export default navBar;