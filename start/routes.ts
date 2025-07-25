/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'
import { middleware  } from "#start/kernel";


router.get('/', async () => 'It works!')

router.group(()=>{
    router.get('/user/:id?',[UsersController,'getUser']);    
}).prefix("/api");
router.post('/user',[UsersController,'create']);
