import { Realtime } from './endpoints';

export interface User extends ObjectConstructor {
  created_at?: string,
  email: string,
  id?: number,
  name?: string,
  state: string,
  team_id: number,
  updated_at?: string,
}

export interface Application extends ObjectConstructor {
  created_at: string,
  id: string,
  name: string,
  owner_id: string,
  state: string,
  team_id: number,
  updated_at: string,
  webhook_url?: string
}

export interface Channel extends ObjectConstructor {
  address?: string,
  application_id: number,
  consumer_key?: string,
  consumer_secret?: string
  channels?: string
  created_at?: string,
  id?: number,
  name: string,
  refresh?: string,
  secret?: string,
  state: string,
  token?: string,
  updated_at?: string,
  username?: string,
}

export interface ApplicationWebHookURL extends ObjectConstructor {
  state: string,
  team_id: number,
}

export interface SendMessage extends ObjectConstructor {
  message: any,
}

export interface Realtime extends ObjectConstructor {
  url: string,
}

export interface ApplicationKey extends ObjectConstructor {
  created_at: string,
  id: number,
  resource_id: number,
  secret: string,
  state: string,
  updated_at?: string,
}
