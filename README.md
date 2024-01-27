 


## Getting Started

### Installation

Clone the repo:

```bash
git clone https://github.com/ahmetfturgut/nodejs-blog.git
cd nodejs-blog
```

Install the dependencies:

```bash
npm install
|
yarn install
```
 
  
### Running locally:

```bash
npm run start
|
yarn dev
```
  
## API Testi

API'yi test etmek için Postman kullanabilirsiniz. Postman koleksiyonunu proje ana dizinine ekledim
"postman/blog.postman_collection.json"

### API Endpoint'lerini Test Etme

1. **POST http://localhost:3000/api/v1/user:** Yeni bir kullanıcı oluşturmak için.

2. **POST http://localhost:3000/api/v1/auth/login:** Kullanıcı girişi yapmak için.

3. **POST http://localhost:3000/api/v1/blog:** Yeni bir blog oluşturmak için.

4. **GET http://localhost:3000/api/v1/blog/:id:** Belirli bir blog almak için.

5. **GET http://localhost:3000/api/v1/blogs?page=1&limit=10:** Sayfalama ile blogları çekmek için

6. **GET http://localhost:3000/api/v1/blogs/search?keyword=printing:** Blog içerisinde keyword ile arama yapmak için

7. **PUT http://localhost:3000/api/v1/blog/:id:** Belirli bir bloğu güncellemek için.

8. **POST http://localhost:3000/api/v1/comment:** Belirli bir bloğa yorum girmek için.

9. **DELETE http://localhost:3000/api/v1/blog/:id:** Belirli bir bloğu fiziksel olarak silmek için.

10. **PUT http://localhost:3000/api/v1/blog/:id:** Belirli bir bloğun durumunu silindi yapmak için.





Project `src` structure directories.

```
src/
├─ config/
│  ├─ config.js
├─ controller.js
│  ├─ authController.js
│  ├─ blogController.js
│  ├─ commentController.js
│  ├─ controller.index.js
│  ├─ userController.js
├─ loader/
│  ├─ express.js
│  ├─ mongoose.js
├─ middlewares/
│  ├─ apiResponse.js
│  ├─ authorizer.js
│  ├─ middlewares.index.js
│  ├─ validator.js
├─ model/
│  ├─ enums/
│  ├─ plugins/
│  ├─ blog.js
│  ├─ comment.js
│  ├─ user.js
├─ repository/
│  ├─ blogRepository.js
│  ├─ commentRepository.js
│  ├─ repository.index.js
│  ├─ userRepository.js
├─ routes/
│  ├─ authRoute.js
│  ├─ blogRoute.js
│  ├─ commentRoute.js
│  ├─ routes.index.js
│  ├─ routes.js
│  ├─ userRoute.js
├─ service/
│  ├─ blogService.js
│  ├─ commentService.js
│  ├─ commentRoute.js
│  ├─ service.index.js 
│  ├─ userService.js
├─ utils/
│  ├─ cryptUtil.js
│  ├─ pick.js
│  ├─ requestUtil.js 
│  ├─ utils.index.js
├─ validations/
│  ├─ auth.validation.js
│  ├─ blog.validation.js
│  ├─ comment.validation.js
│  ├─ custom.validation.js
│  ├─ user.validation.js
│  ├─ validations.index.js
server.js
```



