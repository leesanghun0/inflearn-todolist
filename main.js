//유저가 값을 입력한다.
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제된다.
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다.
//1.check 버튼을 클릭하는 순간 true false
//2.true이면 끝난걸로 간주하고 밑줄 보여주기
//3.false이면 안끝난걸로 간주하고 그대로

//진행중 끝남 탭을 누르면, 언더바가 이동한다.
//끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만.
//전체탭을 누르면 다시 전체 아이템으로 돌아옴.

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");//조건에 만족하는 모든 아이템을 가져옴.
//console.log(taskInput);
//console.log(addButton);
console.log(tabs);
let taskList = [];//taskInput.value를 담기 위함.
let mode = 'all';
let filterList = [];


addButton.addEventListener("click",addTask);
taskInput.addEventListener("focus",function(){taskInput.value = "";});

for(let i =1; i < tabs.length; i++){
    tabs[i].addEventListener("click",function(event){filter(event)});
}

function addTask(){
    //let taskValue = taskInput.value;
    let task = {
        id : randomIDGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    if(!taskInput.value){
        alert("할 일을 추가해주세요");
    }else{
    taskList.push(task);
    console.log(taskList)
    render()
    }
}

//리스트에 taskList를 html화면에 보이게하기
function render(){
    let list = [];
    if(mode == "all"){
        list = taskList;
    }else if(mode == "ongoing" || mode == "done"){
        list = filterList;
    }


    let resultHTML ="";//html결과를 담기위함.
    for(let i = 0; i < list.length; i++){//taskList에 있는 아이템을 하나하나꺼냄.
        if(list[i].isComplete == true){
            resultHTML +=`<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
                <button onclick ="toggleComplete('${list[i].id}')">Check</button>
                <button onclick ="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;
        }else{
            resultHTML += `<div class="task">
        <div>${list[i].taskContent}</div>
        <div>
            <button onclick ="toggleComplete('${list[i].id}')">check</button>
            <button onclick ="deleteTask('${list[i].id}')">Delete</button>
        </div>
    </div>`;
        }
        
    }
    document.getElementById("task-board").innerHTML = resultHTML;
    //task-board를 변수에 담아서 사용할 수도 있음.
}
function toggleComplete(id){
    //console.log("clicked");
    //console.log("id:",id);
    //내가 어떤 아이템을 선택했는지 알려주기 위해 각각의 아이템에 id를 부여함.
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            //!는 not라는 뜻으로 토글기능을 넣을때 많이 사용함.
            break;
        }
    }
    render();
    console.log(taskList);
}

function deleteTask(id){
    //console.log("삭제하자",id);
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
            break;
        }
    }
    //console.log(taskList);
    render();
}
function filter(event){
    filterList = [];
    mode=event.target.id;
    //console.log("filter클릭됨", event.target.id);
    //이벤트는 클릭을 했을때 발생되는 모든 상황을 알려줌. 그중에서 어떤 것을 클릭했는 알고 싶을때 사용
    if(mode == "all"){
        render();
    }else if(mode == "ongoing"){
        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        }
        render();
    }else if(mode == "done"){
        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i]);
            }
        }
        render();
    }
    console.log(filterList);
}

//랜덤아이디 생성하기
function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}


//----------------------------------------------------------------------------
// let HorizontalMenu = document.get("task-tabs>div");
// let horizontalUnderLine = document.getElementById("under-line");
// console.log(HorizontalMenu);
// console.log(horizontalUnderLine);