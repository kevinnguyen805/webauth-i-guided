const router = require('express').Router();
const bcrypt = require('bcryptjs')

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});


router.post('/hash', (req, res) => {
  // read a password from the body 
  // hash the password 
  // return it to the user in an object
  
  const user = req.body
  const hash = bcrypt.hashSync(user.password,12)

  res.send({password: user.password, hash: hash})
})


module.exports = router;
