const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
];

const outputTable = document.getElementById("outputTable");
var table = "";
const displayData = (singers) => {
    table = "<table>";
    singers.forEach(item => {
        table += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.country}</td>
                    <td>${item.period_active.start}</td>
                    <td>${item.period_active.end}</td>
                    <td>${item.genre}</td>
                </tr>
        `;
    });
    table += "</table>";
    outputTable.innerHTML = table;
}

var inDirectionOf = 0;
const sort = (param1,param2) => {
    inDirectionOf++;
    let compare = singers.sort((a, b) => {
        if (param1 != "period_active") {
            if (inDirectionOf % 2 == 1) {
                if (a[param1] > b[param1]){
                    return 1;
                } 
                else if (b[param1] > a[param1]) {
                    return -1;
                } 
                else {
                    return 0;
                }
            }
            else {
                if (a[param1] < b[param1]){
                    return 1;
                } 
                else if (b[param1] < a[param1]) {
                    return -1;
                } 
                else {
                    return 0;
                }            
            }
        }
        else {
            if (inDirectionOf % 2 == 1) {
                if (a[param1][param2] == "present") {
                    a[param1][param2] = "2020";
                }
                if (b[param1][param2] == "present") {
                    b[param1][param2] = "2020";
                }
                if (a[param1][param2] > b[param1][param2]){
                    return 1;
                }
                else if (b[param1][param2] > a[param1][param2]) {
                    return -1;
                } 
                else {
                    return 0;
                }
            }
            else {
                if (a[param1][param2] == "present") {
                    a[param1][param2] = "2020";
                }
                if (b[param1][param2] == "present") {
                    b[param1][param2] = "2020";
                }
                if (a[param1][param2] < b[param1][param2]){
                    return 1;
                } 
                else if (b[param1][param2] < a[param1][param2]) {
                    return -1;
                } 
                else {
                    return 0;
                }         
            }
        } 
    });
    for (let i = 0; i < 8; i++){
        if (singers[i].period_active.end == "2020") {
            singers[i].period_active.end = "present";
        }
    }
    displayData(compare);
}

function filter() {
    const filterValue = document.getElementById("filterInput").value;
    let filtered = [];
    singers.forEach(element => {
        if (element.name.toUpperCase().includes(filterValue.toUpperCase()) || 
            element.country.toUpperCase().includes(filterValue.toUpperCase()) ||
            element.period_active.start.toString().toUpperCase().includes(filterValue.toUpperCase()) ||
            element.period_active.end.toString().toUpperCase().includes(filterValue.toUpperCase()) ||
            element.genre.toUpperCase().includes(filterValue.toUpperCase())) {
            filtered.push(element);
        }
    });
    displayData(filtered);
}

displayData(singers);