import React,{ useState } from 'react';
// import ProtoType from 'prop-types';
import '../../assets/dashboard.scss';
import { connect } from 'react-redux';
import { selectCatagory } from '../../actions/actions' 

interface Props {
    catagories:string[],
    selectedCatagory:string,
    catagory:any,
    selectCatagory:any
}

const Dashboard:React.FC<Props> = ({catagory,selectCatagory})=>{
    const { catagories } = catagory;
    const [selected, setSelected] = useState({
        catagory:'Class-wise'
    })

    const changeCatagory = (e:any )=>{
        setSelected({
            catagory:e.target.textContent
        })
        selectCatagory(e.target.textContent);
    }

    const displayCatagories = catagories.map((catagory:string)=>{
        return (
            <span className={catagory===selected.catagory?'selected':''} key={Math.random()} onClick={changeCatagory}>{catagory}</span>
        )
    })
    return (
        <div className="dashboard">
            <div className="options">
                {displayCatagories}
            </div>
        </div>
    )
}

// Dashboard.protoType = {

// }

const mapStateToProps = (state:any)=>{
    return {
        catagory:state.catagory
    }
}

export default connect(mapStateToProps,{
    selectCatagory
})(Dashboard);