# HAPI + TYPESCRIPT + SWAGGER example #

To run simply clone the repo, run `npm i` and then `npm start`. 

## Some items i achieve with this example
### It has to use type-script: 
- That part was surprisingly easy, hapi-js has @types/hapi that you need to install and you are basically done. That's it...

### It has to have eslint: 
- Recently a magic thing happened, eslint started supporting typescript so that easy as well.

### It has to have swagger:  
- Hapi-swagger, it utilizes @hapi/joi ( i used typesafe-joi ) for not only excellent validations but also for creating the swagger configurations for Payload and for Response

### It has to auto-generate swagger:
- The reason i used typesafe-joi is specifically because it has the ability Joi.Literal<typeof joiSchemaModel>. Yes that means i can convert Joi schema to interface! It means that i can now assign that interface to my handler, and give the parent schema to the swagger and.... It will generate swagger and interface automatically!