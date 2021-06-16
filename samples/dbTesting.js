
const subOps = require('../controller/subjects')

async function main () {
    subOps.getSubjects('FM')
    .then((values)=> {
        // console.log(values)
    })
    .catch(err=> {
        console.error(err)
    })
}

main()