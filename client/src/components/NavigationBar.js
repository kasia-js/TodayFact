import React, {useState} from 'react';

import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/Wikipedia_logo_(svg).svg';

import Store from '../utils/FavoriteStore';

function NavigationBar() {
    let [favoriteCount, setFavoriteCount] = useState(0);

    Store.subscribe(() => {
        setFavoriteCount(Store.getCount());
    });

    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} className='Wikipedia-logo' alt='logo' />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <h1 className='pinkText'>TodayFacts</h1> <a href="https://wikipedia.org" className='Nav-link'>by WIKIPEDIA.</a>
            </Nav>
            <Nav.Link className='Nav-link' href="#home">My favorites <Badge variant="light">{favoriteCount}</Badge></Nav.Link>
        </Navbar>
    );
}

export default NavigationBar;
