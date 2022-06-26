parasails.registerPage('payment-validate', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
        // Main syncing/loading state for this page.
        syncing: false,

        // Form data
        formData: {},

        // For tracking client-side validation errors in our form.
        // > Has property set to `true` for each invalid property in `formData`.
        formErrors: {},

        // A set of validation rules for our form.
        // > The form will not be submitted if these are invalid.
        formRules: {
            iban: { required: true, isIban: true },
            knr: { required: false },
            blz: { required: false },
            bic: { required: true, isBic: true }
            // bic: regex: /^[a-z]{6}[0-9a-z]{2}([0-9a-z]{3})?\z/i
            // iban: , regex: /^[A-Z]{2}(?:[ ]?[0-9]){18,20}$/i 
        },


        cloudError: '',
    },

    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function() {},
    mounted: async function() {},

    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {

        submittedForm: async function() {
            this.syncing = true;
            window.location = '/';
        },

    }
});