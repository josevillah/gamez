import { Controller, Get, Res, Req } from "@nestjs/common";
import { Response, Request } from 'express';

@Controller("/gamez")
export class ProfileController {

    @Get('/profile')
    profile(@Res() res: Response, @Req() req: Request) {
      // Verifica se o usuário está logado
      if(!req.session.user) {
        return res.redirect('/gamez/panelLogin');
      }
      
      // Renderiza a página de perfil
      return res.render('bodys/profile', { title: 'Profile Page', user: req.session.user });
    }

}