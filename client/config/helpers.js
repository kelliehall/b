var path = require('path');

module.exports.root = function(args) {
    args = Array.prototype.slice.call(arguments, 0);

    return path.join.apply(path, [__dirname].concat(args));
};
