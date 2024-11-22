import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class LoginController {

  @Get('/gamez')
  gamez(@Res() res: Response) {
    return res.redirect('/gamez/panelLogin');
  }

  @Get('/gamez/panelLogin')
  panelLogin(@Res() res: Response) {
    // Renderiza la vista "login.ejs" con los datos opcionales
    return res.render('login/bodys/login', { title: 'Login Page' });
  }

}