import IUser from "./IUser";
import IAnimal from "./IAnimal";

export default interface IState {
	user: IUser;
	animal: Array<IAnimal>;
	runtime:  {
		selectedTab: string
	};
}