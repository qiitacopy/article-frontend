/**
 * @fileoverview gRPC-Web generated client stub for grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.grpc = require('./article_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc.ArticleServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc.ArticleServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc.GetByIDRequest,
 *   !proto.grpc.Article>}
 */
const methodDescriptor_ArticleService_GetByID = new grpc.web.MethodDescriptor(
  '/grpc.ArticleService/GetByID',
  grpc.web.MethodType.UNARY,
  proto.grpc.GetByIDRequest,
  proto.grpc.Article,
  /**
   * @param {!proto.grpc.GetByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.Article.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.GetByIDRequest,
 *   !proto.grpc.Article>}
 */
const methodInfo_ArticleService_GetByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.Article,
  /**
   * @param {!proto.grpc.GetByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.Article.deserializeBinary
);


/**
 * @param {!proto.grpc.GetByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.Article)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.Article>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.ArticleServiceClient.prototype.getByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.ArticleService/GetByID',
      request,
      metadata || {},
      methodDescriptor_ArticleService_GetByID,
      callback);
};


/**
 * @param {!proto.grpc.GetByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.Article>}
 *     Promise that resolves to the response
 */
proto.grpc.ArticleServicePromiseClient.prototype.getByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.ArticleService/GetByID',
      request,
      metadata || {},
      methodDescriptor_ArticleService_GetByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc.CreateArticleRequest,
 *   !proto.grpc.Article>}
 */
const methodDescriptor_ArticleService_CreateArticle = new grpc.web.MethodDescriptor(
  '/grpc.ArticleService/CreateArticle',
  grpc.web.MethodType.UNARY,
  proto.grpc.CreateArticleRequest,
  proto.grpc.Article,
  /**
   * @param {!proto.grpc.CreateArticleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.Article.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.CreateArticleRequest,
 *   !proto.grpc.Article>}
 */
const methodInfo_ArticleService_CreateArticle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.Article,
  /**
   * @param {!proto.grpc.CreateArticleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.Article.deserializeBinary
);


/**
 * @param {!proto.grpc.CreateArticleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.Article)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.Article>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.ArticleServiceClient.prototype.createArticle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.ArticleService/CreateArticle',
      request,
      metadata || {},
      methodDescriptor_ArticleService_CreateArticle,
      callback);
};


/**
 * @param {!proto.grpc.CreateArticleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.Article>}
 *     Promise that resolves to the response
 */
proto.grpc.ArticleServicePromiseClient.prototype.createArticle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.ArticleService/CreateArticle',
      request,
      metadata || {},
      methodDescriptor_ArticleService_CreateArticle);
};


module.exports = proto.grpc;

