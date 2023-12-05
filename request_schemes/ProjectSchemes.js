/* SCHEME NOTES

    As im seeing you play around with the schemes, there is a part that i was having trouble
    explaining on nested schemes.

    You have the customer scheme built, great. *This would eventually make its way to a different
    file for use across scheme files. Then you as you are putting together the project with the
    customer in it, you are declaring another property of scheme? My thought was customer would
    have in it nested scheme properties like this


    let projectscheme = {
        id: { type: 'String', default: undefined, desc: 'The ID of the Project' },
        ref: { type: 'Array', default: undefined, desc: 'QUOTE ID once the Quote becomes a Job' },
        name: { type: 'String', default: undefined, desc: 'The NAME of the Project' },

        customer: {
            id:{...customerscheme.id,default:'BLAH'}
            fname:{...customerscheme.fname,default:'BLAH'}
            lname:{...customerscheme.lname,default:'BLAH'}
        }
    }

    Im see some issues with identify when to "step down". I guess you could begin by declaring a _scheme
    property

        customer: {
            _scheme:true
            id:{...customerscheme.id,default:'BLAH'}
            fname:{...customerscheme.fname,default:'BLAH'}
            lname:{...customerscheme.lname,default:'BLAH'}
        }
    }
    the validation loop would check for _scheme, and then step down. After that the function would
    just resolve itself consistently through structure. Im not sure how this effects your 'flattener'.

    This isn't something to do now, but it is a bit akward to create nested schemes so lets put this
    on the maintenance schedule.

*/

let customerscheme = {
    id: { type: 'String', default: undefined, desc: "The client's ID CODE (JONAS)" },
    name: { type: 'String', default: undefined, desc: 'The FULL NAME of the client' },
    fname: { type: 'String', default: undefined, desc: 'The FIRST NAME of the client' },
    lname: { type: 'String', default: undefined, desc: 'The LAST NAME of the client' },
    street: { type: 'String', default: undefined, desc: 'The STREET ADDRESS of the client' },
    unit: { type: 'String', default: undefined, desc: 'The UNIT NUMBER of the client' },
    city: { type: 'String', default: undefined, desc: 'The CITY NAME of the client' },
    state: { type: 'String', default: undefined, desc: 'The STATE CODE of the client' },
    zip: { type: 'String', default: undefined, desc: 'The ZIP CODE of the client' },
    strtdate: { type: 'Date', default: undefined, desc: 'The FIRST DATE of interaction with the client' },
    lastsale: { type: 'Date', default: undefined, desc: 'The LAST DATE that the client was provided a service' },
    type: { type: 'String', default: undefined, desc: 'The TYPE of client' },
    phone: { type: 'String', default: undefined, desc: 'The PHONE NUMBER of the client' },
    phone2: { type: 'String', default: undefined, desc: 'The SECONDARY PHONE NUMBER for the client' },
    email: { type: 'String', default: undefined, desc: 'The EMAIL ADDRESS of the client' },
    rep: { type: 'String', default: undefined, desc: "The client's SALES REPRESENTATIVE'S CODE" }
}


let projectscheme = {
    id: { type: 'String', default: undefined, desc: 'The ID of the Project' },
    ref: { type: 'Array', default: undefined, desc: 'QUOTE ID once the Quote becomes a Job' },
    name: { type: 'String', default: undefined, desc: 'The NAME of the Project' },

    street: { type: 'String', default: undefined, desc: 'The STREET ADDRESS of the Project' },
    unit: { type: 'String', default: undefined, desc: 'The UNIT NUMBER of the Project' },
    city: { type: 'String', default: undefined, desc: 'The CITY NAME of the Project' },
    state: { type: 'String', default: undefined, desc: 'The STATE CODE of the Project' },
    zip: { type: 'String', default: undefined, desc: 'The ZIP CODE of the Project' },

    custid: { type: 'String', default: undefined, desc: "The client's ID CODE (JONAS)" },
    customer: { type: 'Object', default: undefined, scheme: customerscheme, desc: 'The CLIENT INFO for the Project' },
    estimator: { type: 'String', default: undefined, desc: 'The ESTIMATOR on the Project' },

    dept: { type: 'String', default: undefined, desc: 'The DEPARTMENT CODE' },
    cat: { type: 'Object', default: undefined, desc: "The Project's CATEGORY" },

    stage: { type: 'String', default: undefined, desc: 'What STAGE the Project is in' },
    status: { type: 'String', default: undefined, desc: 'What the STATUS of the Project is' },

    opendate: { type: 'Date', default: undefined, desc: 'The DATE the Project was CREATED' },
    lastdate: { type: 'Date', default: undefined, desc: 'The LAST DATE when the changes were made' },
    scheddate: { type: 'Date', default: undefined, desc: 'The initial APPOINTMENT DATE for the Project' },
    closedate: { type: 'Date', default: undefined, desc: 'The DATE the Project is marked CLOSED' },
    datelog: { type: 'Array', default: undefined, desc: 'List of Project document interactions' },

    info: { type: 'Object', default: undefined, desc: 'The primary BUILD INFO for the Project' },
    trackid: { type: 'String', default: undefined, desc: 'The ID of the TRACKING ITEM associated with the Project' },

    froot: { type: 'String', default: undefined, desc: "The PROJECT FOLDER's path on the fileserver" },
}

/**
 * strict => can properties be added?
 * default = undefined => not required
 * default = 'NEED' => required, will not be automatically set
 * default = <any> => required, auto set
 *
 * default for nested object do not directly reflect subscheme
 */

module.exports = {
    testDeep: {
        name: 'Deep Test',
        strict: true,
        scheme: {
            estimator: { ...projectscheme.estimator, default: 'NEED' },
            customer: {
                ...projectscheme.customer,
                scheme: {
                    name: { ...customerscheme.name, default: 'NEED' }
                }
            }
        }
    },
    project: {
        name: 'Project',
        strict: false,
        scheme: projectscheme
    },
    QUERYprojects: {  // allow any property(s) that exist in the scheme, do not allow adds
        name: 'Query Projects',
        strict: true,
        scheme: projectscheme
    },
    GETproject: {  // do not allow extra properties, requires ID
        name: 'Get Project',
        strict: true,
        scheme: {
            id: { ...projectscheme.id, default: 'NEED' }
        }
    },
    GETallProjects: {
        name: 'Get All Projects',
        strict: true,
        scheme: {}
    },
    GETuserProjects: {
        name: 'Get User Projects',
        strict: true,
        scheme: {
            estimator: { ...projectscheme.estimator, default: 'NEED' }
        }
    }
}
