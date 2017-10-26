// import { util as ProtoUtil } from "protobufjs";

import {
  Message,
  Type,
  Field,
  // Enum,
  // OneOf
} from "protobufjs/light"; // respectively "./node_modules/protobufjs/light.js"


// const stringifyEnums = function (message: any) {
//   let utils: any = this;
//   if (message && message.$type && message.$type.children) {
//     message.$type.children.forEach(function (child: any) {
//       let dict: any = null;
//       if (message[child.name] && child.element.resolvedType) {
//         switch (child.element.resolvedType.className) {
//           case 'Enum':
//             dict = child.element.resolvedType.children.reduce((function (acc: any, arg: any) {
//               var id, name;
//               id = arg.id, name = arg.name;
//               acc[id] = name;
//               return acc;
//             }), {});
//             if (child.repeated) {
//               return message[child.name] = message[child.name].map(function (el: any) {
//                 return dict[el];
//               });
//             } else {
//               return message[child.name] = dict[message[child.name]];
//             }
//             break;
//           case 'Message':
//             if (child.repeated) {
//               return message[child.name] = message[child.name].map(function (el: any) {
//                 return utils.stringifyEnums(el);
//               });
//             } else {
//               return message[child.name] = utils.stringifyEnums(message[child.name]);
//             }
//         }
//       }
//     });
//   }
//   return message;
// };


export enum ActorType {
  PERSON = "Person",
  APPLICATION = "Application",
}

export class Actor extends Message<Actor> {

  // @Field.d(1, "string|float")
  @Field.d(1, "string")
  public id: string | number;

  @Field.d(2, "string")
  public name: string;

  @Field.d(3, ActorType, "required", ActorType.PERSON)
  public type: ActorType;
}

export class Generator extends Message<Generator> {

  // @Field.d(1, "string|float")
  @Field.d(1, "string")
  public id: string | number;

  @Field.d(2, "string")
  public name: string;

  @Field.d(3, "string", "required", "Service")
  public generator: string;
}

@Type.d("BroidMessage")
export class BroidMessage extends Message<BroidMessage> {

  @Field.d(1, "string", "required", "https://www.w3.org/ns/activitystreams")
  public "@context": string;

  @Field.d(2, "string", "required", "Create")
  public type: string;

  @Field.d(3, "float", "required", new Date().getTime())
  public published: number;

  @Field.d(4, Actor, "required")
  public actor: Actor;

  @Field.d(5, Generator, "required")
  public generator: Generator;

  @Field.d(6, "string", "required", "objectobjectobjectobject")
  public object: string;
}

// example code
let message = new BroidMessage()
message.actor = new Actor({
  id: "dd",
  name: "name"
});
message.generator = new Generator({
  id: "webmessenger-backend",
  name: "webmessenger-backend"
});


// TODO: enum representation as String
let buffer = BroidMessage.encode(message).finish();
let decoded = BroidMessage.decode(buffer);

console.log(decoded);
// console.log(BroidMessage.toObject(decoded, ProtoUtil.toJSONOptions));