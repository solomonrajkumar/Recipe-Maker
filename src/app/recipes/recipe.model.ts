
export class Recipe {
    name: string;
    description: string;
    imageUrl: string;

    constructor(name, description, imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}