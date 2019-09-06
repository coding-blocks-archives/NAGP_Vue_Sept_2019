window.onload = function () {

  let start = new Date().getTime()

  let list = document.getElementById('list')
  let x = ''
  for (let i = 0; i < 5000; i++) {
    x += `<li> ${i} </li>`
  }
  list.innerHTML = x

  let end =  new Date().getTime()

  console.log('time taken = ', end - start)

}
