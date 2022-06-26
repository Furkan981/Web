module.exports = async function(req, res, proceed) {

    // First, check whether the request comes from a logged-in user.
    if (!req.me) {
        return res.unauthorized();
    }

    // Then check that this user is a "anbieter" and "super admin".
    if (!req.me.isAnbieter) {
        return res.forbidden();
    }

    // IWMIH, we've got ourselves a "anbieter".
    return proceed();

};