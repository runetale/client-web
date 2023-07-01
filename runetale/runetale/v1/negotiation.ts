/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export enum NegotiationType {
  OFFER = 0,
  ANSWER = 1,
  CANDIDATE = 2,
  UNRECOGNIZED = -1,
}

export function negotiationTypeFromJSON(object: any): NegotiationType {
  switch (object) {
    case 0:
    case "OFFER":
      return NegotiationType.OFFER;
    case 1:
    case "ANSWER":
      return NegotiationType.ANSWER;
    case 2:
    case "CANDIDATE":
      return NegotiationType.CANDIDATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NegotiationType.UNRECOGNIZED;
  }
}

export function negotiationTypeToJSON(object: NegotiationType): string {
  switch (object) {
    case NegotiationType.OFFER:
      return "OFFER";
    case NegotiationType.ANSWER:
      return "ANSWER";
    case NegotiationType.CANDIDATE:
      return "CANDIDATE";
    case NegotiationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NegotiationRequest {
  type: NegotiationType;
  /** remote machine key of the Peer you want to connect to */
  dstPeerMachineKey: string;
  /** wireGuard pub key of the Peer that sent the request (src) */
  srcWgPubKey: string;
  uFlag: string;
  pwd: string;
  candidate: string;
}

export interface NegotiationResponse {
  type: NegotiationType;
  /** machine key of the originating peer to be sent to the remote peer */
  dstPeerMachineKey: string;
  uFlag: string;
  pwd: string;
  candidate: string;
}

export interface HandshakeRequest {
  /** remote machine key of the Peer you want to connect to */
  dstPeerMachineKey: string;
  /** machine key of the originating peer to be sent to the remote peer */
  srcPeerMachineKey: string;
  uFlag: string;
  pwd: string;
}

export interface CandidateRequest {
  /** remote machine key of the Peer you want to connect to */
  dstPeerMachineKey: string;
  /** machine key of the originating peer to be sent to the remote peer */
  srcPeerMachineKey: string;
  candidate: string;
}

function createBaseNegotiationRequest(): NegotiationRequest {
  return { type: 0, dstPeerMachineKey: "", srcWgPubKey: "", uFlag: "", pwd: "", candidate: "" };
}

export const NegotiationRequest = {
  encode(message: NegotiationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.dstPeerMachineKey !== "") {
      writer.uint32(18).string(message.dstPeerMachineKey);
    }
    if (message.srcWgPubKey !== "") {
      writer.uint32(26).string(message.srcWgPubKey);
    }
    if (message.uFlag !== "") {
      writer.uint32(34).string(message.uFlag);
    }
    if (message.pwd !== "") {
      writer.uint32(42).string(message.pwd);
    }
    if (message.candidate !== "") {
      writer.uint32(50).string(message.candidate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NegotiationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNegotiationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dstPeerMachineKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.srcWgPubKey = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uFlag = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pwd = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.candidate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NegotiationRequest {
    return {
      type: isSet(object.type) ? negotiationTypeFromJSON(object.type) : 0,
      dstPeerMachineKey: isSet(object.dstPeerMachineKey) ? String(object.dstPeerMachineKey) : "",
      srcWgPubKey: isSet(object.srcWgPubKey) ? String(object.srcWgPubKey) : "",
      uFlag: isSet(object.uFlag) ? String(object.uFlag) : "",
      pwd: isSet(object.pwd) ? String(object.pwd) : "",
      candidate: isSet(object.candidate) ? String(object.candidate) : "",
    };
  },

  toJSON(message: NegotiationRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = negotiationTypeToJSON(message.type));
    message.dstPeerMachineKey !== undefined && (obj.dstPeerMachineKey = message.dstPeerMachineKey);
    message.srcWgPubKey !== undefined && (obj.srcWgPubKey = message.srcWgPubKey);
    message.uFlag !== undefined && (obj.uFlag = message.uFlag);
    message.pwd !== undefined && (obj.pwd = message.pwd);
    message.candidate !== undefined && (obj.candidate = message.candidate);
    return obj;
  },

  create<I extends Exact<DeepPartial<NegotiationRequest>, I>>(base?: I): NegotiationRequest {
    return NegotiationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NegotiationRequest>, I>>(object: I): NegotiationRequest {
    const message = createBaseNegotiationRequest();
    message.type = object.type ?? 0;
    message.dstPeerMachineKey = object.dstPeerMachineKey ?? "";
    message.srcWgPubKey = object.srcWgPubKey ?? "";
    message.uFlag = object.uFlag ?? "";
    message.pwd = object.pwd ?? "";
    message.candidate = object.candidate ?? "";
    return message;
  },
};

function createBaseNegotiationResponse(): NegotiationResponse {
  return { type: 0, dstPeerMachineKey: "", uFlag: "", pwd: "", candidate: "" };
}

export const NegotiationResponse = {
  encode(message: NegotiationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.dstPeerMachineKey !== "") {
      writer.uint32(18).string(message.dstPeerMachineKey);
    }
    if (message.uFlag !== "") {
      writer.uint32(26).string(message.uFlag);
    }
    if (message.pwd !== "") {
      writer.uint32(34).string(message.pwd);
    }
    if (message.candidate !== "") {
      writer.uint32(42).string(message.candidate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NegotiationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNegotiationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dstPeerMachineKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uFlag = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pwd = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.candidate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NegotiationResponse {
    return {
      type: isSet(object.type) ? negotiationTypeFromJSON(object.type) : 0,
      dstPeerMachineKey: isSet(object.dstPeerMachineKey) ? String(object.dstPeerMachineKey) : "",
      uFlag: isSet(object.uFlag) ? String(object.uFlag) : "",
      pwd: isSet(object.pwd) ? String(object.pwd) : "",
      candidate: isSet(object.candidate) ? String(object.candidate) : "",
    };
  },

  toJSON(message: NegotiationResponse): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = negotiationTypeToJSON(message.type));
    message.dstPeerMachineKey !== undefined && (obj.dstPeerMachineKey = message.dstPeerMachineKey);
    message.uFlag !== undefined && (obj.uFlag = message.uFlag);
    message.pwd !== undefined && (obj.pwd = message.pwd);
    message.candidate !== undefined && (obj.candidate = message.candidate);
    return obj;
  },

  create<I extends Exact<DeepPartial<NegotiationResponse>, I>>(base?: I): NegotiationResponse {
    return NegotiationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NegotiationResponse>, I>>(object: I): NegotiationResponse {
    const message = createBaseNegotiationResponse();
    message.type = object.type ?? 0;
    message.dstPeerMachineKey = object.dstPeerMachineKey ?? "";
    message.uFlag = object.uFlag ?? "";
    message.pwd = object.pwd ?? "";
    message.candidate = object.candidate ?? "";
    return message;
  },
};

function createBaseHandshakeRequest(): HandshakeRequest {
  return { dstPeerMachineKey: "", srcPeerMachineKey: "", uFlag: "", pwd: "" };
}

export const HandshakeRequest = {
  encode(message: HandshakeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dstPeerMachineKey !== "") {
      writer.uint32(10).string(message.dstPeerMachineKey);
    }
    if (message.srcPeerMachineKey !== "") {
      writer.uint32(18).string(message.srcPeerMachineKey);
    }
    if (message.uFlag !== "") {
      writer.uint32(26).string(message.uFlag);
    }
    if (message.pwd !== "") {
      writer.uint32(34).string(message.pwd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HandshakeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandshakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dstPeerMachineKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.srcPeerMachineKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uFlag = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pwd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HandshakeRequest {
    return {
      dstPeerMachineKey: isSet(object.dstPeerMachineKey) ? String(object.dstPeerMachineKey) : "",
      srcPeerMachineKey: isSet(object.srcPeerMachineKey) ? String(object.srcPeerMachineKey) : "",
      uFlag: isSet(object.uFlag) ? String(object.uFlag) : "",
      pwd: isSet(object.pwd) ? String(object.pwd) : "",
    };
  },

  toJSON(message: HandshakeRequest): unknown {
    const obj: any = {};
    message.dstPeerMachineKey !== undefined && (obj.dstPeerMachineKey = message.dstPeerMachineKey);
    message.srcPeerMachineKey !== undefined && (obj.srcPeerMachineKey = message.srcPeerMachineKey);
    message.uFlag !== undefined && (obj.uFlag = message.uFlag);
    message.pwd !== undefined && (obj.pwd = message.pwd);
    return obj;
  },

  create<I extends Exact<DeepPartial<HandshakeRequest>, I>>(base?: I): HandshakeRequest {
    return HandshakeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HandshakeRequest>, I>>(object: I): HandshakeRequest {
    const message = createBaseHandshakeRequest();
    message.dstPeerMachineKey = object.dstPeerMachineKey ?? "";
    message.srcPeerMachineKey = object.srcPeerMachineKey ?? "";
    message.uFlag = object.uFlag ?? "";
    message.pwd = object.pwd ?? "";
    return message;
  },
};

function createBaseCandidateRequest(): CandidateRequest {
  return { dstPeerMachineKey: "", srcPeerMachineKey: "", candidate: "" };
}

export const CandidateRequest = {
  encode(message: CandidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dstPeerMachineKey !== "") {
      writer.uint32(10).string(message.dstPeerMachineKey);
    }
    if (message.srcPeerMachineKey !== "") {
      writer.uint32(18).string(message.srcPeerMachineKey);
    }
    if (message.candidate !== "") {
      writer.uint32(26).string(message.candidate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandidateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dstPeerMachineKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.srcPeerMachineKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.candidate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CandidateRequest {
    return {
      dstPeerMachineKey: isSet(object.dstPeerMachineKey) ? String(object.dstPeerMachineKey) : "",
      srcPeerMachineKey: isSet(object.srcPeerMachineKey) ? String(object.srcPeerMachineKey) : "",
      candidate: isSet(object.candidate) ? String(object.candidate) : "",
    };
  },

  toJSON(message: CandidateRequest): unknown {
    const obj: any = {};
    message.dstPeerMachineKey !== undefined && (obj.dstPeerMachineKey = message.dstPeerMachineKey);
    message.srcPeerMachineKey !== undefined && (obj.srcPeerMachineKey = message.srcPeerMachineKey);
    message.candidate !== undefined && (obj.candidate = message.candidate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CandidateRequest>, I>>(base?: I): CandidateRequest {
    return CandidateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CandidateRequest>, I>>(object: I): CandidateRequest {
    const message = createBaseCandidateRequest();
    message.dstPeerMachineKey = object.dstPeerMachineKey ?? "";
    message.srcPeerMachineKey = object.srcPeerMachineKey ?? "";
    message.candidate = object.candidate ?? "";
    return message;
  },
};

export interface NegotiationService {
  Offer(request: DeepPartial<HandshakeRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  Answer(request: DeepPartial<HandshakeRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  Candidate(request: DeepPartial<CandidateRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  StartConnect(
    request: Observable<DeepPartial<NegotiationRequest>>,
    metadata?: grpc.Metadata,
  ): Observable<NegotiationRequest>;
}

export class NegotiationServiceClientImpl implements NegotiationService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Offer = this.Offer.bind(this);
    this.Answer = this.Answer.bind(this);
    this.Candidate = this.Candidate.bind(this);
    this.StartConnect = this.StartConnect.bind(this);
  }

  Offer(request: DeepPartial<HandshakeRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(NegotiationServiceOfferDesc, HandshakeRequest.fromPartial(request), metadata);
  }

  Answer(request: DeepPartial<HandshakeRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(NegotiationServiceAnswerDesc, HandshakeRequest.fromPartial(request), metadata);
  }

  Candidate(request: DeepPartial<CandidateRequest>, metadata?: grpc.Metadata): Promise<Empty> {
    return this.rpc.unary(NegotiationServiceCandidateDesc, CandidateRequest.fromPartial(request), metadata);
  }

  StartConnect(
    request: Observable<DeepPartial<NegotiationRequest>>,
    metadata?: grpc.Metadata,
  ): Observable<NegotiationRequest> {
    throw new Error("ts-proto does not yet support client streaming!");
  }
}

export const NegotiationServiceDesc = { serviceName: "protos.NegotiationService" };

export const NegotiationServiceOfferDesc: UnaryMethodDefinitionish = {
  methodName: "Offer",
  service: NegotiationServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return HandshakeRequest.encode(this).finish();
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

export const NegotiationServiceAnswerDesc: UnaryMethodDefinitionish = {
  methodName: "Answer",
  service: NegotiationServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return HandshakeRequest.encode(this).finish();
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

export const NegotiationServiceCandidateDesc: UnaryMethodDefinitionish = {
  methodName: "Candidate",
  service: NegotiationServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CandidateRequest.encode(this).finish();
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
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
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

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const upStreamCodes = this.options.upStreamRetryCodes || [];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata || this.options.metadata;
    return new Observable((observer) => {
      const upStream = (() => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          transport: this.options.streamingTransport || this.options.transport,
          metadata: maybeCombinedMetadata,
          debug: this.options.debug,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              const err = new Error(message) as any;
              err.code = code;
              err.metadata = trailers;
              observer.error(err);
            }
          },
        });
        observer.add(() => {
          return client.close();
        });
      });
      upStream();
    }).pipe(share());
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