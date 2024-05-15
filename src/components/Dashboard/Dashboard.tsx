import React, { useState } from "react";
import styles from "../../assets/dashboard.module.scss";
import { connect } from "react-redux";
import { selectCatagory } from "../../actions/actions";
import DisplaySection from "../Homework/DisplaySection";
import classNames from "classnames";
import { PlusIcon } from "@primer/octicons-react";
import styles1 from "../../assets/theme/button.module.scss";
import AddHomework from "../Homework/AddHomeworks";
import { CLASS_WISE } from '../../reducers/showTypes';

interface Props {
  catagories: string[];
  selectedCatagory: string;
  catagory: any;
  selectCatagory: any;
}

const Dashboard: React.FunctionComponent<Props> = ({
  catagory,
  selectCatagory,
}) => {
  const { catagories } = catagory;
  
  //to change catagory between class and subject
  const [selected, setSelected] = useState({
    catagory: CLASS_WISE,
  });

  //to toggle popup
  const [showPopup,togglePopup] = useState(false);

  //to change catagory on click
  const changeCatagory = (e: any) => {
    setSelected({
      catagory: e.target.textContent,
    });
    selectCatagory(e.target.textContent);
  };

  //show all class if class view is selected or show all subject if subject view is selected
  const displayCatagories = catagories.map((catagory: string) => {
    return (
      <span
        className={
          catagory === selected.catagory ? `${styles.selected} selected` : ""
        }
        key={catagory}
        onClick={changeCatagory}
      >
        {catagory}
      </span>
    );
  });
  return (
    <div className={classNames(styles.dashboard, "dashboard")}>
      <div className={classNames(styles.options, "options")}>
        {displayCatagories}
      </div>
      <DisplaySection showView={selected.catagory} />
      <AddHomework showPopup={showPopup} handleClose={togglePopup} />
      <button
          className={classNames(styles1["btn-floating"], "btn-floating")}
          onClick={()=>{togglePopup(!showPopup)}}
        >
          <PlusIcon size={30} />
    </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    catagory: state.catagory,
  };
};

export default connect(mapStateToProps, {
  selectCatagory,
})(Dashboard);
