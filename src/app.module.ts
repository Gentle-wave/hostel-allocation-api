import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HostelModule } from './hostel/hostel.module';
import { RoomModule } from './room/room.module';
import { StudentModule } from './student/student.module';


@Module({
  imports: [HostelModule, RoomModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
