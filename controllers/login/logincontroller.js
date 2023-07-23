const loginModel = require("../../models/loginModel.js").model;
exports.postlogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userP = await loginModel.findOne({
      where: {
        email: email,
        password: password,
      },
      attributes: ["firstName"],
    });

    if (userP) {
      return res.status(200).json({ success: true, firstName: userP.firstName });
    } else {
      return res.json({ success: false });
    }
  } catch (error) {
    console.error("Error while querying the database:", error);
    return res.json({ success: false });
  }
};
