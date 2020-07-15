let storedPlants = []

export const addPlant = (seedObj) => {
    storedPlants.push(seedObj)
}


export const usePlants = () => {
    return storedPlants.slice()
}