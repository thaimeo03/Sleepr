import { NestFactory } from '@nestjs/core'
import { ReservationsModules } from './reservations.module'
import { Logger } from 'nestjs-pino'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModules, { bufferLogs: true })
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.useLogger(app.get(Logger))

  await app.listen(3000)
}
bootstrap()
