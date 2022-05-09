/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as notch_pixsys$web_v1_organization_pb from '../../../notch/pixsys-web/v1/organization_pb';


export class OrganizationServiceClient {
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

  methodDescriptorGetRequiredForCreateSetupKeyInfo = new grpcWeb.MethodDescriptor(
    '/protos.OrganizationService/GetRequiredForCreateSetupKeyInfo',
    grpcWeb.MethodType.UNARY,
    notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoRequest,
    notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoResponse,
    (request: notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoRequest) => {
      return request.serializeBinary();
    },
    notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoResponse.deserializeBinary
  );

  getRequiredForCreateSetupKeyInfo(
    request: notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoResponse>;

  getRequiredForCreateSetupKeyInfo(
    request: notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoResponse) => void): grpcWeb.ClientReadableStream<notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoResponse>;

  getRequiredForCreateSetupKeyInfo(
    request: notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_pixsys$web_v1_organization_pb.GetRequiredForCreateSetupKeyInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.OrganizationService/GetRequiredForCreateSetupKeyInfo',
        request,
        metadata || {},
        this.methodDescriptorGetRequiredForCreateSetupKeyInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.OrganizationService/GetRequiredForCreateSetupKeyInfo',
    request,
    metadata || {},
    this.methodDescriptorGetRequiredForCreateSetupKeyInfo);
  }

  methodDescriptorCreateSetupKey = new grpcWeb.MethodDescriptor(
    '/protos.OrganizationService/CreateSetupKey',
    grpcWeb.MethodType.UNARY,
    notch_pixsys$web_v1_organization_pb.CreateSetupKeyRequest,
    notch_pixsys$web_v1_organization_pb.CreateSetupKeyResponse,
    (request: notch_pixsys$web_v1_organization_pb.CreateSetupKeyRequest) => {
      return request.serializeBinary();
    },
    notch_pixsys$web_v1_organization_pb.CreateSetupKeyResponse.deserializeBinary
  );

  createSetupKey(
    request: notch_pixsys$web_v1_organization_pb.CreateSetupKeyRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_pixsys$web_v1_organization_pb.CreateSetupKeyResponse>;

  createSetupKey(
    request: notch_pixsys$web_v1_organization_pb.CreateSetupKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_pixsys$web_v1_organization_pb.CreateSetupKeyResponse) => void): grpcWeb.ClientReadableStream<notch_pixsys$web_v1_organization_pb.CreateSetupKeyResponse>;

  createSetupKey(
    request: notch_pixsys$web_v1_organization_pb.CreateSetupKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_pixsys$web_v1_organization_pb.CreateSetupKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.OrganizationService/CreateSetupKey',
        request,
        metadata || {},
        this.methodDescriptorCreateSetupKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.OrganizationService/CreateSetupKey',
    request,
    metadata || {},
    this.methodDescriptorCreateSetupKey);
  }

}

