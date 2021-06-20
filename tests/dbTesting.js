
const {getSubjects} = require('../controller/subjects')

async function main () {
    const toto = await getSubjects('japan')
    console.log(toto)
}



main()