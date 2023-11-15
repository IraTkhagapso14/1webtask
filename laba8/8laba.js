const openPopupButton = document.getElementById('openPopupButton');
const popup = document.getElementById('popup');
const feedbackForm = document.getElementById('feedbackForm');
const sucmes = document.getElementById('sucmes');
const ermes = document.getElementById('ermes');
openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
  history.pushState(null, '', '/feedback');
});
window.addEventListener('popstate', () => {
  popup.style.display = 'none';
});
window.addEventListener('load', () => {
  const savedFormData = JSON.parse(localStorage.getItem('feedbackFormData'));
  if (savedFormData) {
    document.getElementById('fullName').value = savedFormData.fullName;
    document.getElementById('email').value = savedFormData.email;
    document.getElementById('phone').value = savedFormData.phone;
    document.getElementById('organization').value = savedFormData.organization;
    document.getElementById('message').value = savedFormData.message;
    document.getElementById('agreement').checked = savedFormData.agreement;
  }
});
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(feedbackForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formcarry.com/s/jpXL8tnTne', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        sucmes.style.display = 'block';
        feedbackForm.reset();
        localStorage.removeItem('feedbackFormData');
      } else {
        ermes.style.display = 'block';
      }
    }
  };
  xhr.send(formData);
});
feedbackForm.addEventListener('change', () => {
  const formData = new FormData(feedbackForm);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem('feedbackFormData', JSON.stringify(data));
});

feedbackForm.addEventListener('input', () => {
  sucmes.style.display = 'none';
  ermes.style.display = 'none';
});
document.getElementById("feedbackForm").addEventListener("submit", function(event){
  event.preventDefault();
  document.getElementById("feedbackForm").reset();
})
