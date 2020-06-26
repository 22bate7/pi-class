import React from 'react';
import { connect } from 'react-redux';
import { ChevronRightIcon } from '@primer/octicons-react';
import '../../assets/displaySection.scss';

interface Props {
    showView:string,
    catagory:any
}

const DisplaySection:React.FC<Props> = ({ showView,catagory })=> {

    if(showView.toLowerCase().includes('class')) {
        return (
            <div className="section">
                {catagory.classes.map((standard:string)=>
                    <div className="part" key={Math.random()}>
                        <span className="part-title">{ standard }</span>
                        <ChevronRightIcon size={20} />
                    </div>
                )}
            </div>
        )
    }
    else if(showView.toLowerCase().includes('subject')) {
        return (
            <div className="section">
                {catagory.subjects.map((subject:string)=>
                    <div className="part" key={Math.random()}>
                        <span className="part-title">{ subject }</span>
                        <ChevronRightIcon size={20} />
                    </div>
                )}
            </div>
        )
    }
    else if(showView.toLowerCase().includes('date')) {
        return (
            <div className="">
                {showView}
            </div>
        )
    }
    return (
        <React.Fragment></React.Fragment>
    )
}

const mapStateToProps = (state:any)=>{
    return {
        catagory:state.catagory
    }
}

export default connect(mapStateToProps)(DisplaySection);

