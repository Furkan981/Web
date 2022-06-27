module.exports = {


    friendlyName: 'Filter for productss',


    description: 'Filter for productss with given Parameters',

    inputs: {
        cat: {
            type: 'string',
            required: false,
        },
        min: {
            type: 'number',
            required: false,
        },
        max: {
            type: 'number',
            required: false,
        }



    },

    exits: {
        redirect: {
            responseType: 'redirect'
        }
    },


    fn: async function(inputs) {

        if (!this.req.me) { throw { redirect: '/' } }

        //manuelles handling bei init aufruf
        if (inputs.cat == '') { inputs.cat = "Kleidung,Schreibwaren,Technik,Sport,Bücher" }
        
        console.log(inputs.min, inputs.max)

        //BAND-AID FIX!!! NativeQuery braucht Array als Input --> gehts auch eleganter?
        let sql_cat = inputs.cat.split(',')
        

        let sql = "SELECT * FROM camp as b,tabelle as a WHERE b.category in ($1) AND b.preis >= ($2) AND b.preis <= ($3)"
        var rawRes = await sails.sendNativeQuery(sql, [sql_cat, inputs.min, inputs.max])

        let productss = []
        rawRes.rows.forEach(ele => {
            productss.push(ele)
        })

        return productss;
    }


};