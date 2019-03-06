export class Post {

  private _title: string;
  private _content: string;
  private _loveIts: number;
  private _created_at: Date;


  constructor(title: string, content: string) {
    this._title = title;
    this._content = content;
    this._loveIts = 0;
    this._created_at = new Date();
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get loveIts(): number {
    return this._loveIts;
  }

  set loveIts(value: number) {
    this._loveIts = value;
  }

  get created_at(): Date {
    return this._created_at;
  }

  set created_at(value: Date) {
    this._created_at = value;
  }
}
