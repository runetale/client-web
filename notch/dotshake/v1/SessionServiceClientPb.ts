/**
 * @fileoverview gRPC-Web generated client stub for protos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as notch_dotshake_v1_session_pb from '../../../notch/dotshake/v1/session_pb';


export class SessionServiceClient {
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

  methodDescriptorSignIn = new grpcWeb.MethodDescriptor(
    '/protos.SessionService/SignIn',
    grpcWeb.MethodType.UNARY,
    notch_dotshake_v1_session_pb.SignInRequest,
    notch_dotshake_v1_session_pb.SignInResponse,
    (request: notch_dotshake_v1_session_pb.SignInRequest) => {
      return request.serializeBinary();
    },
    notch_dotshake_v1_session_pb.SignInResponse.deserializeBinary
  );

  signIn(
    request: notch_dotshake_v1_session_pb.SignInRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_dotshake_v1_session_pb.SignInResponse>;

  signIn(
    request: notch_dotshake_v1_session_pb.SignInRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_dotshake_v1_session_pb.SignInResponse) => void): grpcWeb.ClientReadableStream<notch_dotshake_v1_session_pb.SignInResponse>;

  signIn(
    request: notch_dotshake_v1_session_pb.SignInRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_dotshake_v1_session_pb.SignInResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.SessionService/SignIn',
        request,
        metadata || {},
        this.methodDescriptorSignIn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.SessionService/SignIn',
    request,
    metadata || {},
    this.methodDescriptorSignIn);
  }

  methodDescriptorCreatePeer = new grpcWeb.MethodDescriptor(
    '/protos.SessionService/CreatePeer',
    grpcWeb.MethodType.UNARY,
    notch_dotshake_v1_session_pb.CreatePeerRequest,
    notch_dotshake_v1_session_pb.CreatePeerResponse,
    (request: notch_dotshake_v1_session_pb.CreatePeerRequest) => {
      return request.serializeBinary();
    },
    notch_dotshake_v1_session_pb.CreatePeerResponse.deserializeBinary
  );

  createPeer(
    request: notch_dotshake_v1_session_pb.CreatePeerRequest,
    metadata: grpcWeb.Metadata | null): Promise<notch_dotshake_v1_session_pb.CreatePeerResponse>;

  createPeer(
    request: notch_dotshake_v1_session_pb.CreatePeerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notch_dotshake_v1_session_pb.CreatePeerResponse) => void): grpcWeb.ClientReadableStream<notch_dotshake_v1_session_pb.CreatePeerResponse>;

  createPeer(
    request: notch_dotshake_v1_session_pb.CreatePeerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notch_dotshake_v1_session_pb.CreatePeerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protos.SessionService/CreatePeer',
        request,
        metadata || {},
        this.methodDescriptorCreatePeer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protos.SessionService/CreatePeer',
    request,
    metadata || {},
    this.methodDescriptorCreatePeer);
  }

}

