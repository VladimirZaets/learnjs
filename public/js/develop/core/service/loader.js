define([], () => (path) => ({
    loader: ['$q', ($q) => {
        let deferred = $q.defer();

        require([path], () => deferred.resolve());

        return deferred.promise;
    }]
}));
