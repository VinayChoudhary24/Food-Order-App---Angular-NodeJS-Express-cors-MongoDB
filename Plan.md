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





