import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.model';
import { ArtistModule } from './artist/artist.model';
import { AlbumModule } from './album/album.module';


@Module({
  imports: [UserModule, ArtistModule, AlbumModule],
  controllers: [AppController],
  providers: [AppService],
})