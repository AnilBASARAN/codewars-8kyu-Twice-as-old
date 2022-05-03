
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let x = 0;
    for(let i = 0 ; i < 100 ; i ++){
       if(dadYearsOld-i == (sonYearsOld-i)*2){
         return i
       }
    }
   
    for(let i = 0 ; i < 100 ; i ++){
       if(dadYearsOld+i == (sonYearsOld+i)*2){
         return i
       }
    }
    
  }

/*
8kyu Twice as old


Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript