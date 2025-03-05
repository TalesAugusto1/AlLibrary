import { Injectable } from "@angular/core";
import { readDir, BaseDirectory } from "@tauri-apps/plugin-fs";

import { open } from "@tauri-apps/plugin-fs";

@Injectable({
  providedIn: "root",
})
export class FileService {
  private libraryPath = "p2p_library"; // Default folder name

  async listFiles(): Promise<any[]> {
    try {
      const files = await readDir(this.libraryPath, {
        baseDir: BaseDirectory.Home,
      });

      return files.map((file) => ({
        name: file.name,
        path: file.name,
      }));
    } catch (error) {
      console.error("Error reading library folder:", error);
      return [];
    }
  }

  async openFile(filePath: string): Promise<void> {
    try {
      await open(filePath);
    } catch (error) {
      console.error("Failed to open file:", error);
    }
  }
}
