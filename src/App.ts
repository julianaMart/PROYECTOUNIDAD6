import express,{Application,Request,Response} from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'

import PacienteRouter from './routes/Paciente.routes'
import MedicoRouter from './routes/Medico.routes'
import FormularioRouters from './routes/Formulario.routers'
import cors from 'cors'
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
	

	constructor(){
		this.app=express()
		this.app.use(express.json())
		this.app.use(
			'/api-docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
		)
		//this.prismaClient=new PrismaClient()
		this.app.use(cors())
		this.routes()
	}

	private routes():void{

		this.app.use('/',PacienteRouter)
		this.app.use('/',MedicoRouter)
		this.app.use('/',FormularioRouters)
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