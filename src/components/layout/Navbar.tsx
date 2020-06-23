import React from 'react';
import { BookIcon } from '@primer/octicons-react'
// import PropTypes from 'prop-types';

const Navbar:React.FC = () =>{
    return (
        <nav className="bg-gray-900 text-white p-5">
            <span className="text-white-500 text-2xl"><BookIcon size={24}/> Homework</span>
        </nav>
    )
}

// Navbar.propTypes = {

// }

export default Navbar;

