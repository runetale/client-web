/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as notch_wissy$dashboard_v1_organization_pb from '../../../notch/wissy-dashboard/v1/organization_pb';


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

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/protos.OrganizationService/Create',
    grpcWeb.MethodType.UNARY,
    notch_wissy$dashboard_v1_organization_pb.OrganizationCreateRequest,
    notch_wissy$dashboard_v1_organization_pb.OrganizationCreateResponse,
    (request: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateRequest) => {
      return request.serializeBinary();
    },
    notch_wissy$dashboard_v1_organization_pb.OrganizationCreateResponse.deserializeBinary
  );

  create(
    request: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_wissy$dashboard_v1_organization_pb.OrganizationCreateResponse>;

  create(
    request: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateResponse) => void): grpcWeb.ClientReadableStream<notch_wissy$dashboard_v1_organization_pb.OrganizationCreateResponse>;

  create(
    request: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.OrganizationService/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.OrganizationService/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorCreateAdminUser = new grpcWeb.MethodDescriptor(
    '/protos.OrganizationService/CreateAdminUser',
    grpcWeb.MethodType.UNARY,
    notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserRequest,
    notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserResponse,
    (request: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserRequest) => {
      return request.serializeBinary();
    },
    notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserResponse.deserializeBinary
  );

  createAdminUser(
    request: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserResponse>;

  createAdminUser(
    request: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserResponse) => void): grpcWeb.ClientReadableStream<notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserResponse>;

  createAdminUser(
    request: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_wissy$dashboard_v1_organization_pb.OrganizationCreateAdminUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.OrganizationService/CreateAdminUser',
        request,
        metadata || {},
        this.methodDescriptorCreateAdminUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.OrganizationService/CreateAdminUser',
    request,
    metadata || {},
    this.methodDescriptorCreateAdminUser);
  }

}

