const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['clear', false, 0];

const carSpecs: [number, number] = [400, 3354];

// Object is more clear than tuples because of the keys
const carStats = {
    horsepower: 400,
    weight: 3354,
};
