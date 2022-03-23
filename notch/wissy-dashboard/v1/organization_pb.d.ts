import * as jspb from 'google-protobuf'



export class GetRequiredForCreateSetupKeyInfoRequest extends jspb.Message {
  getOrgid(): string;
  setOrgid(value: string): GetRequiredForCreateSetupKeyInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequiredForCreateSetupKeyInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequiredForCreateSetupKeyInfoRequest): GetRequiredForCreateSetupKeyInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequiredForCreateSetupKeyInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequiredForCreateSetupKeyInfoRequest;
  static deserializeBinaryFromReader(message: GetRequiredForCreateSetupKeyInfoRequest, reader: jspb.BinaryReader): GetRequiredForCreateSetupKeyInfoRequest;
}

export namespace GetRequiredForCreateSetupKeyInfoRequest {
  export type AsObject = {
    orgid: string,
  }
}

export class GetRequiredForCreateSetupKeyInfoResponse extends jspb.Message {
  getUsergroupid(): number;
  setUsergroupid(value: number): GetRequiredForCreateSetupKeyInfoResponse;

  getOrgid(): string;
  setOrgid(value: string): GetRequiredForCreateSetupKeyInfoResponse;

  getNetworkid(): number;
  setNetworkid(value: number): GetRequiredForCreateSetupKeyInfoResponse;

  getJobid(): number;
  setJobid(value: number): GetRequiredForCreateSetupKeyInfoResponse;

  getRoleid(): number;
  setRoleid(value: number): GetRequiredForCreateSetupKeyInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequiredForCreateSetupKeyInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequiredForCreateSetupKeyInfoResponse): GetRequiredForCreateSetupKeyInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetRequiredForCreateSetupKeyInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequiredForCreateSetupKeyInfoResponse;
  static deserializeBinaryFromReader(message: GetRequiredForCreateSetupKeyInfoResponse, reader: jspb.BinaryReader): GetRequiredForCreateSetupKeyInfoResponse;
}

export namespace GetRequiredForCreateSetupKeyInfoResponse {
  export type AsObject = {
    usergroupid: number,
    orgid: string,
    networkid: number,
    jobid: number,
    roleid: number,
  }
}

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

export enum PermissionType { 
  RWXKEY = 0,
  RWKEY = 1,
  RKEY = 2,
}
