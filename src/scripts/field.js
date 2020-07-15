let storedPlants = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)){
        for (const type of seedObj){
            storedPlants.push(type)
        }
    } else {
        storedPlants.push(seedObj)
    }
}


export const usePlants = () => {
    return storedPlants.slice()
}