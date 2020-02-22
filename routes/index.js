const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.info("index")
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})


router.get('/testAsync',async (ctx,next) => {
  global.console.info('start',new Date().getTime())
  const a = await new Promise((resolve,reject) => {
    setTimeout(function () {
      global.console.info('async a',new Date().getTime())
      resolve('a b c')
    },1000);
  })
  ctx.body = {
    a
  }
})

module.exports = router
