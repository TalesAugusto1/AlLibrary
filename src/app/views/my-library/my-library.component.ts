import { Component, OnInit } from "@angular/core";
import { FileService } from "../../core/file.service";
import { CommonModule } from "@angular/common";
import { WatcherService } from "../../core/watcher.service";

@Component({
  selector: "app-my-library",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./my-library.component.html",
  styleUrl: "./my-library.component.css",
  providers: [FileService, WatcherService],
})
export class MyLibraryComponent implements OnInit {
  files: any[] = [];

  constructor(
    private fileService: FileService,
    private watcherService: WatcherService
  ) {}

  async ngOnInit() {
    await this.refreshFileList();
    this.watcherService.onUpdate(() => this.refreshFileList());
  }

  async refreshFileList() {
    this.files = await this.fileService.listFiles();
  }

  async openFile(filePath: string) {
    await this.fileService.openFile(filePath);
  }
}
