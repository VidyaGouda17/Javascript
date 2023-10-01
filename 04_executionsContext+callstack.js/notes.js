/**
 1) what is the thread ?
 ans=> thread is a single sequential flow of control within a program. 
 2) what is the single-thread ?
 ans => The only one call stack is used to execute the program  or The one line of code execute at once 
 3) Is Javascript is single-thread ?
ans => yes 
 4)How the Javascript works behind the scene ?
 ans =>Javascript is single-thread interuptted lang>
    1) Every browser has its own JS engine 
       a) chrome => v8 engine
       b)Mozella firefox => spider monkey
 5) What is the Execution Context?
ans => when the javascript engine scans the script files, it makes the enviorment called the execution context , means how the javascript engine runs the codes this process is 
        called execution context 
6) How many phase of the execution happens in JS? 
ans=> 1) Memroy creations context 2) Executions context 
7) Explain the process of the execution context in JS ?
ans => step1 :- when we provide a peice of code to execute first the Global execution context will be created , global execution context will refer to this keyword 
             => when we are runing the code in window then the global execution object will be window object , same for node => {} object , and deno etc 
       1) types of execution context 
                 a) Global execution context 
                 b)Function execution context 
                 c) Evel execution context => mongoose 
        step 2 :- Code will run in two phase 
                a) Memory creation phase(Creation phase ) =>for all varibales or function it will allocate the memory (place allocation for all defined varibles and fun)
                b)Execution phase  => execution of the code will happen in this 
        ex :- 
        var val1 = 10;
        var val2 = 20;
        function addNum(num1, num2){
            let total = num1 + num2;
            retunrn total;
        }
        const result1 = addNum(val1, val2);
        const resutl2 = addNum(30, 50);

        How the JS engine runs the this above code ?
        1) first the Global execution(Global enviorment)=> this , will run first 
        2) Memory phase => first cycle 
           a) will takes all the varibales and funtion and will store in the memory phase 
           b) fist will take val1 => undefined 
           c) val2 => undfined 
           d)addNum => {function defination}
           c) result1 => undefined 
           d) result2 => undefined 
        3)Execution context => second cycle 
          a) val1 => 10 
          b) val2 => 20
          c) result1 => it will execute the function => For each function it will create the New execution context 
                                                     => It will create new varibale enviorment context + exectuion thred 
                                                      => again it will create new memory execution contex and execution phse 
                                                      stpe 1:-  Memory execution phase  
                                                        a) val1 => undefined 
                                                        b) val2 => undefined 
                                                        c) total => undefined 
                                                    step 2 :- Execution phase (In this execution process will start )
                                                        a) num1 => 10 ;
                                                        b) num2 => 20 ;
                                                        c) total => 30 (num1 + num2 )
                                                        d)total will return back to global execution context 
                                                        e) restult => 30 ;
                                                    step 3:- once the execution context is done then this execution context will removed formt the execution context 
          d) result2 => it will execute the function => For each function it will create the New execution context 
                                                     => It will create new varibale enviorment context + exectuion thred 
                                                      => again it will create new memory execution contex and execution phse 
                                                      stpe 1:-  Memory execution phase  
                                                        a) val1 => undefined 
                                                        b) val2 => undefined 
                                                        c) total => undefined 
                                                    step 2 :- Execution phase (In this execution process will start )
                                                        a) num1 => 30 ;
                                                        b) num2 => 50 ;
                                                        c) total => 80 (num1 + num2 )
                                                        d)total will return back to global execution context 
                                                        e) restult => 80 ;
                                                    step 3:- once the execution context is done then this execution context will removed formt the execution context 
        3) what is the call stack ?
        ans=> To keep the track of all the executions like global and funtions , the javascript engine uses the call stack , 
             The call stack means , 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.
            a) call stack follow's the LIFO pricinple => Last In first out 
            b)when the js engine start executing the script first it will create global satck and push it on stack 
            c)When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.


 */