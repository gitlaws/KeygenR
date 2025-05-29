import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-prompt-input",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./prompt-input.component.html",
  styleUrls: ["./prompt-input.component.scss"],
})
export class PromptInputComponent {
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

  generateMidi() {
    // TODO: Integrate with your MidiService
    this.isGenerating = true;
    setTimeout(() => {
      this.midiUri = "data:audio/midi;base64,...."; // Placeholder
      this.isGenerating = false;
    }, 2000);
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
}
