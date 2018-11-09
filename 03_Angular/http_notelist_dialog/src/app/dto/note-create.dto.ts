export class NoteCreateDto {
    title: string;
    content: string;
    color: string;
    favourite: boolean;

    constructor(title: string, content: string, color: string, favourite: boolean) {
        this.title = title;
        this.content = content;
        this.color = color;
        this.favourite = favourite;
    }
}
