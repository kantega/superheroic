# Superheroic Web Development with AngularJS #

## About ##

 [AngularJS](http://angularjs.org/) workshop at [Booster](http://www.boosterconf.no/) 2014.

## Requirements ##

* Apache Maven 3.x || Eclipse || Gradle 1.11
* JVM 7.x
* A decent IDE, like IDEA, Eclipse


## Usage ##

__Maven__

        mvn clean install
        mvn jetty:run

__Gradle__

        (Linux/Mac) ./gradlew
        (Windows)   gradlew.bat

        gradle jettyEclipseRun

__IntelliJ IDEA & Maven__

        Download and install Maven from http://maven.apache.org/download.html
        Download and install IDEA from http://www.jetbrains.com/idea/free_java_ide.html
        Open Project -> select pom.xml
        Click 'Maven Project' on Right menu bar -> superheoric -> Plugins -> Right click jetty:run -> Run Maven Build
        If asked about "No Maven installation..", click 'configuration dialog', and set 'Maven home location' to installed Maven home dir
        Access application with browser on http://localhost:8080

__Stand-alone Eclipse__

        Download and install Maven from http://maven.apache.org/download.html
        Import -> Maven -> Existing Maven Projects
        Root Directory: Select superheroic path -> Next -> Finish
        Under 'Project Explorer Window' Select project root, then go to Run Menu -> Run As -> Maven Build (first one)
        Write 'install jetty:run' in Goals -> Run
        Access application with browser on http://localhost:8080

__Eclipse & Maven__

        mvn -Declipse.workspace="path to your Eclipse Workspace" eclipse:configure-workspace
        mvn eclipse:eclipse
        Start Eclipse
        File > Import > Existing Projects into Workspace
        Root Directoy: Select superheroic path -> Finish
        Under Project Explorer Window Select project root, then go to Run Menu -> Run Configurations, double click Maven Build
        Under Base directory -> Browser Workspace -> Select superheroic
        Write 'install jetty:run' in Goals -> Run
        Access application with browser on http://localhost:8080
