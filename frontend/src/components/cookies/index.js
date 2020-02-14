import React, { Fragment } from "react";
import words from "../../words";

const Cookies = () => {
    const text = words();

    return (
        <Fragment>
            <h5 className="text-muted text-center mb-5">{text.cookies_policy}</h5>
            <h2>What are cookies?</h2>
            <p>
                Cookies are small text files containing a string of characters that can be placed on your computer
                or mobile device that uniquely identify your browser or device.
                What are cookies used for?
            </p>
            <p>
                Cookies allow a site or services to know if your computer or device has visited that site 
                or service before. Cookies can then be used to help understand how the site or service is 
                being used, help you navigate between pages efficiently, help remember your preferences, and 
                generally improve your browsing experience. Cookies can also help ensure marketing you see 
                online is more relevant to you and your interests.
            </p>

            <h2>What types of cookies does WebPass use?</h2>
            <p>
                There are generally four categories of cookies: “Strictly Necessary,” “Performance,” 
                “Functionality,” and “Targeting.” WebPass routinely uses all four categories of cookies 
                on the Service. You can find out more about each cookie category below.
            </p>
            <ol>
                <li className="mb-3">
                    Strictly Necessary Cookies. These cookies are essential, as they enable you to 
                    move around the Service and use its features, such as accessing logged in or secure areas.
                </li>
                <li className="mb-3">
                    Performance Cookies. These cookies collect information about how you have used the Service, 
                    for example, information related to the unique username you have provided, so that less strain 
                    is placed on our backend infrastructure. These cookies may also be used to allow us to know that 
                    you have logged in so that we can serve you fresher content than a user who has never logged in. 
                    We also use cookies to track aggregate Service usage and experiment with new features and changes 
                    on the Service. The information collected is used to improve how the Service works.
                </li>
                <li className="mb-3">
                    Functionality Cookies. These cookies allow us to remember how you’re logged in, whether you chose to 
                    no longer see advertisements, whether you made an edit to an article on the Service while logged out, 
                    when you logged in or out, the state or history of Service tools you’ve used. These cookies also allow 
                    us to tailor the Service to provide enhanced features and content for you and to remember how you’ve 
                    customized the Service in other ways, such as customizing the toolbars we offer in the right column of 
                    every page. The information these cookies collect may be anonymous, and they are not used to track your 
                    browsing activity on other sites or services.
                </li>
                <li className="mb-3">
                    Targeting Cookies. WebPass, our advertising partners or other third party partners may use these 
                    types of cookies to deliver advertising that is relevant to your interests. These cookies can remember 
                    that your device has visited a site or service, and may also be able to track your device’s browsing 
                    activity on other sites or services other than WebPass. This information may be shared with organizations 
                    outside WebPass, such as advertisers and/or advertising networks to deliver the advertising, and to help 
                    measure the effectiveness of an advertising campaign, or other business partners for the purpose of 
                    providing aggregate Service usage statistics and aggregate Service testing.
                </li>
            </ol>

            <h2>How long will cookies stay on my device?</h2>
            <p>
                The length of time a cookie will stay on your computer or mobile device depends on whether it 
                is a “persistent” or “session” cookie. Session cookies will only stay on your device until you 
                stop browsing. Persistent cookies stay on your computer or mobile device until they expire or are 
                deleted.
            </p>

            <h2>First and third party cookies</h2>
            <p>
                First-party cookies are cookies that belong to WebPass, third-party cookies are cookies that another 
                party places on your device through our Service. Third-party cookies may be placed on your device by 
                someone providing a service for WebPass, for example to help us understand how our service is being 
                used. Third-party cookies may also be placed on your device by our business partners so that they can 
                use them to advertise products and services to you elsewhere on the Internet.
            </p>

        </Fragment>
    );
};

export default Cookies;