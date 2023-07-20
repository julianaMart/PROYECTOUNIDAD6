import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.conf';

export const swaggerOptions={}

import App from "./App"

const app=new App()
app.start()