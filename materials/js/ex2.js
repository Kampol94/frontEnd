function convertTemp(celsius) {
    return celsius * 9 /5 + 32
    
}

document.getElementById("fahr_1").innerHTML = convertTemp(document.getElementById("celsius_1").innerHTML)
document.getElementById("fahr_2").innerHTML = convertTemp(document.getElementById("celsius_2").innerHTML)
document.getElementById("fahr_3").innerHTML = convertTemp(document.getElementById("celsius_3").innerHTML)

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 



document.getElementById("best_students").innerHTML = classification.slice(-2);

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
};

document.getElementById("course_title").innerHTML = course.title

document.getElementById("main_category").innerHTML = course.categories[0]

document.getElementById("reviews_5_stars").innerHTML = Math.round(percentageOf5starsReviews())

function percentageOf5starsReviews() {
    return course["5_stars_reviews"] / sumOfReviews() * 100
}

function sumOfReviews() {
    return  course["1_stars_reviews"] +  course["2_stars_reviews"] +  course["3_stars_reviews"] +  course["4_stars_reviews"] +  course["5_stars_reviews"]
}

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

shoppingList.unshift(shoppingList.pop())

shoppingList.push("Eggs")
shoppingList.push("Cheese")

console.log(shoppingList)