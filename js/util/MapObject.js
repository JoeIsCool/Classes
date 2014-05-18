/*Is the same as _.map, but works returns an object with the transformed values corresponding
 * to the keys.
 *
 * So newObject[key]==iterator(oldObject[key]);
 */
define(function(require) {
  var _ = require("underscore");
  return function mapObject(list, iterator, context) {
    return _.reduce(list, function(memo, value, key) {
      memo[key] = iterator.call(context, value, key, list);
      return memo;
    }, {});
  };
});
