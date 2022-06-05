function checkData() {
  const tables = document.querySelectorAll("table.table");
  if (!tables.length) {
    return;
  } else if (!tables[0].tBodies[0].rows.length) {
    setTimeout(checkData, 100);
  } else {
    tables.forEach((table) => {
      let th = document.createElement("th");
      th.colSpan = 1;
      th.innerText = "Actions";
      table.tHead.rows[0].appendChild(th);

      for (let row of table.tBodies[0].rows) {
        let td = document.createElement("td");

        const link = row.cells[1].firstChild.href;
        const name = link.substr(link.lastIndexOf("/") + 1);
        const id = name.substr(0, name.indexOf("-"));

        td.innerHTML =
          '<a href="https://www5.yggtorrent.fi/engine/download_torrent?id=' +
          id +
          '">Télécharger</a>';
        row.appendChild(td);
      }
    });
  }
}

checkData();
