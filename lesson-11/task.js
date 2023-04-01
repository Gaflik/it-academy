class TourPakage {
    constructor(country) {
        this.country = country;
        this.type = null;
        this.transport = null;
        this.meals = null;
        this.duration = null;
        
    }
} 

class TourPakageBuilder {
    constructor(country) {
        this.tourPakage = new TourPakage(country);
    }

    addType(type) {
        this.tourPakage.type = type;
        return this;
    }

    addTransport(transport) {
        this.tourPakage.transport = transport;
        return this;
    }

    addMeals(meals) {
        this.tourPakage.meals = meals;
        return this;
    }

    addDuration(duration) {
        this.tourPakage.duration = duration;
        return this;
    }

    addPrice(price) {
        this.tourPakage.price = price;
        return this;
    }

    build() {
        return this.tourPakage;
    }
}

let tourList = [
    new TourPakageBuilder('Greece').addType('Vacation').addTransport('Airplane').addMeals('AI').addDuration(10).addPrice(1500).build(),
    new TourPakageBuilder('France').addType('Excursions').addTransport('Bus').addMeals('BB').addDuration(5).addPrice(800).build(),
    new TourPakageBuilder('Lithuania').addType('Shopping').addTransport('Train').addMeals('RO').addDuration(3).addPrice(150).build(),
    new TourPakageBuilder('Spain').addType('Cruise').addTransport('Cruise ship').addMeals('HB').addDuration(8).addPrice(2500).build(),
    new TourPakageBuilder('Czech Republic').addType('Medical tourism').addTransport('Bus').addMeals('FB').addDuration(14).addPrice(2000).build()
]

function selectTourFromList(arr, selectProp, selectValue) {
    let selectedTour = [];
    for (let tour of arr) {
        if (String(tour[selectProp]).includes(selectValue) == true)
        selectedTour.push(tour)
    }
    console.log(selectedTour);
}
selectTourFromList(tourList, 'price', 2500)

function sortTourlist(sortValue) {
    let sortedTourList = tourList.sort(function(a, b) { 
        if (a[sortValue] < b[sortValue]) 
        return -1;
    });
    console.log(sortedTourList);
}
sortTourlist('type');