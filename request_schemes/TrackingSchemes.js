module.exports = {
    QUERYtracks: {
        name: 'QUERYtracks',
        strict: false,
        scheme: {
            id: { type: String, default: undefined, msg: 'The ID of the tracked item' },
            projectname: { type: String, default: undefined, msg: 'The NAME of the associated Project' },
            client: { type: String, default: undefined, msg: 'The NAME of the client' },
            street: { type: String, default: undefined, msg: 'The STREET ADREESS of the client' },
            unit: { type: String, default: undefined, msg: 'The UNIT NUMBER of the client' },
            city: { type: String, default: undefined, msg: 'The CITY NAME of the client' },
            state: { type: String, default: undefined, msg: 'The STATE CODE of the client' },
            zip: { type: String, default: undefined, msg: 'The ZIP CODE of the client' },
            phone: { type: String, default: undefined, msg: 'The PHONE NUMBER of the client' },
            phone2: { type: String, default: undefined, msg: 'The SECONDARY PHONE NUMBER for the client' },
            email: { type: String, default: undefined, msg: 'The EMAIL ADDRESS of the client' },
            estimator: { type: String, default: undefined, msg: 'The ESTIMATOR on the Project' },
            stage: { type: String, default: undefined, msg: 'What STAGE the associated Project is in' },
            status: { type: String, default: undefined, msg: 'What the STATUS of the associated Project is' },
            date: { type: Date, default: undefined, msg: 'The initial APPOINTMENT DATE' },
            prstdate: { type: Date, default: undefined, msg: 'The PRESENTATION DATE when the quote was given' },
            bids: { type: Array, default: undefined, msg: 'List of BIDS presented' },
            ref: { type: Array, default: undefined, msg: 'List of QUOTE ID REFERENCES that are associated with this item' },
            bookprc: { type: Boolean, default: undefined, msg: 'Whether or not the BOOK PRICE was used' },
        }
    }
}
