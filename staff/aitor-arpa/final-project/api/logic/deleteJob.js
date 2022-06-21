const { Job, User } = require("../models");
const { validateId } = require('validator')
const { AuthError, NotFoundError } = require("errors");

function deleteJob(adminId, jobId) {
  validateId(adminId)
  validateId(jobId)

  return User.findById(adminId)
    .then(user => {
      if (!user)
        throw new NotFoundError(`User with ${adminId} not found`)

      if (user.role === 'worker')
        throw new AuthError(`${adminId} conctat for you Manager`)
      return Job.deleteOne({ id: jobId })
    })
    .then(job => {
      if (!job)
        throw new NotFoundError(`User with ${jobId} not found`)
      return job
    })
}



module.exports = deleteJob