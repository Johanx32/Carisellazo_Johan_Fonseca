const moneda = document.getElementById('b')
const animation = moneda.animate([
    {
        transform:'rotateY(0)'
    },
    {
        transform: 'rotateY(360deg)'
    }
],{
    duration: 2000,
    direction: 'normal',
    easing: 'linear',
    iterations: Infinity
})

const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const stopButton = document.getElementById('stop')
const reverseButton = document.getElementById('reverse')

playButton.addEventListener('click', () => {
    animation.play()
    playButton.classList.toggle('active_button')
    if (pauseButton.classList.contains('active_button') || stopButton.classList.contains('active_button') || reverseButton.classList.contains('active_button')) {
    
        pauseButton.classList.remove('active_button')  
        stopButton.classList.remove('active_button')
        reverseButton.classList.remove('active_button')
    }
})  

pause.addEventListener('click', () => {
    animation.pause()
    pause.classList.toggle('active_button')
    if (playButton.classList.contains('active_button') || stopButton.classList.contains('active_button') || reverseButton.classList.contains('active_button')) {
        playButton.classList.remove('active_button')  
        stopButton.classList.remove('active_button')
        reverseButton.classList.remove('active_button')
    }
})

const opcion = document.getElementById('opcion')
