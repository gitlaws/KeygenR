import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AiService {
  async parsePrompt(prompt: string): Promise<any> {
    // TODO: Call OpenAI API and return structured MIDI data
    // Example: { intro: [{ pitch: ["F#3", "A3", "C#4"], duration: "2", velocity: 85 }, ...] }
    return {};
  }
}
