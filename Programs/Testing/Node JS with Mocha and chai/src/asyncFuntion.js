async function updateSalary(id,name,salary,desg){
    if(desg=="Manager"){
        return salary+5000;
    }else if(desg=="Programmer"){
        return salary+3000;
    }else {
        return "No Bonus "+salary;
    }
}

module.exports={updateSalary}