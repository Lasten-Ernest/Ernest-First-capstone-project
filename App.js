const buttonToggle = document.querySelector('.humburgermenu');
const navbarMenuLink = document.querySelector('#navbarmenu');
const navbarLink = document.querySelectorAll('.navbarlinks');

buttonToggle.addEventListener('click', () => {
  navbarMenuLink.classList.toggle('active');
});

navbarLink.forEach((navbarLink) => navbarLink.addEventListener('click', () => {
  navbarMenuLink.classList.remove('active');
}));

const speakers = [
  {
    class: 'lasten-img',
    name: 'Dr. E. Lasten',
    personality: 'Chairman of Right-Minded Youth emporwerment club. He is the councellor for the youth at YCI',
    image: './img/lasten.jpg',
    alt: 'image for lasten',
    description: 'He has worked with the youth for 20 decade. He holds a doctrate degree in theology.',
  },
  {
    class: 'liwonde-img',
    name: 'Liwonde Chadza',
    personality: 'District Coordinator for Education',
    image: './img/liwonde.jpg',
    alt: 'Mr. liwonde image',
    description: 'He is the network engineer and he is also responsible for the training the students at YCI',
  },
  {
    class: 'masuso-img',
    name: 'Mr. Luke Masuso',
    personality: 'Mr. Luke masuso, Sponsor Representative',
    image: './img/masu.jpeg',
    alt: 'luke',
    description: 'He is the regional representative for USAID in Malawi. He foresees all the projects at YCI',
  },
  {
    class: 'ernest-img',
    name: 'Ernest Lasten',
    personality: 'Founder of Young Coders Initiative and EduFund. He is the managing director of at YCI.',
    image: './img/Ernest.jpg',
    alt: 'Ernest',
    description: 'Ernest Lasten is a founder and the managing director of Young Coders initiative. He is also the founder of EduFund, the non-profit organisation that helps less priviledged students.',
  },
  {
    class: 'alick-img',
    name: 'Dr. Alick Elia',
    personality: 'Chief of Technicians at Business Machines, Malawi.',
    image: './img/melina.jpeg',
    alt: 'alick',
    description: 'Dr. A. Elia is a computer engineer who is responsible for all computer operations at YCI',
  },
  {
    class: 'limited-img',
    name: 'Limited Bravo',
    personality: 'Mr. L. Bravo, chief of staff and students mentor at YCI',
    image: './img/limit.jpeg',
    alt: 'limited',
    description: 'Mr. Limited is the University of Malawi graduate and has taught computer studies in various secondary schools of Malawi for many years.',
  },
];

const speakersContainer = document.querySelector('.gridofspeakers');

function createSpeakers() {
  const len = speakers.length;
  for (let i = 0; i < len; i += 1) {
    const speaker = speakers[i];

    speakersContainer.innerHTML += `
      <div class="speakers-card">
        <div class="col-1 col">
          <div class="image-container">
            <img class= ${speaker.class} src="${speaker.image}" alt=${speaker.alt}>
              <div class="chess-bg">
              </div>
          </div>
          <div class="aboutspeaker">
            <h3 class="speakername">${speaker.name}</h3>
            <p class="personality">${speaker.personality}</p>
            <p class="description">${speaker.description}</p>
          </div>
        </div>
      </div>`;
  }
}

createSpeakers();
