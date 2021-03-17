let showData = document.getElementById('showData');

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td><td>${employee.salary}</td></tr>`;
  });
  return `<table>${rows.join('')}</table>`;
}

async function constructTable() {
  let [employees, roles] = await Promise.all([
    fetchJson('http://localhost:3000/employees'),
    fetchJson('http://localhost:3000/roles'),
  ]);

  var select = document.getElementById('sortElements');
  select.addEventListener('change', () => {
    let table;
    selectedValue = select.value;

    if (selectedValue === 'nameAsc') {
      employees.sort((a, b) => a.name > b.name);
      console.log('0');
    } else if (selectedValue === 'nameDes') {
      console.log('1');
      // employees.sort((a, b) => a.name < b.name);
    } else if (selectedValue === 'salaryAsc') {
      console.log('2');
      // employees.sort((a, b) => a.salary > b.salary)
    } else if (selectedValue === 'salaryDes') {
      console.log('3');
      // employees.sort((a, b) => a.salary < b.salary)
    }
    table = renderTable(employees, roles);
    showData.innerHTML = table;
  });
}
constructTable();
