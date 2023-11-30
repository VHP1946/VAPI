var aresponse = (handler) => {
    return {
        success: true,
        info: handler.info || {},
        data: {
            access: handler.pack.access,
            reqpack: handler.pack.pack,
            respack: {}
        },
        error: {},
        msg: ''
    }
}

module.exports = {
    aresponse
}