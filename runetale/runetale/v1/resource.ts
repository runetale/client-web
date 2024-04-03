/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { DeploymentMethod, deploymentMethodFromJSON, deploymentMethodToJSON, Resource } from "./common";

export const protobufPackage = "protos";

export interface AddNewSrcsForResourceRequest {
  /** resource id */
  id: number;
  userIds: number[];
  groupIds: number[];
}

export interface AddFleetsRequest {
  /** resource id */
  id: number;
  fleetIds: number[];
}

export interface CreateResourceRequest {
  name: string;
}

export interface CreateResourceResponse {
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

export interface Resources {
  resources: Resource[];
}

function createBaseAddNewSrcsForResourceRequest(): AddNewSrcsForResourceRequest {
  return { id: 0, userIds: [], groupIds: [] };
}

export const AddNewSrcsForResourceRequest = {
  encode(message: AddNewSrcsForResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.userIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.groupIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNewSrcsForResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNewSrcsForResourceRequest();
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
          if (tag === 16) {
            message.userIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.userIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag === 24) {
            message.groupIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.groupIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddNewSrcsForResourceRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userIds: globalThis.Array.isArray(object?.userIds) ? object.userIds.map((e: any) => globalThis.Number(e)) : [],
      groupIds: globalThis.Array.isArray(object?.groupIds) ? object.groupIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: AddNewSrcsForResourceRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userIds?.length) {
      obj.userIds = message.userIds.map((e) => Math.round(e));
    }
    if (message.groupIds?.length) {
      obj.groupIds = message.groupIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddNewSrcsForResourceRequest>, I>>(base?: I): AddNewSrcsForResourceRequest {
    return AddNewSrcsForResourceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddNewSrcsForResourceRequest>, I>>(object: I): AddNewSrcsForResourceRequest {
    const message = createBaseAddNewSrcsForResourceRequest();
    message.id = object.id ?? 0;
    message.userIds = object.userIds?.map((e) => e) || [];
    message.groupIds = object.groupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseAddFleetsRequest(): AddFleetsRequest {
  return { id: 0, fleetIds: [] };
}

export const AddFleetsRequest = {
  encode(message: AddFleetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    writer.uint32(26).fork();
    for (const v of message.fleetIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddFleetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddFleetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag === 24) {
            message.fleetIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fleetIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddFleetsRequest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      fleetIds: globalThis.Array.isArray(object?.fleetIds) ? object.fleetIds.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: AddFleetsRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.fleetIds?.length) {
      obj.fleetIds = message.fleetIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddFleetsRequest>, I>>(base?: I): AddFleetsRequest {
    return AddFleetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddFleetsRequest>, I>>(object: I): AddFleetsRequest {
    const message = createBaseAddFleetsRequest();
    message.id = object.id ?? 0;
    message.fleetIds = object.fleetIds?.map((e) => e) || [];
    return message;
  },
};

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

function createBaseCreateResourceResponse(): CreateResourceResponse {
  return { name: "" };
}

export const CreateResourceResponse = {
  encode(message: CreateResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceResponse();
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

  fromJSON(object: any): CreateResourceResponse {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: CreateResourceResponse): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceResponse>, I>>(base?: I): CreateResourceResponse {
    return CreateResourceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateResourceResponse>, I>>(object: I): CreateResourceResponse {
    const message = createBaseCreateResourceResponse();
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

function createBaseResources(): Resources {
  return { resources: [] };
}

export const Resources = {
  encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resources {
    return {
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resources>, I>>(base?: I): Resources {
    return Resources.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resources>, I>>(object: I): Resources {
    const message = createBaseResources();
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

export interface ResourceService {
  CreateResource(
    request: DeepPartial<CreateResourceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CreateResourceResponse>;
  GenerateToken(request: DeepPartial<GenerateTokenRequest>, metadata?: grpc.Metadata): Promise<GenerateTokenResponse>;
  PatchResource(request: DeepPartial<PatchResourceRequest>, metadata?: grpc.Metadata): Promise<Resource>;
  GetResource(request: DeepPartial<GetResourceRequest>, metadata?: grpc.Metadata): Promise<Resource>;
  GetResources(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Resources>;
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

  CreateResource(
    request: DeepPartial<CreateResourceRequest>,
    metadata?: grpc.Metadata,
  ): Promise<CreateResourceResponse> {
    return this.rpc.unary(ResourceServiceCreateResourceDesc, CreateResourceRequest.fromPartial(request), metadata);
  }

  GenerateToken(request: DeepPartial<GenerateTokenRequest>, metadata?: grpc.Metadata): Promise<GenerateTokenResponse> {
    return this.rpc.unary(ResourceServiceGenerateTokenDesc, GenerateTokenRequest.fromPartial(request), metadata);
  }

  PatchResource(request: DeepPartial<PatchResourceRequest>, metadata?: grpc.Metadata): Promise<Resource> {
    return this.rpc.unary(ResourceServicePatchResourceDesc, PatchResourceRequest.fromPartial(request), metadata);
  }

  GetResource(request: DeepPartial<GetResourceRequest>, metadata?: grpc.Metadata): Promise<Resource> {
    return this.rpc.unary(ResourceServiceGetResourceDesc, GetResourceRequest.fromPartial(request), metadata);
  }

  GetResources(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<Resources> {
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
      const value = CreateResourceResponse.decode(data);
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
      const value = Resource.decode(data);
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
      const value = Resource.decode(data);
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
      const value = Resources.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface ResourceDetailService {
  AddNewSrcsForResource(request: DeepPartial<AddNewSrcsForResourceRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  AddFleets(request: DeepPartial<AddFleetsRequest>, metadata?: grpc.Metadata): Promise<Empty>;
}

export class ResourceDetailServiceClientImpl implements ResourceDetailService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddNewSrcsForResource = this.AddNewSrcsForResource.bind(this);
    this.AddFleets = this.AddFleets.bind(this);
  }

  AddNewSrcsForResource(request: DeepPartial<AddNewSrcsForResourceRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(
      ResourceDetailServiceAddNewSrcsForResourceDesc,
      AddNewSrcsForResourceRequest.fromPartial(request),
      metadata,
    );
  }

  AddFleets(request: DeepPartial<AddFleetsRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(ResourceDetailServiceAddFleetsDesc, AddFleetsRequest.fromPartial(request), metadata);
  }
}

export const ResourceDetailServiceDesc = { serviceName: "protos.ResourceDetailService" };

export const ResourceDetailServiceAddNewSrcsForResourceDesc: UnaryMethodDefinitionish = {
  methodName: "AddNewSrcsForResource",
  service: ResourceDetailServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddNewSrcsForResourceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Empty.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ResourceDetailServiceAddFleetsDesc: UnaryMethodDefinitionish = {
  methodName: "AddFleets",
  service: ResourceDetailServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddFleetsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Empty.decode(data);
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
