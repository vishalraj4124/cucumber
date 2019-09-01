package org.cuc;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features",glue="org.cuc",plugin= {"html:target","rerun:src/test/resources/features/failed.txt"},dryRun=false,monochrome=false,strict=true) 
public class Testrunner {

}
 //tags= {"~@tag2"},