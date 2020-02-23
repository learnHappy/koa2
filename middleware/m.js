function m(ctx) {
    global.console.info('m')
}

module.exports = function () {
    return async function(ctx,next) {
        global.console.info('m start')
        m(ctx)
        await next()
        global.console.info('m end')
    }
}