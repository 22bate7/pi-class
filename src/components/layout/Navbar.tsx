import React,{ useState } from 'react';
import { BookIcon,SearchIcon,PersonIcon } from '@primer/octicons-react';
import { Link } from 'react-router-dom'
import styles from '../../assets/navbar.module.scss';
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
            <Link to="/" className={`${styles['logo-text']} logo-text`}><BookIcon size={30}/> Homework</Link>
            <form className={`${styles['search-box']} search-box`} onSubmit={handleSubmit}>
                <input type="text" autoComplete="off" placeholder="Search by Class,Subject,Date" name="search" value={search} onChange={handleChange}/>
                <button type="submit" className={`${styles["search-btn"]} search-btn`}>
                    <SearchIcon size={24} />
                </button>
            </form>
            <div className={`${styles["user"]} user`}>
                <span>Logout</span>
                <PersonIcon size={24} className={`${styles["profile-photo"]} profile-photo`}/>
            </div>
        </nav>
    )
}

// Navbar.propTypes = {

// }

export default Navbar;

