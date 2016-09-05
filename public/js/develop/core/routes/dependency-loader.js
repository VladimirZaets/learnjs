define([], () => (dependencies) => ({
    loader: ['$q','$rootScope', ($q, $rootScope) => {
        var deferred = $q.defer();

        require(dependencies, () => {
            $rootScope.$apply(() => {
                deferred.resolve();
            });
        });

        return deferred.promise;
    }]
}));
