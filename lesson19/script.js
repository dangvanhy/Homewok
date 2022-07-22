const listStudent = {
    student: [],
    addSV: function(student){
        this.student.push(student);
    },
}

function byName(a, b){
    console.log("1");
    if(a.name > b.name)
        return 1;
    else if(a.name < b.name)
        return -1;
    else
        return 0;
}

function checkID(id){
    for(let i=0; i<listStudent.student.length; i++){
        if(listStudent.student[i].id == id){
            return 1;
        }
    }
    return 0;
}

function addStudent(){
    let idSV = document.getElementById("idInput").value;
    let nameSV = document.getElementById("nameInput").value;
    let ageSV = document.getElementById("ageInput").value;
    let locationSV = document.getElementById("locationInput").value;

    if(idSV == "" || nameSV == "" || ageSV == "" || locationSV == ""){
        alert("Các trường không được để trống!!");
        return;
    }

    if(checkID(idSV)){
        alert("SV đã tồn tại")
        return;
    }

    const SV = {
        id: idSV,
        name: nameSV,
        age: ageSV,
        location: locationSV,
    }

    listStudent.addSV(SV);
    alert("Tạo thành công!");
};

function showStudent(){
    let listStudentArea = document.getElementById("listStudentArea");

    listStudentArea.innerHTML = "Danh sách sinh viên<br/>";
    for(let i=0; i<listStudent.student.length; i++){
        listStudentArea.innerHTML += listStudent.student[i].id + " " + listStudent.student[i].name + " " + listStudent.student[i].age + " " + listStudent.student[i].location + " " + "<br/>";
    }
}

function sortStudent(){
    listStudent.student.sort(byName)

    let listStudentArea = document.getElementById("listStudentArea");

    listStudentArea.innerHTML = "Danh sách sinh viên<br/>";
    for(let i=0; i<listStudent.student.length; i++){
        listStudentArea.innerHTML += listStudent.student[i].id + " " + listStudent.student[i].name + " " + listStudent.student[i].age + " " + listStudent.student[i].location + " " + "<br/>";
    }
}

function findStudent(){
    let idSV = document.getElementById("idInput").value;
    let nameSV = document.getElementById("nameInput");
    let ageSV = document.getElementById("ageInput");
    let locationSV = document.getElementById("locationInput");

    for(let i=0; i<listStudent.student.length; i++){
        if(listStudent.student[i].id == idSV){
            nameSV.value = listStudent.student[i].name;
            ageSV.value = listStudent.student[i].age;
            locationSV.value = listStudent.student[i].location;
            return;
        }
    }    

    alert("SV không tồn tại");
}

function fixStudent(){
    let idSV = document.getElementById("idInput").value;
    let nameSV = document.getElementById("nameInput").value;
    let ageSV = document.getElementById("ageInput").value;
    let locationSV = document.getElementById("locationInput").value;

    for(let i=0; i<listStudent.student.length; i++){
        if(listStudent.student[i].id == idSV){
            listStudent.student[i].name = nameSV;
            listStudent.student[i].age = ageSV;
            listStudent.student[i].location = locationSV;
            alert("Sửa thành công")
            return;
        }
    }    

    alert("SV không tồn tại");
}

function deleteStudent(){
    let idSV = document.getElementById("idInput").value;

    if(checkID(idSV)){
        listStudent.student = listStudent.student.filter(item => item.id != idSV);
        alert("Đã xóa thành công!");
        
        listStudentArea.innerHTML = "Danh sách sinh viên<br/>";
        for(let i=0; i<listStudent.student.length; i++){
            listStudentArea.innerHTML += listStudent.student[i].id + " " + listStudent.student[i].name + " " + listStudent.student[i].age + " " + listStudent.student[i].location + " " + "<br/>";
        }
    }
    else{
        alert("SV không tồn tại");
    }
}