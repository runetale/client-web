/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as notch_wissy$dashboard_v1_user_pb from '../../../notch/wissy-dashboard/v1/user_pb';


export class UserServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSetupKey = new grpcWeb.MethodDescriptor(
    '/protos.UserService/SetupKey',
    grpcWeb.MethodType.UNARY,
    notch_wissy$dashboard_v1_user_pb.SetupKeyRequest,
    notch_wissy$dashboard_v1_user_pb.SetupKeyResponse,
    (request: notch_wissy$dashboard_v1_user_pb.SetupKeyRequest) => {
      return request.serializeBinary();
    },
    notch_wissy$dashboard_v1_user_pb.SetupKeyResponse.deserializeBinary
  );

  setupKey(
    request: notch_wissy$dashboard_v1_user_pb.SetupKeyRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_wissy$dashboard_v1_user_pb.SetupKeyResponse>;

  setupKey(
    request: notch_wissy$dashboard_v1_user_pb.SetupKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_wissy$dashboard_v1_user_pb.SetupKeyResponse) => void): grpcWeb.ClientReadableStream<notch_wissy$dashboard_v1_user_pb.SetupKeyResponse>;

  setupKey(
    request: notch_wissy$dashboard_v1_user_pb.SetupKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_wissy$dashboard_v1_user_pb.SetupKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.UserService/SetupKey',
        request,
        metadata || {},
        this.methodDescriptorSetupKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.UserService/SetupKey',
    request,
    metadata || {},
    this.methodDescriptorSetupKey);
  }

}

