const { getallusersService, getalluserssearchService } = require('./services/get-all-users-service');
const { usershowService } = require('./services/user-show-service');
const { usersupdateService } = require('./services/user-update-service');

const index = async (req, res) => {
  try {
    return getallusersService(req, res);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
      error,
    });
  }
};

const indexsearch = async (req, res) => {
  try {
    return getalluserssearchService(req, res);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
      error,
    });
  }
};

const show = async (req, res) => {
  try {
    return usershowService(req, res);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
      error,
    });
  }
};

const update = async (req, res) => {
  try {
    return usersupdateService(req, res);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
      error,
    });
  }
};

module.exports = {
  index,
  indexsearch,
  show,
  update,
};
