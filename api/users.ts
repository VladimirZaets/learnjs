let users = {
    get: (req:any, res:any) => {
        res.json({'testUser': 1});
    }
};

export { users as users }