/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "protos";

export interface Machine {
  domain: string;
  ip: string;
  cidr: string;
  host: string;
  os: string;
  isConnect: boolean;
}

export interface GetMachinesResponse {
  machines: Machine[];
}

function createBaseMachine(): Machine {
  return { domain: "", ip: "", cidr: "", host: "", os: "", isConnect: false };
}

export const Machine = {
  encode(
    message: Machine,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(26).string(message.cidr);
    }
    if (message.host !== "") {
      writer.uint32(34).string(message.host);
    }
    if (message.os !== "") {
      writer.uint32(42).string(message.os);
    }
    if (message.isConnect === true) {
      writer.uint32(48).bool(message.isConnect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Machine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMachine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.cidr = reader.string();
          break;
        case 4:
          message.host = reader.string();
          break;
        case 5:
          message.os = reader.string();
          break;
        case 6:
          message.isConnect = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Machine {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      cidr: isSet(object.cidr) ? String(object.cidr) : "",
      host: isSet(object.host) ? String(object.host) : "",
      os: isSet(object.os) ? String(object.os) : "",
      isConnect: isSet(object.isConnect) ? Boolean(object.isConnect) : false,
    };
  },

  toJSON(message: Machine): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.ip !== undefined && (obj.ip = message.ip);
    message.cidr !== undefined && (obj.cidr = message.cidr);
    message.host !== undefined && (obj.host = message.host);
    message.os !== undefined && (obj.os = message.os);
    message.isConnect !== undefined && (obj.isConnect = message.isConnect);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Machine>, I>>(object: I): Machine {
    const message = createBaseMachine();
    message.domain = object.domain ?? "";
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    message.host = object.host ?? "";
    message.os = object.os ?? "";
    message.isConnect = object.isConnect ?? false;
    return message;
  },
};

function createBaseGetMachinesResponse(): GetMachinesResponse {
  return { machines: [] };
}

export const GetMachinesResponse = {
  encode(
    message: GetMachinesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.machines) {
      Machine.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMachinesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMachinesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.machines.push(Machine.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMachinesResponse {
    return {
      machines: Array.isArray(object?.machines)
        ? object.machines.map((e: any) => Machine.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetMachinesResponse): unknown {
    const obj: any = {};
    if (message.machines) {
      obj.machines = message.machines.map((e) =>
        e ? Machine.toJSON(e) : undefined
      );
    } else {
      obj.machines = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMachinesResponse>, I>>(
    object: I
  ): GetMachinesResponse {
    const message = createBaseGetMachinesResponse();
    message.machines =
      object.machines?.map((e) => Machine.fromPartial(e)) || [];
    return message;
  },
};

export interface AdminService {
  GetMachines(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMachinesResponse>;
}

export class AdminServiceClientImpl implements AdminService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMachines = this.GetMachines.bind(this);
  }

  GetMachines(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMachinesResponse> {
    return this.rpc.unary(
      AdminServiceGetMachinesDesc,
      Empty.fromPartial(request),
      metadata
    );
  }
}

export const AdminServiceDesc = {
  serviceName: "protos.AdminService",
};

export const AdminServiceGetMachinesDesc: UnaryMethodDefinitionish = {
  methodName: "GetMachines",
  service: AdminServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return Empty.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetMachinesResponse.decode(data),
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
