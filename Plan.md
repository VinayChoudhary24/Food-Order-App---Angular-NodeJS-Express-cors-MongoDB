# Project 
 # Platform to Order Food Online
   
   *1-- Creating Components, Object Oriented Components.

   *2-- Express Router, For API.

   *3-- Angular Router, Paths for Different Pages.

   *4-- MongoDB Atlas, For Storing and Quering the Data.

   *5-- Reactive Forms, For Handling Form Inputs.

   *6-- Http Client, Send the data back&Forth to the API.

   *7-- RxJS, Managing Application State.

   *8-- JWT(json Web Token), For Authentication and Authorization.

   *9-- Deploy Application

   *10-- Payment Gateways

# Building Application Frontend
 
 # 1 Creating Header Component, Adding FontAwesome
    *Generate Component, Add HTML and CSS
  
 # 2 Creating Food Model, Data.ts, add Sample, Food Service

 # 3 Create Home Component, Adding the food[] array to the Home Component

 # 4 Adding The Search Component, Food service Methods and Routes

 # 5 Adding Angular Powered Bootstrap and Creating Carousel from Home Component.

 # 6 Create TAG Model in Shared Folder

 # 7 Create Food Page Component i.e Page for a Single Food.

 # 8 Adding the Cart Functionality -- CartItem Model and Cart Model

 # 9 Creating Cart Page --Add, Remove and Change Cart

 # 10 Creating Cart Page Title Compnent

 # 11 Creating Not Found Component -- For All Components Errors

# Building Application Backend

 # 1 Creating Backend Folder and Initializing Node_Modules with Default Values --package.json   
     * npm init -y inside backend Folder i.e cd Backend
     * npm install typescript
     * Create TypeScript Config File-- Create tsconfig.json and Paste this:--
               {
                  "compilerOptions": {
                       "module": "CommonJS",
                       "moduleResolution": "node",
                       "strict": true,
                       "outDir": "./built",
                       "emitDecoratorMetadata": true,
                       "esModuleInterop": true
                       "experimentalDecorators": true,
                     },
                       "include": ["src/**/*"],
               }
     * Create src Folder -- src
     * Create gitIgnore File -- .gitignore And Add node_modules
     * Copy Data from Frontend data.ts File to Backend src/ data.ts File --create data.ts file in src
     * Install express and Cors- npm install express cors
     * Create Server file inside src Folder-- server.ts
     * npm install ts-node --save-dev -to Run the TS Code in JS
     * npm install nodemon --save-dev -to Increse the development speed
     * add this "start": "cd src && nodemon server.ts" in package.json scripts[] to run the app from nodemon 
     * npm start

 # 2 Connecting the Backend server.ts API to Frontend
     * Add urls.ts to Frontend/src/shared/constants-- To Manage All the URL's
     * Add HttpClientModule to the project-- To Request to backend API's from Frontend foodService
     * Request Backend API's inside the foodService -- Import HttpClient in foodService
     * Fix the Components of Each API Requests i.e Home, Food-Page, Cart-Page -- Subscribe To the http Requests.

 # 3 Creating the Login Functionality
     * --Frontend- Generate Login Page Component 
     * --Frontend- Add Angular Reactive Forms to the login Page.ts-- import ReactiveFormsModule in imports[] of app.module.ts 
     * --Backend-Server.ts- Add Login Api- 
                                  --Enable json in Express,
                                  --Add sampleUsers in data.ts to test 
                                  --Add jsonwebtoken --npm install jsonwebtoken --a Function GenerateTokenResponse 
                                  --test Using Postman -- Save POST request

 # 4 Connecting the Login Page with the Backend
     * --Generate User Service --userService.ts
     * --Create User Model inside the Shared Folder --User.ts
     * --Create UserLogin interface --Shared/interfaces/
     * --install ngx-toastr i.e npm install ngx-toastr --To Show POP-UP Message of Successful/Failed Login and 
                  Dis-appears after Few Seconds.
                            -- Import Module in app.module
                            -- Import BrowserAnimationsModule in app.module
                            -- Add this -"node_modules/ngx-toastr/toastr.css" in Styles[] in Angular.json.
     * --Create Logout() method in userService
     * --Make Components for Login Page
                            -- Input Container
                            -- Input Validation
                            -- Text input
                            -- Default Button

 # 5 Connect Login API to MongoDB Atlas
     * --Moving api's into routers Folder --Create a Router Folder, inside food.router.ts and user.router.ts
     * --Create MongoDB Atlas --Atlas is Faster than the MongoDB Local
     * --Create .env file
     * --Install --npm install mongoose dotenv bcryptjs express-async-handler
               --Mongoose --Creating Models, Specific Types, Save to Database and Work with MongoDB --Security 
               --dotenv
               --bcryptjs --Saving the Password inside the Database, Secures the Password
               --jsonWebToken --Already Installed
               --express-async-handler --To Make Async Process More Consistent
     * --Create a database.config.ts File to Connect mongoose to MongoDB Atlas --Create Configs Folder
     * --Connect to MongoDB Atlas
     * --Create mongoose Models i.e food.model.ts --Create Models Folder
                         --Food interface --Copy From Frontend Food interface i.e Food.ts from Shared/models
                         --Food Schema --Define in MonogoDB Types
                         --Food Model
     * --Create mongoose models i.e user.model.ts --inside Models Folder
                         --User interface --Copy From Frontend User Interface i.e User.ts from Shared/models
                         --User Schema --Define in MonogoDB Types
                         --User Model
     * --Now SEED the food.model.ts and user.model.ts inside the DATABASE 
                          --Add Two Api's inside the food.router.ts and user.router.ts
                          --Getting the Values from data.ts and Put it inside the Database             
     * --Use MongoDB instead of data.ts in apis
                          --Browser Collection inside MongoDB Atlas and Request Backend i.e http://localhost:5000/api/foods/seed to Put All the Data from data.ts to MongoDB Atlas. 
                           --Browser Collection inside MongoDB Atlas and Request Backend i.e http://localhost:5000/api/users/seed to Put All the Data from data.ts to MongoDB Atlas.
                           --Update All the Api's inside routers[food.router and user.router] to get Data From Data.ts => MongoDB
 
 # 6 Create Register Functionality
                     --Register Component,
                     --Create a Http File for All Request Status-- src/Constants/http_status.ts 
                     --Add Register Api, Inside the user.router.ts 
                     --Register Service Method, inside the user.service.ts and Create UserRegister interface inside 
                        shared/interfaces/UserRegister.ts, add Register URL in shared/constants/urls.ts
                     --Register Link
 
 # 7 Adding the Loading Spinner -- Pure CSS Loader
                --Add Pure CSS Loader.com 
                --Add Component
                --Add Service --Services/loading.service.ts
                --Add LoadingComponent inside the app.component.html
                --Add Interceptor --To Show Loader for Different Components ThroughOut the Application, 
                                     shared/interceptors/loading.interceptor.ts and 
                                     Update app.module.ts Import {HTTP_INTERCEPTORS} from common/http... 
                                     and Providers[{provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}]
     
 # 8 Create Checkout Page
               --Create Order Model --shared/model/Order.ts in Frontend
               --Checkout Page Component --add Router
               --Add User to User.Service --Adding public get currentUser
               --Add Cart to Cart.Service --Adding getCart Method
               --Create Order Items List Component --components/partials/order-items-list
     
 # 9 Adding Map Feature to the Application
            --Add Leaflet Package, --npm install leaflet --Add @types/leaflet, npm install --save-dev @types/leaflet 
            --Add CSS to angular.json --Inside Styles["node_modules/leaflet/dist/leaflet.css"]
            --Add this -addressLatLng?:LatLng to Order.ts Model --To Store the Address Latitude and Longitude from Leaflet  
            --Create Map Component --Add to Checkout Page -Change app-map Selector to map
            --Generate Location Service --services/location.service.ts --to Get the Current Location of User
            --Add AuthGuard --To Restrict the User Frm opening Some Pages if Not Logged In

 # 10 Save Order Details on Backend -- MongoDB
           --Order Model --Create Order.model.ts inside Backend -- models/order.model.ts i.e interface, Schema, Model
           --Add Order Status Enum --Frontend/shared/constants/order_status.ts --for Order Status i.e Shipped, Paid ....
           --Add Auth Middleware --middleware/auth.mid.ts --To Verify the User Token
           --Add Order Router --routers/order.router.ts --For Storing the OrderModel to DB
                       --Add Create API
           --Add Order Urls to urls.ts --To Connect order Backend to Frontend
           --Add Order Service --services/order.service.ts
                      --Add Create Method
           --Add Auth Interceptor -ng g interceptor auth/auth

 # 11 Creating the Payment Page
           --Generate Component --components/pages/payment-page
           --Add router Method to get the Order Details --order.router
           --Add router to Urls.ts 
           --Add 'getOrderForCurrentUser' api
           --Add Order Service Method --getNewOrderForCurrentUser
           --Connect Component to Service
           --Make the map component readonly --map.component.ts

 # 12 Adding Paypal
           --Generate Component-components/partials/paypal-button --add to Payment Page
           --get Paypal Client ID --Create Account On developer.paypal.com and get ID
           --Add Paypal JS to index.html
           --set up Paypal Button
           --Add Pay Api to Order.router
           --Add Api to Urls File
           --Add pay Method to order.service 
           --Get Paypal Sandbox Account

 <!-- # 13 Adding RazorPay
        --Generate Component-components/partials/razorPay-button --add to Payment Page
        --get Key ID and Key Secret --Crea a Account on dashboard.razorPay -->

 # 13 Order Track Page
           --Generate Component components/pages/order-track-page  --Add to Routes
           --Add Api in order.router
           --Add to Urls
           --Add a Method in order.service
           --Add Ts, Html and Css to Show

 # 14 Adding the Profile Section
          --Generate Component -components/pages/profile-page --Add to Routes
          

 # 15 Updating the Whole Project i.e Frontend[Angular] and Backend[NEM]
          --Install check-update --npm install -g npm-check-updates
          --Inside Frontend Write i.e cd Frontend --ncu and Run -ncu -u && -npm install --force
          --Inside the Backend Folder Write --ncu -u && npm install

 # 16 Making Application Responsive 



 ------------------------------------------------------------------------------------
 -----------------------------------------------------------------------------------------
 ##  Lessons
1. Introduciton to the course
2. Install development tools
3. Create Angular App
   1. Create project's folder
   2. Install @angular/cli
   3. Create App as frontend

4. Add Header
   1. Generate Component
   2. Add Html
   3. Add CSS

5. List Foods
    1. Create Food model
    2. Create data.ts
       1. Add sample foods
    3. Add images to assets
    4. Create Food service
    5. Create Home component
       1. Add ts
       2. Add html
       3. Add css

6. Search
   1. Add method to Food service
   2. Add search route
   3. Show search result in Home component
   4. Generate search component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css
   
7. Tags Bar
   1. Create Tag model
   2. Add sample tags to data.ts
   3. Food service
      1. Add get all tags method
      2. Add get all foods by tag method
   4. Add tags route
   5. Show tag result in Home component
   6. Generate Tags component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css

8. Food Page
   1. Add method to food service
   2. Generate Food Page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

9. Cart Page
   1. Create CartItem Model
   2. Create Cart Model
   3. Generate Cart service
   4. Add to Cart Button in Food Page
   5. Generate Cart page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

10. Not Found!
    1. Generate Component
       1. Add ts
       2. Add html
       3. Add css
    2. Add To Pages
       1. Home Page
       2. Food Page
       3. Cart Page

11. Connect To Backend
    1.  Create backend folder
    2.  npm init
    3.  npm install typescript
    4.  Create tsconfig.json
    5.  Create .gitignore
    6.  Copy data.ts to backend/src
    7.  npm install express cors
    8.  Create server.ts
        1. install @types
        2. Add Apis
    9.  npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service

12. Login Page
    1.  Generate Component
        1.  Add to routes
        2.  Add ts 
        3.  Add html
            1.  Import Reactive Forms Module
        4.  Add Css
    2.  Add Login Api
        1.  Use json
        2.  Add jsonwebtoken
        3.  Test Using Postman
    
    3.  Generate User Service
        1.  Generate User model
        2.  Add User Subject
        3.  Add Login Method   
            1.  Add User Urls
            2.  Generate IUserLogin interface
            3.  Add ngx-toastr
                1.  Import Module
                2.  Import BrowserAnimationsModule
                3.  Add styles in angular.json
            4.  Add to Header
        1. Add Local Storage methods
        2. Add Logout Method
           1. Add to Header


13. Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button

14. Connect Login API To MongoDB Atlas
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis


15. Register User
    1.  Add Register api
    2.  Add Register service method
    3.  Add Register link 
    4.  Add Register Component


16. Loading!
    1.  Add Image 
    2.  Add Component
    3.  Add Service
    4.  Add Interceptor




17. Checkout Page
    1.  Create Order Model
    2.  Create Checkout Page Component
        1.  Add To Router   
    3.  Add User to User Service 
    4.  Add Cart to Cart Service 
    5.  Create Order Items List Component
    6.  Adding Map To The Checkout Page
        1.  Add Leaflet npm package
            1.  Add @types/leaflet
            2.  Add Css to angular.json
        2.  Add AddressLatLng to Order Model
        3.  Create Map component
            1.  Add to checkout page
            2.  Add TS
                1.  Change app-map selector to map
            3.  Add Html
            4.  Add CSS
        4.  Add Auth Guard
    7.  Save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
           1. Add create API
        5. Add Order Urls to urls.ts
        7. Add Order Service
           1. Add create Method
        8. Add Auth Interceptor

18. Payment Page
    1. Generate Component
    2. Add 'getOrderForCurrentUser' api 
    3. Add Order Service method
    4. Connect Component to Service
    5. Make the map component readonly

19. Adding Paypal
    1. Generate Component
       1. Add to payment page
    2. Get Paypal client Id
    3. Add Paypal JS to index.html
    4. Set up Paypal button
    5. Add Pay api to order router   
    6. Get Paypal sandbox account

20. Order Track Page
    1.  Generate Component
        1.  Add to routes
    2.  Add API
        1.  Add to urls.ts
    3.  Add method to order.service
    4.  Add HTML
    5.  Add CSS

21. Deploy On Heroku
    1.  OutputPath in angular.json
    2.  package.json
        1.  frontend
        2.  backend
        3.  root
    3.  BASE_URL in urls.ts
    4.  Public folder config in server.ts
    5.  Run commands
    6.  Add built folder to .gitignore
    7.  Commit and Push

22. Updating Packages (Optional)
    1.  Install npm-check-upates as a global package
    2.  Run ncu -u in the frontend folder
    3.  Downgrade typescript to version ~4.8.2
    4.  Run npm install --force
    5.  Run npm start
    6.  Run ncu -u in the backend folder
    7.  Run npm install
    8.  Run npm start
             

                
                                             





