const { usershowService } = require('./services/user-show-service');
const { usersupdateService } = require('./services/user-update-service');

const show = async (req, res) => {
  try {
    return usershowService(req, res);
  } catch (error) {
    return res.status(500).json({
      message: 'Identifiant incorrect',
      error,
    });
  }
};

const update = async (req, res) => {
  try {
    return usersupdateService(req, res);
  } catch (error) {
    return res.status(500).json({
      message: 'Identifiant incorrect',
      error,
    });
  }
};

module.exports = {
  show,
  update,
};
