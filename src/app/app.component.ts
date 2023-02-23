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
import {MatMenuModule} from '@angular/material/menu';
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
    MatMenuModule,
  ],
})
export class AppComponent {
  isAuthenticated = false;
  profile = {
    name: "",
    avatar: "",
  };
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
        user: this.profile.name,
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

  async ngOnInit() {
    this.isAuthenticated = !!(await this.isLoggedIn());
    if (this.isAuthenticated) {
      this.profile = await this.getProfile();
    }
  }
    

  login() {
    window.location.href = "/.auth/login/aad?post_login_redirect_uri=/";
  }

  logout() {
    window.location.href = "/.auth/logout?post_logout_redirect_uri=/";
  }

  async isLoggedIn() {
    const response = await fetch("/.auth/me")
    const { clientPrincipal } = await response.json();
    return clientPrincipal !== null;
  }

  async getProfile() {
    const response = await fetch("/.auth/me");
    const { clientPrincipal } = await response.json();
    return {
      name: clientPrincipal?.userDetails,
      avatar: clientPrincipal?.claims?.at(0).avatar || "/assets/user.png",
    }
  }
}
