(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.elliptical.RestProvider = mod.exports.default;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var RestProvider = function () {
    function RestProvider($provider) {
      _classCallCheck(this, RestProvider);

      this.$provider = $provider;
    }

    _createClass(RestProvider, [{
      key: "get",
      value: function get(params, resource, query, callback) {
        this.$provider.get(params, resource, query, callback);
      }
    }, {
      key: "post",
      value: function post(params, resource, callback) {
        this.$provider.post(params, resource, callback);
      }
    }, {
      key: "put",
      value: function put(params, resource, callback) {
        this.$provider.put(params, resource, callback);
      }
    }, {
      key: "delete",
      value: function _delete(params, resource, callback) {
        this.$provider.delete(params, resource, callback);
      }
    }]);

    return RestProvider;
  }();

  exports.default = RestProvider;
});
