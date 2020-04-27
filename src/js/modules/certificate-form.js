$(() => {
  const form = document.querySelector(".contact-page__form");
  if (!form) {
    return;
  }

  const certificateFromNames = document.querySelectorAll('.certificate__card--names span:first-child');
  const certificateToNames = document.querySelectorAll('.certificate__card--names span:last-child');
  const fromInput = form.elements['from_name'];
  const toInput = form.elements['to_name'];
  const values = {
    from: certificateFromNames[0].innerHTML,
    to: certificateToNames[0].innerHTML,
  };

  const renderCertificate = () => {
    certificateFromNames.forEach(name => name.innerHTML = values.from);
    certificateToNames.forEach(name => name.innerHTML = values.to);
  };

  const handleInput = (name) => (evt) => {
    const { target: { value } } = evt;
    values[name] = value;
    renderCertificate();
  };

  fromInput.addEventListener('input', handleInput('from'));
  toInput.addEventListener('input', handleInput('to'));
});