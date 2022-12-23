"use strict";
// import { Food } from "./app/shared/models/Food";
// import { Tag } from "./app/shared/models/Tag";
exports.__esModule = true;
exports.sampleUsers = exports.sampleTags = exports.sampleFoods = void 0;
// In the Begining Change Food[] to any[] && Tag[] to any[]
exports.sampleFoods = [
    {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 299,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'https://media.istockphoto.com/id/1181651561/photo/oven-baked-pepperoni-pizza.jpg?b=1&s=170667a&w=0&k=20&c=rXZuTnWkNeYlm5ploNg2bMixLsC6n8dhg6Lpfq3hj98=',
        tags: ['FastFood', 'Pizza', 'Lunch'],
        description: "Pepperoni Pizza has everything you want—a great crust, gooey cheese, and tons of pepperoni. The secret to great pepperoni flavor? Hide extra under the cheese!"
    },
    {
        id: '2',
        name: 'Sushi',
        price: 999,
        cookTime: '35-45',
        favorite: true,
        origins: ['Japan'],
        stars: 5.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/c700x420_20181227132950.jpg',
        tags: ['Lunch', 'Dinner'],
        description: "Prepared with vinegared rice and a wide range of ingredients including seafood, vegetables, and sometimes fruits. Sushi tastes best when served with wasabi, pickled ginger, and soy sauce."
    },
    {
        id: '3',
        name: 'Kebab',
        price: 799,
        cookTime: '35-45',
        favorite: true,
        origins: ['Turkey'],
        stars: 4.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/bacon-kebabs-13-2_20181227133457.jpg',
        tags: ['Lunch', 'Dinner'],
        description: "Kebabs are originally from Turkey. They consist of ground meat or seafood, fruits, and vegetables in some cases and are cooked on a skewer with a big fire underneath, just like a barbeque on the grill. "
    },
    {
        id: '4',
        name: 'Fried Potatoes',
        price: 50,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'https://www.seriouseats.com/thmb/X42-ZmDHc9V2cRZEgKJ4Wh6vGjs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20211201-crispy-roasted-potatoes-vicky-wasik-45-d75608ce325e4ffbab665084eba642c8.jpg',
        tags: ['FastFood', 'Fry'],
        description: "Even though it’s a humble side dish, pan-fried potatoes are always the first thing on my table to get gobbled up at dinnertime. There’s something about the way the crispy outsides give way to fluffy, tender insides that just works."
    },
    {
        id: '5',
        name: 'Chicken Soup',
        price: 259,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'https://media.istockphoto.com/id/157741415/photo/homemade-turkey-soup.jpg?s=612x612&w=0&k=20&c=wrnPdlS02lfg4Bg6l8G17IMzxRl_nMZFQhKw6yLXVBw=',
        tags: ['SlowFood', 'Soup'],
        description: "it's good for the body and the soul. How is it that plain chicken and vegetables simmered together can taste so satisfying? You don't have to be sick to deserve to enjoy it!"
    },
    {
        id: '6',
        name: 'Vegetables Pizza',
        price: 159,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/786/792/888/veggie-pizza-pizza-and-red-pepper-wallpaper-preview.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
        description: "Bursting with rich aroma of herbs & spices and flavours, pizza is one of the most loved dishes of Italian cuisine."
    },
    {
        id: '7',
        name: 'Meatball',
        price: 399,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'https://wallpaperaccess.com/full/4008494.jpg',
        tags: ['SlowFood', 'Lunch', 'Dinner'],
        description: "These meatballs always come out amazingly tender, deliciously flavorful, never dry and they’re always sure to impress!"
    },
    {
        id: '8',
        name: 'Rendang',
        price: 599,
        cookTime: '50-60',
        favorite: false,
        origins: ['Indonesia'],
        stars: 4.5,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/8896564-16x9-large_20181227133052.jpg',
        tags: ['Lunch', 'Dinner'],
        description: "Rendang is prepared by simmering beef with coconut milk with a mixture of the best of spices including turmeric, garlic, lemongrass, ginger, chillies, and galangal."
    },
    {
        id: '9',
        name: 'Ramen',
        price: 399,
        cookTime: '15-20',
        favorite: true,
        origins: ['Japan'],
        stars: 5.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/shoyu-ramen_20181227133143.jpg',
        tags: ['FastFood', 'Lunch'],
        description: "Ramen is a Japanese dish made of wheat noodles and served in the broth along with vegetables and meat. Ramen comes in several flavours, from tangy to spicy, depending on the flavour of the broth."
    },
    {
        id: '10',
        name: 'Tom Yam Goong',
        price: 699,
        cookTime: '55-65',
        favorite: true,
        origins: ['Thailand'],
        stars: 4.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/R00067_Tom-Yum-Goong_20181227133333.jpg',
        tags: ['Lunch', 'Dinner'],
        description: "A type of sour and hot Thai soup, Tom yam goong is prepared with shrimp along with a load of healthy herbs and spices?  lemongrass, lime, kaffir leaves, galangal, and red chili peppers to name a few."
    },
    {
        id: '11',
        name: 'Hamburger',
        price: 100,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'https://images2.alphacoders.com/276/276352.jpg',
        tags: ['FastFood', 'Hamburger'],
        description: "This popular dish of Germany consists of one or more cooked patties of ground meat, usually beef, that is placed right inside the sliced bread or a bun. "
    },
    {
        id: '12',
        name: 'Pho',
        price: 359,
        cookTime: '55-65',
        favorite: true,
        origins: ['Vietnam'],
        stars: 3.5,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/wmkj5fafebzkxpwhuzg6_20181227133752.jpeg',
        tags: ['Lunch', 'Dinner'],
        description: "A simple yet an incredible dish, Pho (pronounced as 'fuh') is a Vietnamese dish made of rice noodles and meat (usually beef or chicken) served in broth and topped with herbs."
    },
    {
        id: '13',
        name: 'Peking duck',
        price: 999,
        cookTime: '55-65',
        favorite: false,
        origins: ['China'],
        stars: 4.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/peking-duck-10916-1_20181227133910.jpg',
        tags: ['Lunch', 'Dinner'],
        description: "The ducks for this dish are specially bred and slaughtered after 60 days and seasoned first before being roasted in closed ovens. This gives the meat a crisp skin and thin texture."
    },
    {
        id: '14',
        name: 'Paella',
        price: 1099,
        cookTime: '25-35',
        favorite: true,
        origins: ['Spain'],
        stars: 5.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/mixed-seafood-paella_20181227133958.jpeg',
        tags: ['Lunch', 'Dinner'],
        description: "The original recipe contains white rice with green beans, meat (rabbit or chicken, sometimes duck), butterbeans, snails, topped with seasoning such as rosemary"
    },
    {
        id: '15',
        name: 'Steak and Kidney Pie',
        price: 1299,
        cookTime: '55-65',
        favorite: true,
        origins: ['England'],
        stars: 4.5,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/steakandkidneypie_73308_16x9_20181227134043.jpg',
        tags: ['Lunch', 'Dinner'],
        description: "Steak and kidney pie is a piquant pie filled with diced beef, kidney (often of lamb, beef, or pork), brown gravy, and fried onion. It is a representative dish of British cuisine and culture."
    },
    {
        id: '16',
        name: 'Apfelstrudel',
        price: 299,
        cookTime: '45-55',
        favorite: true,
        origins: ['Austria'],
        stars: 4.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/48824979_20181227134147.jpg',
        tags: ['FastFood', 'Lunch'],
        description: "More commonly known as Apple Strudel, Apfelstrudel is a popular pastry in Austria and other parts of Europe. The dish consists of an oval strudel pastry cover with mouthwatering apple filling inside."
    },
    {
        id: '17',
        name: 'Pad Thai',
        price: 259,
        cookTime: '20-30',
        favorite: true,
        origins: ['Thailand'],
        stars: 4.5,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/28COOKING-PAD-THAI1-videoSixteenByNineJumbo1600_20181227134239.jpg',
        tags: ['Lunch', 'Dinner'],
        description: "Pad Thai is a stir-fried rice dish accompanied with noodles. This healthy dish is made with stir-frying noodles with eggs and tofu."
    },
    {
        id: '18',
        name: 'Goulash',
        price: 899,
        cookTime: '50-65',
        favorite: false,
        origins: ['Hungary'],
        stars: 5.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/20160205-beef-goulash-hungarian-recipe-food-lab-26_20181227134326.jpg',
        tags: ['Lunch', 'Dinner'],
        description: "Goulash is stew meat dating back to 9th century Hungary. The main elements of the dish are the spices, especially paprika. Goulash is prepared from either beef, pork, veal, or lamb."
    },
    {
        id: '19',
        name: 'Lasagna',
        price: 399,
        cookTime: '15-25',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/9dd2e32b-613d-4515-9597-39ba6ad86b8b_20181227134422.jpg',
        tags: ['FastFood', 'Lunch'],
        description: "It is one of the oldest pasta but has become popular only in the present times. The ingredients itself sound mouthwatering - meats, pasta, vegetables, tomato sauce, and lots and lots of cheese."
    },
    {
        id: '20',
        name: 'Kimchi',
        price: 499,
        cookTime: '35-45',
        favorite: true,
        origins: ['Korea'],
        stars: 4.0,
        imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/Kimchi-5_20181227134514.jpg',
        tags: ['Lunch', 'Dinner'],
        description: "Kimchi is a staple Korean side dish prepared from fermented vegetables such as Korean radishes, and cabbage and topped with several seasonings, including garlic, chilli powder, scallions, and ginger."
    },
];
// To Get the Tags for Food
// In the Begining Change Food[] to any[] && Tag[] to any[]
exports.sampleTags = [
    { name: 'Pizza', count: 2 },
    { name: 'FastFood', count: 7 },
    { name: 'SlowFood', count: 2 },
    { name: 'Lunch', count: 17 },
    { name: 'Dinner', count: 12 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
    { name: 'Hamburger', count: 1 },
];
// Users Array
// sample Users to test the Api
exports.sampleUsers = [
    {
        name: 'Vinay',
        email: 'test@gmail.com',
        password: '123456',
        address: 'L.A',
        isAdmin: true
    },
    {
        name: 'VinayC',
        email: 'test2@gmail.com',
        password: '123456',
        address: 'NYC',
        isAdmin: false
    },
];
