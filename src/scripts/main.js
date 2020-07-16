import {plantSeeds} from './tractor.js'
import {createPlan} from './plan.js'
import {usePlants} from './field.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const plant = usePlants()
const seedArray = harvestPlants(plant)
catalog(seedArray)

