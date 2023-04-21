// todo list 

let btn = document.getElementById("btn");
let item = document.getElementById("itm");


btn.addEventListener("click",()=>{
    let data = prompt("Enter Text :","Your To Do Here !");
    let text ;
    if(data == null || data == ""){
        text = "Please Enter Your Todo ?";
        console.log("no data !");
    }else{
        //console.log(data);
        // if(!isFirst){
        //     let child = divItemBtn.firstChild;
        //     divItemBtn.removeChild(child);
        // }
        let element = document.createElement("div");
        element.classList.add("item-btn");
        element.innerHTML = `
            <h3> ${data} </h3> 
        <div class="spn">
            <i class="fa-regular fa-pen-to-square" style="color: #1c71d8;"></i>
            <i class="fa-regular fa-circle-check" style="color: #2ec27e;"></i> 
            <i class="fa-solid fa-trash" style="color: #ff0022;"></i>
        </div> `;
        item.appendChild(element);
        data = "";

        // let NodeText = document.createTextNode(data);
        // divItemBtn.appendChild(NodeText);

    }    
});
 // delete item 
item.addEventListener("click",(e)=>{
    if (confirm("Deleted !")) {
        if (e.target.classList.contains("fa-trash")) {
            e.target.parentElement.parentElement.remove();
        
        }
        }else {
        console.log("You pressed Cancel!");
      }
    
});

// completed !
item.addEventListener("click",(e)=>{
    if (e.target.classList.contains("fa-circle-check")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
    }
});
