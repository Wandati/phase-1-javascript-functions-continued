// code your solution here

function saturdayFun(activity ='roller-skate'){
    return `This Saturday, I want to ${activity}`;
}
saturdayFun()
saturdayFun('bathe my dog')
function mondayWork(activity ='go to the office'){
    return "This Monday, I will " + activity;
}
mondayWork()
mondayWork("work from home")
function wrapAdjective(par2 ='*'){
    return function(par1 = "special"){
        return `You are ${par2}${par1}${par2}!`;
    };
    
}
const encouragingFunc = wrapAdjective("!!!");

