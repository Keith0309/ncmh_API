const loginModel = require("../../models/loginModel.js").model;
exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await loginModel.findOne({
        where: {
          email: email,
          password: password,
        },
      });
  
      if (user) {
        return res.json("Success");
      } else {
        return res.json("Failed");
      }
    } catch (error) {
      console.error('Error while querying the database:', error);
      return res.json("Failed");
    }
  };