import * as jspb from 'google-protobuf'



export class SetupKeyRequest extends jspb.Message {
  getUsergroupid(): number;
  setUsergroupid(value: number): SetupKeyRequest;

  getOrggroupid(): string;
  setOrggroupid(value: string): SetupKeyRequest;

  getNetworkid(): number;
  setNetworkid(value: number): SetupKeyRequest;

  getJob(): string;
  setJob(value: string): SetupKeyRequest;

  getPermission(): PermissionType;
  setPermission(value: PermissionType): SetupKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetupKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetupKeyRequest): SetupKeyRequest.AsObject;
  static serializeBinaryToWriter(message: SetupKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetupKeyRequest;
  static deserializeBinaryFromReader(message: SetupKeyRequest, reader: jspb.BinaryReader): SetupKeyRequest;
}

export namespace SetupKeyRequest {
  export type AsObject = {
    usergroupid: number,
    orggroupid: string,
    networkid: number,
    job: string,
    permission: PermissionType,
  }
}

export class SetupKeyResponse extends jspb.Message {
  getSetupkey(): string;
  setSetupkey(value: string): SetupKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetupKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetupKeyResponse): SetupKeyResponse.AsObject;
  static serializeBinaryToWriter(message: SetupKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetupKeyResponse;
  static deserializeBinaryFromReader(message: SetupKeyResponse, reader: jspb.BinaryReader): SetupKeyResponse;
}

export namespace SetupKeyResponse {
  export type AsObject = {
    setupkey: string,
  }
}

export enum PermissionType { 
  RWXKEY = 0,
  RWKEY = 1,
  RKEY = 2,
}
