[@openmrs/esm-framework](../API.md) / ModernAppExtensionDefinition

# Interface: ModernAppExtensionDefinition

## Hierarchy

- [`ExtensionComponentDefinition`](ExtensionComponentDefinition.md)

  ↳ **`ModernAppExtensionDefinition`**

## Table of contents

### Properties

- [id](ModernAppExtensionDefinition.md#id)
- [meta](ModernAppExtensionDefinition.md#meta)
- [offline](ModernAppExtensionDefinition.md#offline)
- [online](ModernAppExtensionDefinition.md#online)
- [order](ModernAppExtensionDefinition.md#order)
- [resources](ModernAppExtensionDefinition.md#resources)
- [role](ModernAppExtensionDefinition.md#role)
- [slot](ModernAppExtensionDefinition.md#slot)
- [slots](ModernAppExtensionDefinition.md#slots)

### Methods

- [load](ModernAppExtensionDefinition.md#load)

## Properties

### id

• **id**: `string`

The ID of the extension to register.

#### Defined in

[packages/framework/esm-globals/src/types.ts:121](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L121)

___

### meta

• `Optional` **meta**: `Record`<`string`, `any`\>

The meta data used for reflection by other components.

#### Inherited from

[ExtensionComponentDefinition](ExtensionComponentDefinition.md).[meta](ExtensionComponentDefinition.md#meta)

#### Defined in

[packages/framework/esm-globals/src/types.ts:109](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L109)

___

### offline

• `Optional` **offline**: `boolean` \| `object`

Defines the offline support / properties of the component.

#### Inherited from

[ExtensionComponentDefinition](ExtensionComponentDefinition.md).[offline](ExtensionComponentDefinition.md#offline)

#### Defined in

[packages/framework/esm-globals/src/types.ts:94](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L94)

___

### online

• `Optional` **online**: `boolean` \| `object`

Defines the online support / properties of the component.

#### Inherited from

[ExtensionComponentDefinition](ExtensionComponentDefinition.md).[online](ExtensionComponentDefinition.md#online)

#### Defined in

[packages/framework/esm-globals/src/types.ts:90](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L90)

___

### order

• `Optional` **order**: `number`

Specifies a preferred order number, if any.

#### Inherited from

[ExtensionComponentDefinition](ExtensionComponentDefinition.md).[order](ExtensionComponentDefinition.md#order)

#### Defined in

[packages/framework/esm-globals/src/types.ts:113](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L113)

___

### resources

• `Optional` **resources**: `Record`<`string`, [`ResourceLoader`](ResourceLoader.md)<`any`\>\>

Defines resources that are loaded when the component should mount.

#### Inherited from

[ExtensionComponentDefinition](ExtensionComponentDefinition.md).[resources](ExtensionComponentDefinition.md#resources)

#### Defined in

[packages/framework/esm-globals/src/types.ts:102](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L102)

___

### role

• `Optional` **role**: `string`

Defines the access role required for this component, if any.

#### Inherited from

[ExtensionComponentDefinition](ExtensionComponentDefinition.md).[role](ExtensionComponentDefinition.md#role)

#### Defined in

[packages/framework/esm-globals/src/types.ts:98](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L98)

___

### slot

• `Optional` **slot**: `string`

The slot of the extension to optionally attach to.

#### Defined in

[packages/framework/esm-globals/src/types.ts:125](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L125)

___

### slots

• `Optional` **slots**: `string`[]

The slots of the extension to optionally attach to.

#### Defined in

[packages/framework/esm-globals/src/types.ts:129](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L129)

## Methods

### load

▸ **load**(): `Promise`<`any`\>

Defines a function to use for actually loading the component's lifecycle.

#### Returns

`Promise`<`any`\>

#### Inherited from

[ExtensionComponentDefinition](ExtensionComponentDefinition.md).[load](ExtensionComponentDefinition.md#load)

#### Defined in

[packages/framework/esm-globals/src/types.ts:86](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/framework/esm-globals/src/types.ts#L86)