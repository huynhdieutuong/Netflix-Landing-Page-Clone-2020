const faqListItems = document.getElementsByClassName('faq-list-item');
const openFaq = document.getElementsByClassName('open');

for (let i = 0; i < faqListItems.length; i++) {
  faqListItems[i].addEventListener('click', openAnswer);
}

function openAnswer() {
  const faqIcon = document.getElementById(`${this.id}-icon`);

  if (openFaq.length > 0 && this.id === openFaq[0].id) {
    this.classList.remove('open');
    faqIcon.classList.remove('fa-times');
    faqIcon.classList.add('fa-plus');
  } else {
    reset();

    // Add open class to current faq
    this.classList.add('open');

    // Remove fa-plus and add fa-times class to current faq
    faqIcon.classList.remove('fa-plus');
    faqIcon.classList.add('fa-times');
  }
}

function reset() {
  for (let i = 0; i < faqListItems.length; i++) {
    // Remove all open class
    faqListItems[i].classList.remove('open');

    // Remove all fa-times class and add all fa-plus class
    const faqIcon = document.getElementById(`faq-${i + 1}-icon`);
    faqIcon.classList.remove('fa-times');
    faqIcon.classList.add('fa-plus');
  }
}
