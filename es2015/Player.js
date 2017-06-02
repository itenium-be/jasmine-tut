export class Player {
  constructor(json) {
    if (json) {
      this.name = json.name;
      this.points = json.points;
    }
  }
}
