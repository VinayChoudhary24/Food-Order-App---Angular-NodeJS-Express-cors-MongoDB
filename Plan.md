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

 # 3 Creating the Login/SignUp Functionality
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
     * --Register User 
                     --Register Component,
                     --Create a Http File for All Request Status-- src/Constants/http_status.ts 
                     --Add Register Api, Inside the user.router.ts 
                     --Register Service Method, inside the user.service.ts and Create UserRegister interface inside 
                        shared/interfaces/UserRegister.ts, add Register URL in shared/constants/urls.ts
                     --Register Link
     * --Loading
                --Add Pure CSS Loader.com 
                --Add Component
                --Add Service --Services/loading.service.ts
                --Add LoadingComponent inside the app.component.html
                --Add Interceptor --To Show Loader for Different Components ThroughOut the Application, 
                                     shared/interceptors/loading.interceptor.ts and 
                                     Update app.module.ts Import {HTTP_INTERCEPTORS} from common/http... 
                                     and Providers[{provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}]
     * --Checkout Page
               --Create Order Model --shared/model/Order.ts
               --Checkout Page Component --add Router
               --Add User to User.Service --Adding public get currentUser
               --Add Cart to Cart.Service --Adding getCart Method
               --Create Order Items List Component --components/partials/order-items-list
     * --Adding MAP to the Checkout Page
            --Add Leaflet Package, --npm install leaflet --Add @types/leaflet, npm install --save-dev @types/leaflet 
            --Add CSS to angular.json --Inside Styles["node_modules/leaflet/dist/leaflet.css"]
            --Add this -addressLatLng?:LatLng to Order.ts Model --To Store the Address Latitude and Longitude from Leaflet  
            --Create Map Component --Add to Checkout Page -Change app-map Selector to map
            --Generate Location Service --services/location.service.ts --to Get the Current Location of User
            --Add AuthGuard --To Restrict the User Frm opening Some Pages if Not Logged In
                
                                             





