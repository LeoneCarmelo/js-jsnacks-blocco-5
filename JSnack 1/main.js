/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. */

const courgets = [
    {
        variety: 'nero',
        weight: 300,
        length: '23cm'
    },
    {
        variety: 'romana',
        weight: 400,
        length: '20cm'
    },
    {
        variety: 'ortolana',
        weight: 324,
        length: '25cm'
    },
    {
        variety: 'lunga fiorentina',
        weight: 310,
        length: '26cm'
    },
    {
        variety: 'siciliana',
        weight: 620,
        length: '64cm'
    },
    {
        variety: 'napoletana',
        weight: 308,
        length: '34cm'
    },
    {
        variety: 'nero',
        weight: 300,
        length: '23cm'
    },
    {
        variety: 'bianca triestina',
        weight: 245,
        length: '16cm'
    },
    {
        variety: 'gialla',
        weight: 346,
        length: '29cm'
    },
    {
        variety: 'rigata pugliese',
        weight: 350,
        length: '22cm'
    },
]

// intialize sum variable
let sum = 0
//take and sum all the weight of the zucchini
courgets.forEach((element) => {
    sum += element.weight
})
console.log(sum)                