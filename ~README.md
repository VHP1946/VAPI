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
- Settings



## Tracker
 Name:
 Description:
 Pack:
 Response:


## Settings
GETsettings
required: data = { appinfo, userinfo }
returns: response.data = settings object
Used to grab all the settings required by an application.
Applications must be classified with certain properties (apptype, grouping, category). These will be properties at the base level of the package.json file.
The route will use the application's information as well as an access list from the user's account to determine what to pull and combine.
There are four primary pulls that reach out to four different documents. Two pulls will be from the "Generals" collection: Pricing and General Settings. These settings packages apply to most every application. One pull will be to grab the AppType settings. These are settings that apply to any applications that do similar tasks, regardless of which department is using them. Examples of AppTypes are Estimator, and Tracking. The final pull will be grouping-specific. The route will use the application's Grouping and Category properties to find the correct settings document within the Groups collection.