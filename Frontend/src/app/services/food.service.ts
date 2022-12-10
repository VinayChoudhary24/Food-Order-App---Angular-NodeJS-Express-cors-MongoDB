import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { sampleFoods, sampleTags } from 'src/data';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/models/constants/urls';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  // Inject HttpClient to Request Backend API's
  constructor( private http: HttpClient ) { }

  // Frontend-- To get the Food Data From data.ts File
  // getFoodData():Food[] {
  //   return sampleFoods.slice();
  // }

  //Backend-- This API will Request to Backend for sampleFoods i.e /api/foods &&  const FOODS_URL
  // For Http we Need Observables and Subscribe Them
  getFoodData():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  } 


  //Frontend To get the Food items by Searching in the Search Bar
  // getAllFoodsBySearchTerm(searchTerm: string) {
  //   return this.getFoodData().filter( (food) =>
  //     // Use .toLowerCase() to Make Sure Every Searched Item in the Search Bar by User is of Same CASE i.e PIZZA is same as pizza
  //     food.name.toLowerCase().includes(searchTerm.toLowerCase()) )
  // }

  //Backend -- This API will Request to Backend for "/api/foods/search/:searchTerm" &&  const FOODS_BY_SEARCH_URL
  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);   
  }

  // To get the Carousel Images from Food[]
  // getCarouselImages() {
  //   return this.getFoodData();
  // }
  getCarouselImages(): Observable<Food[]> {
    return this.getFoodData();
  }

  //Frontend To get all the Tags i.e Tag[]
  // getAllTags():Tag[] {
  //   return sampleTags;
  // }

  //Backend -- This API will Request to Backend for "/api/foods/tags" && const FOODS_TAGS_URL
  getAllTags():Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }


  //Frontend-- to get the Food Items by Tags
  // getAllFoodByTag(tag: string):Food[] {
  //   return this.getFoodData().filter( (food) => 
  //     food.tags?.includes(tag)
  //   )
  // }

  //Backend -- This API will Request to Backend for "/api/foods/tag/:tagName" && const FOODS_BY_TAG_URL
  getAllFoodByTag(tag: string): Observable<Food[]> {
    return tag === "Data" ? 
            this.getFoodData() :
            this.http.get<Food[]>(FOODS_BY_TAG_URL + tag)
  }

  // To get the Single Food from home Page by ID
  // getFoodById(foodId: string): Food {
  //   return this.getFoodData().find( (food) => 
  //     food.id == foodId) ?? new Food();
  // }

  //Backend -- This API will Request to Backend for "/api/foods/:foodId" && const FOODS_BY_ID_URL
  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId)
  }

}
