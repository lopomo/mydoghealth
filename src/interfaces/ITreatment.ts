export default interface ITreatment {
	name: string,
	type: string,
	description?: string,
	iat: Date,
	exp: Date
}