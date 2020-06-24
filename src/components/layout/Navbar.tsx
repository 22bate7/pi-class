import React,{ useState } from 'react';
import { BookIcon,SearchIcon,PersonIcon } from '@primer/octicons-react';
import { Link } from 'react-router-dom'
import '../../assets/navbar.scss';
// import PropTypes from 'prop-types';

const Navbar:React.FC = () =>{

    const [searchData, setSearchData] = useState({
        search:''
    });

    const { search } = searchData;

    const handleChange = (e:any)=>{
        setSearchData({
            ...searchData,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        console.log(searchData);
    }

    return (
        <nav>
            <Link to="/" className="logo-text"><BookIcon size={30}/> Homework</Link>
            <form className="search-box" onSubmit={handleSubmit}>
                <input type="text" autoComplete="off" placeholder="Search by Class,Subject,Date" name="search" value={search} onChange={handleChange}/>
                <button type="submit" className="search-btn">
                    <SearchIcon size={24} />
                </button>
            </form>
            <div className="user">
                <span>Logout</span>
                <PersonIcon size={24} className="profile-photo"/>
            </div>
        </nav>
    )
}

// Navbar.propTypes = {

// }

export default Navbar;

