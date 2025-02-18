// Arrays
// const arr=[20,75,68,79,65,90];
// let largest=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// console.log(largest);


// objects
const allUsers=[{
    firstname:"riya",
    gender:"female"
},{
    firstname:"Varun",
    gender:"male"

},
{
    firstname:"Yahika",
    gender:"female"
}]
for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="female"){
        console.log(allUsers[i]["firstname"]);
    }
}
