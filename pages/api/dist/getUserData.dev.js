"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getWardNumberData;
var API_URL = process.env.SQL_API_PATH;

function getWardNumberData(req, res) {
  var result, data;
  return regeneratorRuntime.async(function getWardNumberData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("".concat(API_URL, "/getWardNumberData.php"), {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(process.env.JWT_TOKEN)
            }
            /*body: JSON.stringify({
                hNo:hNo //house number
            })*/

          }));

        case 3:
          result = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(result.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", res.json(data));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          return _context.abrupt("return", res.status(_context.t0.status || 500).end(_context.t0.message));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}
//# sourceMappingURL=getUserData.dev.js.map
