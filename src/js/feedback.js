import '../styles/feedback.scss';

document.getElementById('feedback-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    if (!name || !email || !rating || !comments) {
        alert('All fields are required!');
        return;
    }

    alert('Thank you for your feedback!');
});
