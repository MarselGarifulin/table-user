UserList()
async function UserList(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    const result = await data



    const toHTML = user => `
 <tr>
    <td>
      <div class="d-flex align-items-center">
            <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle" />
               <div class="ms-3">
                  <p class="fw-bold mb-1">${user.name}</p>              
                     <p class="text-muted mb-0">${user.email}</p>           
                   </div>         
                    </div>    
                   </td> 
                       <td>
                        <p class="fw-bold mb-1">${user.company.catchPhrase}</p>
                        <p class="text-muted mb-0">${user.company.bs}</p>
                    </td>
                    <td>
                        <span class="badge badge-success rounded-pill">Active</span>
                    </td>
                    <td>${user.address.city}</td>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded" data-btn="info" data-id="${user.id}">Info </button>
                    </td>
                </tr>`

    function render() {
        const html = result.map(toHTML).join('')
        document.querySelector('#table').innerHTML = html
    }
    render()

    document.addEventListener('click', event => {
        event.preventDefault()
        const btnType = event.target.dataset.btn
        const id = +event.target.dataset.id
        const users = result.find(f => f.id === id)

        if (btnType === 'info') {
            infoModal.setContent(`
            <p>Phone: <strong> ${users.phone}</strong></p>
            <p>Company: <strong> ${users.company.name}</strong></p>
    `)
            infoModal.open()

        }
    })

}



const infoModal = $.modal({
    title: 'User Information:',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Okey', type: 'primary', handler() {
                infoModal.close()
            }}
    ]
})




