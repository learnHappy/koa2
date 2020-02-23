function m2(ctx) {
    global.console.info('m2')

}

module.exports = function () {
    return async function(ctx,next) {
        global.console.info('m2 start')
        m2(ctx)
        await next()
        global.console.info('m2 end')
    }
}