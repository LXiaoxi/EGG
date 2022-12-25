

module.exports = (app) => {
  const { router, controller } = app
  router.get('/cartoon', controller.cartoon.getCartoonCategory)
  router.post('/cartoon/addCategory', controller.cartoon.addCartoonCategory)
  router.post('/cartoon/updateCategory', controller.cartoon.updateCartoonCategory)
  router.delete('/cartoon/deteleCategory/:id', controller.cartoon.deleteCartoonCategory)

  router.get('/cartoon/test', controller.cartoon.test)
}