import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import {addPlant} from "./field.js"


export const plantSeeds = (plantingPlanArray) => {
/*
iterate parent AND child array
plantingPlan is gonna be an array
*/

for (const field of plantingPlanArray) {
    for (const plant of field) {
     if (plant === "Soybean") {
        addPlant(createSoybean())
    } 
        else if (plant === "Corn") {
            addPlant(createCorn())
    }
        else if (plant === "Asparagus") {
            addPlant(createAsparagus())
        }
        else if (plant === "Wheat") {
            addPlant(createWheat())
        }
        else if (plant === "Potato") {
            addPlant(createPotato())
        } else {
            addPlant(createSunflower())
        }   
    }
}

}
    /*switch (plant) {
      case "Soybean": createSoybean();
      case "Corn": createCorn();
      case "Asparagus": createAsparagus();
      case "Wheat": createWheat();
      case "Potato": createPotato();
      case "Sunflower": createSunflower(); 
      break;
    } */