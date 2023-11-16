const joke = document.querySelector('.joke')
const ol = document.querySelector('ol')

joke.addEventListener('click', () => {
   const li = document.createElement('li')
   fetch('https://api.chucknorris.io/jokes/random')
   .then((res)=> res.json())
   .then((data)=> {
    li.textContent = data.value
    ol.appendChild(li)
   })
})

