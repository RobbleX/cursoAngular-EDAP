import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { NotaListService } from './ejercicio/nota-list.service';


const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
