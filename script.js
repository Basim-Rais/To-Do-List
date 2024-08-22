const taskinput = document.querySelector(".task-input");
const addbtn = document.querySelector(".add-btn");
const tasklist = document.querySelector(".task-list");

addbtn.addEventListener('click', () => {

    if (taskinput !== ''){
        const taskText = taskinput.value;
        const Listitem = document.createElement("li");
        Listitem.innerHTML = `
                            ${taskText}
                            <button class="del-btn">Delete</Button>
                            `;
        tasklist.appendChild(Listitem);
        taskinput.value="";
        
    }


});

tasklist.addEventListener('click', (event) => {
    if(event.target.classList.contains("del-btn")){
        const Listitem = event.target.parentElement;
        tasklist.removeChild(Listitem);
    }

})