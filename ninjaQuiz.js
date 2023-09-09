const correctAnswer = ['B','A','A','B','C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e=>{
    e.preventDefault();
    
    let score = 0;
    const usersAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    
   //check answer
   
   usersAnswer.forEach((answer,index) =>{
     if (answer === correctAnswer[index]){
        score +=20;
     }
   });

    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    
   
   // Print result
   scrollTo(0,0)  //window object to scroll to the top
   
   
   // score animation
   let output = 0
   const timer = setInterval(()=>{
      result.span.textContent = `${output}%`; 
      if(output === score){
      clearInterval(timer)
     } else{
       output++
     }
},30);

});

