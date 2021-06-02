
// GET all subjects from /api/subjects
const getAllSubjects = async(req, rep) => {
    return blog
} 

// GET one subjects from /api/subjects
const getOneSubject= async(req,rep) => {
    const name = req.params.name
    const subject = subjects.find(sub => sub.name == name)
    return subject
}


// POST add subjects from /api/subjects
const addSubject = (re,rep) => {
    const name = `${subjects.length +1}`
    const newSubject = {
        name,
        count: req.body.count
    }
    blogs.push(newSubject)
    return newSubject
}


// PUT update subjects from /api/subjects
const updateSubject = async (req, reply) => {
    const name = req.params.name
    subjects = subjects.map(subject => {
        if (subject.name === name) {
            return {
                name,
                count: req.body.count
            }
        }
    })

    return {
        name,
        count: req.body.count
    }
}


// DELETE subject from /api/subjects
const deleteBlog = async (req, reply) => {
    const name = req.params.name

    subjects = subjects.filter(subject => subject.name !== name)
    return { msg: `Blog with ID ${name} is deleted` }
}