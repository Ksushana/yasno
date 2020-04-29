$(() => {
  const form = document.querySelector(".contact-page__form");
  if (!form) {
    return;
  }

  const btn = document.querySelector('button.button__blue');
  const checkbox = document.querySelector('.contact-page__checkbox');
  const sessionNumberElements = document.querySelectorAll('.contact-page-header span');
  const sessionNumberElementsCards = document.querySelectorAll('.certificate__sessions-card');
  const sessionEndElements = document.querySelectorAll('.certificate__sessions-ending');
  const sessionEndMainElements = document.querySelectorAll('.certificate__sessions-ending-main');
  const sessionPriceElements = document.querySelectorAll('.contact-page__form-cover form .button__blue span');
  const certificateFromNames = document.querySelectorAll('.certificate__card--names span:first-child');
  const certificateToNames = document.querySelectorAll('.certificate__card--names span:last-child');
  const hideBlock = document.querySelector('.container__contacts');
  const showBlock = document.querySelector('.congrats');
  const email = document.querySelector('.congrats span');

  const fromInput = form.elements['from_name'];
  const toInput = form.elements['to_name'];
  const emailInput = form.elements['user_email'];
  const values = {
    from: certificateFromNames[0].innerHTML,
    to: certificateToNames[0].innerHTML,
  };

  const sessionsPrices = {
    1: "2 850",
    3: "8 400",
    5: "14 100",
    10: "28 000",
  }
  const sessionsEndings = {
    1: "сессия",
    3: "сессии",
    5: "сессий",
    10: "сессий",
  }
  const sessionsMainEndings = {
    1: "сессию",
    3: "сессии",
    5: "сессий",
    10: "сессий",
  }

  const renderCertificate = () => {
    certificateFromNames.forEach(name => name.innerHTML = values.from);
    certificateToNames.forEach(name => name.innerHTML = values.to);
  };

  const handleInput = (name) => (evt) => {
    const { target: { value } } = evt;
    values[name] = value;
    renderCertificate();
  };

  const getQueryStringValue = (key) => {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

  const updateSessionNumbers = () => {
    const sessionsNumber = getQueryStringValue('sessions');
    sessionNumberElements.forEach((sessionNumberElement) => {
      sessionNumberElement.innerHTML = sessionsNumber;
    });

    sessionNumberElementsCards.forEach((sessionNumberElementsCard) => {
      sessionNumberElementsCard.innerHTML = sessionsNumber;
    });

    const sessionsEnding = sessionsEndings[sessionsNumber];
    sessionEndElements.forEach((sessionEndElement) => {
      sessionEndElement.innerHTML = sessionsEnding;
    });

    const sessionsMainEnding = sessionsMainEndings[sessionsNumber];
    sessionEndMainElements.forEach((sessionMainEndElement) => {
      sessionMainEndElement.innerHTML = sessionsMainEnding;
    });

    const sessionsPrice = sessionsPrices[sessionsNumber];
    sessionPriceElements.forEach((sessionPriceElement) => {
      sessionPriceElement.innerHTML = sessionsPrice;
    });
  }

  const handleCheckbox = ({ target: { checked } }) => {
    if (checked) {
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled');
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    email.innerHTML = emailInput.value;
    hideBlock.classList.add('hide');
    showBlock.classList.add('show');
  };


  fromInput.addEventListener('input', handleInput('from'));
  toInput.addEventListener('input', handleInput('to'));
  checkbox.addEventListener('change', handleCheckbox);



  form.addEventListener('submit', handleFormSubmit);

  updateSessionNumbers();
});
