/**
 * forbidden.js
 *
 * A custom response that content-negotiates the current request to either:
 *  • serve an HTML error page about the specified token being invalid or expired
 *  • or send back 498 (Token Expired/Invalid) with no response body.
 *
 * Example usage:
 * ```
 *     return res.forbidden();
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       forbidden: {
 *         description: '',
 *         responseType: 'forbidden'
 *       }
 *     }
 * ```
 */
 module.exports = function forbidden() {

  var req = this.req;
  var res = this.res;

  sails.log.verbose('Ran custom response: res.expired()');

  if (req.wantsJSON) {
    return res.status(403).send('Forbidden');
  }
  else {
    return res.status(403).view('403');
  }

};
