/*

document.addEventListener('DOMContentLoaded',function(){
    $("#printReportCard").click(function () {
        let params = $("#studentInfo").serializeObject(); //将表单序列化为JSON对象
        console.info(params);
    });

    $.fn.serializeObject = function () {
        let o = {};
        let a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            }
            else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
},false);


$("#printReportCard").click(function () {
     let params = $("#reportCard").serializeObject(); //将表单序列化为JSON对象
     console.info(params);
     alert(1);
     });

     $.fn.serializeObject = function () {
     let o = {};
     let a = this.serializeArray();
     $.each(a, function () {
     if (o[this.name]) {
     if (!o[this.name].push) {
     o[this.name] = [o[this.name]];
     }
     o[this.name].push(this.value || '');
     }
     else {
     o[this.name] = this.value || '';
     }
     });
     return o;
     };

     function printInfo() {//增加一行
     let tableObj = document.getElementById('studentInfo');

     let rowNums = tableObj.rows.length;
     let newRow = tableObj.insertRow(rowNums);
     let col1 = newRow.insertCell(0);
     col1.innerHTML = localStorage.getItem('name1');
     let col2 = newRow.insertCell(1);
     col2.innerHTML = localStorage.getItem('ID1');
     let col3 = newRow.insertCell(2);
     col3.innerHTML = localStorage.getItem('nation1');
     let col4 = newRow.insertCell(3);
     col4.innerHTML = localStorage.getItem('class1');
     let col5 = newRow.insertCell(4);
     col5.innerHTML = localStorage.getItem('math1');
     let col6 = newRow.insertCell(5);
     col6.innerHTML = localStorage.getItem('chinese1');
     let col7 = newRow.insertCell(6);
     col7.innerHTML = localStorage.getItem('english1');
     let col8 = newRow.insertCell(7);
     col8.innerHTML = localStorage.getItem('programming');
     alert(tableObj.rows.length);
     }
     function test() {
     alert('1');
     }
*/
document.addEventListener('DOMContentLoaded',function () {


    $("#submitStudentInfo").click(function (event) {
        let params = $("#studentInfo").serializeObject(); //将表单序列化为JSON对象
        console.info(params);
        localStorage.setItem(params.id, params);
        console.log(localStorage.getItem(params.id)[0].value);
        event.preventDefault();

    });

    $('#find').click(function (event) {
        let studentInfoArray = JSON.parse(localStorage.getItem('123'));
        alert(studentInfoArray[0]);
        let tableObj = document.getElementById('reportCard');
        let studentNum = document.getElementById('studentID').toString();
        let rowNums = tableObj.rows.length;
        let newRow = tableObj.insertRow(rowNums);
        let col1 = newRow.insertCell(0);
        col1.innerHTML = localStorage.getItem(studentNum).name;
        let col2 = newRow.insertCell(1);
        col2.innerHTML = localStorage.getItem(studentNum).id;
        let col3 = newRow.insertCell(2);
        col3.innerHTML = localStorage.getItem(studentNum).nation;
        let col4 = newRow.insertCell(3);
        col4.innerHTML = localStorage.getItem(studentNum).class;
        let col5 = newRow.insertCell(4);
        col5.innerHTML = localStorage.getItem(studentNum).math;
        let col6 = newRow.insertCell(5);
        col6.innerHTML = localStorage.getItem(studentNum).chinese;
        let col7 = newRow.insertCell(6);
        col7.innerHTML = localStorage.getItem(studentNum).english;
        let col8 = newRow.insertCell(7);
        col8.innerHTML = localStorage.getItem(studentNum).programming;
        alert(tableObj.rows.length);
        event.preventDefault();
    });


    $.fn.serializeObject = function () {
        let o = {};
        let a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            }
            else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
});