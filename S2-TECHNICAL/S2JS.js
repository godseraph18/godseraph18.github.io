document.querySelectorAll('.day-btn').forEach(button => {
    button.addEventListener('click', function() {
        let box = document.getElementById('animation-box');
        let newColor = this.getAttribute('data-color');
        
        box.style.transform = 'translateY(100px)';
        setTimeout(() => {
            box.style.backgroundColor = newColor;
            box.style.transform = 'translateY(0)';
        }, 500);
    });
});