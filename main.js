let guy = document.createElement('div'),
    peopleContain = document.querySelector('.people-container');
guy.className = 'guy';


for(let i = 0; i < 10; i++){
  let guy = document.createElement('div');
  guy.className = 'guy';
  peopleContain.appendChild(guy);
}

$('.next-step').click(() => {
  let step = $('step');

  console.log($(this));
  $('step').removeClass('active');
  $('step-1').addClass('active');
});
