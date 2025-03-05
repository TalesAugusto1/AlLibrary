import { Injectable } from "@angular/core";
import { listen } from "@tauri-apps/api/event";

@Injectable({
  providedIn: "root",
})
export class WatcherService {
  private updateCallback: () => void = () => {};

  constructor() {
    this.initWatcher();
  }

  async initWatcher() {
    await listen("tauri://file-drop", () => {
      console.log("Files changed in library folder.");
      this.updateCallback();
    });
  }

  onUpdate(callback: () => void) {
    this.updateCallback = callback;
  }
}
