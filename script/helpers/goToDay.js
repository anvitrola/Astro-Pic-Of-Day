function goToDay (date, operator){
    let n = new Date(date+"T00:00:00");

    if(operator === '+'){
        n.setDate(n.getDate() + 1);
    } else{
        n.setDate(n.getDate() - 1);
    }

    let nd = n.toISOString();
    let newDay = nd.split('T');

    return newDay[0]
}