import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }

  setEmojis(emojis) {
    this.emojis = emojis;

    let div = document.getElementById('emojis');
    let paragraph = document.createElement('p');

    this.emojis.forEach(emoji => {
      paragraph.textContent += emoji;
    });

    div.appendChild(paragraph);
  }

  addBananas() {
    this.emojis = this.emojis.map(e => e + this.banana);
    document.getElementById('emojis').textContent = '';
    this.setEmojis(this.emojis);
  }
}