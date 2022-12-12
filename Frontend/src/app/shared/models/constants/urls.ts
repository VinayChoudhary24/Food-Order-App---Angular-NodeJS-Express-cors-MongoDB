//# This Will Manage all the URL for the Application

// the Base Address for All API -For Development Mode
const BASE_URL = 'http://localhost:5000'
// the Base Address for All API -For Production Mode
// const BASE_URL = 'AppName.heroku.c'

//# Define All API's Required
// This will GIVE All the Food Data by URL from sampleFoods-- getFoodData
export const FOODS_URL = BASE_URL + '/api/foods';

// this will Give FoodBySearch by URL-- getAllFoodsBySearchTerm
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';

// this will GIVE the FoodByTags by URL-- getAllTags
export const FOODS_TAGS_URL = FOODS_URL + '/tags';

// This will give foodByTag-- getAllFoodByTag
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';

// This will Give FoodById-- getFoodById
export const FOODS_BY_ID_URL = FOODS_URL + '/';

// This will Give the user Login Page
export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
