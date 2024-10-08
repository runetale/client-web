// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.2
//   protoc               v3.20.3
// source: runetale/runetale/v1/negotiation.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { Empty } from "../../../google/protobuf/empty";

export const protobufPackage = "protos";

export enum NegotiationType {
  OFFER = 0,
  ANSWER = 1,
  CANDIDATE = 2,
  JOIN = 3,
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
    case 3:
    case "JOIN":
      return NegotiationType.JOIN;
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
    case NegotiationType.JOIN:
      return "JOIN";
    case NegotiationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NegotiationRequest {
  type: NegotiationType;
  /** remote node key of the Peer you want to connect to */
  dstNodeKey: string;
  uFlag: string;
  pwd: string;
  candidate: string;
}

export interface NegotiationResponse {
  type: NegotiationType;
  /** node key of the originating peer to be sent to the remote peer */
  dstNodeKey: string;
  uFlag: string;
  pwd: string;
  candidate: string;
}

export interface HandshakeRequest {
  /** remote node key of the Peer you want to connect to */
  dstNodeKey: string;
  /** node key of the originating peer to be sent to the remote peer */
  srcNodeKey: string;
  uFlag: string;
  pwd: string;
}

export interface CandidateRequest {
  /** remote node key of the Peer you want to connect to */
  dstNodeKey: string;
  /** node key of the originating peer to be sent to the remote peer */
  srcNodeKey: string;
  candidate: string;
}

function createBaseNegotiationRequest(): NegotiationRequest {
  return { type: 0, dstNodeKey: "", uFlag: "", pwd: "", candidate: "" };
}

export const NegotiationRequest: MessageFns<NegotiationRequest> = {
  encode(message: NegotiationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.dstNodeKey !== "") {
      writer.uint32(18).string(message.dstNodeKey);
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

  decode(input: BinaryReader | Uint8Array, length?: number): NegotiationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNegotiationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.dstNodeKey = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.uFlag = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.pwd = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.candidate = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NegotiationRequest {
    return {
      type: isSet(object.type) ? negotiationTypeFromJSON(object.type) : 0,
      dstNodeKey: isSet(object.dstNodeKey) ? globalThis.String(object.dstNodeKey) : "",
      uFlag: isSet(object.uFlag) ? globalThis.String(object.uFlag) : "",
      pwd: isSet(object.pwd) ? globalThis.String(object.pwd) : "",
      candidate: isSet(object.candidate) ? globalThis.String(object.candidate) : "",
    };
  },

  toJSON(message: NegotiationRequest): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = negotiationTypeToJSON(message.type);
    }
    if (message.dstNodeKey !== "") {
      obj.dstNodeKey = message.dstNodeKey;
    }
    if (message.uFlag !== "") {
      obj.uFlag = message.uFlag;
    }
    if (message.pwd !== "") {
      obj.pwd = message.pwd;
    }
    if (message.candidate !== "") {
      obj.candidate = message.candidate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NegotiationRequest>, I>>(base?: I): NegotiationRequest {
    return NegotiationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NegotiationRequest>, I>>(object: I): NegotiationRequest {
    const message = createBaseNegotiationRequest();
    message.type = object.type ?? 0;
    message.dstNodeKey = object.dstNodeKey ?? "";
    message.uFlag = object.uFlag ?? "";
    message.pwd = object.pwd ?? "";
    message.candidate = object.candidate ?? "";
    return message;
  },
};

function createBaseNegotiationResponse(): NegotiationResponse {
  return { type: 0, dstNodeKey: "", uFlag: "", pwd: "", candidate: "" };
}

export const NegotiationResponse: MessageFns<NegotiationResponse> = {
  encode(message: NegotiationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.dstNodeKey !== "") {
      writer.uint32(18).string(message.dstNodeKey);
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

  decode(input: BinaryReader | Uint8Array, length?: number): NegotiationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNegotiationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.dstNodeKey = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.uFlag = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.pwd = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.candidate = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NegotiationResponse {
    return {
      type: isSet(object.type) ? negotiationTypeFromJSON(object.type) : 0,
      dstNodeKey: isSet(object.dstNodeKey) ? globalThis.String(object.dstNodeKey) : "",
      uFlag: isSet(object.uFlag) ? globalThis.String(object.uFlag) : "",
      pwd: isSet(object.pwd) ? globalThis.String(object.pwd) : "",
      candidate: isSet(object.candidate) ? globalThis.String(object.candidate) : "",
    };
  },

  toJSON(message: NegotiationResponse): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = negotiationTypeToJSON(message.type);
    }
    if (message.dstNodeKey !== "") {
      obj.dstNodeKey = message.dstNodeKey;
    }
    if (message.uFlag !== "") {
      obj.uFlag = message.uFlag;
    }
    if (message.pwd !== "") {
      obj.pwd = message.pwd;
    }
    if (message.candidate !== "") {
      obj.candidate = message.candidate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NegotiationResponse>, I>>(base?: I): NegotiationResponse {
    return NegotiationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NegotiationResponse>, I>>(object: I): NegotiationResponse {
    const message = createBaseNegotiationResponse();
    message.type = object.type ?? 0;
    message.dstNodeKey = object.dstNodeKey ?? "";
    message.uFlag = object.uFlag ?? "";
    message.pwd = object.pwd ?? "";
    message.candidate = object.candidate ?? "";
    return message;
  },
};

function createBaseHandshakeRequest(): HandshakeRequest {
  return { dstNodeKey: "", srcNodeKey: "", uFlag: "", pwd: "" };
}

export const HandshakeRequest: MessageFns<HandshakeRequest> = {
  encode(message: HandshakeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dstNodeKey !== "") {
      writer.uint32(10).string(message.dstNodeKey);
    }
    if (message.srcNodeKey !== "") {
      writer.uint32(18).string(message.srcNodeKey);
    }
    if (message.uFlag !== "") {
      writer.uint32(26).string(message.uFlag);
    }
    if (message.pwd !== "") {
      writer.uint32(34).string(message.pwd);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HandshakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandshakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.dstNodeKey = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.srcNodeKey = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.uFlag = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.pwd = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HandshakeRequest {
    return {
      dstNodeKey: isSet(object.dstNodeKey) ? globalThis.String(object.dstNodeKey) : "",
      srcNodeKey: isSet(object.srcNodeKey) ? globalThis.String(object.srcNodeKey) : "",
      uFlag: isSet(object.uFlag) ? globalThis.String(object.uFlag) : "",
      pwd: isSet(object.pwd) ? globalThis.String(object.pwd) : "",
    };
  },

  toJSON(message: HandshakeRequest): unknown {
    const obj: any = {};
    if (message.dstNodeKey !== "") {
      obj.dstNodeKey = message.dstNodeKey;
    }
    if (message.srcNodeKey !== "") {
      obj.srcNodeKey = message.srcNodeKey;
    }
    if (message.uFlag !== "") {
      obj.uFlag = message.uFlag;
    }
    if (message.pwd !== "") {
      obj.pwd = message.pwd;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HandshakeRequest>, I>>(base?: I): HandshakeRequest {
    return HandshakeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HandshakeRequest>, I>>(object: I): HandshakeRequest {
    const message = createBaseHandshakeRequest();
    message.dstNodeKey = object.dstNodeKey ?? "";
    message.srcNodeKey = object.srcNodeKey ?? "";
    message.uFlag = object.uFlag ?? "";
    message.pwd = object.pwd ?? "";
    return message;
  },
};

function createBaseCandidateRequest(): CandidateRequest {
  return { dstNodeKey: "", srcNodeKey: "", candidate: "" };
}

export const CandidateRequest: MessageFns<CandidateRequest> = {
  encode(message: CandidateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dstNodeKey !== "") {
      writer.uint32(10).string(message.dstNodeKey);
    }
    if (message.srcNodeKey !== "") {
      writer.uint32(18).string(message.srcNodeKey);
    }
    if (message.candidate !== "") {
      writer.uint32(26).string(message.candidate);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CandidateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.dstNodeKey = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.srcNodeKey = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.candidate = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CandidateRequest {
    return {
      dstNodeKey: isSet(object.dstNodeKey) ? globalThis.String(object.dstNodeKey) : "",
      srcNodeKey: isSet(object.srcNodeKey) ? globalThis.String(object.srcNodeKey) : "",
      candidate: isSet(object.candidate) ? globalThis.String(object.candidate) : "",
    };
  },

  toJSON(message: CandidateRequest): unknown {
    const obj: any = {};
    if (message.dstNodeKey !== "") {
      obj.dstNodeKey = message.dstNodeKey;
    }
    if (message.srcNodeKey !== "") {
      obj.srcNodeKey = message.srcNodeKey;
    }
    if (message.candidate !== "") {
      obj.candidate = message.candidate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CandidateRequest>, I>>(base?: I): CandidateRequest {
    return CandidateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CandidateRequest>, I>>(object: I): CandidateRequest {
    const message = createBaseCandidateRequest();
    message.dstNodeKey = object.dstNodeKey ?? "";
    message.srcNodeKey = object.srcNodeKey ?? "";
    message.candidate = object.candidate ?? "";
    return message;
  },
};

export interface NegotiationService {
  Offer(request: DeepPartial<HandshakeRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  Answer(request: DeepPartial<HandshakeRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  Candidate(request: DeepPartial<CandidateRequest>, metadata?: grpc.Metadata): Promise<Empty>;
  Connect(
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
    this.Connect = this.Connect.bind(this);
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

  Connect(
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

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const upStreamCodes = this.options.upStreamRetryCodes ?? [];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const transport = this.options.streamingTransport ?? this.options.transport;
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          ...(transport !== undefined ? { transport } : {}),
          metadata: maybeCombinedMetadata ?? {},
          debug: this.options.debug ?? false,
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
        observer.add(() => client.close());
      };
      upStream();
    }).pipe(share());
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

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
