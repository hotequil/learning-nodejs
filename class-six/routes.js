const { express } = require("./server");
const routes = express.Router();

const courses = [
    {
        name: 'js',
        info: 'lorem ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'html',
        info: 'lorem ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'css',
        info: 'lorem ipsum is simply dummy text of the printing and typesetting industry.'
    }
];

routes.get('/', (request, response) => response.json(courses));

routes.get('/:courseId', (request, response) => {
    const { courseId } = request.params;
    const course = courses.find(item => item.name === courseId);

    if(course) response.status(200).json(course);
    else response.status(404).json({ error: 'Not found course' });
});

module.exports = routes;
