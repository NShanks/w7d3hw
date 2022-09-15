// Get Our Ranger Data
const getData = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/${year.value}/${season.value}/driverStandings.json`)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

// create Constants to hold DOM Elements
const DOM_Elements = {
    ranger_list: '.ranger-list',
}

// Creation of the Ranger List HTML
const create_list = (x, y, z, a, b, c) => {
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${x}">${x} ${y} ${z} ${a} ${b} ${c} </a>`;
    const table = `<table class="table">
                        <tbody>
                            <tr>
                                <th scope="col">${x}</th>
                                <th scope="col">${y}</th>
                                <th scope="col">${z}</th>
                                <th scope="col">${a}</th>
                                <th scope="col">${b}</th>
                                <th scope="col">${c}</th>
                            </tr>
                        </tbody>
                    </table>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', table)
}

// Function to Load Data and display HTML 
const load_data = async () => {
    let year = document.getElementById('year')
    let season = document.getElementById('season')
    const rangers = await getData();
    rangers.forEach(element => create_list(element.position, element.Driver.givenName, element.Driver.familyName, element.Driver.nationality, element.Constructors[0].name, element.points))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
}



