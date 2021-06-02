const {v4: uuidv4 } = require('uuid')

const rawSubjects = JSON.parse(require('./unsortedSubjects').data)

const refactSubjects = () => {
    const refectedSubjects = rawSubjects.map(rawSub => {
        const id = uuidv4().split('-').join('')
        const result = {
            id,
            subject: rawSub.name,
            count:rawSub.count
        }

        return result
    })
    // console.log(refectedSubjects)
    return refectedSubjects
}

const toto = refactSubjects()

const result = toto.filter(to => to.subject ==='rki' )

console.log(result)