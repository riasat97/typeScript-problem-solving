const problem1= (text:string, n:number=3):void=>{
    while(n){
        console.log(text);
        n--;
    }
    //console.log(`${text}\n`.repeat(n));
}
problem1('Welcome to TS');