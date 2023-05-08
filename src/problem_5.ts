const problem5= (param:unknown):void=>{
    if(typeof param ==='string' )
    console.log(param);
    else console.error('please input string');
}
problem5('bhalo achi');