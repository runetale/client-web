/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "protos";

export interface CreateDefaultAdminNetworkRequest {
  companyName: string;
  userID: string;
  email: string;
}

export interface CreateDefaultAdminNetworkResponse {
  organizationID: string;
}

export interface LoginNetworkRequest {
  networkName: string;
  userID: string;
}

export interface LoginNetworkResponse {
  organizationID: string;
}

function createBaseCreateDefaultAdminNetworkRequest(): CreateDefaultAdminNetworkRequest {
  return { companyName: "", userID: "", email: "" };
}

export const CreateDefaultAdminNetworkRequest = {
  encode(
    message: CreateDefaultAdminNetworkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.companyName !== "") {
      writer.uint32(10).string(message.companyName);
    }
    if (message.userID !== "") {
      writer.uint32(18).string(message.userID);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDefaultAdminNetworkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDefaultAdminNetworkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.companyName = reader.string();
          break;
        case 2:
          message.userID = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDefaultAdminNetworkRequest {
    return {
      companyName: isSet(object.companyName) ? String(object.companyName) : "",
      userID: isSet(object.userID) ? String(object.userID) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: CreateDefaultAdminNetworkRequest): unknown {
    const obj: any = {};
    message.companyName !== undefined &&
      (obj.companyName = message.companyName);
    message.userID !== undefined && (obj.userID = message.userID);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateDefaultAdminNetworkRequest>, I>
  >(object: I): CreateDefaultAdminNetworkRequest {
    const message = createBaseCreateDefaultAdminNetworkRequest();
    message.companyName = object.companyName ?? "";
    message.userID = object.userID ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseCreateDefaultAdminNetworkResponse(): CreateDefaultAdminNetworkResponse {
  return { organizationID: "" };
}

export const CreateDefaultAdminNetworkResponse = {
  encode(
    message: CreateDefaultAdminNetworkResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.organizationID !== "") {
      writer.uint32(10).string(message.organizationID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDefaultAdminNetworkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDefaultAdminNetworkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizationID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDefaultAdminNetworkResponse {
    return {
      organizationID: isSet(object.organizationID)
        ? String(object.organizationID)
        : "",
    };
  },

  toJSON(message: CreateDefaultAdminNetworkResponse): unknown {
    const obj: any = {};
    message.organizationID !== undefined &&
      (obj.organizationID = message.organizationID);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CreateDefaultAdminNetworkResponse>, I>
  >(object: I): CreateDefaultAdminNetworkResponse {
    const message = createBaseCreateDefaultAdminNetworkResponse();
    message.organizationID = object.organizationID ?? "";
    return message;
  },
};

function createBaseLoginNetworkRequest(): LoginNetworkRequest {
  return { networkName: "", userID: "" };
}

export const LoginNetworkRequest = {
  encode(
    message: LoginNetworkRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkName !== "") {
      writer.uint32(10).string(message.networkName);
    }
    if (message.userID !== "") {
      writer.uint32(18).string(message.userID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginNetworkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginNetworkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkName = reader.string();
          break;
        case 2:
          message.userID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginNetworkRequest {
    return {
      networkName: isSet(object.networkName) ? String(object.networkName) : "",
      userID: isSet(object.userID) ? String(object.userID) : "",
    };
  },

  toJSON(message: LoginNetworkRequest): unknown {
    const obj: any = {};
    message.networkName !== undefined &&
      (obj.networkName = message.networkName);
    message.userID !== undefined && (obj.userID = message.userID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoginNetworkRequest>, I>>(
    object: I
  ): LoginNetworkRequest {
    const message = createBaseLoginNetworkRequest();
    message.networkName = object.networkName ?? "";
    message.userID = object.userID ?? "";
    return message;
  },
};

function createBaseLoginNetworkResponse(): LoginNetworkResponse {
  return { organizationID: "" };
}

export const LoginNetworkResponse = {
  encode(
    message: LoginNetworkResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.organizationID !== "") {
      writer.uint32(10).string(message.organizationID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoginNetworkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginNetworkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizationID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginNetworkResponse {
    return {
      organizationID: isSet(object.organizationID)
        ? String(object.organizationID)
        : "",
    };
  },

  toJSON(message: LoginNetworkResponse): unknown {
    const obj: any = {};
    message.organizationID !== undefined &&
      (obj.organizationID = message.organizationID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoginNetworkResponse>, I>>(
    object: I
  ): LoginNetworkResponse {
    const message = createBaseLoginNetworkResponse();
    message.organizationID = object.organizationID ?? "";
    return message;
  },
};

export interface AdminNetworkService {
  CreateDefaultNetwork(
    request: DeepPartial<CreateDefaultAdminNetworkRequest>,
    metadata?: grpc.Metadata
  ): Promise<CreateDefaultAdminNetworkResponse>;
  LoginNetwork(
    request: DeepPartial<LoginNetworkRequest>,
    metadata?: grpc.Metadata
  ): Promise<LoginNetworkResponse>;
}

export class AdminNetworkServiceClientImpl implements AdminNetworkService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDefaultNetwork = this.CreateDefaultNetwork.bind(this);
    this.LoginNetwork = this.LoginNetwork.bind(this);
  }

  CreateDefaultNetwork(
    request: DeepPartial<CreateDefaultAdminNetworkRequest>,
    metadata?: grpc.Metadata
  ): Promise<CreateDefaultAdminNetworkResponse> {
    return this.rpc.unary(
      AdminNetworkServiceCreateDefaultNetworkDesc,
      CreateDefaultAdminNetworkRequest.fromPartial(request),
      metadata
    );
  }

  LoginNetwork(
    request: DeepPartial<LoginNetworkRequest>,
    metadata?: grpc.Metadata
  ): Promise<LoginNetworkResponse> {
    return this.rpc.unary(
      AdminNetworkServiceLoginNetworkDesc,
      LoginNetworkRequest.fromPartial(request),
      metadata
    );
  }
}

export const AdminNetworkServiceDesc = {
  serviceName: "protos.AdminNetworkService",
};

export const AdminNetworkServiceCreateDefaultNetworkDesc: UnaryMethodDefinitionish =
  {
    methodName: "CreateDefaultNetwork",
    service: AdminNetworkServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return CreateDefaultAdminNetworkRequest.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...CreateDefaultAdminNetworkResponse.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

export const AdminNetworkServiceLoginNetworkDesc: UnaryMethodDefinitionish = {
  methodName: "LoginNetwork",
  service: AdminNetworkServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return LoginNetworkRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...LoginNetworkResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
