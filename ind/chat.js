window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Define the start and end colors
    const startColor = [255, 192, 203]; // RGB for pink
    const endColor = [0, 0, 0]; // RGB for black

    // Calculate the maximum scroll value
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the scroll ratio and apply a power to accelerate the color change
    const scrollRatio = Math.min(scrollY / maxScroll, 1);
    const acceleratedRatio = Math.pow(scrollRatio, 2); // Apply power for acceleration

    // Interpolate between the start and end colors
    const currentColor = startColor.map((start, index) => {
        return Math.round(start + (endColor[index] - start) * acceleratedRatio);
    });

    // Apply the interpolated color as the background color
    document.body.style.backgroundColor = `rgb(${currentColor.join(',')})`;
});
