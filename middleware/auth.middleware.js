const jwt = require("jsonwebtoken");
// verify a token symmetric - synchronous

const authMiddleware = (req, res, next) => {
  jwt.verify(req.headers.token, "masai", (err, decoded) => {
    if (err) {
      res.send({ msg: "please login again" });
    } else {
      req.body.user_id = decoded.user_id;
      //   console.log(decoded, "decoded");
      next();
    }
  });
};

module.exports = { authMiddleware };
