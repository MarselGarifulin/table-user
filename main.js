getCurrencies()
async function getCurrencies(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let content = await response.json()

    let list = document.querySelector('.content')

    

    
    let key;

    for (key in content){


        list.innerHTML += `
     
   


        <tr>
        <td>
          <div class="d-flex align-items-center" id="search">
            <img
                 src="images/no-image.jpg"
                 alt=""
                 style="width: 65px; height: 65px"
                 class="rounded-circle"
                 />
            <div class="ms-3">
              <p class="fw-bold mb-1 search">${content[key].name}</p>
              <p class="text-muted mb-0">${content[key].email}</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-bold mb-1">${content[key].company.name.toUpperCase()}</p>
          <p class="text-muted mb-0">${content[key].company.bs.toUpperCase()}</p>
        </td>
        <td>
          <span class="badge bg-success rounded-pill">Active</span>
        </td>
        <td>Senior</td>
        <td>

        <button type="button" class="btn btn-outline-info">Info</button>


        </td>
      </tr>
      
      



   

      
        `

        content[key]

    }



    }


    





    









