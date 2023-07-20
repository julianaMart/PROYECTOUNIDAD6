import express,{Application,Request,Response} from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'

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
		this.routes()
	}

	private routes():void{
		this.app.get(
			'/',
			(req: Request,res: Response)=>{
				res.send('Bienvenidos a typescript')
			}
		)
		this.app.post(
			'/paciente',
			(req: Request,res: Response)=>{
				res.send('Bienvenidos a typescript')
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