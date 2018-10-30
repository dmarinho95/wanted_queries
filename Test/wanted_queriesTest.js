var pageObjectHolder
var wanted_query_Data = require("C:\\Users\\Daniel Marinho\\Desktop\\dev mountain\\wanted-queries\\wanted_queries_Test-Assets\\wanted_query_testData.js")

function applyData(pageObject, data) {
    pageObject
        .navigate()

        .waitForElementVisible("@titleHeader", 5000)
        .click('@main_button')
        .click('@wanted_button')
        .setValue('@header_input', data.Header)
        .setValue('@mke_input', data.MKE)
        .setValue('@oai_input', data.OAI)
        .setValue('@name_input', data.Name)
        .setValue('@sex_input', data.Sex)
        .click('@sex_dropdown')
        .setValue('@race_input', data.Race)
        .click('@race_dropdown')
        .setValue('@height_input', data.Height)
        .setValue('@weight_input', data.Weight)
        .setValue('@hair_input', data.Hair)
        .setValue("@offense_input", data.Offense)
        .setValue("@date_of_warrant_input", data.Date_of_Warrant)
        .click('@submitButton')
}

function checkQuery(pageObject)
{
    pageObject
    .assert.containsText('span[name="queryBody"]',"Police Report.abc.123456789.Daniel Marinho.M.B.511.175.Black.Assualt.2018-10-20......")

}

module.exports =
    {
        before: browser => {
            pageObjectHolder = browser.page.wanted_queries_PageObject()

        },

        after: browser => {
            browser.end()
        },

        'Ensuring valid input entry': browser => {

            applyData(pageObjectHolder, wanted_query_Data.wanted_query_entry)
            checkQuery(pageObjectHolder)

        }
    }