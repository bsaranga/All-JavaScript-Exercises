var arr = [
    1, 
    "Hola", 
    {
        name: 'Saranga', 
        age: 27, 
        YOB: 1993
    }, 
    false, 
    function(greeting){
        if(greeting != undefined){
            console.log(greeting);
        }else{
            console.log(this[1]);
        }
    }
];

console.log(arr);

arr[4]();