module.exports = {

    attributes: {

        iban: {
            type: 'string',
            required: true,
        },

        kontonr: {
            type: 'string',
            required: false,
        },

        blz: {
            type: 'string',
            required: false,
        },

        bic: {
            type: 'string',
            required: true,
        },

        gast: {
            collection: 'user',
            via: 'payment'
        }

    },
};
