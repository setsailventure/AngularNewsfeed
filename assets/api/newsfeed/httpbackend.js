app.run(function ($httpBackend) {
    /* temporary newsfeed */
    var datasource = [
        {
            "_id": "7fio9ur878d",
            "actor": "Zachary Nevin",
            "action": "event::created",
            "object": {
                "title": "New Team Formed",
                "description": "A great team of engineers have been formed to create the best online education solutions for the private education tutoring market in Asia!",
                "start": "2015-03-11T18:25:43.511Z",
                "duration": 69
            },
            "created_at": "2015-03-23T18:25:43.511Z"
        },
        {
            "_id": "DFJH989834093",
            "actor": "Sunny Wong",
            "action": "event::created",
            "object": {
                "title": "Meet Sunny Wong",
                "description": "HKUST-trained Computer Engineer, previously working for a macro hedge fund in Europe and JP Morgan. Excited to join a new startup!",
                "start": "2015-03-23T18:25:43.511Z",
                "duration": 169
            },
            "created_at": "2015-03-23T18:25:43.511Z"
        },
        {
            "_id": "dlfkjd212234",
            "actor": "Jovian Ling",
            "action": "event::created",
            "object": {
                "title": "Meet Jovian Ling",
                "description": "HKUST-trained Engineer, co-founded eZophy and Curious Alien, previously a private tutor teaching Philosophy. Understand the tutoring market and front-end development very well!",
                "start": "2015-03-23T18:25:43.511Z",
                "duration": 269
            },
            "created_at": "2015-03-23T18:25:43.511Z"
        },
        {
            "_id": "djkhf8734893",
            "actor": "Chris",
            "action": "post::created",
            "object": {
                "title": "New Post to Chris",
                "body": "Chris is handsome",
                "created_at": "2015-03-23T18:25:43.511Z"
            },
            "created_at": "2015-03-23T18:25:43.511Z"
        },
        {
            "_id": "cmvmnbkfg01",
            "actor": "Zachary Nevin",
            "action": "post::created",
            "object": {
                "title": "New Post to Zach",
                "body": "Zach is handsome",
                "created_at": "2015-03-23T18:25:43.511Z"
            },
            "created_at": "2015-03-23T18:25:43.511Z"
        }
    ];

    /* api for $resource query to get all items */
    $httpBackend.whenGET('/api/newsfeed').respond(datasource);

    /* api for $resource get(id) to get individual item dynamically*/
    $httpBackend.whenGET(/\/api\/newsfeed\/.*/).respond(function (method, url, data) {

        /* use regular expression to extract id */
        var regexp = new RegExp('\/api\/newsfeed\/(.*)', 'gmi');
        var matchedArr = regexp.exec(url);
        var elementPos = datasource.map(function (x) {
            return x._id
        }).indexOf(matchedArr[1]);
        return [200, datasource[elementPos], {}];
    });

    /* api for $resource save to create new item */
    $httpBackend.whenPOST('/api/newsfeed').respond(function (method, url, data) {
        var newitem = angular.fromJson(data);
        datasource.push(newitem);
        var elementPos = datasource.map(function (x) {
            return x._id
        }).indexOf(newitem._id);
        return [200, newitem, {}];

    });

    /* passthrough */
    $httpBackend.whenGET('').passThrough();
});
