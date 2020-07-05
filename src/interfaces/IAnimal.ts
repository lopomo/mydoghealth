import AnimalType from "@/enums/animal_type";
import Treatment from "./ITreatment";

export default interface IAnimal {
	chip: string,
	detail: {
		name: string,
		type: AnimalType,
		birthDate: Date,
		weight?: string,
		withers?: string,
		breed: string,
		color: string,
		sex: 'FEMALE' | 'MALE'
	},
	otherVaccinations: Array<Treatment>,
	rabiesVaccinations: Array<Treatment>,
	wormed: Array<Treatment>,
	antiparasitics: Array<Treatment>

}