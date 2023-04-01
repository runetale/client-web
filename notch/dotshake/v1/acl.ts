/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { Machine } from "./admin";

export const protobufPackage = "protos";

export interface Group {
  name: string;
  machines: Machine[];
}

export interface CreateGroupResponse {
  groups: Group | undefined;
}

export interface DeleteGroupResponse {
  group: Group | undefined;
}

export interface GetGroupResponse {
  groups: Group[];
}

function createBaseGroup(): Group {
  return { name: "", machines: [] };
}

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.machines) {
      Machine.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.machines.push(Machine.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Group {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      machines: Array.isArray(object?.machines) ? object.machines.map((e: any) => Machine.fromJSON(e)) : [],
    };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.machines) {
      obj.machines = message.machines.map((e) => e ? Machine.toJSON(e) : undefined);
    } else {
      obj.machines = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Group>, I>>(base?: I): Group {
    return Group.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.name = object.name ?? "";
    message.machines = object.machines?.map((e) => Machine.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateGroupResponse(): CreateGroupResponse {
  return { groups: undefined };
}

export const CreateGroupResponse = {
  encode(message: CreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groups !== undefined) {
      Group.encode(message.groups, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groups = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGroupResponse {
    return { groups: isSet(object.groups) ? Group.fromJSON(object.groups) : undefined };
  },

  toJSON(message: CreateGroupResponse): unknown {
    const obj: any = {};
    message.groups !== undefined && (obj.groups = message.groups ? Group.toJSON(message.groups) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGroupResponse>, I>>(base?: I): CreateGroupResponse {
    return CreateGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateGroupResponse>, I>>(object: I): CreateGroupResponse {
    const message = createBaseCreateGroupResponse();
    message.groups = (object.groups !== undefined && object.groups !== null)
      ? Group.fromPartial(object.groups)
      : undefined;
    return message;
  },
};

function createBaseDeleteGroupResponse(): DeleteGroupResponse {
  return { group: undefined };
}

export const DeleteGroupResponse = {
  encode(message: DeleteGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupResponse {
    return { group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: DeleteGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupResponse>, I>>(base?: I): DeleteGroupResponse {
    return DeleteGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteGroupResponse>, I>>(object: I): DeleteGroupResponse {
    const message = createBaseDeleteGroupResponse();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

function createBaseGetGroupResponse(): GetGroupResponse {
  return { groups: [] };
}

export const GetGroupResponse = {
  encode(message: GetGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupResponse {
    return { groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [] };
  },

  toJSON(message: GetGroupResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? Group.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupResponse>, I>>(base?: I): GetGroupResponse {
    return GetGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupResponse>, I>>(object: I): GetGroupResponse {
    const message = createBaseGetGroupResponse();
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

export interface ACLService {
  CreateGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<CreateGroupResponse>;
  DeleteGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<DeleteGroupResponse>;
  GetGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetGroupResponse>;
}

export class ACLServiceClientImpl implements ACLService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGroup = this.CreateGroup.bind(this);
    this.DeleteGroup = this.DeleteGroup.bind(this);
    this.GetGroup = this.GetGroup.bind(this);
  }

  CreateGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<CreateGroupResponse> {
    return this.rpc.unary(ACLServiceCreateGroupDesc, Empty.fromPartial(request), metadata);
  }

  DeleteGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<DeleteGroupResponse> {
    return this.rpc.unary(ACLServiceDeleteGroupDesc, Empty.fromPartial(request), metadata);
  }

  GetGroup(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<GetGroupResponse> {
    return this.rpc.unary(ACLServiceGetGroupDesc, Empty.fromPartial(request), metadata);
  }
}

export const ACLServiceDesc = { serviceName: "protos.ACLService" };

export const ACLServiceCreateGroupDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroup",
  service: ACLServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = CreateGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ACLServiceDeleteGroupDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteGroup",
  service: ACLServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ACLServiceGetGroupDesc: UnaryMethodDefinitionish = {
  methodName: "GetGroup",
  service: ACLServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetGroupResponse.decode(data);
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
