document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const prevButton = document.getElementById('previousButtonModeling');
    const nextButton = document.getElementById('nextButtonModeling');

    let currentIndex = 0;

    nextButton.addEventListener('click', function () {
        console.log(slider.children.length);
        if (currentIndex < slider.children.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevButton.addEventListener('click', function () {
        console.log('Previous button clicked!');
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    function updateSlider() {
        const newPosition = -currentIndex * 50; // 100% for each image
        slider.style.transform = `translateX(${newPosition}%)`;
    }
});
