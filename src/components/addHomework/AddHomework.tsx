import React,{ useState } from 'react';
import '../../assets/addHomework.scss';
import { XIcon } from '@primer/octicons-react';
import { connect } from 'react-redux';
import { hidePopup,showError } from '../../actions/actions';
import ErrorBox from '../layout/errorBox';

interface Props {
    homework:any,
    hidePopup:any,
    showError:any
}

const AddHomework:React.FC<Props> = (props)=>{

    const { homework,hidePopup,showError } = props;

    const [homeworkData, setHomeworkData] = useState({
        standard:'',
        subject:'',
        title:'',
        description:'',
        dueDate:'',
        dueTime:'',
        otherFiles:''
    });
    const { standard,subject,title,description,dueDate,otherFiles,dueTime } = homeworkData;

    const hideAddHomework = ()=>{
        hidePopup();
    }
    const handleChange = (e: { target: { name: any; value: any; }; }) =>{
        setHomeworkData({
            ...homeworkData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        if(homeworkData.standard === '' || homeworkData.standard === 'Standard') {
            console.log('Please select standard');
            showError('Please select standard');
        }
        else if(homeworkData.subject === '' || homeworkData.standard === 'Subject') {
            console.log('Please select subject');
            showError('Please select subject');
        }else {
            console.log(homeworkData);
        }
    }

    return (
        <div className={homework.showPopup?'addHomework':'hide'}>
            <form className="addHomework-form" onSubmit={handleSubmit}>
                <div className="close-icon" onClick={hideAddHomework}>
                    <XIcon size={24} />
                </div>
                {homework.showError.show?<ErrorBox />:''}
                <h1>Create Assignment</h1>
                <small>Add Homework / Classwork Details</small>
                <div className="group">
                    <select name="standard" className="class-select" value={standard} onChange={handleChange} required>
                        <option>Standard</option>
                        <option value="II-2nd-A">II - 2nd - A</option>
                        <option value="II-2nd-B">II - 2nd - B</option>
                        <option value="II-2nd-C">II - 2nd - C</option>
                        <option value="II-2nd-D">II - 2nd - D</option>
                    </select>
                    <select name="subject" className="subject-select" value={subject} onChange={handleChange} required>
                        <option>Subject</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="Python">Python</option>
                        <option value="C#">C#</option>
                    </select>
                </div>
                <input type="text" name="title" placeholder="Title" value={title} onChange={handleChange} required/>
                <input type="text" name="description" placeholder="Description" value={description} onChange={handleChange} required/>
                <div className="group">
                    <input type="date" name="dueDate" value={dueDate} onChange={handleChange} required/>
                    <input type="time" name="dueTime" value={dueTime} onChange={handleChange} required/>
                    <input type="file" name="otherFiles" value={otherFiles} onChange={handleChange}/>
                </div>
                <button type="submit">Add Homework</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state:any)=>{
    return {
        homework:state.homework
    }
}

export default connect(mapStateToProps,{
    hidePopup,
    showError
})(AddHomework);