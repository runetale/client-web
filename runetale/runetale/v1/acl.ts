/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface CreateAclRequest {
  name: string;
  /** user ids */
  src: number[];
  /** user ids */
  dst: number[];
  proto: string;
  port: string;
}

export interface PatchAclRequest {
  /** acl id */
  id: number;
  name: string;
  /** user ids */
  src: number[];
  /** user ids */
  dst: number[];
  proto: string;
  port: string;
}

export interface GetAclRequest {
  id: number;
}

export interface GetAclsResponse {
  acls: AclResponse[];
}

export interface AclResponse {
  id: number;
  name: string;
  /** user ids */
  src: number[];
  /** user ids */
  dst: number[];
  proto: string;
  port: string;
  age: string;
}

function createBaseCreateAclRequest(): CreateAclRequest {
  return { name: "", src: [], dst: [], proto: "", port: "" };
}

export const CreateAclRequest = {
  encode(message: CreateAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    writer.uint32(18).fork();
    for (const v of message.src) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.dst) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(42).string(message.port);
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
        case 2:
          if (tag === 16) {
            message.src.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.src.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag === 24) {
            message.dst.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dst.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
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

  fromJSON(object: any): CreateAclRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.Number(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => globalThis.Number(e)) : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
    };
  },

  toJSON(message: CreateAclRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.src?.length) {
      obj.src = message.src.map((e) => Math.round(e));
    }
    if (message.dst?.length) {
      obj.dst = message.dst.map((e) => Math.round(e));
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAclRequest>, I>>(base?: I): CreateAclRequest {
    return CreateAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAclRequest>, I>>(object: I): CreateAclRequest {
    const message = createBaseCreateAclRequest();
    message.name = object.name ?? "";
    message.src = object.src?.map((e) => e) || [];
    message.dst = object.dst?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

function createBasePatchAclRequest(): PatchAclRequest {
  return { id: 0, name: "", src: [], dst: [], proto: "", port: "" };
}

export const PatchAclRequest = {
  encode(message: PatchAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    writer.uint32(26).fork();
    for (const v of message.src) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.dst) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(42).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(50).string(message.port);
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
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.src.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.src.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 4:
          if (tag === 32) {
            message.dst.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dst.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.Number(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => globalThis.Number(e)) : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
    };
  },

  toJSON(message: PatchAclRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.src?.length) {
      obj.src = message.src.map((e) => Math.round(e));
    }
    if (message.dst?.length) {
      obj.dst = message.dst.map((e) => Math.round(e));
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
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.src = object.src?.map((e) => e) || [];
    message.dst = object.dst?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

function createBaseGetAclRequest(): GetAclRequest {
  return { id: 0 };
}

export const GetAclRequest = {
  encode(message: GetAclRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAclRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAclRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAclRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetAclRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAclRequest>, I>>(base?: I): GetAclRequest {
    return GetAclRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAclRequest>, I>>(object: I): GetAclRequest {
    const message = createBaseGetAclRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetAclsResponse(): GetAclsResponse {
  return { acls: [] };
}

export const GetAclsResponse = {
  encode(message: GetAclsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acls) {
      AclResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAclsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAclsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.acls.push(AclResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAclsResponse {
    return { acls: globalThis.Array.isArray(object?.acls) ? object.acls.map((e: any) => AclResponse.fromJSON(e)) : [] };
  },

  toJSON(message: GetAclsResponse): unknown {
    const obj: any = {};
    if (message.acls?.length) {
      obj.acls = message.acls.map((e) => AclResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAclsResponse>, I>>(base?: I): GetAclsResponse {
    return GetAclsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAclsResponse>, I>>(object: I): GetAclsResponse {
    const message = createBaseGetAclsResponse();
    message.acls = object.acls?.map((e) => AclResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAclResponse(): AclResponse {
  return { id: 0, name: "", src: [], dst: [], proto: "", port: "", age: "" };
}

export const AclResponse = {
  encode(message: AclResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    writer.uint32(26).fork();
    for (const v of message.src) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.dst) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proto !== "") {
      writer.uint32(42).string(message.proto);
    }
    if (message.port !== "") {
      writer.uint32(50).string(message.port);
    }
    if (message.age !== "") {
      writer.uint32(58).string(message.age);
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
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.src.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.src.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 4:
          if (tag === 32) {
            message.dst.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dst.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proto = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.port = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.age = reader.string();
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
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      src: globalThis.Array.isArray(object?.src) ? object.src.map((e: any) => globalThis.Number(e)) : [],
      dst: globalThis.Array.isArray(object?.dst) ? object.dst.map((e: any) => globalThis.Number(e)) : [],
      proto: isSet(object.proto) ? globalThis.String(object.proto) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
      age: isSet(object.age) ? globalThis.String(object.age) : "",
    };
  },

  toJSON(message: AclResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.src?.length) {
      obj.src = message.src.map((e) => Math.round(e));
    }
    if (message.dst?.length) {
      obj.dst = message.dst.map((e) => Math.round(e));
    }
    if (message.proto !== "") {
      obj.proto = message.proto;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.age !== "") {
      obj.age = message.age;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AclResponse>, I>>(base?: I): AclResponse {
    return AclResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AclResponse>, I>>(object: I): AclResponse {
    const message = createBaseAclResponse();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.src = object.src?.map((e) => e) || [];
    message.dst = object.dst?.map((e) => e) || [];
    message.proto = object.proto ?? "";
    message.port = object.port ?? "";
    message.age = object.age ?? "";
    return message;
  },
};

export interface AclService {
  CreateAcl(request: DeepPartial<CreateAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  PatchAcl(request: DeepPartial<PatchAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  GetAcl(request: DeepPartial<GetAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse>;
  GetAcls(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetAclsResponse>;
}

export class AclServiceClientImpl implements AclService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAcl = this.CreateAcl.bind(this);
    this.PatchAcl = this.PatchAcl.bind(this);
    this.GetAcl = this.GetAcl.bind(this);
    this.GetAcls = this.GetAcls.bind(this);
  }

  CreateAcl(request: DeepPartial<CreateAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AclServiceCreateAclDesc, CreateAclRequest.fromPartial(request), metadata);
  }

  PatchAcl(request: DeepPartial<PatchAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AclServicePatchAclDesc, PatchAclRequest.fromPartial(request), metadata);
  }

  GetAcl(request: DeepPartial<GetAclRequest>, metadata?: grpc.Metadata): Promise<AclResponse> {
    return this.rpc.unary(AclServiceGetAclDesc, GetAclRequest.fromPartial(request), metadata);
  }

  GetAcls(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetAclsResponse> {
    return this.rpc.unary(AclServiceGetAclsDesc, Empty.fromPartial(request), metadata);
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

export const AclServiceGetAclDesc: UnaryMethodDefinitionish = {
  methodName: "GetAcl",
  service: AclServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetAclRequest.encode(this).finish();
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

export const AclServiceGetAclsDesc: UnaryMethodDefinitionish = {
  methodName: "GetAcls",
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
      const value = GetAclsResponse.decode(data);
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
