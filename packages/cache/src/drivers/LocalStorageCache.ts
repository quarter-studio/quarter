import { Cache } from "@quarter/contracts";

export class LocalStorageCache implements Cache {
  public async delete(key: string) {
    localStorage.removeItem(key);
  }

  public async get<Class>(
    key: string,
    expiration: number | Date,
    resolve: () => Promise<Class>
  ): Promise<Class> {
    const cache = this.cache(key);
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
    const cache = { expiration: this.expiration(expiration), value };
    localStorage.setItem(key, JSON.stringify(cache));
  }

  private expiration(expiration: number | Date) {
    if (expiration instanceof Date) return expiration;
    return new Date(Date.now() + expiration);
  }

  private expired(cache: any) {
    return !cache || new Date() >= new Date(cache.expiration);
  }

  private cache(key: string) {
    const cache = localStorage.getItem(key);
    return cache === null ? cache : JSON.parse(cache);
  }
}
