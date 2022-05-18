/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "protos";

export interface GetMachineResponse {
  isRegistered: boolean;
  loginUrl: string;
  ip: string;
  cidr: string;
  signalHost: string;
  signalPort: number;
}

function createBaseGetMachineResponse(): GetMachineResponse {
  return {
    isRegistered: false,
    loginUrl: "",
    ip: "",
    cidr: "",
    signalHost: "",
    signalPort: 0,
  };
}

export const GetMachineResponse = {
  encode(
    message: GetMachineResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isRegistered === true) {
      writer.uint32(8).bool(message.isRegistered);
    }
    if (message.loginUrl !== "") {
      writer.uint32(18).string(message.loginUrl);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.cidr !== "") {
      writer.uint32(34).string(message.cidr);
    }
    if (message.signalHost !== "") {
      writer.uint32(42).string(message.signalHost);
    }
    if (message.signalPort !== 0) {
      writer.uint32(48).uint64(message.signalPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMachineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMachineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isRegistered = reader.bool();
          break;
        case 2:
          message.loginUrl = reader.string();
          break;
        case 3:
          message.ip = reader.string();
          break;
        case 4:
          message.cidr = reader.string();
          break;
        case 5:
          message.signalHost = reader.string();
          break;
        case 6:
          message.signalPort = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMachineResponse {
    return {
      isRegistered: isSet(object.isRegistered)
        ? Boolean(object.isRegistered)
        : false,
      loginUrl: isSet(object.loginUrl) ? String(object.loginUrl) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      cidr: isSet(object.cidr) ? String(object.cidr) : "",
      signalHost: isSet(object.signalHost) ? String(object.signalHost) : "",
      signalPort: isSet(object.signalPort) ? Number(object.signalPort) : 0,
    };
  },

  toJSON(message: GetMachineResponse): unknown {
    const obj: any = {};
    message.isRegistered !== undefined &&
      (obj.isRegistered = message.isRegistered);
    message.loginUrl !== undefined && (obj.loginUrl = message.loginUrl);
    message.ip !== undefined && (obj.ip = message.ip);
    message.cidr !== undefined && (obj.cidr = message.cidr);
    message.signalHost !== undefined && (obj.signalHost = message.signalHost);
    message.signalPort !== undefined &&
      (obj.signalPort = Math.round(message.signalPort));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMachineResponse>, I>>(
    object: I
  ): GetMachineResponse {
    const message = createBaseGetMachineResponse();
    message.isRegistered = object.isRegistered ?? false;
    message.loginUrl = object.loginUrl ?? "";
    message.ip = object.ip ?? "";
    message.cidr = object.cidr ?? "";
    message.signalHost = object.signalHost ?? "";
    message.signalPort = object.signalPort ?? 0;
    return message;
  },
};

export interface MachineService {
  GetMachine(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMachineResponse>;
}

export class MachineServiceClientImpl implements MachineService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMachine = this.GetMachine.bind(this);
  }

  GetMachine(
    request: DeepPartial<Empty>,
    metadata?: grpc.Metadata
  ): Promise<GetMachineResponse> {
    return this.rpc.unary(
      MachineServiceGetMachineDesc,
      Empty.fromPartial(request),
      metadata
    );
  }
}

export const MachineServiceDesc = {
  serviceName: "protos.MachineService",
};

export const MachineServiceGetMachineDesc: UnaryMethodDefinitionish = {
  methodName: "GetMachine",
  service: MachineServiceDesc,
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
        ...GetMachineResponse.decode(data),
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
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