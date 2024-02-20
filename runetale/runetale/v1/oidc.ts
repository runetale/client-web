/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface LoginResponse {
  sub: string;
  tenantID: string;
  doamin: string;
  providerID: string;
  email: string;
  username: string;
}

export interface LoginRequest {
  sub: string;
  tenantID: string;
  doamin: string;
  providerID: string;
  email: string;
  username: string;
}

export interface AuthenticateResponse {
  doamin: string;
  email: string;
  username: string;
  sub: string;
  isRegistered: string;
}

function createBaseLoginResponse(): LoginResponse {
  return { sub: "", tenantID: "", doamin: "", providerID: "", email: "", username: "" };
}

export const LoginResponse = {
  encode(message: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sub !== "") {
      writer.uint32(10).string(message.sub);
    }
    if (message.tenantID !== "") {
      writer.uint32(18).string(message.tenantID);
    }
    if (message.doamin !== "") {
      writer.uint32(26).string(message.doamin);
    }
    if (message.providerID !== "") {
      writer.uint32(34).string(message.providerID);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.username !== "") {
      writer.uint32(50).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sub = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenantID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.doamin = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.providerID = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.username = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return {
      sub: isSet(object.sub) ? globalThis.String(object.sub) : "",
      tenantID: isSet(object.tenantID) ? globalThis.String(object.tenantID) : "",
      doamin: isSet(object.doamin) ? globalThis.String(object.doamin) : "",
      providerID: isSet(object.providerID) ? globalThis.String(object.providerID) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
    };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    if (message.sub !== "") {
      obj.sub = message.sub;
    }
    if (message.tenantID !== "") {
      obj.tenantID = message.tenantID;
    }
    if (message.doamin !== "") {
      obj.doamin = message.doamin;
    }
    if (message.providerID !== "") {
      obj.providerID = message.providerID;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse {
    return LoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.sub = object.sub ?? "";
    message.tenantID = object.tenantID ?? "";
    message.doamin = object.doamin ?? "";
    message.providerID = object.providerID ?? "";
    message.email = object.email ?? "";
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseLoginRequest(): LoginRequest {
  return { sub: "", tenantID: "", doamin: "", providerID: "", email: "", username: "" };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sub !== "") {
      writer.uint32(10).string(message.sub);
    }
    if (message.tenantID !== "") {
      writer.uint32(18).string(message.tenantID);
    }
    if (message.doamin !== "") {
      writer.uint32(26).string(message.doamin);
    }
    if (message.providerID !== "") {
      writer.uint32(34).string(message.providerID);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.username !== "") {
      writer.uint32(50).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sub = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenantID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.doamin = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.providerID = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.username = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      sub: isSet(object.sub) ? globalThis.String(object.sub) : "",
      tenantID: isSet(object.tenantID) ? globalThis.String(object.tenantID) : "",
      doamin: isSet(object.doamin) ? globalThis.String(object.doamin) : "",
      providerID: isSet(object.providerID) ? globalThis.String(object.providerID) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    if (message.sub !== "") {
      obj.sub = message.sub;
    }
    if (message.tenantID !== "") {
      obj.tenantID = message.tenantID;
    }
    if (message.doamin !== "") {
      obj.doamin = message.doamin;
    }
    if (message.providerID !== "") {
      obj.providerID = message.providerID;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.sub = object.sub ?? "";
    message.tenantID = object.tenantID ?? "";
    message.doamin = object.doamin ?? "";
    message.providerID = object.providerID ?? "";
    message.email = object.email ?? "";
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseAuthenticateResponse(): AuthenticateResponse {
  return { doamin: "", email: "", username: "", sub: "", isRegistered: "" };
}

export const AuthenticateResponse = {
  encode(message: AuthenticateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.doamin !== "") {
      writer.uint32(10).string(message.doamin);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.sub !== "") {
      writer.uint32(34).string(message.sub);
    }
    if (message.isRegistered !== "") {
      writer.uint32(42).string(message.isRegistered);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.doamin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.username = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sub = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.isRegistered = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthenticateResponse {
    return {
      doamin: isSet(object.doamin) ? globalThis.String(object.doamin) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      sub: isSet(object.sub) ? globalThis.String(object.sub) : "",
      isRegistered: isSet(object.isRegistered) ? globalThis.String(object.isRegistered) : "",
    };
  },

  toJSON(message: AuthenticateResponse): unknown {
    const obj: any = {};
    if (message.doamin !== "") {
      obj.doamin = message.doamin;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.sub !== "") {
      obj.sub = message.sub;
    }
    if (message.isRegistered !== "") {
      obj.isRegistered = message.isRegistered;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthenticateResponse>, I>>(base?: I): AuthenticateResponse {
    return AuthenticateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthenticateResponse>, I>>(object: I): AuthenticateResponse {
    const message = createBaseAuthenticateResponse();
    message.doamin = object.doamin ?? "";
    message.email = object.email ?? "";
    message.username = object.username ?? "";
    message.sub = object.sub ?? "";
    message.isRegistered = object.isRegistered ?? "";
    return message;
  },
};

export interface OIDCService {
  Login(request: DeepPartial<LoginRequest>, metadata?: grpc.Metadata): Promise<LoginResponse>;
  Authenticate(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<AuthenticateResponse>;
}

export class OIDCServiceClientImpl implements OIDCService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Login = this.Login.bind(this);
    this.Authenticate = this.Authenticate.bind(this);
  }

  Login(request: DeepPartial<LoginRequest>, metadata?: grpc.Metadata): Promise<LoginResponse> {
    return this.rpc.unary(OIDCServiceLoginDesc, LoginRequest.fromPartial(request), metadata);
  }

  Authenticate(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<AuthenticateResponse> {
    return this.rpc.unary(OIDCServiceAuthenticateDesc, Empty.fromPartial(request), metadata);
  }
}

export const OIDCServiceDesc = { serviceName: "protos.OIDCService" };

export const OIDCServiceLoginDesc: UnaryMethodDefinitionish = {
  methodName: "Login",
  service: OIDCServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return LoginRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = LoginResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const OIDCServiceAuthenticateDesc: UnaryMethodDefinitionish = {
  methodName: "Authenticate",
  service: OIDCServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AuthenticateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}