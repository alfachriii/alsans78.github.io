// ================ Show Menu ================
const navMenu = document.getElementById('nav-menu');
const showMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('close-menu');

showMenu.addEventListener('click', () => {
  const visibel = navMenu.getAttribute('visib');

  if (visibel === "false") {
    navMenu.setAttribute('visib', true);
  };
});

// ================ Close Menu ================
closeMenu.addEventListener('click', () => {
  const visibel = navMenu.getAttribute('visib');

  if (visibel === "true") {
    navMenu.setAttribute('visib', false);
  };
});

// ================ Nav Shadow ================
const header = document.getElementById('header');

window.onscroll = function() {
    if(window.scrollY > 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    };
};

// ================ Nav Active ================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighLighter);

function navHighLighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
};

// ================ Theme ================

const theme = document.querySelector('#theme-button');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');

// Show/Close Modal
const openThemeModal = () => {
  themeModal.style.display = 'flex';
};
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
};
theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);

// Choose Fonts
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove('active');
  });
};

fontSizes.forEach((size) => {
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSizes;
    size.classList.toggle('active');
    if (size.classList.contains('font-size-1')) {
      fontSizes = '12px';
    } else if (size.classList.contains('font-size-2')) {
      fontSizes = '14px';
    } else if (size.classList.contains('font-size-3')) {
      fontSizes = '16px';
    } else if (size.classList.contains('font-size-4')) {
      fontSizes = '18px';
    }
    // ========================
    document.querySelector('html').style.fontSize = fontSizes;
  });
});

// Choose primary Colors
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove('active');
  });
};

colorPalette.forEach((color) => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();
    if (color.classList.contains('color-1')) {
      primaryHue = 275;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active');
    root.style.setProperty('--al-primary-color-hue', primaryHue);
  });
});

// Choose Background
let lightColorLightnes;
let whiteColorLightnes;
let darkColorLightnes;

// =================
const changeBG = () => {
  root.style.setProperty('--al-light-color-lightnes', lightColorLightnes);
  root.style.setProperty('--al-white-color-lightnes', whiteColorLightnes);
  root.style.setProperty('--al-dark-color-lightnes', darkColorLightnes);
};
Bg1.addEventListener('click', () => {
  
  // add active
  Bg1.classList.add('active');
  Bg2.classList.remove('active');
  window.location.reload();

});
Bg2.addEventListener('click', () => {
  darkColorLightnes = '17%';
  whiteColorLightnes = '92%';
  lightColorLightnes = '100%';

  //add active
  Bg2.classList.add('active');
  Bg1.classList.remove('active');
  changeBG();
  
});