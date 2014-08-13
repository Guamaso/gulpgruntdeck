Install Node using your systems method. For example, on Windows, you need to visit NodeJS site and download installer.

Install NPM using your systems method.

All the commands should be run *in* the project root folder, for example `c:/my_projects/MyCoolProject/`.

Before you start, create an empty `package.json` file.

`npm init`

## Method 1

Install Grunt. Grunt is usually a project dependancy, so make sure to use `--save-dev` to mark it as such.
`npm install grunt-cli --save-dev`

Create an empty gulpfile.
`grunt init`

## Method 2

Use Yeoman to create a scaffold.

Yeoman is used just once (usually) but if it will be a dependancy, don't forget to add the `--save-dev` flag.
`npm install yeoman`

Install your gulp generator of choice, like the one below, for example. Again, don't forget `--save-dev` if you need it.
`npm install generator-gruntfile`

Tell Yeoman to run the new generator.
`yo gruntfile`
