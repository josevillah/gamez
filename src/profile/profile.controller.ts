import { Controller, Get, Res, Req } from "@nestjs/common";
import { Response, Request } from 'express';

@Controller('/')
export class ProfileController {

    @Get('/profile')
    profile(@Res() res: Response, @Req() req: Request) {
      // Verifica se o usuário está logado
      if(!req.session.user) {
        return res.redirect('/');
      }
      
      // Renderiza a página de perfil
      return res.render('bodys/profile', { title: 'Profile Page', user: req.session.user });
    }

}