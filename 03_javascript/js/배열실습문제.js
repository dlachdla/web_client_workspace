function test1(){
    const arr = prompt("좋아하는 영화를 문자열로 입력하세요.").split(", ");

    console.log(arr.sort());
    alert(arr.sort());
   
}  
function test2(){
    const rainbow = ["빨", "주", "노", "초", "파", "남", "보"];
   
    for(let i = 0; i < rainbow.length; i++){
        console.log(rainbow);
        rainbow.push(rainbow.shift());
    }
} 
function test3(){
    const arr1 =[];
    for(let i = 1; i <= 100; i++){
        arr1[i-1] = i

    }
    console.log(arr1);
    const arr2 = arr1.slice();
    console.log(arr2.sort(function(a, b){
        return b - a;
    }));
}