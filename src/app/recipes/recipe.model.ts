import { Ingrediant } from "../shared/ingrediant.model";

export class Recipe {
	public name: string;
	public description: string;
	public imagePath: string;
	public ingrediants: Ingrediant[];

	constructor(name: string, description: string, imagePath: string, ingrdiants: Ingrediant[]) {
		this.name = name
		this.description = description
		this.imagePath = imagePath
		this.ingrediants = ingrdiants
	}
}