import { Controller, Get, Post, Res, Body, Req} from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('/gamez')
export class LoginController {

  @Get('/')
  gamez(@Res() res: Response) {
    return res.redirect('/gamez/panelLogin');
  }

  @Get('/panelLogin')
  panelLogin(@Res() res: Response, @Req() req: Request) {
    // Verifica se o usuário está logado
    if(req.session.user) {
      return res.redirect('/gamez/profile');
    }
    // Renderiza la vista "login.ejs" con los datos opcionales
    return res.render('bodys/login', { title: 'Login Page' });
  }

}
