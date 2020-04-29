$(() => {
  const form = document.querySelector(".contact-page__form");
  if (!form) {
    return;
  }

  // TODO HERE
  const sessionNumberElements = document.querySelectorAll('.contact-page-header span');
  const sessionNumberElementsCards = document.querySelectorAll('.certificate__sessions-card');
  const sessionEndElements = document.querySelectorAll('.certificate__sessions-ending');
  const sessionEndMainElements = document.querySelectorAll('.certificate__sessions-ending-main');
  // TODO HERE
  const sessionPriceElements = document.querySelectorAll('.contact-page__form-cover form .button__blue span');
  const certificateFromNames = document.querySelectorAll('.certificate__card--names span:first-child');
  const certificateToNames = document.querySelectorAll('.certificate__card--names span:last-child');
  const fromInput = form.elements['from_name'];
  const toInput = form.elements['to_name'];
  const values = {
    from: certificateFromNames[0].innerHTML,
    to: certificateToNames[0].innerHTML,
  };
  // TODO HERE
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

  fromInput.addEventListener('input', handleInput('from'));
  toInput.addEventListener('input', handleInput('to'));

  updateSessionNumbers();
});