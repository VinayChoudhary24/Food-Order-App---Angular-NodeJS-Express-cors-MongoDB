import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { faHeart, faClock, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Tag } from 'src/app/shared/models/Tag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // To Store the Tags
  tags?: Tag[];

  // To Store the Carousel Images
  carouselImages: Food[] = [];

  // Store the Rupees Icon
  rupeeIcon = faRupeeSign;

  // Store the cookTimeIcon
  cookTimeIcon = faClock;

  // Store the Favorite Icon
  favoriteIcon = faHeart;

  // To Store the sampleFoods, Food[] from data.ts
  foods:Food[] = [];

  // Inject the food.service to get the food data i.e getFoodData
  constructor( private foodService: FoodService,
    // Inject Router to Naviagte to the Searched Item
    private activatedRoute: ActivatedRoute ) {}

  ngOnInit()  {
          // To Get the Images from Food[]
          // this.carouselImages = this.foodService.getCarouselImages();
          // Backend -- Subscribe and Set the Value for carouselImages
          this.foodService.getCarouselImages().subscribe( serverImages => 
            this.carouselImages = serverImages
          );
    
    // For Tags
    // let tagsObservable: Observable<Tag[]>;
          //Frontend-- To get the Food Tags
          // this.tags = this.foodService.getAllTags();
          // Backend -- Subscribe and Set the Value of tags
          this.foodService.getAllTags().subscribe( serverTags => 
            this.tags = serverTags
          );

      // Listen to the Route Params to Show the Searched Item From the Search BAR
      this.activatedRoute.params.subscribe( (params) => {
    //Backend 
    // To Subscribe the Requests
    // For Foods and CarouselImages
    let foodsObservable: Observable<Food[]>;
        // This will Show the Searched Results in HomeComponent
        if(params.searchTerm) {
          // Calling the Searched Item Function from foodService
          // this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
          // Backend-- Subscribe and set the Value for this.foods
          // foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
          this.foodService.getAllFoodsBySearchTerm(params.searchTerm).subscribe( search => this.foods = search );
        }else if(params.tag) {
          // this.foods = this.foodService.getAllFoodByTag(params.tag);
          // Backend-- Subscribe and set the Value for this.foods
          // foodsObservable = this.foodService.getAllFoodByTag(params.tag);
          this.foodService.getAllFoodByTag(params.tag).subscribe( tag => this.foods = tag );
        }else {
          // When there is No Searched Item i.e Initial Stage
          // Call the getFoodData Function Here From foodService
          // this.foods = this.foodService.getFoodData();
          // Backend replace this.foods with foodsObservable
          foodsObservable = this.foodService.getFoodData();

          // Subscribe foods and carouselImages
          foodsObservable.subscribe( (serverFoods) => {
            // For Home Page Foods List
            this.foods = serverFoods;
          })
        }
      })
    
  }

}
