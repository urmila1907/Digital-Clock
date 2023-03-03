let time = function () {
  let d = new Date();
  let hr = d.getHours();
  let mn = d.getMinutes();
  let sec = d.getSeconds();
  if(hr<10){
    hr="0"+hr;
  }
  if(mn<10){
    mn="0"+mn;
  }
  if(sec<10){
    sec="0"+sec;
  }
  in11.innerHTML = hr;
  in12.innerHTML = mn;
  in13.innerHTML = sec;
  if (hr >= 12) {
    in2.innerHTML = "PM";
  }

  setInterval(()=>{
    time();
  },1000);
};

time();



