        import courseController from '../../../adapters/controllers/couresController.js'
        import courseDbRepository from '../../../application/repositories/courseDbRepository.js'
        import courseDbRepositoryMongoDB from '../../database/mongoDB/repositories/courseRepositoryMongoDB.js'
        import authMiddleware from '../middlewares/authMiddlewares.js'

        export default function courseRouter(express){
            const  router = express.Router()
        
                const controller = courseController(
                    courseDbRepository,
                    courseDbRepositoryMongoDB,
                
                )
                // POST
                router.route('/').post(authMiddleware,controller.addNewCourse)
                router.route('/getCourseByIds').post(authMiddleware,controller.getCourseByIds)

                // GET
                router.route('/').get(authMiddleware,controller.fetchAllCourse)
                router.route('/:id').get(authMiddleware,controller.fetchCourseById)
                router.route('/findByUserId/:id').get(authMiddleware,controller.fetchCourseByUserId)

                // PUT
                router.route('/:id').put(authMiddleware,controller.updateCourseById) 

                // DELETE
                router.route('/:id').delete(authMiddleware, controller.deleteCourseById);

                router.get('/',(req,res)=>{
                    res.send({msg:"succcs"})
                })
                return router;  
        }