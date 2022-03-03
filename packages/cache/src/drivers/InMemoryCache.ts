import { Cache } from "@quarter/contracts";

export class InMemoryCache implements Cache {
  constructor(protected data = new Map()) {}

  public async delete(key: string) {
    this.data.delete(key);
  }

  public async get<Class>(
    key: string,
    expiration: number | Date,
    resolve: () => Promise<Class>
  ): Promise<Class> {
    const cache = this.data.get(key);
    const expired = this.expired(cache);
    if (!expired) return cache.value;
    const value = await resolve();
    await this.set(key, expiration, value);
    return value;
  }

  public async set(
    key: string,
    expiration: number | Date,
    value: any
  ): Promise<void> {
    this.data.set(key, {
      expiration: this.expiration(expiration),
      value,
    });
  }

  private expiration(expiration: number | Date) {
    if (expiration instanceof Date) return expiration;
    return new Date(Date.now() + expiration);
  }

  private expired(cache: any) {
    return !cache || new Date() >= cache.expiration;
  }
}
