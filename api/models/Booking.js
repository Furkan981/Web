module.exports = {

    attributes: {
        von: {
            type: 'ref',columnType: 'DATE',required: true,
        },
        bis: {
            type: 'ref',columnType: 'DATE',required: true,
        },
        total: {
            type: 'number',  columnType: 'DECIMAL (6,2)',  required: true
        },
        gast: {
            model:'user', required:true,
        },
        camp: {
            model: 'camp',required: true,
        },
        spots: {
            collection: 'spots',via: 'bookings'
        },

    },
};