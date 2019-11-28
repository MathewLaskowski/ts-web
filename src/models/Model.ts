import { AxiosPromise } from "axios";

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K] ;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T> {
  constructor(
    private atttributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
}