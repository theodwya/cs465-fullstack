/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways' });
};
module.exports = {
    meals
};