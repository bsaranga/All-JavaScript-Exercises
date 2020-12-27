const fs = require('fs');
const config = JSON.parse(fs.readFileSync('../ormconfig.json'));
const typeorm = require('typeorm');
const Post = require('./model/Post');
const Category = require('./model/Category');

typeorm.createConnection(config).then(connection => {
    const category1 = new Category(0, 'JavaScript');
    const category2 = new Category(0, 'Programming');

    return connection.manager.save([category1, category2]).then(() => {
        let post = new Post();
        post.title = "Control flow based type analysis";
        post.text = "TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.";
        post.categories = [category1, category2];

        let postRepository = connection.getRepository(Post);
        postRepository.save(post).then(savedPost => {
            console.log(`Post has been saved: ${savedPost}`);
            return postRepository.find();
        }).then(allPosts => console.log(`All posts: ${allPosts}`))
    })
})
.catch(err => console.log(`Error: ${err}`))