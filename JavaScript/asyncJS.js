                                        //Asynchronous in JS

                          //Callbacks

// const tickets=[
//     {ticketno:1,value:1},
//     {ticketno:2,value:2}
// ]; 

// function getTicket(){
//     setTimeout(()=>{
//         console.log('Showing contents...');
//         let ticket='';
//         tickets.forEach((tic)=>{
//             ticket+=`<li>${tic.ticketno}</li>`;
//         });
//         document.body.innerHTML=ticket;
//     },2500);
// }


// function creatTicket(tic,callback){
//     console.log('ticket is creating.. ');
//     setTimeout(()=>{
//         tickets.push(tic);
//         console.log('ticket is created.. ');
//         callback();
//     },5000);
    
// };

// creatTicket({ticketno:3,value:3},getTicket);



                          //Promises

// https://dummyjson.com

//https://jsonplaceholder.typicode.com/posts/1


// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response =>response.json())
// .then(data=> {
//     document.body.innerHTML=data.title;
// })
// .catch(error=>{
//     console.error(error);
// })
 

                         //Async/await

async function fetchdata() {
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const result=await res.json();
        document.body.innerHTML=result.title;
    }
    catch(error){
        console.log(error)
    };
}

fetchdata();