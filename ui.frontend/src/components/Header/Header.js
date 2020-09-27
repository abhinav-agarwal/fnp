import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import './Header.css';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';


require('./Header.css');

export const HeaderEditConfig = {

    emptyLabel: 'Header',

    isEmpty: function(props) {
        return !props || !props.imageSrc || props.imageSrc.trim().length < 1 ;
    }
};

export default class Header extends Component {

    renderIcons(children) {
        if(children === null || children.length < 1 ) {
            return null;
        }
        return (<div className=" d-flex flex-row justify-content-center align-items-center pl-lg-5">
                    {children.map(
                        (item,index) => { return this.renderNavItem(item,index)}
                    )}
                </div>
        );
    }

    renderNavItem(item, index) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center pl-lg-5">
                 <img className="nav-icons" src={item.iconClass} alt="icons"/>
                 <span className="d-block">{item.iconLabel}</span>
            </div>
        );
   }

    render() {
        if(HeaderEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div className="Header">
            <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home"><img src={this.props.imageSrc} width="200" alt="sample" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="fnp__navbar py-2 pl-lg-2 px-0">
              <Nav className="mr-auto">
              <Form inline>
                <FormControl type="text" className="nav-input mr-sm-2" placeholder={this.props.searchButtonText} />
                <Button variant="outline-info" className="btn-success btn-label">{this.props.ctalabel}</Button>
              </Form>
              </Nav>
              <Nav> 
                <Nav.Link  className="d-flex flex-lg-row flex-column">

                 {this.renderIcons(this.props.iconDetails)}

                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}

MapTo('fnp/components/header')(Header, HeaderEditConfig);
