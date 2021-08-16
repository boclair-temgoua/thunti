const { getallmessageService } = require('./services/get-all-message-service');
const { getallmessageuserService } = require('./services/get-all-message-user-service');

const index = async (req, res) => {
  try {
    return getallmessageService(req, res);
  } catch (error) {
    return res.status(500).json({
      message: 'Identifiant incorrect',
      error,
    });
  }
};

const userShow = async (req, res) => {
  try {
    return getallmessageuserService(req, res);
  } catch (error) {
    return res.status(500).json({
      message: 'Identifiant incorrect',
      error,
    });
  }
};

module.exports = {
  index,
  userShow,
};
