# Introduction 
This is a coding assignment as part of interview process at Compass.        

# Getting Started

### Prerequisites
To begin using this solution, you will need the following softwares installed.
1. Node.js 
    -You can download this from [Node.js Website](https://nodejs.org/en/) and install it.
    - This solution was developed using Node v8.9.4
    - Installing Node will also install NPM (Node Package Manager)
2. Git
    - To install Git you can checkout the [Atlassian's Tutorial](https://www.atlassian.com/git/tutorials/install-git)
        - There are different steps to follow depending on the OS that you are using
            - [Mac OS X](https://www.atlassian.com/git/tutorials/install-git#mac-os-x)
            - [Windows](https://www.atlassian.com/git/tutorials/install-git#windows)
            - [Linux](https://www.atlassian.com/git/tutorials/install-git#linux)
    - If you are new to Git, go throught this [Git Cheatsheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)

### Installation process
To setup this project and getting started is just few simple steps
1. Clone this repository on your system
    - To do so, follow the steps for [Cloning a Git repository](https://confluence.atlassian.com/bitbucket/clone-a-repository-223217891.html)
2. ***(Optional)*** Navigate into the project folder or the repo as you may say that you just cloned and excute the command 
    ```
    npm i or npm install
    ```
This will install all the node modules that are used/needed to run this solution succesfully. 

***This step is optional because when you run the test, npm install is run as pre step during every run.***
More about it can be found under ***Build and Test***

### Latest releases
The latest release have 2 tests, each making a search for properties.
The 2 searches are 
1.  Rental Property Search
    Filters used are
    -   listingType = 0
    -   geography = 'nyc'
2.  For-Sale Property Search
    Filters used are
    -   listingType = 2
    -   bedrooms = [2]
    -   geography = 'santa_barbara_montecito'

As part of validation, following things were asserted
1.  Every response if in error, is asserted to check the error code, if error code = 400, the error message is thrown for reporting
2.  Both the above 2 search results are tested to check whether all the listings have 2 bedrooms and or of listingType = 2 (property is for Sale)
    -   Hence, For-Sale Search will PASS but Rental Search will FAIL.
    -   For Rental Properties have listingType = 0 and they will also have bedooms of count 0, 1, 3, 5, etc.

### Build and Test
Once you have cloned the repository, navigate in to the project folder.
```
cd ../path to the project fodler/compass-coding-assignment
```

Now, to run the tests, execute
```
npm start
```

Remember how I said, "npm install" was optional. 
When you do "npm start", "npm install" is executed before running the actual test by default for every run. 

### Contribute
To contribute to this project you will need a good understanding of
1. [Javascript](https://javascript.info/)
2. [Node.js](https://blog.codeship.com/node-js-tutorial/)
3. [Request-Promise](https://www.npmjs.com/package/request-promise)
4. [Mocha](https://mochajs.org/)
5. [Assert](https://nodejs.org/api/assert.html)
6. [Lodash](https://lodash.com/docs/4.17.5)
7. [Babel for using ES6](https://babeljs.io/)

### Contact The Author
In case you have any questions or issues related to this solution, feel free to reach out to me. 
```
Kapil Chokhawala    |   (716) 795 - 2745    |   kapil.chokhawala@gmail.com
```