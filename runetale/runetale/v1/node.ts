// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.1
//   protoc               v3.20.3
// source: runetale/runetale/v1/node.proto

/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export interface SyncNodesResponse {
  isEmpty: boolean;
  remoteNodes: Node[];
  /** host ip */
  ip: string;
  /** host cidr */
  cidr: string;
}

export interface Node {
  remoteClientNodeKey: string;
  remoteWgPubKey: string;
  allowedIPs: string[];
  ip: string;
  cidr: string;
}

export interface ComposeNodeResponse {
  ip: string;
  cidr: string;
}

function createBaseSyncNodesResponse(): SyncNodesResponse {
  return { isEmpty: false, remoteNodes: [], ip: "", cidr: "" };
}

export const SyncNodesResponse = {
  encode(message: SyncNodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isEmpty !== false) {
      writer.uint32(8).bool(message.isEmpty);
    }
    for (const v of message.remoteNodes) {
      Node.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(34).string(message.cidr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncNodesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncNodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isEmpty = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteNodes.push(Node.decode(reader, reader.uint32()));
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

          message.cidr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SyncNodesResponse {
    return {
      isEmpty: isSet(object.isEmpty) ? globalThis.Boolean(object.isEmpty) : false,
      remoteNodes: globalThis.Array.isArray(object?.remoteNodes)
        ? object.remoteNodes.map((e: any) => Node.fromJSON(e))
        : [],
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      cidr: isSet(object.cidr) ? globalThis.String(object.cidr) : "",
    };
  },

  toJSON(message: SyncNodesResponse): unknown {
    const obj: any = {};
    if (message.isEmpty !== false) {
      obj.isEmpty = message.isEmpty;
    }
    if (message.remoteNodes?.length) {
      obj.remoteNodes = message.remoteNodes.map((e) => Node.toJSON(e));
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.cidr !== "") {
      obj.cidr = message.cidr;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncNodesResponse>, I>>(base?: I): SyncNodesResponse {
    return SyncNodesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncNodesResponse>, I>>(object: I): SyncNodesResponse {
    const message = createBaseSyncNodesResponse();
    message.isEmpty = object.isEmpty ?? false;
    message.remoteNodes = object.remoteNodes?.map((e) => Node.fromPartial(e)) || [];
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    return message;
  },
};

function createBaseNode(): Node {
  return { remoteClientNodeKey: "", remoteWgPubKey: "", allowedIPs: [], ip: "", cidr: "" };
}

export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remoteClientNodeKey !== "") {
      writer.uint32(10).string(message.remoteClientNodeKey);
    }
    if (message.remoteWgPubKey !== "") {
      writer.uint32(18).string(message.remoteWgPubKey);
    }
    for (const v of message.allowedIPs) {
      writer.uint32(26).string(v!);
    }
    if (message.ip !== "") {
      writer.uint32(34).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(42).string(message.cidr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.remoteClientNodeKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteWgPubKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allowedIPs.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cidr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Node {
    return {
      remoteClientNodeKey: isSet(object.remoteClientNodeKey) ? globalThis.String(object.remoteClientNodeKey) : "",
      remoteWgPubKey: isSet(object.remoteWgPubKey) ? globalThis.String(object.remoteWgPubKey) : "",
      allowedIPs: globalThis.Array.isArray(object?.allowedIPs)
        ? object.allowedIPs.map((e: any) => globalThis.String(e))
        : [],
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      cidr: isSet(object.cidr) ? globalThis.String(object.cidr) : "",
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    if (message.remoteClientNodeKey !== "") {
      obj.remoteClientNodeKey = message.remoteClientNodeKey;
    }
    if (message.remoteWgPubKey !== "") {
      obj.remoteWgPubKey = message.remoteWgPubKey;
    }
    if (message.allowedIPs?.length) {
      obj.allowedIPs = message.allowedIPs;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.cidr !== "") {
      obj.cidr = message.cidr;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Node>, I>>(base?: I): Node {
    return Node.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Node>, I>>(object: I): Node {
    const message = createBaseNode();
    message.remoteClientNodeKey = object.remoteClientNodeKey ?? "";
    message.remoteWgPubKey = object.remoteWgPubKey ?? "";
    message.allowedIPs = object.allowedIPs?.map((e) => e) || [];
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    return message;
  },
};

function createBaseComposeNodeResponse(): ComposeNodeResponse {
  return { ip: "", cidr: "" };
}

export const ComposeNodeResponse = {
  encode(message: ComposeNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(18).string(message.cidr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComposeNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComposeNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cidr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ComposeNodeResponse {
    return {
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      cidr: isSet(object.cidr) ? globalThis.String(object.cidr) : "",
    };
  },

  toJSON(message: ComposeNodeResponse): unknown {
    const obj: any = {};
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.cidr !== "") {
      obj.cidr = message.cidr;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ComposeNodeResponse>, I>>(base?: I): ComposeNodeResponse {
    return ComposeNodeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ComposeNodeResponse>, I>>(object: I): ComposeNodeResponse {
    const message = createBaseComposeNodeResponse();
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    return message;
  },
};

export interface NodeService {
  SyncRemoteNodesConfig(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<SyncNodesResponse>;
  ComposeNode(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<ComposeNodeResponse>;
}

export class NodeServiceClientImpl implements NodeService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SyncRemoteNodesConfig = this.SyncRemoteNodesConfig.bind(this);
    this.ComposeNode = this.ComposeNode.bind(this);
  }

  SyncRemoteNodesConfig(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<SyncNodesResponse> {
    return this.rpc.unary(NodeServiceSyncRemoteNodesConfigDesc, Empty.fromPartial(request), metadata);
  }

  ComposeNode(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<ComposeNodeResponse> {
    return this.rpc.unary(NodeServiceComposeNodeDesc, Empty.fromPartial(request), metadata);
  }
}

export const NodeServiceDesc = { serviceName: "protos.NodeService" };

export const NodeServiceSyncRemoteNodesConfigDesc: UnaryMethodDefinitionish = {
  methodName: "SyncRemoteNodesConfig",
  service: NodeServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SyncNodesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const NodeServiceComposeNodeDesc: UnaryMethodDefinitionish = {
  methodName: "ComposeNode",
  service: NodeServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ComposeNodeResponse.decode(data);
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