

import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"API de IPS",
            version:"1.0.0",
            description:"Esta API tiene la funcionalidad de la IPS"
        },
        servers:[
            {
                url:"http://localhost:3000",
                description:"Servidor Local Documentacion"
            }
        ]
    },

    apis:["src/index.ts","./swagger/*.swagger.ts"]
 

}

export const swaggerSpec=swaggerJSDoc(swaggerOptions)