window.addEventListener('resize', () => {
  const select = document.querySelector('#select-language');

  if (window.innerWidth <= 600) {
    if (select.value === 'pt-BR') {
      select.options[select.selectedIndex].text = 'Pt-Br';
    }
    if (select.value === 'en') {
      select.options[select.selectedIndex].text = 'En';
    }
    
  } else {
    if (select.value === 'pt-BR') {
      select.options[select.selectedIndex].text = 'Português';
    }

    if (select.value === 'en') {
      select.options[select.selectedIndex].text = 'English';
    }
  }
});
