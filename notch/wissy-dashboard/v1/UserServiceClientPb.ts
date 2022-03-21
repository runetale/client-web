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

  methodDescriptorCreateSetupKey = new grpcWeb.MethodDescriptor(
    '/protos.UserService/CreateSetupKey',
    grpcWeb.MethodType.UNARY,
    notch_wissy$dashboard_v1_user_pb.CreateSetupKeyRequest,
    notch_wissy$dashboard_v1_user_pb.CreateSetupKeyResponse,
    (request: notch_wissy$dashboard_v1_user_pb.CreateSetupKeyRequest) => {
      return request.serializeBinary();
    },
    notch_wissy$dashboard_v1_user_pb.CreateSetupKeyResponse.deserializeBinary
  );

  createSetupKey(
    request: notch_wissy$dashboard_v1_user_pb.CreateSetupKeyRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_wissy$dashboard_v1_user_pb.CreateSetupKeyResponse>;

  createSetupKey(
    request: notch_wissy$dashboard_v1_user_pb.CreateSetupKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_wissy$dashboard_v1_user_pb.CreateSetupKeyResponse) => void): grpcWeb.ClientReadableStream<notch_wissy$dashboard_v1_user_pb.CreateSetupKeyResponse>;

  createSetupKey(
    request: notch_wissy$dashboard_v1_user_pb.CreateSetupKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_wissy$dashboard_v1_user_pb.CreateSetupKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.UserService/CreateSetupKey',
        request,
        metadata || {},
        this.methodDescriptorCreateSetupKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.UserService/CreateSetupKey',
    request,
    metadata || {},
    this.methodDescriptorCreateSetupKey);
  }

}

