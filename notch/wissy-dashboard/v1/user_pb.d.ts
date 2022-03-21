import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class CreateSetupKeyRequest extends jspb.Message {
  getUsergroupid(): number;
  setUsergroupid(value: number): CreateSetupKeyRequest;

  getOrggroupid(): string;
  setOrggroupid(value: string): CreateSetupKeyRequest;

  getNetworkid(): number;
  setNetworkid(value: number): CreateSetupKeyRequest;

  getJobid(): number;
  setJobid(value: number): CreateSetupKeyRequest;

  getRoleid(): number;
  setRoleid(value: number): CreateSetupKeyRequest;

  getEmail(): string;
  setEmail(value: string): CreateSetupKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSetupKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSetupKeyRequest): CreateSetupKeyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSetupKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSetupKeyRequest;
  static deserializeBinaryFromReader(message: CreateSetupKeyRequest, reader: jspb.BinaryReader): CreateSetupKeyRequest;
}

export namespace CreateSetupKeyRequest {
  export type AsObject = {
    usergroupid: number,
    orggroupid: string,
    networkid: number,
    jobid: number,
    roleid: number,
    email: string,
  }
}

export class CreateSetupKeyResponse extends jspb.Message {
  getSetupkey(): string;
  setSetupkey(value: string): CreateSetupKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSetupKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSetupKeyResponse): CreateSetupKeyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateSetupKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSetupKeyResponse;
  static deserializeBinaryFromReader(message: CreateSetupKeyResponse, reader: jspb.BinaryReader): CreateSetupKeyResponse;
}

export namespace CreateSetupKeyResponse {
  export type AsObject = {
    setupkey: string,
  }
}

export class GetNetworkInformationResponse extends jspb.Message {
  getUsergroupid(): number;
  setUsergroupid(value: number): GetNetworkInformationResponse;

  getOrggroupid(): string;
  setOrggroupid(value: string): GetNetworkInformationResponse;

  getNetworkid(): number;
  setNetworkid(value: number): GetNetworkInformationResponse;

  getJobid(): number;
  setJobid(value: number): GetNetworkInformationResponse;

  getRoleid(): number;
  setRoleid(value: number): GetNetworkInformationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkInformationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkInformationResponse): GetNetworkInformationResponse.AsObject;
  static serializeBinaryToWriter(message: GetNetworkInformationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkInformationResponse;
  static deserializeBinaryFromReader(message: GetNetworkInformationResponse, reader: jspb.BinaryReader): GetNetworkInformationResponse;
}

export namespace GetNetworkInformationResponse {
  export type AsObject = {
    usergroupid: number,
    orggroupid: string,
    networkid: number,
    jobid: number,
    roleid: number,
  }
}

export enum PermissionType { 
  RWXKEY = 0,
  RWKEY = 1,
  RKEY = 2,
}
