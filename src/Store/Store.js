import createStore from 'redux-zero';

const initialState = {
    personal : 
        {
            name: "Claudia Mriel Loayza Medina",
            shortName: "Claudia Loayza",
            who: "Front-End Developer Jr",
            age: "26",
            bio: "Soy Front-end Developer gracias a la oportunidad que obtuve cursando estudios de programación en el bootcamp que ofrece laboratoria. En el transcurso del programa he logrado aprender HTML, CSS, JS y REACT
            Hace un tiempo culmine mi carrera universitaria de Marketing, obteniendo una formación integral, logrando canalizar en el presente mis capacidades y habilidades, innatas y adquiridas, para lograr alcanzar las metas propuestas en el sector tecnológico. Con Laboratoria he logrado descubrir mi verdadera pasión hacia la programación, diseño y organización de proyectos en equipo. Soy consciente del mundo de oportunidades a la que actualmente las mujeres podemos acceder, equilibrando nuestras oportunidades con nuestras capacidades, y quiero ser parte del gran cambio que este mundo ofrece a nuestra sociedad",  
            badges: 'Una de las cinco mejores',
            education: 'Universidad Nacional de San Agustin - Marketing',
            workExperience: '',
        },
    info : 
        {
            testimonials: '',   
        },
    socials : 
        {
            linkedin : "https://www.linkedin.com/",
            github : '', 
            email : "clou7loymed@gmail.com",
            phone : "989411469",
        },
    repos : 
        {
            react : [''], 
        }
}

const store = createStore(initialState);
export default store;

   
            