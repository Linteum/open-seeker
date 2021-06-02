const {v4: uuidv4 } = require('uuid')

const refactSubjects = (rawSubjects) => {
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

module.exports = refactSubjects