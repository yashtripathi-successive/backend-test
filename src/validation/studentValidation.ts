import joi from 'joi'


const studentValidation = joi.object({
    name:joi.string().required(),
    age:joi.string().required(),
    grade:joi.string().required(),
    email:joi.string().email().required()

})


export default studentValidation