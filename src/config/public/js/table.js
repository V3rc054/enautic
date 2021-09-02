//FILTER TABLE NAMES

const filter = () => {

  const displayFilter = () => {

    let input = document.getElementById("first_name2")
    let filter = input.value.toUpperCase()
    let table = document.getElementById("myTable")
    let tr = table.getElementsByTagName("tr")

    for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0]
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }


  }

  addEventListener('keyup', (displayFilter))

}

