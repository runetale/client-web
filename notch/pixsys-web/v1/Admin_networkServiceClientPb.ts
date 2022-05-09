/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as notch_pixsys$web_v1_admin_network_pb from '../../../notch/pixsys-web/v1/admin_network_pb';


export class AdminNetworkServiceClient {
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

  methodDescriptorCreateDefaultNetwork = new grpcWeb.MethodDescriptor(
    '/protos.AdminNetworkService/CreateDefaultNetwork',
    grpcWeb.MethodType.UNARY,
    notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkRequest,
    notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkResponse,
    (request: notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkRequest) => {
      return request.serializeBinary();
    },
    notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkResponse.deserializeBinary
  );

  createDefaultNetwork(
    request: notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkResponse>;

  createDefaultNetwork(
    request: notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkResponse) => void): grpcWeb.ClientReadableStream<notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkResponse>;

  createDefaultNetwork(
    request: notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_pixsys$web_v1_admin_network_pb.CreateDefaultAdminNetworkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.AdminNetworkService/CreateDefaultNetwork',
        request,
        metadata || {},
        this.methodDescriptorCreateDefaultNetwork,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.AdminNetworkService/CreateDefaultNetwork',
    request,
    metadata || {},
    this.methodDescriptorCreateDefaultNetwork);
  }

  methodDescriptorLoginNetwork = new grpcWeb.MethodDescriptor(
    '/protos.AdminNetworkService/LoginNetwork',
    grpcWeb.MethodType.UNARY,
    notch_pixsys$web_v1_admin_network_pb.LoginNetworkRequest,
    notch_pixsys$web_v1_admin_network_pb.LoginNetworkResponse,
    (request: notch_pixsys$web_v1_admin_network_pb.LoginNetworkRequest) => {
      return request.serializeBinary();
    },
    notch_pixsys$web_v1_admin_network_pb.LoginNetworkResponse.deserializeBinary
  );

  loginNetwork(
    request: notch_pixsys$web_v1_admin_network_pb.LoginNetworkRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_pixsys$web_v1_admin_network_pb.LoginNetworkResponse>;

  loginNetwork(
    request: notch_pixsys$web_v1_admin_network_pb.LoginNetworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_pixsys$web_v1_admin_network_pb.LoginNetworkResponse) => void): grpcWeb.ClientReadableStream<notch_pixsys$web_v1_admin_network_pb.LoginNetworkResponse>;

  loginNetwork(
    request: notch_pixsys$web_v1_admin_network_pb.LoginNetworkRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_pixsys$web_v1_admin_network_pb.LoginNetworkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.AdminNetworkService/LoginNetwork',
        request,
        metadata || {},
        this.methodDescriptorLoginNetwork,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.AdminNetworkService/LoginNetwork',
    request,
    metadata || {},
    this.methodDescriptorLoginNetwork);
  }

}

