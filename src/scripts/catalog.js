export const catalog = (harvestedArray) => {
    const contentElement = document.querySelector(".container")
  

         for (const harvestedObj of harvestedArray) {
        contentElement.innerHTML += `
        <section class="plant">${harvestedObj.type}</section>
        `

    } 

}