const resolveRoutes = (route) => {
    if (route.length <=3) { //Porque la api tiene un máximo de 1000 personajes, entonces el hash va a tener máximo 3 caracteres
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`;
}

export default resolveRoutes;