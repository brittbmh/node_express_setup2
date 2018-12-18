console.log('js');

$(document).ready(function () {
    $('#submit').on('click', addEmployee);
    $('#submit').on('click', newEEToTable);
    $('#empTable').on('click', 'tr', removeLine)
});

function removeLine () {
    console.log(this);
    let salaryToSub = ($('#salary').text());
    salaryToSub = parseFloat(salaryToSub);
    monthSal -= (salaryToSub / 12);
    monthSal = monthSal.toFixed(2);
    $(this).remove();
    $('.totalSal').html('Total Monthly Salary: $' + monthSal);
}

let monthSal = 0;
// use const to give a label to items that otherwise seem random, and that you don't want changed within code
const maxMonthlySalary = 20000;


// add Employees to Array and Calculate Monthly Salary
function addEmployee() {
    let firstName = $('#firstNameEE').val();
    // console.log(firstName);
    let lastName = $('#lastNameEE').val();
    // let fullName = firstName + ' ' + lastName;
    let empID = $('#identEE').val();
    let empTitle = $('#titleEE').val();
    let empSalary = parseFloat($('#salaryEE').val());
    monthSal = (empSalary / 12 + monthSal);
    let totalMoSal = monthSal.toFixed(2);
    empSalary = empSalary.toFixed(2);
    // $('.results').append('<li>' + fullName + '; ' + empID + '; ' + empTitle + '; $' + empSalary + '</li>');
    $('.totalSal').html('Total Monthly Salary: $' + totalMoSal);

    // move this next part to it's own function so that the remove function can use it too
    if (totalMoSal > maxMonthlySalary){
        $('.totalSal').css('color', 'red');
    } // add else to return to black

    $('.inputEE').val('');
    let newEE = new Employee(firstName, lastName, empID, empTitle, empSalary);
    staff.push(newEE);
    
}



function newEEToTable() {
    $('.bodyEETable').empty();
    for (employee of staff){
        //can make a simpler version of this as a method in the class to replace long ass string)
        // $('.bodyEETable').append('<tr class="emp"><td>' + employee.firstName + '</td><td>' + employee.lastName + '</td><td>' + employee.empID + '</td><td>' + employee.empTitle + '</td><td id="salary">' + employee.empSalary + '</td></tr>')
        $('.bodyEETable').append(employee.toTable())
    };
}

let staff = [];

class Employee {
    constructor (firstNameIn, lastNameIn, empIDIn, empTitleIn, empSalaryIn) {
        this.firstName = firstNameIn;
        this.lastName = lastNameIn;
        this.empID = empIDIn;
        this.empTitle = empTitleIn;
        this.empSalary = empSalaryIn;
    }

    toTable() {
        $('.bodyEETable').append(`<tr class="emp">
                                    <td>${this.firstName}</td>
                                    <td>${this.lastName}</td>
                                    <td>${this.empID}</td>
                                    <td>${this.empTitle}</td>
                                    <td id="salary">${this.empSalary}</td>
                                </tr>`)  //yay backtics
    }
};

