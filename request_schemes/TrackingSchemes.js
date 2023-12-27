let trackscheme = {
    id: { type: 'String', default: undefined, desc: 'The ID of the tracked item' },
    projectname: { type: 'String', default: undefined, desc: 'The NAME of the associated Project' },
    client: { type: 'String', default: undefined, desc: 'The NAME of the client' },
    street: { type: 'String', default: undefined, desc: 'The STREET ADREESS of the client' },
    unit: { type: 'String', default: undefined, desc: 'The UNIT NUMBER of the client' },
    city: { type: 'String', default: undefined, desc: 'The CITY NAME of the client' },
    state: { type: 'String', default: undefined, desc: 'The STATE CODE of the client' },
    zip: { type: 'String', default: undefined, desc: 'The ZIP CODE of the client' },
    phone: { type: 'String', default: undefined, desc: 'The PHONE NUMBER of the client' },
    phone2: { type: 'String', default: undefined, desc: 'The SECONDARY PHONE NUMBER for the client' },
    email: { type: 'String', default: undefined, desc: 'The EMAIL ADDRESS of the client' },
    estimator: { type: 'String', default: undefined, desc: 'The ESTIMATOR on the Project' },
    stage: { type: 'String', default: undefined, desc: 'What STAGE the associated Project is in' },
    status: { type: 'String', default: undefined, desc: 'What the STATUS of the associated Project is' },
    date: { type: 'Date', default: undefined, desc: 'The initial APPOINTMENT DATE' },
    prstdate: { type: 'Date', default: undefined, desc: 'The PRESENTATION DATE when the quote was given' },
    bids: { type: 'Array', default: undefined, desc: 'List of BIDS presented' },
    ref: { type: 'Array', default: undefined, desc: 'List of QUOTE ID REFERENCES that are associated with this item' },
    bookprc: { type: 'Boolean', default: undefined, desc: 'Whether or not the BOOK PRICE was used' }
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
    tracks: {
        name: 'Tracks',
        strict: false,
        scheme: trackscheme
    },
    /**
     * Do not allow extra properties; ID property required
     * @usedby GETtrack, DELETEtrack
     */
    REQid: {
        name: 'Requires ID',
        strict: true,
        scheme: {
            id: { ...trackscheme.id, default: 'NEED' }
        }
    },
    /**
     * Do not allow extra properties; nothing is required
     * @usedby GETallTracks
     */
    REQnone: {
        name: 'Requires Nothing',
        strict: true,
        scheme: {}
    },
    QUERYtracks: {  // allow any property(s) that exist in the scheme, do not allow adds
        name: 'Query Tracks',
        strict: true,
        scheme: trackscheme
    },
    GETuserTracks: {  // do not allow extra properties, requires estimator
        name: 'Get User Tracks',
        strict: true,
        scheme: {
            estimator: { ...trackscheme.estimator, default: 'NEED' }
        }
    },
    CREATEtrack:{
        name: 'Create Track',
        strict: true,
        scheme: {}
    },
    SAVEtrack:{
        name: 'Save Track',
        strict: true,
        scheme: {}
    },
    PAYtracks:{
        name: 'Pay Tracks',
        strict: true,
        scheme: {}
    },
    CLOSEtracks:{
        name: 'Close Tracks',
        strict: true,
        scheme: {}
    },
    ARCHIVEtracks:{
        name: 'Archive Tracks',
        strict: true,
        scheme: {}
    }
}