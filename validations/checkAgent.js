const checkName = (req, res, next) => {
    if (req.body.name) {
      next();
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };
  const checkBoolean = (req, res, next) => {
    if (
      req.body.isPlayable === "true" ||
      req.body.isPlayable == "false" ||
      req.body.isPlayable == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "isPlayable must be a boolean value" });
    }
  };

  module.exports = { checkBoolean, checkName}