// Get references to your navigation links
const homeLink = document.getElementById('footHomePage');
const travelLink = document.getElementById('footTravelPage');
const aboutLink = document.getElementById('footAboutPage');
const contactLink = document.getElementById('footContactPage');
const newsLink = document.getElementById('footNewsPage');
const roomsLink = document.getElementById('footRoomsPage');
const mealsLink = document.getElementById('footMealsPage');

// Add a click event listener to each link
homeLink.addEventListener('click', () => {
    // Remove "active" class from all links
    homeLink.classList.remove('active');
    travelLink.classList.remove('active');
    aboutLink.classList.remove('active');
    contactLink.classList.remove('active');
    newsLink.classList.remove('active');
    roomsLink.classList.remove('active');
    mealsLink.classList.remove('active'); 

    // Add "active" class to the clicked link
    homeLink.classList.add('active');
});

travelLink.addEventListener('click', () => {
    // Remove "active" class from all links
    homeLink.classList.remove('active');
    travelLink.classList.remove('active');
    aboutLink.classList.remove('active');
    contactLink.classList.remove('active');
    newsLink.classList.remove('active');
    roomsLink.classList.remove('active');
    mealsLink.classList.remove('active'); 

    // Add "active" class to the clicked link
    travelLink.classList.add('active');
});

aboutLink.addEventListener('click', () => {
        // Remove "active" class from all links
        homeLink.classList.remove('active');
        travelLink.classList.remove('active');
        aboutLink.classList.remove('active');
        contactLink.classList.remove('active');
        newsLink.classList.remove('active');
        roomsLink.classList.remove('active');
        mealsLink.classList.remove('active'); 

        // Add "active" class to the clicked link
        aboutLink.classList.add('active');
});

contactLink.addEventListener('click', () => {
    // Remove "active" class from all links
    homeLink.classList.remove('active');
    travelLink.classList.remove('active');
    aboutLink.classList.remove('active');
    contactLink.classList.remove('active');
    newsLink.classList.remove('active');
    roomsLink.classList.remove('active');
    mealsLink.classList.remove('active'); 

    // Add "active" class to the clicked link
    contactLink.classList.add('active');
});

newsLink.addEventListener('click', () => {
    // Remove "active" class from all links
    homeLink.classList.remove('active');
    travelLink.classList.remove('active');
    aboutLink.classList.remove('active');
    contactLink.classList.remove('active');
    newsLink.classList.remove('active');
    roomsLink.classList.remove('active');
    mealsLink.classList.remove('active'); 

    // Add "active" class to the clicked link
    newsLink.classList.add('active');
});

roomsLink.addEventListener('click', () => {
    // Remove "active" class from all links
    homeLink.classList.remove('active');
    travelLink.classList.remove('active');
    aboutLink.classList.remove('active');
    contactLink.classList.remove('active');
    newsLink.classList.remove('active');
    roomsLink.classList.remove('active');
    mealsLink.classList.remove('active'); 

    // Add "active" class to the clicked link
    roomsLink.classList.add('active');
});

mealsLink.addEventListener('click', () => {
    // Remove "active" class from all links
    homeLink.classList.remove('active');
    travelLink.classList.remove('active');
    aboutLink.classList.remove('active');
    contactLink.classList.remove('active');
    newsLink.classList.remove('active');
    roomsLink.classList.remove('active');
    mealsLink.classList.remove('active'); 

    // Add "active" class to the clicked link
    mealsLink.classList.add('active');
});