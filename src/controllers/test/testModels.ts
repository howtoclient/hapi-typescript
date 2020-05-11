import * as Joi from 'typesafe-joi';

// define models for hapi swagger validation
export const userAddressModel = Joi.object({
    postCode: Joi.string().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
}).label('userAddress');

export const userModel = Joi.object({
    name: Joi.string().required(),
    phoneNumber: Joi.number().optional(),
    addresses: userAddressModel,
}).label('user');

// convert models to interfaces for in-app use
export type userAddress = Joi.Literal<typeof userAddressModel>
export type user = Joi.Literal<typeof userModel>


