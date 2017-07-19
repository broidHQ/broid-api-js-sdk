export interface Team extends ObjectConstructor {
  createdAt: string,
  id: number,
  name: string,
  updatedAt: string,
}

export interface User extends ObjectConstructor {
  createdAt: string,
  email: string,
  id: number,
  name: string,
  state: string,
  team: number,
  updatedAt: string,
}


export interface SendMessage extends ObjectConstructor {
  message: any,
}
