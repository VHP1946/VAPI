VAPI



# Packages
- vhp-core
- vhp-logging

# VHP-Core
- starting the server
- setting up controllers
- registering models
- handling request
- logging request

The core can be packaged and shared across all services.


# Folder Structure

bin: Folder for miscellaneous files. Currently the folder holds some larger ideas that may mature into their own module like the handlers and the server itself. What will end up is our middle-ware (validators, parsers)

config: Hold any config files for the different modules. File names should reflect the module.

controllers: The setup and housing for the routes of the api. A base controller will extend further controllers whose responsibility it is to add the routes to the server. In these controllers will be the individual routes. All controllers export through index.js.

request_schemes: A place to hold any validation for the controllers. All schemes will export through index.js as the name matching the controller.Format of the schemes are:
```
{
    module.export = {
        routeName:{
            name:String
            strict:Boolean
            scheme:{
                id:{
                    type:String,
                    default:<value matching above type>,
                    descr:'Is the id for something'
                }
            }
        }
    }
}
```

logging: More than likely be moved out and packaged, but for not a module to attach to the server. It will work along side the server/handlers and controllers to tracker request progress. Logging will have a config file (in config folder) to set the levels and messages specific to

# Routes

Contents:
- Tracker




## Tracker
 Name:
 Description:
 Pack:
 Response:
