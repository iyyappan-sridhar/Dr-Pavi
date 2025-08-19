
const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        ratingInput.value = value;
        stars.forEach(s => s.classList.remove('active'));
        star.classList.add('active');
        for (let i = 0; i < value; i++) {
          stars[i].classList.add('active');
        }
      });
    });

const steps = document.querySelectorAll('.form-step');
const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const prev2 = document.getElementById('prev2');
const prev3 = document.getElementById('prev3');
const form = document.getElementById('counselingForm');
const confirmText = document.getElementById('confirmText');

next1.addEventListener('click', () => {
  steps[0].classList.remove('active');
  steps[1].classList.add('active');
});

next2.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const counselingType = document.getElementById('counselingType').value;
  const counselor = document.getElementById('counselor').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

confirmText.innerHTML = `
  <span class="confirm-name">Name: ${name}</span> <br>
  <span class="confirm-age">Age: ${age}</span> <br>
  <span class="confirm-gender">Gender: ${gender}</span> <br>
  <span class="confirm-email">Email: ${email}</span> <br>
  <span class="confirm-phone">Phone: ${phone}</span> <br>
  <span class="confirm-type">Counseling Type: ${counselingType}</span> <br>
  <span class="confirm-counselor">Preferred Counselor: ${counselor || 'None'}</span> <br>
  <span class="confirm-date">Date: ${date}</span> <br>
  <span class="confirm-time">Time: ${time}</span>
`;

  steps[1].classList.remove('active');
  steps[2].classList.add('active');
});

prev2.addEventListener('click', () => {
  steps[1].classList.remove('active');
  steps[0].classList.add('active');
});

prev3.addEventListener('click', () => {
  steps[2].classList.remove('active');
  steps[1].classList.add('active');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Counseling Session Confirmed! ✅');
  form.reset();
  steps[2].classList.remove('active');
  steps[0].classList.add('active');
});




