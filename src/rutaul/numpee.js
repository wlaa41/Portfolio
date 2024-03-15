

   export const linspace =(startValue, stopValue, num)=> {
    const arr = [];
    const step = (stopValue - startValue) / (num-1);

    for (var i = startValue; i < stopValue; i+=step) {
      arr.push(i);
    }
    //This is added because in JS -0 does not equal +0 so the loop above might 
    //cover the stopValue or it might not
    if(arr.length !==num ){    arr.push(stopValue); }
    return arr;
  }
