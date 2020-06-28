import React, { useState } from "react";
// import ProtoType from 'prop-types';
import styles from "../../assets/dashboard.module.scss";
import { connect } from "react-redux";
import { selectCatagory } from "../../actions/actions";
import DisplaySection from "../layout/DisplaySection";

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
  const [selected, setSelected] = useState({
    catagory: "Class-wise",
  });

  const changeCatagory = (e: any) => {
    setSelected({
      catagory: e.target.textContent,
    });
    selectCatagory(e.target.textContent);
  };

  const displayCatagories = catagories.map((catagory: string) => {
    return (
      <span
        className={
          catagory === selected.catagory ? `${styles.selected} selected` : ""
        }
        key={Math.random()}
        onClick={changeCatagory}
      >
        {catagory}
      </span>
    );
  });
  return (
    <div className={`${styles.dashboard} dashboard`}>
      <div className={`${styles.options} options`}>{displayCatagories}</div>
      <DisplaySection showView={selected.catagory} />
    </div>
  );
};

// Dashboard.protoType = {

// }

const mapStateToProps = (state: any) => {
  return {
    catagory: state.catagory,
  };
};

export default connect(mapStateToProps, {
  selectCatagory,
})(Dashboard);
