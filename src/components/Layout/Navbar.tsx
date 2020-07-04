import React, { useState } from "react";
import { BookIcon, SearchIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import styles from "../../assets/theme/navbar.module.scss";
import TextInput from "../InputComponent/Text";
import classNames from "classnames";

const Navbar: React.FunctionComponent = () => {
  const [searchData, setSearchData] = useState({
    search: "",
  });

  const { search } = searchData;

  const handleChange = (e: any) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(searchData);
  };

  return (
    <nav>
      <Link to="/" className={classNames(styles["logo-text"], "logo-text")}>
        <BookIcon size={30} /> Homework
      </Link>
      <form
        className={classNames(styles["search-box"], "search-box")}
        onSubmit={handleSubmit}
      >
        <TextInput
          name="search"
          placeholder="Search by Class,Subject,Date"
          value={search}
          handleChange={handleChange}
          disabled={false}
          className={classNames("search-input")}
          required={false}
        />
        <button
          type="submit"
          className={classNames(styles["search-btn"], "search-btn")}
        >
          <SearchIcon size={24} />
        </button>
      </form>
    </nav>
  );
};

// Navbar.propTypes = {

// }

export default Navbar;
