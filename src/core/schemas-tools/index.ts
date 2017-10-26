// import { util as ProtoUtil } from "protobufjs";
import { v4 as uuidv4 } from 'uuid';
import {
  Message,
  Type,
  Field,
  OneOf
} from "protobufjs/light"; // respectively "./node_modules/protobufjs/light.js"

export enum ActorType {
  PERSON = "Person",
  APPLICATION = "Application",
}

export enum ObjectType {
  NOTE = "Note",
  VIDEO = "Video",
  IMAGE = "Image",
  COLLECTION = "Collection",
  BUTTON = "Button",
}

export class Attachment extends Message<Attachment> {

  @Field.d(1, "string", "required", ObjectType.BUTTON)
  public type: string;

  @Field.d(2, "string", "required")
  public name: string;

  @Field.d(3, "string")
  public content: string;

  @Field.d(4, "string", "required")
  public url: string;

  @Field.d(5, "string")
  public mediaType: string;
}

export class Actor extends Message<Actor> {

  // @Field.d(1, "string|float")
  @Field.d(1, "string")
  public id: string | number;

  @Field.d(2, "string")
  public name: string;

  // @Field.d(3, ActorType, "required", ActorType.PERSON)
  // public type: ActorType;
  @Field.d(3, "string", "required")
  public type: string;
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

export class ObjectSimple extends Message<ObjectSimple> {

  @Field.d(1, "string", "required", uuidv4())
  public id: string;

  @Field.d(2, "string", "required")
  public type: string;

  @Field.d(3, "string", "required")
  public content: string;

  @Field.d(4, "string")
  public name: string;

  @Field.d(5, Attachment, "repeated", [])
  public attachment: Attachment[];
}

export class ObjectMedia extends Message<ObjectMedia> {

  @Field.d(1, "string", "required", uuidv4())
  public id: string;

  @Field.d(2, "string", "required")
  public type: string;

  @Field.d(3, "string")
  public name: string;

  @Field.d(4, "string")
  public content: string;

  @Field.d(5, "string", "required")
  public url: string;

  @Field.d(6, "string")
  public mediaType: string;

  @Field.d(7, Attachment, "repeated", [])
  public attachment: Attachment[];
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

  @Field.d(6, Actor, "required")
  public to: Actor;

  @Field.d(7, "ObjectSimple")
  private objectsimple: ObjectSimple | null;

  @Field.d(8, "ObjectMedia")
  private objectmedia: ObjectMedia | null;

  @OneOf.d("objectsimple", "objectmedia")
  public which_object: string;

  @Field.d(9, Attachment, "repeated", [])
  public attachments: Attachment[];


  // Construct the message from an AS2 message
  static fromJSON(from: any): BroidMessage {
    let message = new BroidMessage();
    message.generator = from.generator;
    return message;
  }

  // Construct the message from an AS2 message, the difference with fromJSON
  // is reply assign automatically the actor object with the AS2 to field
  static reply(from: any): BroidMessage {
    let message = new BroidMessage();
    message.generator = from.generator;
    message.actor = from.to;
    message.to = from.actor;
    return message;
  }

  public text(content: string): void {
    this.objectmedia = null;
    this.objectsimple = new ObjectSimple({
      id: uuidv4(),
      type: ObjectType.NOTE,
      content,
    });
  }

  // Add a attachement to object
  // TODO: check if the type is supported
  // TODO: check if the mimetype is supported
  private addAttachment(type: string, name: string, url: string, content?: string, mediaType?: string): void {
    const attach = new Attachment({ type, content, name, mediaType, url });

    if (this.attachments && this.attachments.length) {
      this.attachments.push(attach);
    } else {
      this.attachments = [attach];
    }
  }

  // Add a attachement to object
  public addQuickReply(name: string, url: string, content?: string, mediaType?: string): void {
    this.addAttachment('Button', name, url, content, mediaType);
  }

  // Add a attachement to object
  public addButton(name: string, url: string, content?: string, mediaType?: string): void {
    this.addAttachment('Button', name, url, content, mediaType);
  }

  public build(): Object {
    const obj = BroidMessage.toObject(message, {
      enums: String,  // enums as string names
      longs: String,  // longs as strings (requires long.js)
      bytes: String,  // bytes as base64 encoded strings
      defaults: true, // includes default values
      arrays: true,   // populates empty arrays (repeated fields) even if defaults=false
      objects: true,  // populates empty objects (map fields) even if defaults=false
      oneofs: true    // includes virtual oneof fields set to the present field's name
    });

    obj.object = obj[obj.which_object];

    if (obj.attachments && obj.attachments.length > 0) {
      obj.object.attachment = obj.object.attachment || [];
      obj.object.attachment = obj.object.attachment.concat(obj.attachments);
      delete obj.attachments;
    }

    delete obj.objectmedia;
    delete obj.objectsimple;
    delete obj.which_object;

    return obj;
  }
}

// example code Generate simple Message FROM JSON
let message = BroidMessage.reply({
  '@context': 'https://www.w3.org/ns/activitystreams',
  generator: {
    id: 'webmessenger-backend',
    name: 'webmessenger-backend',
    type: 'Service'
  },
  actor: {
    id: "my-actor-ID",
    name: "actor Name Per",
    type: 'Person'
  },
  to: {
    id: "my-to-ID",
    name: "To Name Per",
    type: 'Person'
  }
})

// Generate a simple Note
message.text('Hello world');
message.addQuickReply('name', 'url', 'content', 'mediaType');
// OR
// message.addButton('name', 'url', 'content', 'mediaType');

console.log(message.build());










// console.log('message.object:', message.object);

// const obj = BroidMessage.toObject(message, {
//   enums: String,  // enums as string names
//   longs: String,  // longs as strings (requires long.js)
//   bytes: String,  // bytes as base64 encoded strings
//   defaults: true, // includes default values
//   arrays: true,   // populates empty arrays (repeated fields) even if defaults=false
//   objects: true,  // populates empty objects (map fields) even if defaults=false
//   oneofs: false    // includes virtual oneof fields set to the present field's name
// });

// console.log(obj);

// // 

// let buffer = BroidMessage.encode(obj).finish();
// console.log(buffer);

// let decoded = BroidMessage.decode(buffer);
// console.log(decoded);


// const objs = message.toJSON();

// console.log('-----');
// console.log(objs);


// -----------------------------------------------
// let message = new BroidMessage()
// message.actor = new Actor({
//   id: "dd",
//   name: "name",
//   type: ActorType.APPLICATION
// });
// message.generator = new Generator({
//   id: "webmessenger-backend",
//   name: "webmessenger-backend"
// });


// // TODO: enum representation as String
// let buffer = BroidMessage.encode(message).finish();
// let decoded = BroidMessage.decode(buffer);

// console.log(decoded);
// console.log(BroidMessage.toObject(decoded, ProtoUtil.toJSONOptions));

