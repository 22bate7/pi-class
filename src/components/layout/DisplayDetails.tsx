import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@primer/octicons-react';
import styles1 from '../../assets/displaySection.module.scss';
import styles2 from '../../assets/displayDetails.module.scss';

interface Props {
    showView:string,
    homework:any,
    match:any,
}

const DisplayDetails:React.FC<Props> = ({ match,homework:{homeworks} })=> {
    const homeworksOf = match.params.name;
    const catagory = match.params.catagory;

    // eslint-disable-next-line array-callback-return
    const results = homeworks.filter((homework:any)=>{
        return (catagory === 'class' && homework.standard === homeworksOf) || (catagory === 'subject'&& homework.subject === homeworksOf)
    }) 

    return (
        <div className={`${styles1.section} ${styles2.section} section`}>
            <h1>Homework of {homeworksOf}</h1>
            {results && results.length>0 ? results.map((result:any)=> (
                <Link to={`/`} className={`${styles1.part} part`} key={Math.random()}>
                    <span className={`${styles1['part-title']} part-title`}>{ result.title }</span>
                    <ChevronRightIcon size={20} />
                </Link>
            )):<p>No Homework Available</p>}
        </div>
    )
}

const mapStateToProps = (state:any)=>{
    return {
        homework:state.homework,
    }
}

export default connect(mapStateToProps)(DisplayDetails);

