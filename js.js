alert("Hello world!");
var elemets = document.querySelector('svg').children;

anime({
  targets: '.cls-1',
  translateX: [
    {value: 270, duration: 1000, easing: 'easeOutSine'},
    {value: 0, duration: 1000, easing: 'easeOutSine'}
  ],
  delay: anime.stagger(200, {grid: [16,10], from: 7}),
  loop: true
})
