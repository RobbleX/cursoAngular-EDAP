import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { NotaListComponent }  from './ejercicio/nota-list.component';


const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
