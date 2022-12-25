module.exports = app => {
  const { router, controller } = app
  const verifyLogin = app.middleware.verifyLogin()
  const verifyReg = app.middleware.verifyRegister()
  const token = app.middleware.token(app)
  router.post('/user/register', verifyReg, controller.user.register)
  router.post('/user/login', verifyLogin, controller.user.login)
  router.get('/user', token, controller.user.getUserInfo)

}