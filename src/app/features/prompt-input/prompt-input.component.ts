import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MidiService } from "../../services/midi.service";

import { AiService } from "../../services/ai.service";

@Component({
  selector: "app-prompt-input",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./prompt-input.component.html",
  styleUrls: ["./prompt-input.component.scss"],
})
export class PromptInputComponent {
  constructor(private ai: AiService, private midi: MidiService) {}
  userPrompt: string = "";
  bpm: number = 90;
  key: string = "C";
  bpmOptions: number[] = [80, 90, 100, 120, 128, 140];
  keyOptions: string[] = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  midiUri: string = "";
  isListening: boolean = false;
  isGenerating: boolean = false;

  async generateMidi() {
    this.isGenerating = true;
    const structured = await this.ai.parsePrompt(this.userPrompt);
    this.midiUri = this.midi.generateMidi(structured);
    this.isGenerating = false;
  }

  toggleSpeech() {
    const recognition = new (window.SpeechRecognition ||
      (window as any).webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.onresult = (event: any) => {
      this.userPrompt = event.results[0][0].transcript;
      this.isListening = false;
    };
    recognition.onend = () => (this.isListening = false);
    recognition.onerror = () => {
      this.isListening = false;
      alert("Speech recognition failed. Please try again.");
    };
    this.isListening = true;
    recognition.start();
  }

  downloadMidi() {
    const a = document.createElement("a");
    a.href = this.midiUri;
    a.download = "keygenr.mid";
    a.click();
  }
}
