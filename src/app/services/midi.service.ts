import { Injectable } from "@angular/core";
import * as MidiWriter from "midi-writer-js";

@Injectable({ providedIn: "root" })
export class MidiService {
  generateMidi(structuredData: any): string {
    // TODO: Use midi-writer-js to convert structuredData to MIDI
    // Return a data URI string for download
    return "data:audio/midi;base64,...";
  }
}
