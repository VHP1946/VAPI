module.exports = {
    GETproject: {
        name: 'GETproject',
        strict: false,
        scheme: {
            id: { type: String, default: undefined, msg: 'The ID of the Project' },
            ref: { type: Array, default: undefined, msg: 'QUOTE ID once the Quote becomes a Job' },
            name: { type: String, default: undefined, msg: 'The NAME of the Project' },

            street: { type: String, default: undefined, msg: 'The STREET ADDRESS of the Project' },
            unit: { type: String, default: undefined, msg: 'The UNIT NUMBER of the Project' },
            city: { type: String, default: undefined, msg: 'The CITY NAME of the Project' },
            state: { type: String, default: undefined, msg: 'The STATE CODE of the Project' },
            zip: { type: String, default: undefined, msg: 'The ZIP CODE of the Project' },

            custid: { type: String, default: undefined, msg: "The client's ID CODE (JONAS)" },
            customer: { type: Object, default: undefined, msg: 'The CLIENT INFO for the Project' },
            estimator: { type: String, default: undefined, msg: 'The ESTIMATOR on the Project' },

            dept: { type: String, default: undefined, msg: 'The DEPARTMENT CODE' },
            cat: { type: Object, default: undefined, msg: "The Project's CATEGORY" },

            stage: { type: String, default: undefined, msg: 'What STAGE the Project is in' },
            status: { type: String, default: undefined, msg: 'What the STATUS of the Project is' },

            opendate: { type: Date, default: undefined, msg: 'The DATE the Project was CREATED' },
            lastdate: { type: Date, default: undefined, msg: 'The LAST DATE when the changes were made' },
            scheddate: { type: Date, default: undefined, msg: 'The initial APPOINTMENT DATE for the Project' },
            closedate: { type: Date, default: undefined, msg: 'The DATE the Project is marked CLOSED' },
            datelog: { type: Array, default: undefined, msg: 'List of Project document interactions' },

            info: { type: Object, default: undefined, msg: 'The primary BUILD INFO for the Project' },
            trackid: { type: String, default: undefined, msg: 'The ID of the TRACKING ITEM associated with the Project' },

            froot: { type: String, default: undefined, msg: "The PROJECT FOLDER's path on the fileserver" },
        }
    }
}

customer = {
    id: { type: String, default: undefined, msg: "The client's ID CODE (JONAS)" },
    name: { type: String, default: undefined, msg: 'The FULL NAME of the client' },
    fname: { type: String, default: undefined, msg: 'The FIRST NAME of the client' },
    lname: { type: String, default: undefined, msg: 'The LAST NAME of the client' },
    street: { type: String, default: undefined, msg: 'The STREET ADDRESS of the client' },
    unit: { type: String, default: undefined, msg: 'The UNIT NUMBER of the client' },
    city: { type: String, default: undefined, msg: 'The CITY NAME of the client' },
    state: { type: String, default: undefined, msg: 'The STATE CODE of the client' },
    zip: { type: String, default: undefined, msg: 'The ZIP CODE of the client' },
    strtdate: { type: Date, default: undefined, msg: 'The FIRST DATE of interaction with the client' },
    lastsale: { type: Date, default: undefined, msg: 'The LAST DATE that the client was provided a service' },
    type: { type: String, default: undefined, msg: 'The TYPE of client' },
    phone: { type: String, default: undefined, msg: 'The PHONE NUMBER of the client' },
    phone2: { type: String, default: undefined, msg: 'The SECONDARY PHONE NUMBER for the client' },
    email: { type: String, default: undefined, msg: 'The EMAIL ADDRESS of the client' },
    rep: { type: String, default: undefined, msg: "The client's SALES REPRESENTATIVE'S CODE" }
}