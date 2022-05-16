//function saturdayFun(activity = 'roller-skate'){
    //console.log(`This Saturday, I want to ${activity}!`)
//}

//function saturdayFun(activity = 'roller-skate'){
    //console.log(`$This Saturday, I want to ${activity}!`);
  //}

  //saturdayFun()


  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  saturdayFun(); 
  //saturdayFun(); 

  function mondayWork(activity = "go to the office") {
      return `This Monday, I will ${activity}.`
  }

  //function wrapAdjective() {
  //    return function inner(){

  //    }
 // }

  function wrapAdjective(special = '*') {
    return  function encouragingPrompt(prompt = 'a hard worker'){
        return `You are ${special}${prompt}${special}!`
    }
        }
