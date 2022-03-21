import * as jspb from 'google-protobuf'



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

export class GetNetworkRequest extends jspb.Message {
  getOrgid(): string;
  setOrgid(value: string): GetNetworkRequest;

  getHoge(): string;
  setHoge(value: string): GetNetworkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkRequest): GetNetworkRequest.AsObject;
  static serializeBinaryToWriter(message: GetNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkRequest;
  static deserializeBinaryFromReader(message: GetNetworkRequest, reader: jspb.BinaryReader): GetNetworkRequest;
}

export namespace GetNetworkRequest {
  export type AsObject = {
    orgid: string,
    hoge: string,
  }
}

export class GetNetworkResponse extends jspb.Message {
  getUsergroupid(): number;
  setUsergroupid(value: number): GetNetworkResponse;

  getOrgid(): string;
  setOrgid(value: string): GetNetworkResponse;

  getNetworkid(): number;
  setNetworkid(value: number): GetNetworkResponse;

  getJobid(): number;
  setJobid(value: number): GetNetworkResponse;

  getRoleid(): number;
  setRoleid(value: number): GetNetworkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkResponse): GetNetworkResponse.AsObject;
  static serializeBinaryToWriter(message: GetNetworkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkResponse;
  static deserializeBinaryFromReader(message: GetNetworkResponse, reader: jspb.BinaryReader): GetNetworkResponse;
}

export namespace GetNetworkResponse {
  export type AsObject = {
    usergroupid: number,
    orgid: string,
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
