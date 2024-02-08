function receivesAFunction(f){
    return f();
}
function returnsANamedFunction(){
    let name = ()=> console.log('Joe');
    return name
}
function returnsAnAnonymousFunction(){
    return (function (){
        console.log('I\'m here');
    })
}