// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class newFile extends ethereum.Event {
  get params(): newFile__Params {
    return new newFile__Params(this);
  }
}

export class newFile__Params {
  _event: newFile;

  constructor(event: newFile) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get artist(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get fileUrl(): string {
    return this._event.parameters[2].value.toString();
  }

  get jsonUrl(): string {
    return this._event.parameters[3].value.toString();
  }

  get limit(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class newFilePrice extends ethereum.Event {
  get params(): newFilePrice__Params {
    return new newFilePrice__Params(this);
  }
}

export class newFilePrice__Params {
  _event: newFilePrice;

  constructor(event: newFilePrice) {
    this._event = event;
  }

  get fileUrl(): string {
    return this._event.parameters[0].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ownershipChange extends ethereum.Event {
  get params(): ownershipChange__Params {
    return new ownershipChange__Params(this);
  }
}

export class ownershipChange__Params {
  _event: ownershipChange;

  constructor(event: ownershipChange) {
    this._event = event;
  }

  get fileUrl(): string {
    return this._event.parameters[0].value.toString();
  }

  get artist(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newArtist(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NiftyInk__inkInfoByIdResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: Bytes;
  value4: BigInt;
  value5: BigInt;
  value6: string;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: Bytes,
    value4: BigInt,
    value5: BigInt,
    value6: string,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromBytes(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromString(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class NiftyInk__inkInfoByInkUrlResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: Bytes;
  value4: BigInt;
  value5: BigInt;
  value6: string;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: Bytes,
    value4: BigInt,
    value5: BigInt,
    value6: string,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromBytes(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromString(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class NiftyInk extends ethereum.SmartContract {
  static bind(address: Address): NiftyInk {
    return new NiftyInk("NiftyInk", address);
  }

  artistTake(): BigInt {
    let result = super.call("artistTake", "artistTake():(uint256)", []);

    return result[0].toBigInt();
  }

  try_artistTake(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("artistTake", "artistTake():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkSignature(
    signedHash: Bytes,
    signature: Bytes,
    checkAddress: Address
  ): boolean {
    let result = super.call(
      "checkSignature",
      "checkSignature(bytes32,bytes,address):(bool)",
      [
        ethereum.Value.fromFixedBytes(signedHash),
        ethereum.Value.fromBytes(signature),
        ethereum.Value.fromAddress(checkAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_checkSignature(
    signedHash: Bytes,
    signature: Bytes,
    checkAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkSignature",
      "checkSignature(bytes32,bytes,address):(bool)",
      [
        ethereum.Value.fromFixedBytes(signedHash),
        ethereum.Value.fromBytes(signature),
        ethereum.Value.fromAddress(checkAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkSignatureFlag(): boolean {
    let result = super.call(
      "checkSignatureFlag",
      "checkSignatureFlag():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_checkSignatureFlag(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkSignatureFlag",
      "checkSignatureFlag():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createInk(fileUrl: string, jsonUrl: string, limit: BigInt): BigInt {
    let result = super.call(
      "createInk",
      "createInk(string,string,uint256):(uint256)",
      [
        ethereum.Value.fromString(fileUrl),
        ethereum.Value.fromString(jsonUrl),
        ethereum.Value.fromUnsignedBigInt(limit)
      ]
    );

    return result[0].toBigInt();
  }

  try_createInk(
    fileUrl: string,
    jsonUrl: string,
    limit: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createInk",
      "createInk(string,string,uint256):(uint256)",
      [
        ethereum.Value.fromString(fileUrl),
        ethereum.Value.fromString(jsonUrl),
        ethereum.Value.fromUnsignedBigInt(limit)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createInkFromSignature(
    fileUrl: string,
    jsonUrl: string,
    limit: BigInt,
    artist: Address,
    signature: Bytes
  ): BigInt {
    let result = super.call(
      "createInkFromSignature",
      "createInkFromSignature(string,string,uint256,address,bytes):(uint256)",
      [
        ethereum.Value.fromString(fileUrl),
        ethereum.Value.fromString(jsonUrl),
        ethereum.Value.fromUnsignedBigInt(limit),
        ethereum.Value.fromAddress(artist),
        ethereum.Value.fromBytes(signature)
      ]
    );

    return result[0].toBigInt();
  }

  try_createInkFromSignature(
    fileUrl: string,
    jsonUrl: string,
    limit: BigInt,
    artist: Address,
    signature: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createInkFromSignature",
      "createInkFromSignature(string,string,uint256,address,bytes):(uint256)",
      [
        ethereum.Value.fromString(fileUrl),
        ethereum.Value.fromString(jsonUrl),
        ethereum.Value.fromUnsignedBigInt(limit),
        ethereum.Value.fromAddress(artist),
        ethereum.Value.fromBytes(signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSigner(signedHash: Bytes, signature: Bytes): Address {
    let result = super.call("getSigner", "getSigner(bytes32,bytes):(address)", [
      ethereum.Value.fromFixedBytes(signedHash),
      ethereum.Value.fromBytes(signature)
    ]);

    return result[0].toAddress();
  }

  try_getSigner(
    signedHash: Bytes,
    signature: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSigner",
      "getSigner(bytes32,bytes):(address)",
      [
        ethereum.Value.fromFixedBytes(signedHash),
        ethereum.Value.fromBytes(signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTrustedForwarder(): Address {
    let result = super.call(
      "getTrustedForwarder",
      "getTrustedForwarder():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getTrustedForwarder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTrustedForwarder",
      "getTrustedForwarder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  inkIdByInkUrl(param0: string): BigInt {
    let result = super.call(
      "inkIdByInkUrl",
      "inkIdByInkUrl(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toBigInt();
  }

  try_inkIdByInkUrl(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "inkIdByInkUrl",
      "inkIdByInkUrl(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  inkInfoById(id: BigInt): NiftyInk__inkInfoByIdResult {
    let result = super.call(
      "inkInfoById",
      "inkInfoById(uint256):(uint256,address,string,bytes,uint256,uint256,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new NiftyInk__inkInfoByIdResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toBytes(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toString(),
      result[7].toBigInt()
    );
  }

  try_inkInfoById(
    id: BigInt
  ): ethereum.CallResult<NiftyInk__inkInfoByIdResult> {
    let result = super.tryCall(
      "inkInfoById",
      "inkInfoById(uint256):(uint256,address,string,bytes,uint256,uint256,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NiftyInk__inkInfoByIdResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toBytes(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toString(),
        value[7].toBigInt()
      )
    );
  }

  inkInfoByInkUrl(fileUrl: string): NiftyInk__inkInfoByInkUrlResult {
    let result = super.call(
      "inkInfoByInkUrl",
      "inkInfoByInkUrl(string):(uint256,address,string,bytes,uint256,uint256,string,uint256)",
      [ethereum.Value.fromString(fileUrl)]
    );

    return new NiftyInk__inkInfoByInkUrlResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toBytes(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toString(),
      result[7].toBigInt()
    );
  }

  try_inkInfoByInkUrl(
    fileUrl: string
  ): ethereum.CallResult<NiftyInk__inkInfoByInkUrlResult> {
    let result = super.tryCall(
      "inkInfoByInkUrl",
      "inkInfoByInkUrl(string):(uint256,address,string,bytes,uint256,uint256,string,uint256)",
      [ethereum.Value.fromString(fileUrl)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NiftyInk__inkInfoByInkUrlResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toBytes(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toString(),
        value[7].toBigInt()
      )
    );
  }

  inkOfArtistByIndex(artist: Address, index: BigInt): BigInt {
    let result = super.call(
      "inkOfArtistByIndex",
      "inkOfArtistByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(artist),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_inkOfArtistByIndex(
    artist: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "inkOfArtistByIndex",
      "inkOfArtistByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(artist),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  inksCreatedBy(artist: Address): BigInt {
    let result = super.call(
      "inksCreatedBy",
      "inksCreatedBy(address):(uint256)",
      [ethereum.Value.fromAddress(artist)]
    );

    return result[0].toBigInt();
  }

  try_inksCreatedBy(artist: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "inksCreatedBy",
      "inksCreatedBy(address):(uint256)",
      [ethereum.Value.fromAddress(artist)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  niftyRegistry(): Address {
    let result = super.call("niftyRegistry", "niftyRegistry():(address)", []);

    return result[0].toAddress();
  }

  try_niftyRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "niftyRegistry",
      "niftyRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  setPrice(fileUrl: string, price: BigInt): BigInt {
    let result = super.call("setPrice", "setPrice(string,uint256):(uint256)", [
      ethereum.Value.fromString(fileUrl),
      ethereum.Value.fromUnsignedBigInt(price)
    ]);

    return result[0].toBigInt();
  }

  try_setPrice(fileUrl: string, price: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "setPrice",
      "setPrice(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(fileUrl),
        ethereum.Value.fromUnsignedBigInt(price)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  setPriceFromSignature(
    fileUrl: string,
    price: BigInt,
    signature: Bytes
  ): BigInt {
    let result = super.call(
      "setPriceFromSignature",
      "setPriceFromSignature(string,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromString(fileUrl),
        ethereum.Value.fromUnsignedBigInt(price),
        ethereum.Value.fromBytes(signature)
      ]
    );

    return result[0].toBigInt();
  }

  try_setPriceFromSignature(
    fileUrl: string,
    price: BigInt,
    signature: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "setPriceFromSignature",
      "setPriceFromSignature(string,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromString(fileUrl),
        ethereum.Value.fromUnsignedBigInt(price),
        ethereum.Value.fromBytes(signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalInks(): BigInt {
    let result = super.call("totalInks", "totalInks():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalInks(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalInks", "totalInks():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  versionRecipient(): string {
    let result = super.call(
      "versionRecipient",
      "versionRecipient():(string)",
      []
    );

    return result[0].toString();
  }

  try_versionRecipient(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "versionRecipient",
      "versionRecipient():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateInkCall extends ethereum.Call {
  get inputs(): CreateInkCall__Inputs {
    return new CreateInkCall__Inputs(this);
  }

  get outputs(): CreateInkCall__Outputs {
    return new CreateInkCall__Outputs(this);
  }
}

export class CreateInkCall__Inputs {
  _call: CreateInkCall;

  constructor(call: CreateInkCall) {
    this._call = call;
  }

  get fileUrl(): string {
    return this._call.inputValues[0].value.toString();
  }

  get jsonUrl(): string {
    return this._call.inputValues[1].value.toString();
  }

  get limit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateInkCall__Outputs {
  _call: CreateInkCall;

  constructor(call: CreateInkCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateInkFromSignatureCall extends ethereum.Call {
  get inputs(): CreateInkFromSignatureCall__Inputs {
    return new CreateInkFromSignatureCall__Inputs(this);
  }

  get outputs(): CreateInkFromSignatureCall__Outputs {
    return new CreateInkFromSignatureCall__Outputs(this);
  }
}

export class CreateInkFromSignatureCall__Inputs {
  _call: CreateInkFromSignatureCall;

  constructor(call: CreateInkFromSignatureCall) {
    this._call = call;
  }

  get fileUrl(): string {
    return this._call.inputValues[0].value.toString();
  }

  get jsonUrl(): string {
    return this._call.inputValues[1].value.toString();
  }

  get limit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get artist(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get signature(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class CreateInkFromSignatureCall__Outputs {
  _call: CreateInkFromSignatureCall;

  constructor(call: CreateInkFromSignatureCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetArtistTakeCall extends ethereum.Call {
  get inputs(): SetArtistTakeCall__Inputs {
    return new SetArtistTakeCall__Inputs(this);
  }

  get outputs(): SetArtistTakeCall__Outputs {
    return new SetArtistTakeCall__Outputs(this);
  }
}

export class SetArtistTakeCall__Inputs {
  _call: SetArtistTakeCall;

  constructor(call: SetArtistTakeCall) {
    this._call = call;
  }

  get _take(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetArtistTakeCall__Outputs {
  _call: SetArtistTakeCall;

  constructor(call: SetArtistTakeCall) {
    this._call = call;
  }
}

export class SetCheckSignatureFlagCall extends ethereum.Call {
  get inputs(): SetCheckSignatureFlagCall__Inputs {
    return new SetCheckSignatureFlagCall__Inputs(this);
  }

  get outputs(): SetCheckSignatureFlagCall__Outputs {
    return new SetCheckSignatureFlagCall__Outputs(this);
  }
}

export class SetCheckSignatureFlagCall__Inputs {
  _call: SetCheckSignatureFlagCall;

  constructor(call: SetCheckSignatureFlagCall) {
    this._call = call;
  }

  get newFlag(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetCheckSignatureFlagCall__Outputs {
  _call: SetCheckSignatureFlagCall;

  constructor(call: SetCheckSignatureFlagCall) {
    this._call = call;
  }
}

export class SetNiftyRegistryCall extends ethereum.Call {
  get inputs(): SetNiftyRegistryCall__Inputs {
    return new SetNiftyRegistryCall__Inputs(this);
  }

  get outputs(): SetNiftyRegistryCall__Outputs {
    return new SetNiftyRegistryCall__Outputs(this);
  }
}

export class SetNiftyRegistryCall__Inputs {
  _call: SetNiftyRegistryCall;

  constructor(call: SetNiftyRegistryCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetNiftyRegistryCall__Outputs {
  _call: SetNiftyRegistryCall;

  constructor(call: SetNiftyRegistryCall) {
    this._call = call;
  }
}

export class SetPriceCall extends ethereum.Call {
  get inputs(): SetPriceCall__Inputs {
    return new SetPriceCall__Inputs(this);
  }

  get outputs(): SetPriceCall__Outputs {
    return new SetPriceCall__Outputs(this);
  }
}

export class SetPriceCall__Inputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }

  get fileUrl(): string {
    return this._call.inputValues[0].value.toString();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetPriceCall__Outputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetPriceFromSignatureCall extends ethereum.Call {
  get inputs(): SetPriceFromSignatureCall__Inputs {
    return new SetPriceFromSignatureCall__Inputs(this);
  }

  get outputs(): SetPriceFromSignatureCall__Outputs {
    return new SetPriceFromSignatureCall__Outputs(this);
  }
}

export class SetPriceFromSignatureCall__Inputs {
  _call: SetPriceFromSignatureCall;

  constructor(call: SetPriceFromSignatureCall) {
    this._call = call;
  }

  get fileUrl(): string {
    return this._call.inputValues[0].value.toString();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetPriceFromSignatureCall__Outputs {
  _call: SetPriceFromSignatureCall;

  constructor(call: SetPriceFromSignatureCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetTrustedForwarderCall extends ethereum.Call {
  get inputs(): SetTrustedForwarderCall__Inputs {
    return new SetTrustedForwarderCall__Inputs(this);
  }

  get outputs(): SetTrustedForwarderCall__Outputs {
    return new SetTrustedForwarderCall__Outputs(this);
  }
}

export class SetTrustedForwarderCall__Inputs {
  _call: SetTrustedForwarderCall;

  constructor(call: SetTrustedForwarderCall) {
    this._call = call;
  }

  get _trustedForwarder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTrustedForwarderCall__Outputs {
  _call: SetTrustedForwarderCall;

  constructor(call: SetTrustedForwarderCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get fileUrl(): string {
    return this._call.inputValues[0].value.toString();
  }

  get artist(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get newArtist(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get signature(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnership1Call extends ethereum.Call {
  get inputs(): TransferOwnership1Call__Inputs {
    return new TransferOwnership1Call__Inputs(this);
  }

  get outputs(): TransferOwnership1Call__Outputs {
    return new TransferOwnership1Call__Outputs(this);
  }
}

export class TransferOwnership1Call__Inputs {
  _call: TransferOwnership1Call;

  constructor(call: TransferOwnership1Call) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnership1Call__Outputs {
  _call: TransferOwnership1Call;

  constructor(call: TransferOwnership1Call) {
    this._call = call;
  }
}
