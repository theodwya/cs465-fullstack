// Get references to your navigation links
const homeLink = document.getElementById('homePage');
const travelLink = document.getElementById('travelPage');
const aboutLink = document.getElementById('aboutPage');
const contactLink = document.getElementById('contactPage');
const newsLink = document.getElementById('newsPage');
const roomsLink = document.getElementById('roomsPage');
const mealsLink = document.getElementById('mealsPage');

// Add a click event listener to each link
homeLink.addEventListener('click', () => {
    // Remove "selected" class from all links
    homeLink.classList.remove('selected');
    travelLink.classList.remove('selected');
    aboutLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    newsLink.classList.remove('selected');
    roomsLink.classList.remove('selected');
    mealsLink.classList.remove('selected'); 

    // Add "selected" class to the clicked link
    homeLink.classList.add('selected');
});

travelLink.addEventListener('click', () => {
    // Remove "selected" class from all links
    homeLink.classList.remove('selected');
    travelLink.classList.remove('selected');
    aboutLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    newsLink.classList.remove('selected');
    roomsLink.classList.remove('selected');
    mealsLink.classList.remove('selected'); 

    // Add "selected" class to the clicked link
    travelLink.classList.add('selected');
});

aboutLink.addEventListener('click', () => {
        // Remove "selected" class from all links
        homeLink.classList.remove('selected');
        travelLink.classList.remove('selected');
        aboutLink.classList.remove('selected');
        contactLink.classList.remove('selected');
        newsLink.classList.remove('selected');
        roomsLink.classList.remove('selected');
        mealsLink.classList.remove('selected'); 

        // Add "selected" class to the clicked link
        aboutLink.classList.add('selected');
});

contactLink.addEventListener('click', () => {
    // Remove "selected" class from all links
    homeLink.classList.remove('selected');
    travelLink.classList.remove('selected');
    aboutLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    newsLink.classList.remove('selected');
    roomsLink.classList.remove('selected');
    mealsLink.classList.remove('selected'); 

    // Add "selected" class to the clicked link
    contactLink.classList.add('selected');
});

newsLink.addEventListener('click', () => {
    // Remove "selected" class from all links
    homeLink.classList.remove('selected');
    travelLink.classList.remove('selected');
    aboutLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    newsLink.classList.remove('selected');
    roomsLink.classList.remove('selected');
    mealsLink.classList.remove('selected'); 

    // Add "selected" class to the clicked link
    newsLink.classList.add('selected');
});

roomsLink.addEventListener('click', () => {
    // Remove "selected" class from all links
    homeLink.classList.remove('selected');
    travelLink.classList.remove('selected');
    aboutLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    newsLink.classList.remove('selected');
    roomsLink.classList.remove('selected');
    mealsLink.classList.remove('selected'); 

    // Add "selected" class to the clicked link
    roomsLink.classList.add('selected');
});

mealsLink.addEventListener('click', () => {
    // Remove "selected" class from all links
    homeLink.classList.remove('selected');
    travelLink.classList.remove('selected');
    aboutLink.classList.remove('selected');
    contactLink.classList.remove('selected');
    newsLink.classList.remove('selected');
    roomsLink.classList.remove('selected');
    mealsLink.classList.remove('selected'); 

    // Add "selected" class to the clicked link
    mealsLink.classList.add('selected');
});
