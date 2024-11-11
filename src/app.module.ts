import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.model';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [UserModule, ArtistModule],
  controllers: [AppController],
  providers: [AppService],
})