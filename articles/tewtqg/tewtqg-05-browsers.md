# Browsers

If you're looking for an alternative for Google Chrome, probably you want to make your transition as smooth as possible, and don't ready to trade much user comfort for privacy.  

A bit of theory first, for those who do not familiar with how modern browsers work. In general, every browser under the hood has a core module, a module called “engine", which is responsible for displaying all HTML, images, and video. Chromium family and all its forks, including Google Chrome, are built on a base of engine called Blink - if you want to be 100% sure that all your websites would be working exactly the same way, you probably should consider another browser, based on Blink. Gecko is an engine, which drives Mozilla Firefox and its forks, I seriously recommend considering it because of its exceptional performance and rendering speed. Also, there are two major proprietary engines, WebKit for Apple Safari and EdgeHTML for Microsoft Edge respectively. If you use the iOS operating system on your mobile device, you don’t have a choice but to use WebKit, as all other engines are restricted by Apple TOS. 

Considering browsers based on Blink, you should notice that very few Chromium-based browsers are up-to-date with the actual Chromium codebase, which means for you as a user dealing with months-old bugs and vulnerabilities. You should consider multiple factors, including the maturity of the browser you want to try, when was the last release, how often releases are being issued, how they comply with releases of “parent” project, how large and diverse the browser community is. 

Obviously, your browser of choice should not give you any privacy concerns, offer a rich plugin ecosystem, and support all popular platforms. It should be fast, and it should be opensource so that the developer community could perform a regular audit on possible vulnerabilities.

For some users data synchronization is a critical option, others consider it like a security breach. 

Advanced users probably would appreciate fine-tuning options, letting them configure advanced options, especially related to security and privacy. 

Special attention should be paid to defending your browser from Fingerprinting technology, which creates a unique ID of your device, no matter how often you clean your cookies and even change your browser - services like Google, Facebook, or Amazon perfectly capable to identify a user by his device (or multiple devices) thanks to this technology. You can check your fingerprint on the Browserleaks website. Protecting yourself against this technique is beyond the scope of this article. 

One should understand, that it’s quite hard to satisfy all needs for everyone, however, there are still options pretty close to our picky requirements. Here’s a brief review of the products you may consider. 

Please note, that many forks of popular browsers lack maintenance, leaving vulnerabilities already closed in the main product.

#### Mozilla Firefox

This browser with a long and glorious history of development is a flagship of secure and private browsing, and my personal choice for everyday browsing, including work with sensitive data. 

Firefox rendering engine, Gecko, which has been written in Rust programming language, offers access to all possible hardware optimizations from one side and guarantees memory and thread safety.

Browser is highly configurable, which means more freedom for advanced users. Lots of verbose options available accessing the “about:config” page. Firefox has accounts for synchronization of information you choose to be synchronized – browser settings, history, bookmarks, website credentials.

Firefox offers a rich plugin ecosystem, including security- and privacy-related. Most of the plugins are mature enough to have detailed feedback from the users, which may help you to pick up the right extension set. 

I personally use Cookie AutoDelete (in a couple with I don’t care about cookies, to remove Cookie accept form from EU websites), and the ultimate browser privacy solution, uBlock Origin for the selective block of scripts on every single webpage. The last one requires some advanced knowledge about trackers and JavaScript, but if you don’t have it, you may leave default settings, it should work just fine. However, if you spend 20-30 minutes exploring its advanced features, you can dramatically increase not only your privacy and browsing safety level, like none of any other tool ever allow you to do. Once you started using uBlock Origin, you become fully aware of the avalanche of 3rd-party trackers, do not have any relations with the domain you are visiting, and having the single purpose to collect your browsing history and information about the browsing experience in general. Be aware, that blocking Google trackers does not necessarily make your browsing faster – sometimes it’s amazing to see how often sites are trying to serve trackers, ads, and analytics from Google before their own content. Entire internet based on the uptime of a single company.

![Mozilla Firefox](https://raw.githubusercontent.com/yuchdev/Blog/master/images/tewtqg/browsers/firefox.png)

#### Ungoogled Chromium

In case you want to migrate from Google Chrome, but want to keep using the Blink engine and all Chrome-specific plugins, you can give it a try to this community-managed browser. Basically, it’s a Chromium stripped of all Google-specific web services, all features even slightly threatening privacy and transparency, as well as adding some features, promoting threatening privacy and transparency. It blocks functionality, which is connected to Google domains (Google Host Detector, Google URL Tracker, Google Cloud Messaging, etc.), borrows privacy features from such privacy-oriented projects as Bromite and Iridium Browser, blocking internal HTTP requests to Google domain in runtime. This is the reason why Safe Browsing is disabled – it requires constant communication with Google servers to update blacklists. All services, tightly coupled with Google, like Google Speech API, are disabled as well. No default search engine is placed, and no suggestions are provided as well – the user is considered to be responsible enough to take this decision. In addition, DRM-protected content like Netflix is not supported by default, you need to follow the instructions from the official FAQ to enable it.

As mentioned, Ungoogled Chromium allows all Chrome extensions, not via the Chrome Webstore interface, but instead, by copying URLs from the Webstore and downloading CTX files. Also, it features a special Chromium Webstore, that handles installations and updated of plugins just like Chrome Webstore.

Ungoogled Chromium is available for all major desktop operating systems, and also for Android, through a custom F-Droid repository.

![Ungoogled Chromium](https://raw.githubusercontent.com/yuchdev/Blog/master/images/tewtqg/browsers/ungoogled_chromium.png)

#### Tor

Tor Browser. The heavy artillery of private browsing, its name comes from the acronym “The Onion Router”. Onion routing is an efficient technology of anonymous communication through the Internet. Traffic from the Tor is anonymous by default and bypasses multiple nodes, which may significantly slow down the communications. However, for people who consider privacy as a matter of life and death, like journalists and activists working in totalitarian states, it’s a solid and secure solution.
 
Tor by default generates new fingerprints every time for every website, making ineffective tracking technologies like Fingerprinting and Ubercookies. 

Tor allows the installation of some plugins or extensions, however, official guidelines do not recommend installing any 3rd-party extensions, as it may compromise the user. Tor already comes with all possible built-in options, provided by privacy-related plugins of Firefox or Chromium. 

One of the inconveniences of using this browser could be increased attention from service providers - from their point, if the user chooses Tor for accessing their service, he has something to hide. It may have various results, from the forced check of user identity using 2FA to the complete ban of accessing service using the Tor browser. 

![Tor](https://raw.githubusercontent.com/yuchdev/Blog/master/images/tewtqg/browsers/tor.png)

#### I do not recommend

##### Opera
This is quite an old browser, changed many engines on the way of development, now it empowers Blink. It has a number of distinctive features, which makes the steady loyal fanbase of this browser use it over decades. One of such features is a built-in VPN, requiring no subscription, extensions, or fees - just turn on and use. Even though it's not a "real" VPN as we know it, it performs encryption only for the traffic of the browser itself, so it is rather an HTTPS proxy with some smart marketing. If you open some 3rd party application from your browser, like a BitTorrent client, it's going to be unencrypted. One more thing Opera VPN can't do is to unblock services like Netflix.

Compared to the industry leaders, Opera provides quite a limited list of extensions. 

Among other options, Opera offers a built-in ad-blocker, built-in cryptocurrency wallet, kind of unique feature. It has a synchronization option called MyFlow, including a quick share of links and text notes between devices, and a number of small and useful features, like video on top, or pop-up currency converter. 

So, why don’t I recommend it? Unfortunately, not everything is clear regarding Opera’s future, due to the one very disturbing factor which must be taken into consideration – on 4th November 2016, Opera Software ASA has been acquired by the Chinese consortium, led by Beijing Kunlun Tech Co. The purchase included the browser itself, privacy and performance applications, and the whole Opera brand. Even though the community did not find any privacy violations so far, Chinese applications and services are notorious for their privacy-related scandals and desire to control and collect all user data on Chinese servers even for applications for international markets, therefore you should consider the privacy risk of using this browser.

![Opera](https://raw.githubusercontent.com/yuchdev/Blog/master/images/tewtqg/browsers/opera.png)

##### Brave

Some sources offer to consider Brave browser, based on Blink engine (so did I before I knew more about it). Browser is highly into the cryptocurrency industry and even has its own cryptocurrency called BAT. However, the IT security community was hit by disturbing news about Brave in 2018: Brave browser is asking for donations on behalf of other people, and in 2020: Brave browser is hijacking links and inserting affiliate codes. There's no valid reason to use a product, adopting totally toxic and scammer techniques. One more lesson on the topic "If you don't pay, you're the product".
