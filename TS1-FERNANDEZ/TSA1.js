let colorToggle = true;

function changeColor() {
    const resume = document.getElementById('resume');
    if (colorToggle) {
        resume.style.backgroundColor = 'white';
        document.body.style.backgroundColor = '#f4f4f4';
    } else {
        resume.style.backgroundColor = '#e0f7fa';
        document.body.style.backgroundColor = '#b2ebf2';
    }
    colorToggle = !colorToggle;
}
