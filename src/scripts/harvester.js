export const harvestPlants = (plantsArray) => {
    
    let seedArray = []
    for ( const plantObj of plantsArray){
        if (plantObj.type === "Corn") {
            const outputDividedByTwo = plantObj.output/2
            for (let j=0; j<outputDividedByTwo; j++){
                seedArray.push(plantObj)
            }
        } else {
            for( let i=0; i<plantObj.output; i++){
            seedArray.push(plantObj)
        }
    }
    }


    return seedArray
}