const EratosthenesService = require('./eratosthenes.service');

/**
 * Display median prime number(s) of prime numbers less than given n in query param
 * @param req
 * @param res
 * @return {object}
 */
exports.getPrimeMedian = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  let n = req.param('number');
  if (n) {
    n = n.replace(/[^0-9]/g, "")
    const primeMedian = EratosthenesService.getPrimeMedian(n);
    return res.status(200)
      .json({
        data: primeMedian
      });
  } else {
    return res.status(402)
      .json({
        message: 'Number is required.'
      });
  }
};