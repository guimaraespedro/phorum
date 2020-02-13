const {Router} = require('express');

const routes = Router();

routes.post('/users',(request,response)=>{
    return response.json({message:'oi'})
});

module.exports = routes;