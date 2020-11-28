let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentMonthFixed = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');

let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthD = document.getElementById('prev-month');
let nextMonthD = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthD.addEventListener('click', ()=>lastMonth());
nextMonthD.addEventListener('click', ()=>nextMonth());



const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <span class="item disabled">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </span>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay && month === currentMonthFixed) {
            dates.innerHTML += ` <span class="item today">${i}</span>`;
        }else{
            dates.innerHTML += ` <span class="item">${i}</span>`;
        }
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);