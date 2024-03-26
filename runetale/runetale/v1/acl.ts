/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface CreateAclRequest {
  name: string;
}

export interface AclResponse {
  name: string;
  src: string[];
  dst: string[];
  proto: string;
  port: string;
}

export interface PatchAclRequest {
  name: string;
  src: string[];
  dst: string[];
  proto: string;
  port: string;
}

function createBaseCreateAclRequest(): CreateAclRequest {
  return { name: "" };
}

export const CreateAclRequest = {
  encode(message: CreateAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAclRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAclRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAclRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: CreateAclRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAclRequest>, I>>(base?: I): CreateAclRequest {
    return CreateAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAclRequest>, I>>(object: I): CreateAclRequest {
    const message = createBaseCreateAclRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAclResponse(): AclResponse {
  return { name: "", src: [], dst: [], proto: "", port: "" };
}

export const AclResponse = {
  encode(message: AclResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.src) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.dst) {
      writer.uint32(26).string(v!);
    }
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(42).string(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AclResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAclResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.src.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dst.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.port = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AclResponse {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.String(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => globalThis.String(e)) : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
    };
  },

  toJSON(message: AclResponse): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.src?.length) {
      obj.src = message.src;
    }
    if (message.dst?.length) {
      obj.dst = message.dst;
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AclResponse>, I>>(base?: I): AclResponse {
    return AclResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AclResponse>, I>>(object: I): AclResponse {
    const message = createBaseAclResponse();
    message.name = object.name ?? "";
    message.src = object.src?.map((e) => e) || [];
    message.dst = object.dst?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

function createBasePatchAclRequest(): PatchAclRequest {
  return { name: "", src: [], dst: [], proto: "", port: "" };
}

export const PatchAclRequest = {
  encode(message: PatchAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.src) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.dst) {
      writer.uint32(26).string(v!);
    }
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(42).string(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchAclRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchAclRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.src.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dst.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.port = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PatchAclRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.String(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => globalThis.String(e)) : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
    };
  },

  toJSON(message: PatchAclRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.src?.length) {
      obj.src = message.src;
    }
    if (message.dst?.length) {
      obj.dst = message.dst;
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchAclRequest>, I>>(base?: I): PatchAclRequest {
    return PatchAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchAclRequest>, I>>(object: I): PatchAclRequest {
    const message = createBasePatchAclRequest();
    message.name = object.name ?? "";
    message.src = object.src?.map((e) => e) || [];
    message.dst = object.dst?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

export interface AclService {
  CreateAcl(request: DeepPartial<CreateAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  GetAcl(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<AclResponse>;
  PatchAcl(request: DeepPartial<PatchAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
}

export class AclServiceClientImpl implements AclService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAcl = this.CreateAcl.bind(this);
    this.GetAcl = this.GetAcl.bind(this);
    this.PatchAcl = this.PatchAcl.bind(this);
  }

  CreateAcl(request: DeepPartial<CreateAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AclServiceCreateAclDesc, CreateAclRequest.fromPartial(request), metadata);
  }

  GetAcl(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AclServiceGetAclDesc, Empty.fromPartial(request), metadata);
  }

  PatchAcl(request: DeepPartial<PatchAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AclServicePatchAclDesc, PatchAclRequest.fromPartial(request), metadata);
  }
}

export const AclServiceDesc = { serviceName: "protos.AclService" };

export const AclServiceCreateAclDesc: UnaryMethodDefinitionish = {
  methodName: "CreateAcl",
  service: AclServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateAclRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AclResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AclServiceGetAclDesc: UnaryMethodDefinitionish = {
  methodName: "GetAcl",
  service: AclServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AclResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const AclServicePatchAclDesc: UnaryMethodDefinitionish = {
  methodName: "PatchAcl",
  service: AclServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchAclRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AclResponse.decode(data);
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
