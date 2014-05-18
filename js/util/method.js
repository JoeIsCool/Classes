/*Similar to bind, however it will always call what is presently the value of obj.func.
//Importantly, this will act as expected when spyOn is used, if it is bound to a backbone event.
//If you call model.on('change',model.func), spyOn won't work.  But model.on('change',method(model,'func'))
//will work*/
define(function(require) {
  'use strict';
  return function(object, functionName, optionalContext) {
    var context = optionalContext || object;
    return function() {
      return object[functionName].apply(context, arguments);
    }
  }
})
