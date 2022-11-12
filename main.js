//유저가 값을 입력한다.
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제된다.
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다.
//진행중 끝남 탭을 누르면, 언더바가 이동한다.
//끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만.
//전체탭을 누르면 다시 전체 아이템으로 돌아옴.

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
//console.log(taskInput);
//console.log(addButton);

let taskList = [];//taskInput.value를 담기 위함.


addButton.addEventListener("click",addTask);

function addTask(){
    let taskValue = taskInput.value;
    taskList.push(taskValue);
    console.log(taskList)

    render()
}

//리스트에 taskList를 html화면에 보이게하기
function render(){
    let resultHTML ="";//html결과를 담기위함.
    for(let i = 0; i < taskList.length; i++){//taskList에 있는 아이템을 하나하나꺼냄.
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`;
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}
