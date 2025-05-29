interface Window {
  SpeechRecognition: any;
  webkitSpeechRecognition: any;
}
interface MidiService {
  generateMidi(prompt: string, bpm: number, key: string): Promise<string>;
}
