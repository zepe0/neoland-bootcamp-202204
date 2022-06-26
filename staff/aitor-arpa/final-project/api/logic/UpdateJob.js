const { User, Job } = require("../models");
const { ConflictError, AuthError, NotFoundError } = require("errors");
const { validateStringNotEmptyOrBlank, validateId } = require("validator");

function UpdateJob(adminId, jobid, title, description, address, workers) {
  validateId(adminId);
  validateId(jobid);
  validateStringNotEmptyOrBlank(title);
  validateStringNotEmptyOrBlank(description);
  validateStringNotEmptyOrBlank(address);

  return User.findOne({ _id: adminId })
    .lean() // solo trae el documento sin modelo
    .then((user) => {
      if (user.role != "admin")
        throw new AuthError(`${username} conctat for you Manager`);
      if (user.code === 11000)
        throw new ConflictError(`${email} or ${username}is duplicate`);
      return Job.updateOne(
        { id: jobid },
        { $set: { jobid, title, description, address, workers } }
      ).then((result) => {
        if (result.matchedCount === 0)
          throw new NotFoundError(`${jobid} not found`);
        if (result.matchedCount === 1 && result.modifiedCount === 0)
          return `the ${jobid} it was saved with the same previous fields`;
        return jobid;
      });
    })
    .catch((error) => {
      throw new ConflictError(`${error}`);
    });
}

module.exports = UpdateJob;
