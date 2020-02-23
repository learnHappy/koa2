function m3(ctx) {
    global.console.info('m3')
}

module.exports = function () {
    return async function(ctx,next) {
        global.console.info('m3 start')
        m3(ctx)
        await next()
        global.console.info('m3 end')
    }
}