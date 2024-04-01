/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { KeyValue } from "./key_value";

export const protobufPackage = "protos";

export enum DeploymentMethod {
  DOCKER = 0,
  CLI = 1,
  LINUX = 2,
  GCP = 3,
  MANUAL = 4,
  UNRECOGNIZED = -1,
}

export function deploymentMethodFromJSON(object: any): DeploymentMethod {
  switch (object) {
    case 0:
    case "DOCKER":
      return DeploymentMethod.DOCKER;
    case 1:
    case "CLI":
      return DeploymentMethod.CLI;
    case 2:
    case "LINUX":
      return DeploymentMethod.LINUX;
    case 3:
    case "GCP":
      return DeploymentMethod.GCP;
    case 4:
    case "MANUAL":
      return DeploymentMethod.MANUAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeploymentMethod.UNRECOGNIZED;
  }
}

export function deploymentMethodToJSON(object: DeploymentMethod): string {
  switch (object) {
    case DeploymentMethod.DOCKER:
      return "DOCKER";
    case DeploymentMethod.CLI:
      return "CLI";
    case DeploymentMethod.LINUX:
      return "LINUX";
    case DeploymentMethod.GCP:
      return "GCP";
    case DeploymentMethod.MANUAL:
      return "MANUAL";
    case DeploymentMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CreateResourceRequest {
  name: string;
}

export interface GenerateTokenRequest {
  deploymentMethod: DeploymentMethod;
}

export interface GenerateTokenResponse {
  token: string;
}

export interface PatchResourceRequest {
  name: string;
}

export interface GetResourceRequest {
  id: number;
}

export interface GetResourcesResponse {
  resources: ResourceResponse[];
}

export interface ResourceResponse {
  id: number;
  name: string;
  ip: string;
  fleets: KeyValue[];
  os: string;
  status: boolean;
  createdBy: string;
}

function createBaseCreateResourceRequest(): CreateResourceRequest {
  return { name: "" };
}

export const CreateResourceRequest = {
  encode(message: CreateResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceRequest();
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

  fromJSON(object: any): CreateResourceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: CreateResourceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(base?: I): CreateResourceRequest {
    return CreateResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceRequest>, I>>(object: I): CreateResourceRequest {
    const message = createBaseCreateResourceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGenerateTokenRequest(): GenerateTokenRequest {
  return { deploymentMethod: 0 };
}

export const GenerateTokenRequest = {
  encode(message: GenerateTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentMethod !== 0) {
      writer.uint32(8).int32(message.deploymentMethod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deploymentMethod = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateTokenRequest {
    return { deploymentMethod: isSet(object.deploymentMethod) ? deploymentMethodFromJSON(object.deploymentMethod) : 0 };
  },

  toJSON(message: GenerateTokenRequest): unknown {
    const obj: any = {};
    if (message.deploymentMethod !== 0) {
      obj.deploymentMethod = deploymentMethodToJSON(message.deploymentMethod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateTokenRequest>, I>>(base?: I): GenerateTokenRequest {
    return GenerateTokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateTokenRequest>, I>>(object: I): GenerateTokenRequest {
    const message = createBaseGenerateTokenRequest();
    message.deploymentMethod = object.deploymentMethod ?? 0;
    return message;
  },
};

function createBaseGenerateTokenResponse(): GenerateTokenResponse {
  return { token: "" };
}

export const GenerateTokenResponse = {
  encode(message: GenerateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateTokenResponse {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: GenerateTokenResponse): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateTokenResponse>, I>>(base?: I): GenerateTokenResponse {
    return GenerateTokenResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenerateTokenResponse>, I>>(object: I): GenerateTokenResponse {
    const message = createBaseGenerateTokenResponse();
    message.token = object.token ?? "";
    return message;
  },
};

function createBasePatchResourceRequest(): PatchResourceRequest {
  return { name: "" };
}

export const PatchResourceRequest = {
  encode(message: PatchResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PatchResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchResourceRequest();
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

  fromJSON(object: any): PatchResourceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: PatchResourceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PatchResourceRequest>, I>>(base?: I): PatchResourceRequest {
    return PatchResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PatchResourceRequest>, I>>(object: I): PatchResourceRequest {
    const message = createBasePatchResourceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetResourceRequest(): GetResourceRequest {
  return { id: 0 };
}

export const GetResourceRequest = {
  encode(message: GetResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourceRequest();
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

  fromJSON(object: any): GetResourceRequest {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: GetResourceRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourceRequest>, I>>(base?: I): GetResourceRequest {
    return GetResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourceRequest>, I>>(object: I): GetResourceRequest {
    const message = createBaseGetResourceRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetResourcesResponse(): GetResourcesResponse {
  return { resources: [] };
}

export const GetResourcesResponse = {
  encode(message: GetResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      ResourceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources.push(ResourceResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResourcesResponse {
    return {
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => ResourceResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => ResourceResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourcesResponse>, I>>(base?: I): GetResourcesResponse {
    return GetResourcesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResourcesResponse>, I>>(object: I): GetResourcesResponse {
    const message = createBaseGetResourcesResponse();
    message.resources = object.resources?.map((e) => ResourceResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceResponse(): ResourceResponse {
  return { id: 0, name: "", ip: "", fleets: [], os: "", status: false, createdBy: "" };
}

export const ResourceResponse = {
  encode(message: ResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    for (const v of message.fleets) {
      KeyValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.os !== "") {
      writer.uint32(42).string(message.os);
    }
    if (message.status !== false) {
      writer.uint32(48).bool(message.status);
    }
    if (message.createdBy !== "") {
      writer.uint32(58).string(message.createdBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceResponse();
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
          if (tag !== 26) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fleets.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.os = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdBy = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceResponse {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      fleets: globalThis.Array.isArray(object?.fleets) ? object.fleets.map((e: any) => KeyValue.fromJSON(e)) : [],
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      status: isSet(object.status) ? globalThis.Boolean(object.status) : false,
      createdBy: isSet(object.createdBy) ? globalThis.String(object.createdBy) : "",
    };
  },

  toJSON(message: ResourceResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.fleets?.length) {
      obj.fleets = message.fleets.map((e) => KeyValue.toJSON(e));
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.status !== false) {
      obj.status = message.status;
    }
    if (message.createdBy !== "") {
      obj.createdBy = message.createdBy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceResponse>, I>>(base?: I): ResourceResponse {
    return ResourceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResourceResponse>, I>>(object: I): ResourceResponse {
    const message = createBaseResourceResponse();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.ip = object.ip ?? "";
    message.fleets = object.fleets?.map((e) => KeyValue.fromPartial(e)) || [];
    message.os = object.os ?? "";
    message.status = object.status ?? false;
    message.createdBy = object.createdBy ?? "";
    return message;
  },
};

export interface ResourceService {
  CreateResource(request: DeepPartial<CreateResourceRequest>, metadata?: grpc.Metadata): Promise<ResourceResponse>;
  GenerateToken(request: DeepPartial<GenerateTokenRequest>, metadata?: grpc.Metadata): Promise<GenerateTokenResponse>;
  PatchResource(request: DeepPartial<PatchResourceRequest>, metadata?: grpc.Metadata): Promise<ResourceResponse>;
  GetResource(request: DeepPartial<GetResourceRequest>, metadata?: grpc.Metadata): Promise<ResourceResponse>;
  GetResources(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetResourcesResponse>;
}

export class ResourceServiceClientImpl implements ResourceService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateResource = this.CreateResource.bind(this);
    this.GenerateToken = this.GenerateToken.bind(this);
    this.PatchResource = this.PatchResource.bind(this);
    this.GetResource = this.GetResource.bind(this);
    this.GetResources = this.GetResources.bind(this);
  }

  CreateResource(request: DeepPartial<CreateResourceRequest>, metadata?: grpc.Metadata): Promise<ResourceResponse> {
    return this.rpc.unary(ResourceServiceCreateResourceDesc, CreateResourceRequest.fromPartial(request), metadata);
  }

  GenerateToken(request: DeepPartial<GenerateTokenRequest>, metadata?: grpc.Metadata): Promise<GenerateTokenResponse> {
    return this.rpc.unary(ResourceServiceGenerateTokenDesc, GenerateTokenRequest.fromPartial(request), metadata);
  }

  PatchResource(request: DeepPartial<PatchResourceRequest>, metadata?: grpc.Metadata): Promise<ResourceResponse> {
    return this.rpc.unary(ResourceServicePatchResourceDesc, PatchResourceRequest.fromPartial(request), metadata);
  }

  GetResource(request: DeepPartial<GetResourceRequest>, metadata?: grpc.Metadata): Promise<ResourceResponse> {
    return this.rpc.unary(ResourceServiceGetResourceDesc, GetResourceRequest.fromPartial(request), metadata);
  }

  GetResources(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetResourcesResponse> {
    return this.rpc.unary(ResourceServiceGetResourcesDesc, Empty.fromPartial(request), metadata);
  }
}

export const ResourceServiceDesc = { serviceName: "protos.ResourceService" };

export const ResourceServiceCreateResourceDesc: UnaryMethodDefinitionish = {
  methodName: "CreateResource",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CreateResourceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ResourceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ResourceServiceGenerateTokenDesc: UnaryMethodDefinitionish = {
  methodName: "GenerateToken",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GenerateTokenRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GenerateTokenResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ResourceServicePatchResourceDesc: UnaryMethodDefinitionish = {
  methodName: "PatchResource",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PatchResourceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ResourceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ResourceServiceGetResourceDesc: UnaryMethodDefinitionish = {
  methodName: "GetResource",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetResourceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ResourceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ResourceServiceGetResourcesDesc: UnaryMethodDefinitionish = {
  methodName: "GetResources",
  service: ResourceServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetResourcesResponse.decode(data);
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
