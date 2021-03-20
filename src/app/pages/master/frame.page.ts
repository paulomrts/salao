// Esta pagina é chamda qndo for necessário renderizar componentes na página

import { Component } from "@angular/core";

@Component({
    selector: 'app-frame-page',
    template: '<app-navbar></app-navbar><router-outlet></router-outlet>'
})

export class FramePageComponent{

}
