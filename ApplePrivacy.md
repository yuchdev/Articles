# Comment on Apple's new ‘Child Safety’ Initiative

Despite being, put it mildly, controversial, Apple's new "Child Safety" initiative 
has its advocates, and some of them are quite technically literate people. 
It's important to understand their motivation and read the article to the very end, 
regardless of which side you took.

[Apple’s New ‘Child Safety’ Initiatives, and the Slippery Slope](https://daringfireball.net/2021/08/apple_child_safety_initiatives_slippery_slope)

First of all, the article is well-written, politically correct, 
and provides clear motivation. It's important to read it to the end, 
visit related linked articles and technical documents.

The first thing I noticed, the main Apple's mistake in this whole story,
they presume for some reason that the people misunderstand their new initiative. 
The problem is, we *do understand* how it works, probably understand better
than they wished we did. 
Let us consider all the main controversies of this controversial tool.

### Image analysis controversy

> it changes nothing about the end-to-end encryption inherent to the iMessage protocol. The image processing to detect sexually explicit images happens before (for sending) or after (for receiving) the endpoints.

So here Apple admitting that analysis would be performed on the customer's device,
the process which was not in his mind at the time when he was buying an iPhone.
Nothing new, it just means the practice is actually *privacy-invasive*, 
whatever its advocates tell us. But this is only the tip of the iceberg.

Even though there are some 
[strong doubts](https://crypto.stackexchange.com/questions/93423/how-unique-is-a-neuralhash) 
regarding the Neural-Hash uniqueness, claiming it could actually be brute-forced,
we would leave such statements out of the scope of this article,
because few people aside from encryption experts can make an informed comment.
Meanwhile, we can concentrate on much simpler concepts:

> Each photo is accompanied by a safety voucher that includes information about the photo, protected by two layers of encryption. This information includes a NeuralHash and a visual derivative of the photo.

Remember the word combination "visual derivative", it appears quite often 
in Apple's internal memo and public statements, but has little to explain. 
The article kindly explains it for us:

> The vouchers include a "visual derivative" of the image - 
> basically a low-res version of the image. If innocent photos 
> are somehow wrongly flagged, Apple’s reviewers should notice
> ... someone at Apple will investigate, by examining the contents
> of the safety vouchers, that will accompany each photo in iCloud Photo Library.

Here's we know what we should know - under some circumstances, someone 
[from Apple?] could access the content of our photos, and image analysis, 
whatever it could be, is being performed on a side of a client.

You could obviously imagine that with minimal corrections the system 
could be used to search for other known photos besides CSAM 
and also search photos that are local to the device, not meant to be sent.

How could it happen? Apple is so strong in their statements 
how scanned photos are exclusive to iCloud...

### iCloud exclusiveness controversy

> But it only applies to images being sent to iCloud Photo Library.
> If you don’t use iCloud Photo Library, 
> no images on your devices are fingerprinted

Such an argument would probably work with a person, who don't have an idea how
software is being developed, but we are software engineers, 
and we know that `if` is a simple boolean comparison. 
Here I would remember another infamous story, which took place 
not more than a week ago:

[Google pushed a one-character typo to production, bricking Chrome OS devices](https://arstechnica.com/gadgets/2021/07/google-pushed-a-one-character-typo-to-production-bricking-chrome-os-devices/)

![Google ChromeOS typo](https://cdn.arstechnica.net/wp-content/uploads/2021/07/chrome_TDKGuOKmjP-980x317.png)

In a few words, a single typo in C++ code bricked two million 
Chrome OS devices.

> even correct passwords came back with a message saying, 
> "Sorry, your password could not be verified"

Any person with even a basic understanding of C++ would admit, 
that the error is almost childish and could've been avoided 
with one of a multitude of measures, starting from reading compiler warnings
up to configured Continuous Integration with static code analysis.
It's nothing special it actually happened to internet-behemoth like Google,
anything happens for the first time someday.
It's not that hard to consider a direct analogy with similarly
critical functionality in the iOS application. Imagine the following Git commit:

```
-if (isCloud() && isChildAbuse()) {
+if (isCloud() & isChildAbuse()) {
    callThePolice();
}
```

Let this example sink in.

### Government agencies controversy

There's one more enlightenment for those who were thinking their data was encrypted

> Apple has long encrypted all iCloud data that can be encrypted, 
> both in transit and on the server, but device backups, photos, 
> and iCloud Drive are among the things that are not end-to-end encrypted. 
> Apple has the keys to decrypt them, and can be compelled to do so 
> by law enforcement.

Back in 2020, Reuters reported that Apple dropped their plans 
on full data encryption under the pressure of law enforcement. 

[Exclusive: Apple dropped plan for encrypting backups after FBI complained](https://www.reuters.com/article/us-apple-fbi-icloud-exclusive-idUSKBN1ZK1CT)

What makes you think they could behave in any other way, when NSA asks them
to add to the database hashes of their top-secret documents, 
so they could easily identify the next Snowden
before he reveals the next unpleasant truth to the public? 
Or the FBI, acting under the Patriot Act, demand Apple give them access
to safety vouchers for "counter-terrorism" purposes? Obviously, 
not only US citizens, but all users of iOS in the world. 
Snowden, who mentioned way too often in this paragraph,
already told us how this was happening to all cellphone records for decades.

### Chinese law enforcement controversy

Reding the next statement, I can't find any other explanation but
*"This is not the truth because this is not the truth"*

> What happens, for example, if China demands that it provide its own database of image fingerprints for use with this system - a database that would likely include images related to political dissent, say, tank man...

> Mr. Neuenschwander dismissed those concerns, saying that safeguards are in place to prevent abuse of the system and that Apple would reject any such demands from a government.

It reminds me of the former US President's famous 
["he was so strong in his denial"](https://www.fox43.com/article/news/local/contests/president-trump-putin-was-very-very-strong/521-02506292-f140-448b-91dd-69ae0fea57cf).
Everyone knows, that there is a notorious trail of an established record 
of Apple's total compliance with such demands for access to lucrative markets of
China, Russia, and not even being shy about smaller dictatorships like Belarus.

Hacker and privacy expert with the nickname "The Hated One" performed 
[an excellent analysis](https://youtu.be/Ev9_oDHNf-4) 
on the long-lasting and mutually beneficial alliance between Apple and China,
how in exchange for access to the Chinese market and cheap labor
Apple became the biggest ally in China's authoritarian and imperial ambitions.

The obvious misuse of a said tool in hands of evil men could be 
silencing protesters and political activists by total control 
of all images not just being sent from their devices, but potentially
stored on their devices, and they don't even need to bother 
installing actual spyware - it's already a part of the basic system, 
just need a little push, threatening to close access 
to a 1.3-billion people market.

### Consequences

So, despite "strong denial" of Apple, we can see how this new initiative
would change the lives of its users.
For the average people, they will have their photos analyzed
by a human working for Apple, and potentially arrested and charged
for false positives. 
We have already seen plenty of examples of *swatting* gone wrong
and ends up killing innocent people. 
How Hacker News commentators summed it up:

> How this has went in the past: wooops, our system has made a mistake
> and ruined your like, we apologize and won't do it again.
> No consequences and they'll do it again.

On a scale of states and governments, this initiative will become
a perfect tool to silence dissents and trace the origins of leaks.
More to say, it creates a precedent which danger could not be overestimated:
on a large scale, we are having privacy-invasive software, 
working on your personal device, and making possession of 
certain files (like the Snowden documents) illegal.

> Combine the two, and you realize Apple has just built 
> the most intrusive mass surveillance tool in history, 
> disguised as child safety.
> Take any person’s set of photos that they have ever put online, 
> anywhere (publicly, via email, etc), feed it to this back door 
> and you can have their identity and GPS coordinates in fractions of a second.
> It’s a horrifying, dystopian tool that should not exist. 
> In any form, for any reason.

### What can we do?

With the PR disaster, currently unfolding over the new Apple initiative, 
it's hard to say which side will eventually pushback the opponent.
The only thing we can be sure of at the moment, such privacy-invasive initiatives
happened in the past, and 100% certainly will happen in the future.
This leaves us with the legitimate question - what can we, users and consumers, 
do against multi-billion dollars colossus, having law enforcement 
and multiple lobbyists, supporting the initiative on all levels.

Just like David defeated Goliath playing on his weaknesses, we'll try to 
put Apple on the Goliath's place.

1. Vote with your feet. Don't support companies with your dollar, 
   who actively mistreat you, and whose values are not aligned with yours.
2. Support companies and initiatives that care not only about their market
   valuation, but about their customer's rights and values. 
   I won't be providing exact names, if we're on the same boat, 
   you can find a basket where to put your eggs.  
3. Actively make others aware of the problem, and don't be numb towards
   those who are already in trouble. Just like classic said:
   
> First they came for the socialists, and I did not speak out - because I was not a socialist.
> Then they came for the trade unionists, and I did not speak out - because I was not a trade unionist.
> Then they came for the Jews, and I did not speak out - because I was not a Jew.
> Then they came for me - and there was no one left to speak for me.
