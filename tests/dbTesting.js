
const subOps = require('../controller/subjects')

async function main () {
    const toto = await  subOps.getSubjects('radio')
    console.log(toto)
}

main()