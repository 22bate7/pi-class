import React from 'react';
import { connect } from 'react-redux';

interface Props {
    msg:string
}

const ErrorBox:React.FC<Props> = ({ msg })=>{
    return (
        <div className="error">
            {msg}
        </div>
    )
}

const mapStateToProps = (state:any)=>{
    return {
        msg:state.homework.showError.msg
    }
}

export default connect(mapStateToProps)(ErrorBox);