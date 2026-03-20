// Analytics module for Prime Analytics Dashboard
export class Analytics {
  constructor() {
    this.data = [];
  }
  
  track(event) {
    this.data.push(event);
  }
  
  getData() {
    return this.data;
  }
}