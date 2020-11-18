import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private tokenBehaviorSubject = new BehaviorSubject<string>(undefined);
  currentToken = this.tokenBehaviorSubject.asObservable();

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  public setMode(mode: string): void {
    this.storeOnLocalStorage(mode, 'MODE');
  }

  public getMode(): string {
    return this.storage.get('MODE');
  }

  public setToken(newToken: string): void {
    this.tokenBehaviorSubject.next(newToken);
    this.storeOnLocalStorage(newToken, 'jwt');
  }

  private storeOnLocalStorage(data: any, key: string): void {
    this.storage.set(key, data);
  }

  private readFromLocalStorage<T>(key: string): T {
    return this.storage.get(key);
  }

  clearLocalStorage() {
    this.setToken(null);
    this.setMode(null);
    this.storage.clear();
  }

  dataStoreEmpty(): boolean {
    return this.storage.get('jwt') === undefined;
  }

  checkDataStore() {
    if (!this.dataStoreEmpty()) {
      const token = this.readFromLocalStorage('jwt');
      this.setToken(token as string);
    }
  }
}
