var aresponse = (handler) => {
    return {
        success: handler.success || true,
        info: handler.info || {},
        pack: handler.pack || {},
        data: {},
        errors: {},
        msg: ''
    }
}

module.exports = {
    aresponse
}