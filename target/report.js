$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Hook.feature");
formatter.feature({
  "name": "Try(Scenerio)",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hook.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will provide vaild details",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_will_provide_vaild_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verified the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.to_verified_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/SelOutline.feature");
formatter.feature({
  "name": "Sel Outline",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Generate the three set of customer id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user click add customer link",
  "keyword": "And "
});
formatter.step({
  "name": "user will provide vaild detailsout\"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cemail\u003e\",\"\u003caddress\u003e\",\"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "to verified the customer id is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "vishal",
        "raj",
        "raj@gmail.com",
        "chennai",
        "8795231469"
      ]
    },
    {
      "cells": [
        "ram",
        "kumar",
        "kumar@gail.com",
        "madurai",
        "9858741239"
      ]
    },
    {
      "cells": [
        "gopi",
        "krishnan",
        "krishnan@gmail.com",
        "chennai",
        "9632587418"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Generate the three set of customer id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hook.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will provide vaild detailsout\"vishal\",\"raj\",\"raj@gmail.com\",\"chennai\",\"8795231469\"",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_will_provide_vaild_detailsout(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verified the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.to_verified_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate the three set of customer id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hook.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will provide vaild detailsout\"ram\",\"kumar\",\"kumar@gail.com\",\"madurai\",\"9858741239\"",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_will_provide_vaild_detailsout(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verified the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.to_verified_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate the three set of customer id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hook.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will provide vaild detailsout\"gopi\",\"krishnan\",\"krishnan@gmail.com\",\"chennai\",\"9632587418\"",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_will_provide_vaild_detailsout(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verified the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.to_verified_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/onedim.feature");
formatter.feature({
  "name": "One D List",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hook.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will provide vaild detailslist",
  "rows": [
    {
      "cells": [
        "ram",
        "kumar",
        "ram@gmail.com",
        "chennai",
        "9865147895"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_will_provide_vaild_detailslist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verified the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.to_verified_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/onedimmap.feature");
formatter.feature({
  "name": "One D Map",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hook.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will provide vaild detailsmap",
  "rows": [
    {
      "cells": [
        "fname",
        "raj"
      ]
    },
    {
      "cells": [
        "lname",
        "kumar"
      ]
    },
    {
      "cells": [
        "email",
        "raj@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phone",
        "9874561238"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_will_provide_vaild_detailsmap(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verified the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.to_verified_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/try.feature");
formatter.feature({
  "name": "Try(Scenerio)",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hook.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will provide vaild details",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_will_provide_vaild_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verified the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.to_verified_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/twodlist.feature");
formatter.feature({
  "name": "Two D List",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hook.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer linkopen",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_linkopen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will provide vaild detailtwod",
  "rows": [
    {
      "cells": [
        "1000",
        "1001",
        "1002",
        "1003",
        "1004",
        "1005",
        "1006"
      ]
    },
    {
      "cells": [
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006"
      ]
    },
    {
      "cells": [
        "3000",
        "3001",
        "3002",
        "3003",
        "3004",
        "3005",
        "3006"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_will_provide_vaild_detailtwod(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verified the customer id is displayedss",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.to_verified_the_customer_id_is_displayeds()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/twodmap.feature");
formatter.feature({
  "name": "Two D map",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Hook.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add customer linkopen",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_add_customer_linkopen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will provide vaild detailtwodmap",
  "rows": [
    {
      "cells": [
        "rental",
        "minutes",
        "international",
        "smspack",
        "localperminutes",
        "internationalminutes",
        "smsper"
      ]
    },
    {
      "cells": [
        "1000",
        "1001",
        "1002",
        "1003",
        "1004",
        "1005",
        "1006"
      ]
    },
    {
      "cells": [
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006"
      ]
    },
    {
      "cells": [
        "3000",
        "3001",
        "3002",
        "3003",
        "3004",
        "3005",
        "3006"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_will_provide_vaild_detailtwodmap(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verified the customer id is displayedss",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.to_verified_the_customer_id_is_displayeds()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});