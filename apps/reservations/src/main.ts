import { NestFactory } from '@nestjs/core'
import { ReservationsModules } from './reservations.module'

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModules)
  await app.listen(3000)
}
bootstrap()
