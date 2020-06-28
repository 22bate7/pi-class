import React from 'react';
import { connect } from 'react-redux';

interface Props {
    match:any,
    homework:any
}

const ShowHomework:React.FC<Props> = ({ match,homework:{ homeworks } })=> {

    const id = match.params.id;
    const foundHomework = homeworks.find((homework:any)=>homework.id===id);
    console.log(foundHomework);

    return (
        <div className="show-homework">
            {foundHomework ? (
                <div className="homework">
                    <div className="title">{foundHomework.title}</div>
                    <div className="title">{foundHomework.createdDate.toString()}</div>
                    <div className="std">{foundHomework.standard}</div>
                    <div className="subject">{foundHomework.subject}</div>
                    <div className="description">{foundHomework.description}</div>
                    <div className="due">{foundHomework.homeworkDue}</div>
                </div>
            ) : <p>No homework found with this {id}</p>}
        </div>
    )
}

const mapStateToProps = (state:any)=>{
    return {
        homework:state.homework
    }
}

export default connect(mapStateToProps)(ShowHomework);

