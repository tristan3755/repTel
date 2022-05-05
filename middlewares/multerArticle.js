import multer from 'multer'
import path from 'path'

const mimetypes={
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png'

}
const sauvegarde= multer.diskStorage({
destination:(req,file,callback)=>{
callback(null,'images')
},
filename:(req,file,callback)=>{
   let nom=file.originalname.split(' ').join('_')
   let ext=mimetypes[file.mimetype]
   callback(null,nom+Date.now()+'.'+ext) 
}

})

export const exportMulter = multer({storage:sauvegarde}).single('urlImgArticle')