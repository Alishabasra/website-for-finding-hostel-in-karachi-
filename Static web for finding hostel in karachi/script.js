// Function to change the main image when a thumbnail is clicked
function changeImage(thumbnail) {
    // Get the main image element
    const mainPic = document.getElementById('mainPic');
    // Set the 'src' attribute of the main image to the clicked thumbnail's 'src'
    mainPic.src = thumbnail.src;
}