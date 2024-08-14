// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.20.3
// source: runetale/runetale/v1/node.proto

/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
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
  nodeId: number;
  remoteNodeKey: string;
  remoteWgPubKey: string;
  allowedIPs: string[];
  ip: string;
  cidr: string;
}

export interface ComposeNodeResponse {
  ip: string;
  cidr: string;
}

export interface NetPortRange {
  /**
   * 以下のような形式
   * - IPv4 or IPv6の単一のIPアドレス
   * - "*" は全て許可
   * - "192.168.0.0/16" cidrが含まれたipの範囲
   */
  ip: string;
  /**
   * portのフォーマットは
   * - UDP or TCP portの番号を"0-65535"で指定する
   * - "80" などの単一のportの場合はlastにも同じポート番号が入る
   */
  ports: NetPortRange_portRange | undefined;
  advertisedRoute: string[];
}

export interface NetPortRange_portRange {
  first: number;
  last: number;
}

export interface FilterRule {
  /**
   * source ips,
   * - "192.168.0.0/16" cidrが含まれたipの範囲
   */
  srcIps: string[];
  /** dstのpeerのリスト */
  dsts: NetPortRange[];
  /**
   * 使用するプロトコル
   * https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml
   * 16進数で返ってくる
   * ICMPv4  = 0x01
   * ICMPv6  = 0x3a
   * TCP     = 0x06
   * UDP     = 0x11
   */
  iPProto: number[];
}

export interface NetworkMapResponse {
  /** このmapのsequential id */
  seq: number;
  /** このNodeの情報 */
  node:
    | Node
    | undefined;
  /**
   * このNodeがアクセスするpeers, つまりremote nodes
   * remote nodesのallowedIpsには自身のIP(remote nodeのIP)が入る
   */
  peers: Node[];
  /** Firewall Rules */
  packetFilter: FilterRule[];
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
  return { nodeId: 0, remoteNodeKey: "", remoteWgPubKey: "", allowedIPs: [], ip: "", cidr: "" };
}

export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== 0) {
      writer.uint32(8).uint64(message.nodeId);
    }
    if (message.remoteNodeKey !== "") {
      writer.uint32(18).string(message.remoteNodeKey);
    }
    if (message.remoteWgPubKey !== "") {
      writer.uint32(26).string(message.remoteWgPubKey);
    }
    for (const v of message.allowedIPs) {
      writer.uint32(34).string(v!);
    }
    if (message.ip !== "") {
      writer.uint32(42).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(50).string(message.cidr);
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
          if (tag !== 8) {
            break;
          }

          message.nodeId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteNodeKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.remoteWgPubKey = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allowedIPs.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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
      nodeId: isSet(object.nodeId) ? globalThis.Number(object.nodeId) : 0,
      remoteNodeKey: isSet(object.remoteNodeKey) ? globalThis.String(object.remoteNodeKey) : "",
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
    if (message.nodeId !== 0) {
      obj.nodeId = Math.round(message.nodeId);
    }
    if (message.remoteNodeKey !== "") {
      obj.remoteNodeKey = message.remoteNodeKey;
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
    message.nodeId = object.nodeId ?? 0;
    message.remoteNodeKey = object.remoteNodeKey ?? "";
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

function createBaseNetPortRange(): NetPortRange {
  return { ip: "", ports: undefined, advertisedRoute: [] };
}

export const NetPortRange = {
  encode(message: NetPortRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.ports !== undefined) {
      NetPortRange_portRange.encode(message.ports, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.advertisedRoute) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetPortRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetPortRange();
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

          message.ports = NetPortRange_portRange.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.advertisedRoute.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetPortRange {
    return {
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      ports: isSet(object.ports) ? NetPortRange_portRange.fromJSON(object.ports) : undefined,
      advertisedRoute: globalThis.Array.isArray(object?.advertisedRoute)
        ? object.advertisedRoute.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: NetPortRange): unknown {
    const obj: any = {};
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.ports !== undefined) {
      obj.ports = NetPortRange_portRange.toJSON(message.ports);
    }
    if (message.advertisedRoute?.length) {
      obj.advertisedRoute = message.advertisedRoute;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetPortRange>, I>>(base?: I): NetPortRange {
    return NetPortRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetPortRange>, I>>(object: I): NetPortRange {
    const message = createBaseNetPortRange();
    message.ip = object.ip ?? "";
    message.ports = (object.ports !== undefined && object.ports !== null)
      ? NetPortRange_portRange.fromPartial(object.ports)
      : undefined;
    message.advertisedRoute = object.advertisedRoute?.map((e) => e) || [];
    return message;
  },
};

function createBaseNetPortRange_portRange(): NetPortRange_portRange {
  return { first: 0, last: 0 };
}

export const NetPortRange_portRange = {
  encode(message: NetPortRange_portRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.first !== 0) {
      writer.uint32(8).uint64(message.first);
    }
    if (message.last !== 0) {
      writer.uint32(16).uint64(message.last);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetPortRange_portRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetPortRange_portRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.first = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.last = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetPortRange_portRange {
    return {
      first: isSet(object.first) ? globalThis.Number(object.first) : 0,
      last: isSet(object.last) ? globalThis.Number(object.last) : 0,
    };
  },

  toJSON(message: NetPortRange_portRange): unknown {
    const obj: any = {};
    if (message.first !== 0) {
      obj.first = Math.round(message.first);
    }
    if (message.last !== 0) {
      obj.last = Math.round(message.last);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetPortRange_portRange>, I>>(base?: I): NetPortRange_portRange {
    return NetPortRange_portRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetPortRange_portRange>, I>>(object: I): NetPortRange_portRange {
    const message = createBaseNetPortRange_portRange();
    message.first = object.first ?? 0;
    message.last = object.last ?? 0;
    return message;
  },
};

function createBaseFilterRule(): FilterRule {
  return { srcIps: [], dsts: [], iPProto: [] };
}

export const FilterRule = {
  encode(message: FilterRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.srcIps) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.dsts) {
      NetPortRange.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.iPProto) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FilterRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilterRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.srcIps.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dsts.push(NetPortRange.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag === 24) {
            message.iPProto.push(reader.uint32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.iPProto.push(reader.uint32());
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

  fromJSON(object: any): FilterRule {
    return {
      srcIps: globalThis.Array.isArray(object?.srcIps) ? object.srcIps.map((e: any) => globalThis.String(e)) : [],
      dsts: globalThis.Array.isArray(object?.dsts) ? object.dsts.map((e: any) => NetPortRange.fromJSON(e)) : [],
      iPProto: globalThis.Array.isArray(object?.iPProto) ? object.iPProto.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: FilterRule): unknown {
    const obj: any = {};
    if (message.srcIps?.length) {
      obj.srcIps = message.srcIps;
    }
    if (message.dsts?.length) {
      obj.dsts = message.dsts.map((e) => NetPortRange.toJSON(e));
    }
    if (message.iPProto?.length) {
      obj.iPProto = message.iPProto.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FilterRule>, I>>(base?: I): FilterRule {
    return FilterRule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FilterRule>, I>>(object: I): FilterRule {
    const message = createBaseFilterRule();
    message.srcIps = object.srcIps?.map((e) => e) || [];
    message.dsts = object.dsts?.map((e) => NetPortRange.fromPartial(e)) || [];
    message.iPProto = object.iPProto?.map((e) => e) || [];
    return message;
  },
};

function createBaseNetworkMapResponse(): NetworkMapResponse {
  return { seq: 0, node: undefined, peers: [], packetFilter: [] };
}

export const NetworkMapResponse = {
  encode(message: NetworkMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seq !== 0) {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.peers) {
      Node.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.packetFilter) {
      FilterRule.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkMapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.seq = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.node = Node.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.peers.push(Node.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.packetFilter.push(FilterRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkMapResponse {
    return {
      seq: isSet(object.seq) ? globalThis.Number(object.seq) : 0,
      node: isSet(object.node) ? Node.fromJSON(object.node) : undefined,
      peers: globalThis.Array.isArray(object?.peers) ? object.peers.map((e: any) => Node.fromJSON(e)) : [],
      packetFilter: globalThis.Array.isArray(object?.packetFilter)
        ? object.packetFilter.map((e: any) => FilterRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NetworkMapResponse): unknown {
    const obj: any = {};
    if (message.seq !== 0) {
      obj.seq = Math.round(message.seq);
    }
    if (message.node !== undefined) {
      obj.node = Node.toJSON(message.node);
    }
    if (message.peers?.length) {
      obj.peers = message.peers.map((e) => Node.toJSON(e));
    }
    if (message.packetFilter?.length) {
      obj.packetFilter = message.packetFilter.map((e) => FilterRule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkMapResponse>, I>>(base?: I): NetworkMapResponse {
    return NetworkMapResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkMapResponse>, I>>(object: I): NetworkMapResponse {
    const message = createBaseNetworkMapResponse();
    message.seq = object.seq ?? 0;
    message.node = (object.node !== undefined && object.node !== null) ? Node.fromPartial(object.node) : undefined;
    message.peers = object.peers?.map((e) => Node.fromPartial(e)) || [];
    message.packetFilter = object.packetFilter?.map((e) => FilterRule.fromPartial(e)) || [];
    return message;
  },
};

export interface NodeService {
  SyncRemoteNodesConfig(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<SyncNodesResponse>;
  ComposeNode(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<ComposeNodeResponse>;
  /** todo:(snt) remove syncRemoteNodesConfig */
  GetNetworkMap(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<NetworkMapResponse>;
}

export class NodeServiceClientImpl implements NodeService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SyncRemoteNodesConfig = this.SyncRemoteNodesConfig.bind(this);
    this.ComposeNode = this.ComposeNode.bind(this);
    this.GetNetworkMap = this.GetNetworkMap.bind(this);
  }

  SyncRemoteNodesConfig(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<SyncNodesResponse> {
    return this.rpc.unary(NodeServiceSyncRemoteNodesConfigDesc, Empty.fromPartial(request), metadata);
  }

  ComposeNode(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<ComposeNodeResponse> {
    return this.rpc.unary(NodeServiceComposeNodeDesc, Empty.fromPartial(request), metadata);
  }

  GetNetworkMap(request: DeepPartial<Empty>, metadata?: grpc.Metadata): Promise<NetworkMapResponse> {
    return this.rpc.unary(NodeServiceGetNetworkMapDesc, Empty.fromPartial(request), metadata);
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

export const NodeServiceGetNetworkMapDesc: UnaryMethodDefinitionish = {
  methodName: "GetNetworkMap",
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
      const value = NetworkMapResponse.decode(data);
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
  if (long.lt(globalThis.Number.MIN_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
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
