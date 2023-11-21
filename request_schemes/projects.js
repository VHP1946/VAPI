getProject = {
    name: 'getProject',
    check: false,
    scheme: {
        id: { type: String, default: false, msg: 'The ID of the Project' },
        ref: { type: Array, default: false, msg: 'QUOTE ID once the Quote becomes a Job' },
        projectname: { type: String, default: false, msg: 'The NAME of the Project' },

        street: { type: String, default: false, msg: 'The STREET ADDRESS of the Project' },
        unit: { type: String, default: false, msg: 'The UNIT NUMBER of the Project' },
        city: { type: String, default: false, msg: 'The CITY NAME of the Project' },
        state: { type: String, default: false, msg: 'The STATE CODE of the Project' },
        zip: { type: String, default: false, msg: 'The ZIP CODE of the Project' },

        custid: { type: String, default: false, msg: "The client's ID CODE (JONAS)" },
        customer: { type: Object, default: false, msg: 'The CLIENT INFO for the Project' },
        estimator: { type: String, default: false, msg: 'The ESTIMATOR on the Project' },

        dept: { type: String, default: false, msg: 'The DEPARTMENT CODE' },
        cat: { type: Object, default: false, msg: "The Project's CATEGORY" },

        stage: { type: String, default: false, msg: 'What STAGE the Project is in' },
        status: { type: String, default: false, msg: 'What the STATUS of the Project is' },

        opendate: { type: Date, default: false, msg: 'The DATE the Project was CREATED' },
        lastdate: { type: Date, default: false, msg: 'The LAST DATE when the changes were made' },
        scheddate: { type: Date, default: false, msg: 'The initial APPOINTMENT DATE for the Project' },
        closedate: { type: Date, default: false, msg: 'The DATE the Project is marked CLOSED' },
        datelog: { type: Array, default: false, msg: 'List of Project document interactions' },

        info: { type: Object, default: false, msg: 'The primary BUILD INFO for the Project' },
        trackid: { type: String, default: false, msg: 'The ID of the TRACKING ITEM associated with the Project' },

        froot: { type: String, default: false, msg: "The PROJECT FOLDER's path on the fileserver" },
    }
}

customer = {
    id: { type: String, default: false, msg: "The client's ID CODE (JONAS)" },
    name: { type: String, default: false, msg: 'The FULL NAME of the client' },
    fname: { type: String, default: false, msg: 'The FIRST NAME of the client' },
    lname: { type: String, default: false, msg: 'The LAST NAME of the client' },
    street: { type: String, default: false, msg: 'The STREET ADDRESS of the client' },
    unit: { type: String, default: false, msg: 'The UNIT NUMBER of the client' },
    city: { type: String, default: false, msg: 'The CITY NAME of the client' },
    state: { type: String, default: false, msg: 'The STATE CODE of the client' },
    zip: { type: String, default: false, msg: 'The ZIP CODE of the client' },
    strtdate: { type: Date, default: false, msg: 'The FIRST DATE of interaction with the client' },
    lastsale: { type: Date, default: false, msg: 'The LAST DATE that the client was provided a service' },
    type: { type: String, default: false, msg: 'The TYPE of client' },
    phone: { type: String, default: false, msg: 'The PHONE NUMBER of the client' },
    phone2: { type: String, default: false, msg: 'The SECONDARY PHONE NUMBER for the client' },
    email: { type: String, default: false, msg: 'The EMAIL ADDRESS of the client' },
    rep: { type: String, default: false, msg: "The client's SALES REPRESENTATIVE'S CODE" }
}