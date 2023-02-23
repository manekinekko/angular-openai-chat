import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

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
  conversation = [
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
    },
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
    },
    {
      text: "Hello, how are you?",
      from: "user",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
    {
      text: "I'm fine, thanks. How are you?",
      from: "bot",
      date: new Date(),
    },
  ];

  async send(text: string) {
    console.log(text);
  }
}
