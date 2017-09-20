const express = require('express')
const router = express.Router();
const data = require("../data.js")
/* INDEX TODOS */
router.get('/', (req,res)=> {
   res.render("todos/index",{
      todos: data.seededTodos
    });
  });
  /* new todos*/
  router.get('/new', (req,res)=>{
    res.render('todos/new')
})
/* show todos*/
  router.get('/:id', (req,res)=>{
      const id = parseInt(req.params.id);
        const todos = data.seededTodos[id];
        console.log(todos);
if(!todos){
    res.render("todos/show", {
        error: "No to-do found with this ID"
    })
}else {
        res.render('todos/show', {
            todos: todos
        })
    }
  })
 router.post("/", (req,res)=>{
     req.body
 })
  module.exports = router;