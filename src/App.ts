import express,{Application,Request,Response} from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import {PrismaClient} from '@prisma/client'

/**
 * Clase principal de la API, Define las rutas de la API
 * 
 * @author Juliana Martinez
 * @description Clase inicial
 */
class App{
	//Atributos
	public app:any
	private server:any
	private prismaClient:PrismaClient

	constructor(){
		this.app=express()
		this.app.use(express.json())
		this.app.use(
			'/api-docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
		)
		this.prismaClient=new PrismaClient()
		this.routes()
	}

	private routes():void{
		
		
		this.app.post(
			'/crear_paciente',
			(req: Request,res: Response)=>{
				try{
				const {cedula,
					nombre,
					apellido,
					fecha,
					telefono
				}=req.body

				const fechaNacimiento=new Date(fecha)
				const paciente=this.prismaClient.paciente.create(
					{
						data:{
							cedula,
							nombre,
							apellido,
							fechaNacimiento,
							telefono
						}
					}
				)
				res.json(paciente)
				}catch(e:any){
					res.status(400)
					res.json({error:e.message})
				}
			}
		)
	}

	public start():void{
		this.app.listen(
			3000,
			()=>{console.log('El servidor esta escuchando el puerto 3000')}
		)
	}

	public close():void{
		this.server.close()
	}

}
export default App