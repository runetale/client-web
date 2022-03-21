// source: notch/wissy-dashboard/v1/admin_network.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.protos.CreateDefaultAdminNetworkRequest', null, global);
goog.exportSymbol('proto.protos.CreateDefaultAdminNetworkResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.CreateDefaultAdminNetworkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CreateDefaultAdminNetworkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CreateDefaultAdminNetworkRequest.displayName = 'proto.protos.CreateDefaultAdminNetworkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.CreateDefaultAdminNetworkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.CreateDefaultAdminNetworkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.CreateDefaultAdminNetworkResponse.displayName = 'proto.protos.CreateDefaultAdminNetworkResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.CreateDefaultAdminNetworkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CreateDefaultAdminNetworkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CreateDefaultAdminNetworkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateDefaultAdminNetworkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    companyname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.CreateDefaultAdminNetworkRequest}
 */
proto.protos.CreateDefaultAdminNetworkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CreateDefaultAdminNetworkRequest;
  return proto.protos.CreateDefaultAdminNetworkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CreateDefaultAdminNetworkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CreateDefaultAdminNetworkRequest}
 */
proto.protos.CreateDefaultAdminNetworkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.CreateDefaultAdminNetworkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CreateDefaultAdminNetworkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CreateDefaultAdminNetworkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateDefaultAdminNetworkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompanyname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string companyName = 1;
 * @return {string}
 */
proto.protos.CreateDefaultAdminNetworkRequest.prototype.getCompanyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.CreateDefaultAdminNetworkRequest} returns this
 */
proto.protos.CreateDefaultAdminNetworkRequest.prototype.setCompanyname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userID = 2;
 * @return {string}
 */
proto.protos.CreateDefaultAdminNetworkRequest.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.CreateDefaultAdminNetworkRequest} returns this
 */
proto.protos.CreateDefaultAdminNetworkRequest.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.protos.CreateDefaultAdminNetworkRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.CreateDefaultAdminNetworkRequest} returns this
 */
proto.protos.CreateDefaultAdminNetworkRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.CreateDefaultAdminNetworkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.CreateDefaultAdminNetworkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.CreateDefaultAdminNetworkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateDefaultAdminNetworkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.CreateDefaultAdminNetworkResponse}
 */
proto.protos.CreateDefaultAdminNetworkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.CreateDefaultAdminNetworkResponse;
  return proto.protos.CreateDefaultAdminNetworkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.CreateDefaultAdminNetworkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.CreateDefaultAdminNetworkResponse}
 */
proto.protos.CreateDefaultAdminNetworkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.CreateDefaultAdminNetworkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.CreateDefaultAdminNetworkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.CreateDefaultAdminNetworkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.CreateDefaultAdminNetworkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organizationID = 1;
 * @return {string}
 */
proto.protos.CreateDefaultAdminNetworkResponse.prototype.getOrganizationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.CreateDefaultAdminNetworkResponse} returns this
 */
proto.protos.CreateDefaultAdminNetworkResponse.prototype.setOrganizationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.protos);
