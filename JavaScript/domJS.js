
let dataObjects=[];
function data(UserId,id,title,body){
    this.userId=UserId,
    this.id=id,
    this.title=title,
    this.body=body
}



async function fetchdata() {
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts');

        const result=await res.json();

        dataObjects = result.map(item =>
            new data(item.userId, item.id, item.title, item.body)
        );
    }
    catch (error){
        console.error(error);
    }
}

fetchdata().then(() => {
  console.log("After fetchdata:", dataObjects);
  addValues(dataObjects);
});


function addValues(dataObjects){
    
const tbody = document.querySelector("#dataTable tbody");
dataObjects.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.userId}</td>
    <td>${item.id}</td>
    <td>${item.title}</td>
    <td>${item.body}</td>
  `;
  tbody.appendChild(row);
});

}
let todoList={};
function todo(id,task,completed,userid){
    this.sno=id,
    this.task=task,
    this.state=completed,
    this.id=userid
}



async function Fetching(){
    try{
        const response=await fetch('https://dummyjson.com/todos');
        const result=await response.json();
        
        todoList = result.todos.map(item =>
            new todo(item.id, item.todo, item.completed, item.userId)
    );
        
        
    }catch(error){
        console.log(error);
    }
}

Fetching().then(()=>{
    todoValues(todoList);
});

function todoValues(data){
    const tbody=document.querySelector('#data tbody');
    data.forEach(item=>{
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${item.sno}</td>
        <td>${item.task}</td>`;

        tbody.appendChild(row);
    });
}