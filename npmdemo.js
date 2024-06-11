//crossing out a prexisting item on the list
document.addEventListener('DOMContentLoaded', () => {
    let listItems = document.querySelectorAll("#myList li");   
    listItems.forEach(item => {
        item.addEventListener('click', () =>{
            item.classList.toggle('crossed-out');
            })
        })
    })
    

//creating a new list item and crossing out the item on the list
document.getElementById('Submit').addEventListener('click', function(){
 const userInput = document.getElementById('userInput').value;
 const list = document.getElementById("myList");
 const entry = document.createElement('li');
 entry.appendChild(document.createTextNode(userInput));
 list.appendChild(entry);
        entry.addEventListener('click', () =>{
            entry.classList.toggle('crossed-out');
        })
      })

var todos = JSON.parse(localStorage.getItem("todos")) ?? [];
function addItem(){
    todos.push({ id: document.getElementById('userInput').value});
    localStorage.setItem("todos", JSON.stringify(todos));
    
}
function removeItem(todoId){
  todos = todos.filter((x) => x.id !== todoId)
  localStorage.setItem("todos", JSON.stringify(todos));
}

        

//  // Store the input in localStorage
//  let itemCount = localStorage.length; // Get the number of items in localStorage
//  localStorage.setItem('item' + itemCount, userInput); // Store the item with a unique key

//  console.log('Item stored:', userInput);





//Removing an Item from the list
document.getElementById('Remove').addEventListener('click', function(){
    const list = document.getElementById('myList')
    const removeItem = document.getElementsByClassName('crossed-out');
    


    console.log(removeItem)
    Array.from(removeItem).forEach(item => {
    const key = item.dataset.key 
    localStorage.removeItem(key)   
    list.removeChild(item);
      })




      
})


// document.getElementById('Reset').addEventListener('click', function(){
//   location.reload(true);
// })




// document.addEventListener('DOMContentLoaded', () => {
//     const list = document.getElementById('myList');
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         if (key.startsWith('item')) {
//             const item = localStorage.getItem(key);
//             const entry = document.createElement('li');
//             entry.appendChild(document.createTextNode(item));
//             list.appendChild(entry);

//             // Add the click event listener to the stored entry
//             entry.addEventListener('click', () => {
//                 entry.classList.toggle('crossed-out');
//             });
//         }
//     }
// });




console.log (localStorage)