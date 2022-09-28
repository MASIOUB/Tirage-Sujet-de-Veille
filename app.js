const name = document.getElementById('name');
const addButton = document.getElementById('add');
const generateButton = document.getElementById('generate');
const studentList = document.getElementById('first-list');
const randomList = document.getElementById('random-result');

//dates
let D = moment().format("YYYY-MM-DD");
let counter = 1;

// arays 
let names = [];
let random = [];

// Add Student Names To First List
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const studentName = {
        name: name.value,
    };

    names.push(studentName);

    // window.localStorage.setItem("studentName", JSON.stringify(names));
    // console.table(names);
    // console.log(JSON.stringify(names));

    addToStudentList();

    name.value = "";
});

// Generate Random
generateButton.addEventListener("click", (event) => {

    event.preventDefault();

    let randNames = Math.floor(Math.random() * names.length);
    let rand = names[randNames].name;
    let day = skippingWekeend(D, counter++)

    const randomTable = {
        name: rand,
        day: day,
    }
    random.push(randomTable);

    addToRandomList();

    // code for remove the student from first student list and add them to second list (list after random) in html code
    let student = names.find(randomTable => randomTable.name === rand);
    let studentIndex = names.indexOf(student)
    names.splice(studentIndex, 1);
    let nameTh = document.getElementById(rand);

    nameTh.parentNode.removeChild(nameTh);
});

// function for add list of students to html code
function addToStudentList() {
    let listName = "";

    names.forEach(student => {
        listName +=
            `
            <li id="${student.name}" class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">
                <p>${student.name}</p>
            </li>
        `
    })

    studentList.innerHTML = listName;
}

// function for add list of students after doing random to html code
function addToRandomList() {
    let listRandom = "";

    random.forEach(student => {

        listRandom +=
            `<tr>
            <td>${student.name}</td>
            <td>${student.day}</td>
        </tr>`;
    })



    randomList.innerHTML = listRandom;
}

function skippingWekeend(date, days) {
    let d = moment(new Date(date)).add(Math.floor(days / 5) * 7, "d");
    let remaining = days % 5;
    while (remaining) {
        d.add(1, "d");
        if (d.day() !== 0 && d.day() !== 6) remaining--;
    }
    return d.format("YYYY-MM-DD");
}