const problem1= (text:string, n:number=3):void=>{
    while(n){
        console.log(text);
        n--;
    }
}
problem1('Welcome to TS', 2); // logs 'Welcome to TS' twice
problem1('Welcome to TS world'); // logs 'Welcome to TS world' three times (default value)