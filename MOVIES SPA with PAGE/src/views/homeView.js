import { render, html } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';

const movieTemplate = (movie) => html`
    <div class="card movie-card">
    <img src=${movie.posterUrl} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <a href="/movies/${movie._id}" class="btn btn-primary">Details</a>
        </div>
    </div>
`;

const homeTemplate = (movies) => html`
    <h1>Movie List</h1>

    <div class="movie-list">
        ${movies.map(x => movieTemplate(x))}
    </div>
`;

export const homeView = (ctx) => {
    
    let [key, search] = ctx.querystring.split('=');

    movieService.getAll(search)
        .then(movies => {
            //render(homeTemplate(movies), document.querySelector('#root'));
            ctx.render(homeTemplate(movies));
        });
};