import { Controller, Get, Post, Res, Body, Req} from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('/')
export class LoginController {

  @Get('/')
  panelLogin(@Res() res: Response, @Req() req: Request) {
    // Verifica se o usuário está logado
    if(req.session.user) {
      return res.redirect('/profile');
    }
    // Renderiza la vista "login.ejs" con los datos opcionales
    return res.render('bodys/login', { title: 'Login Page' });
  }

  @Get('/singup')
  singup(@Res() res: Response) {
    return res.render('bodys/singup', { title: 'Singup Page' });
  }

}
