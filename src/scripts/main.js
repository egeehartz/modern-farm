import {plantSeeds} from './tractor.js'
import {createPlan} from './plan.js'
import {usePlants} from './field.js'

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const plant = usePlants()
console.log(plant)