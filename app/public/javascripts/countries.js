//get and load countries data
async function getCountries() {
    const response = await fetch("../data/countries.json");
    const countries = await response.json();

    return countries;
}

//parse country data
function createTable(countries) {

    const data_per_row = 5;
    let id_value;
    let row;
    let data;
    let cell;
    let data_count = 0;
    let row_count = 0;

    for (let index = 0; index < countries.length; index++) {
        if (data_count === 0) {
            id_value = "country-row" + row_count;
            row = document.createElement("TR");
            row.setAttribute("id", id_value);
        }
        document.getElementById("travel-table").appendChild(row);
        data = document.createElement("TD");
        cell = document.createTextNode(countries[index].name);
        data.appendChild(cell);
        document.getElementById(id_value).appendChild(data);
        data_count += 1;        
        if (data_count === 5) {
            console.log(data_count);
            row_count += 1;
            data_count = 0;            
        }
    }


}

//load content and add to DOM
document.addEventListener("DOMContentLoaded", async () => {
    let countries = [];

    try {
        countries = await getCountries();
    }
    catch (error) {
        console.log("Error!");
        console.log(error);
    }
    createTable(countries);
});
