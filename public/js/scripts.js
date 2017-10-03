const generateNewColors = () => {
  $('.color-card').each((i, color) => {
      const randomColor = "#000000".replace(/0/g,function(){
        return (~~(Math.random()*16)).toString(16) })
    if(!$(color).hasClass('locked')) {
      $(color).css('background-color', randomColor)
      $(color).text(randomColor.toUpperCase())
    }
  })
}

const toggleLock = (e) => $(e.target).toggleClass('locked')














$(document).ready(generateNewColors)
$('.generate-new-btn').click( () => generateNewColors())
$('.color-card').click((e) => toggleLock(e))
