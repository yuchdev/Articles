# Docs

Google Docs standing a bit out of other services we consider, because it has lots of features clearly targeting businesses rather than individual users, with all their collaboration tools and access groups. However, just like an individual user, documents owned by businesses can be accessed, modified and redistributed, which is surely more dangerous, if some sensitive business information would leak because of usual Google approach. Not to say, unexpected account termination could litarelly destroy businesses, which were not careful enough to make backups outside of Google platform.

Our requirement remain the same – generally we prefer opensource solutions with end-to-end encryption, we choose mature products with solid reputation, not spotted on redistributing private user information. We also keep in mind requirements of easy migration – new solution must understand Google Docs, Open Office, or MS Office formats, so that easily migrate your documet base into the new platform. We can make exceptions, based on specific user requirements, like team work requirements, work with not sensitive documents, etc. 

By the way, working on this part of article, I faced a funny blunder, which is quite important for our further analysis. During the research on cloud office solutions, I found it’s near to impossible to find a product perfectly match all listed requirements - it either support end-to-end encryption, or feature converting your existing documents. At first I could not understand this kind of products, like, do their designers even understand user’s needs? End-to-end encryption is great, but the first problem user face while considering choose a new service is migration. However, after some careful consideration I found the root cause - if you demand converting your existing documents into the format of super-duper secure office solution, you probably don’t mind if it access your files, to convert them, right? So, how do you expect the backend application to access your files, if they are encrypted?

However, as we will see soon, at least in theory such problem may have a solution.


#### Zoho
Zoho provides complete office suite, including word processor, spreadsheet editor and presentations creator.In addition, it offers small business-grade mail service, making it a solid service provider for a business user. It offers desktop, mobile and web applications, collaborative docunents editing and sharing, vital features for small teams. Zoho allows offline documents edit and syncronization with desktop.

Regarding migration, it supports MS Office and Open Document formats.In order to start working, you need to convert  documents into ZohoDocs format, but later you can easily export it into any native format you need, which is not comfortable if you need to to it often. In the bright side, the quality of import is impressive, conversion of documents with quite complicated format happens without visible issues, including advanced features like VBA macro.

Exploring specific applications, you may find interface of different applications (Write, Sheets, Presentations) is not coherent, unlike unified ribbon interface of MS Office or Google Docs. Editor has only 5 Undo/Redo actions, which is way too few. However, word processor offers quite smart spelling and style check and complexity score, also, flexibility of diagrams and graphs is close to MS Excel desktop application.

But the most important, Zoho has solid privacy stand, compared to other major office cloud applications players. Zoho is fully comply with GDPR, you can choose to remove all data relating to a given user including their name, email address, action logs, and usage reports. It does not accept third-party cookies, and avoid public cloud.

Zoho took a bold stance on B2B data privacy. They removed Facebook, Twitter, Google, 3rd party trackers – we can safely say this: it does give them a rarified privacy credibility.

Probably, the thing which could be a show-stopper for many potential users – it’s impossible to call Zoho Office Online truly private, because it does not support end-to-end enctyption, because of reasons mentioned in the beginning of the artice. Yes, it is not harvesting users’ data like Google does, however, you should understand your data is being stored unencrypted, so using Zoho for working with top secret documents probably is not the best idea.

#### MS Office Online
It’s not an ideal choice as well, bit in many ways, it’s still better than Google. Many users may find it satisfactory for their needs.

Free MS account is enough to start work with documents. Actually, MS Office Online does not have paid account option, because paid cloud solution is already Office 365.

It’s way more functional, than Google Docs, especially formatting options, and graphic content in Excel spreadsheets. Interface of Office Online web applications is consistent and similar to desktop MS Office ribbon interface. No features are missing in menus compared to desktop applications, however, in context menus some formatting options, like strikethrough, moved to ribbon menus. Word Online includes spellcheck and dictate options, Excel - auto-calculation of sum and average in selected cells. In general, web version offers seamless work with offline Office, some web-related inconveniences, if you already use MS Office on desktop and mobile device.

For teamwork and sharing features, you need to upgrade your product to Office 365, even though basic features, like sharing the document by the link, available in free version. More expensive enterprise plans include support for MS Exchange Online, by far the best Business-class corporate email and document sharing solution.

However, it’s hard to expect only bright side from MS product, so we do not.

Office web applications have limited file format support, compared to desktop versions, for example lack of XLSM files, export to CSV, etc. Office Online does not offer document macros support at all, which is strange, because other vendors often provide it, without knowledge of internal MS formats. Free version of Office Online does not have offline mode, and support of even web applications on Linux is very limited (no access to OneDrive, and impossible to use Office 365 features).

Need to mention the fact, all Office 365 privacy policies applied to free version of Office Online, and there they claim to be GDPR-compliant. Even MS is not permitted to have access to documents, however these files are being stored on servers in the US, there it is potentially exposed to the US law enforcement. Author also whitnessed quite disturbing cases of cooperation with law enforcement of totalitarian states, like Russia and Belarus. Please, if you potentially could be a target of such regimes, consider other platform than MS, and specifically avoid OneNote and Skype.

Just like Zoho Office, MS Office Online does not feature end-to-end encryption, because for many server-side operations, like document format convesion, MS Office Online should access content of your document.

However, even giving such controversial input, many users I consider privacy-concious, including the company where author worked, consider MS Office Online satisfactory for working with non-sensitive data, probably giving their feature-rich web applications and seamless integration with desktop products. Just be aware every time, is your document keep any sensitive data.

#### Cryptpad
https://cryptpad.fr/

CryptPad is one more privacy-oriented and secure solution and awardee of Europe’s Next Generation Internet initiative (NGI.EU) prize for privacy and trust-enhanced technologies. You understand it has been designed with privacy in mind from the first glance – the service does not reauire email for registration (thus, you can not recover your login and/or password), and it accept cryptocurrency payments for business-tier. It has plesantly surprising features for teamwork, including multi-user access and permissions system, collaborative editing, calendar and reminder, and simple Kanban board. CryptPad is engineered to coler as wider as possible audience, including users of mobile devices, desigled to work on small screens.

Just like its fully encrypted counterparts, it also lacks simple migration from MS Office/Open Office formats, therefore I hesitated to recommend it. However, I had a good luck to meed one of Cryptpad developers on Reddit, and used the opportunity to ask a couple of questions. Even though its server-side can not perform encrypted document conversion, but we still have frontend, right? So in theory, you can perform migration of your MS Office/Open Office documents right in your browser, and than upload it to the server, where it’s going to be protected with zero-knowledge encryption.

Now we have at least a chance of such scenario, because according to a member of developer team, at the moment (of writing an article) Cryptpad team works on client-side document migration. Obviously, it is not particularly easy task, but now we have a chance to meet at least one contestant, who meet all our initial requirement to cloud office solutions.

### I do not recommend
#### [Cryptee](https://crypt.ee/)

Cryptee is positioned as a minimalist privacy-oriented replacement for Google Docs, Drive and Photos. It has been developed in Estonia, IT hub of the Europe, with GDPR in mind. During the sign up process, you create not only the password, but also an encryption key, to ensure encryption of your cloud storage.

However, upon browsing Cryptee features, you may find out it has almost zero features for team work, and support of MS Office and Open Document formats is very poor, you can use only word processor with a few formatting featuers, and no spreadsheet support, as of May 2021.

#### OnlyOffice
I was tempted to try OnlyOffice, at all it’s an opensource, fully MS Office-compatible cloud solution, but lack of free options and annoying suggestions to enable Google Analytics during the registration made panda sad. However, I heard it works fine as a self-hosted solution in a combination with Nextcloud. As usual, we consider self-hosted solutions in a different article.

