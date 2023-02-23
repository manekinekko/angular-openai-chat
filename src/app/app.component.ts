import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {
  MatProgressBarModule,
  ProgressBarMode,
} from "@angular/material/progress-bar";
import { MatDivider, MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

type Message = {
  text: string;
  from: "user" | "bot";
  date: Date;
};

@Component({
  selector: "openai-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class AppComponent {
  conversation: Message[] = [];
  loadingStatus: ProgressBarMode = "determinate";

  @ViewChildren("conversationRef", {
    read: ElementRef,
  })
  conversationRef!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    this.conversationRef.changes
        .subscribe(() => {
          this.conversationRef.last.nativeElement.scrollIntoView();
        });
}


  async send(prompt: HTMLInputElement) {
    this.loadingStatus = "buffer";

    this.updateConversation({
      text: prompt.value,
      from: "user",
      date: new Date(),
    });

    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt.value,
      }),
    });
    const { text } = await response.json();
    this.updateConversation({
      text,
      from: "bot",
      date: new Date(),
    });

    prompt.value = "";

    this.loadingStatus = "determinate";
  }

  updateConversation(message: Message) {
    this.conversation.push(message);
  }
}
