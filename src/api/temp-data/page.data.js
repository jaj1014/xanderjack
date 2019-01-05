export default [{
  menu: {
    items: [
      {
        "name": "home",
        "path": "/",
      },
      {
        "name": "about",
        "path": "/about"
      },
      {
        "name": "projects",
        "path": "/projects"
      }
    ]
  },
  home: {
    header: "i'm alex jackson.",
    subText: 'I love solving problems.'
  },
  about: {
    header: 'about.',
    desc: {
      p1: 'My journey to web development started out of necessity and quickly developed into a passion.',
      p2: 'By trade, I am a musician with a Bachelors of Music in Performance, but without an abundance of opportunities I found my way to recruiting. When I was asked to recruit Web Developers, it didn’t take long before I realized I had no clue what they really did — so I googled it.',
      p3: 'Today, I am a Front End Developer with Softpro writing an application using the Angular framework. I strive to implement clean, easy-to-use interfaces that delight users and developers, alike.'
    },
    skills: {
      header: 'skills.',
      items: [
        { name: 'javascript.', detail: "I've been working with Javascript for the past 4 years. I know my way around closures, coercion, and other fun js offers.", use: 'production' },
        { name: 'typescript.', detail: 'I use typescript in my current role going on 2 years. It’s been super helpful in alleviating type bugs and providing intellisense to speed up dev work.', use: 'production' },
        { name: 'es6.', detail: 'Destructuring, spread, rest params, template strings and all the other goodies that make code more concise and easier to read.', use: 'production' },
        { name: 'css.', detail: 'Styles, styles - and more styles. I generally write using a preprocessor such as sass.', use: 'production' },
        { name: 'sass.', detail: 'This is my preprocessor of choice, although I have dabled with Stylus before. When part of a build process including auto-prefixer, browser support istons easier.', use: 'production' },
        { name: 'html.', detail: 'Semantic markup is always the goal. I have been using this since I started learning to program years ago', use: 'production' },
        { name: 'angular.', detail: "To be clear: Angular 4/5/6/7 - not Angularjs. I currently work with Angular (7) in my role at Softpro and enjoy it. Of course, it isn't the only framework ;)", use: 'production' },
        { name: 'jasmine.', detail: "I am using jasimine in my current role. Testing is viewed by some as a punishment, but I've actually come to enjoy it.", use: 'production' },
        { name: 'karma.', detail: 'The test runner used for jasmine.', use: 'production' },
        { name: 'webpack.', detail: "I have a love/hate relationship with Webpack. Our Angular project currently runs with a custom config for which I have become the owner. (what?! - no CLI!?) It was a struggle to wrap my head around, but now I find it fun to work with.", use: 'production' },
        { name: 'npm.', detail: 'npm run all the things! - this is the package manager I use most.', use: 'production' },
        { name: 'cli.', detail: "I am right at home in the command line. Makes me feel like I'm some sort of mastermind. My wife just calls them 'the dark screens I stare at'.", use: 'production' },
        { name: 'azure devops.', detail: 'Formerly known as vsts, this is our code and product management interface. We have our agile boards and CI/CD pipelines setup through here.', use: 'production' },
        { name: 'windows.', detail: "Not my operating system of choice, but the one in which I have the most hours of coding logged", use: 'production' },
        { name: 'rest api.', detail: "Pretty standard nowadays, but this is the type api with which I am currently working.", use: 'production' },
        { name: 'jwt.', detail: "js web tokens. I have used this in a personal project and it's what we are currently using for auth management.", use: 'production' },
        { name: 'node.', detail: "As a backend technology, I've used node to build out the api and serve up my front end code. You could also say I've used it in production given it's deep integration with the front end workflow.", use: 'hobby projects' },
        { name: 'mongodb.', detail: "When I've had to integrate a db for a project, I've gone to mongo with the mongoose node package.", use: 'hobby projects' },
        { name: 'express.', detail: "It's the standard when it comes to building a rest api in node and, as such, has been one I've used in my projects.", use: 'hobby projects' },
        { name: 'hapijs.', detail: "When I came across hapi, I found it really interesting. As another rest api framework, I've found it enjoyable to play with and will eventually find a project where I can use it.", use: 'tinkering' },
        { name: 'git.', detail: "Basic stuff - git add, git commit, git push - I've used this to manage my personal projects and keep them in sync through bitbucket.", use: 'hobby projects' },
        { name: 'bitbucket.', detail: "Where I manage my personal projects.", use: 'hobby projects' },
        { name: 'react.', detail: "I have built some smaller apps with React and really enjoyed it. It was the first front end framework that I used for a project.", use: 'hobby projects' },
        { name: 'vue.', detail: "This is the framework behind my current website (the one you're looking at). It's really enjoyable - both for simple projects and extendable for more complex ones.", use: 'hobby projects' },
        { name: 'linux.', detail: "My OS of choice - Ubuntu flavors, mostly. Currently, I use elementaryOS on my personal dev box.", use: 'hobby projects' },
        { name: 'unix.', detail: "macOS - this is where I learned to develop.", use: 'hobby projects' },
        { name: 'figma.', detail: "When I'm just starting a project, Figma is my current go-to for laying out interfaces. Before this is was Sketch and Photoshop/Illustrator. Figma's great since it's a webapp.", use: 'hobby projects' },
        { name: 'sketch.', detail: "Prior to Figma, I used Sketch. They are very similar. I have found Figma to be more universal across operating systems and thus helpful in my os hopping.", use: 'hobby projects' },
        { name: 'photoshop.', detail: "Old faithful. It's been a while since I've played with this one, but it's hard to ignore as a design tool.", use: 'tinkering' },
      ]
    }
  },
  projects: {
    header: 'projects.',
    items: [
      { header: 'sphere.', desc: "Sphere is Softpro's cloud-based, Title and Escrow software solution currently under development and beta testing. This is the product I am currently working on.", img: 'https://www.fillmurray.com/232/174', detail: {} },
      { header: 'singl.link.', desc: "singl.link is a project I created for managing link favorites between browsers - you just have to remember a single link (see what I did that?)", img: 'https://www.fillmurray.com/232/174', detail: {} },
      { header: 'ferraro.', desc: "A while back, I was connected to a friend of a friend who was in need of a website for her Licensed Professional Counseling work. This is the site I designed and coded for her.", img: 'https://www.fillmurray.com/232/174', detail: {} }
    ]
  }
}]