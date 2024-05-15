//check homework is due or not and show accordingly
export const isDue = (endDate:Date):boolean => endDate.getTime() - new Date().getTime() >=0

//show homeworks of according to selected class or subject
export const showSelectedViewResult = (catagory:string,homework:any,homeworksOf:string):boolean => 
    (catagory === "class" && homework.standard === homeworksOf) ||
    (catagory === "subject" && homework.subject === homeworksOf)