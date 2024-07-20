document.addEventListener("DOMContentLoaded", function() {
    const headerImage = document.getElementById("headerImage");
    const originalSrc = headerImage.src;
    const hoverSrc = "head1.png";

    if (headerImage) {
        console.log("Header image element found");

        headerImage.addEventListener("mouseover", function() {
            console.log("Mouse over event triggered");
            headerImage.src = hoverSrc;
        });

        headerImage.addEventListener("mouseout", function() {
            console.log("Mouse out event triggered");
            headerImage.src = originalSrc;
        });
    } else {
        console.log("Header image element not found");
    }
});
