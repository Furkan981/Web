function findCardss() {

    const userCardTemplate = document.querySelector("[data-user-template]")
    const userCardContainer = document.querySelector("[data-user-cards-container]")
    const searchInput = document.querySelector("[data-search]")
    
    
    let users = []
    
    searchInput.addEventListener("input", e => {
      const value = e.target.value.toLowerCase()
      users.forEach(user => {
        const isVisible =
          user.name.toLowerCase().includes(value) ||
          user.description.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
      })
    })
    /*
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        users = data.map(user => {
          const card = userCardTemplate.content.cloneNode(true).children[0]
          const header = card.querySelector("[data-header]")
          const body = card.querySelector("[data-body]")
          header.textContent = user.name
          body.textContent = user.email
          userCardContainer.append(card)
          return { name: user.name, email: user.email, element: card }
        })
      })
     */ 
      //camps = await Camp.find({}).fetch().then()
      fetch("/test")
      .then(res => res.json())
      .then(data => {
        users = data.map(user => {
          const card = userCardTemplate.content.cloneNode(true).children[0]
          const title = card.querySelector("[data-title]")
          const price = card.querySelector("[data-price]")
          const body = card.querySelector("[data-spots]")
          const link = card.querySelector("[data-link]")
          title.textContent = user.name +" " + user.id
          price.textContent = user.price
          body.textContent = user.description
          card.querySelector('#action-link').href += '/' + user.id;
          link.append(' '+user.id)
          //link.addEventListener("click", urlWeiterleitung(user.id));
          userCardContainer.append(card)
          return { name: user.name, price: user.price,description: user.description, id:user.id, ress:user, element: card }
        })
      })
      
      
       
    
    
    }