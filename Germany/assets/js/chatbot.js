var initESW = function(gslbBaseURL) {
    // Required if you want labels in a language that’s different from your user’s context.
    //embedded_svc.menu.settings.language = ''; //For example, enter 'en' or 'en-US'

    embedded_svc.menu.init(
        'https://techathon3-dev-ed.my.salesforce.com',
        'https://d.la5-c2-ia5.salesforceliveagent.com/chat',
        gslbBaseURL,
        '00D8c000007BQF5',
        'DE_Channel_Menu',
        {
            pageName: "DE_ChannelMenuSnippetSettings"
        }
    );
};

if (!window.embedded_svc || !window.embedded_svc.menu) {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://techathon3-dev-ed.my.salesforce.com/embeddedservice/menu/fab.min.js');
    s.onload = function() {
        initESW(null);
    };
    document.body.appendChild(s);
} else {
    initESW('https://service.force.com');
}