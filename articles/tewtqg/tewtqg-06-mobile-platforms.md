# Mobile platforms

Imagine the situation, when a reinstalling system on your laptop, or even accessing it under the root account voids your warranty. Sounds like a deep absurd, right? However, this absurd takes place over the world, when it comes to smartphones. The absurdity of the situation comes with the fact that no one bothered the fact he is not in charge of one's own phone. I may understand when it comes to “average non-techie" users, but what about the technically advanced audience, IT professionals and tech enthusiasts - why aren't they allowed to configure and fine-tune their own phone, taking all the responsibility, as they usually do? 

The very first thing Google and other major smartphone developers did is revoking administrative access to your phone. Rooting your phone is a complicated and ofter dangerous operation, prohibited by TOS. Exceptions like OnePlus, allowing root access in developer mode only prove the general rule. 

Moreover, for sure Google Play Services running in the background all the time, performing a number of tasks, from automatic updates to pulling up your location. 

Security rules, "endorsed" by Google, strongly advise not to install anything from sources outside the Google Play, probably, because Google should have a monopoly for installing malware.

However, as Third Newton’s law says, when you exert some force, counterforce is exerted in the opposite direction. A choice of alternative open-source solutions emerged, from simple things like customlaunchers for rooted phones to more advanced, like kernels and custom ROMs, which is effectively a full replacement to Android, yet supporting many Android apps natively. 

In general, considering an alternative to Google Android, you have two big options. First is to choose one of Google-free Android distributions, where Google services were removed, but you still can install Android applications, and even compatible with most of Google Play applications. Second is a more radical choice, switching to one of mobile Linux distributions, or purchase a phone with pre-installed Linux.  

#### Android distributions

There's quite a variety of alternative Android distributions or ROMs, you can check on Wikipedia, notice, ROMs like OneUI from Samsung is just tuned Google Android, consider community-driven alternatives instead. You should carefully consider the maturity of the system, check version history, and compatibility with your device.  

You should be ready to root your phone before installing a new ROM, so your skills are expected to be suitable. 

The most universal options probably would be the following: 

##### LineageOS
the most successful over time ROM, forked in 2016 from discontinued CyanogenMod, and offering regular releases since then. LineageOS is a free and open-source Android alternative, supporting over 100 smartphones and tablets, highly customizable, secure and private. The development team highly relies on the user's feedback, implementing the most wanted features. As a result, LineageOS has a number of unique features, unavailable on Android or available through 3rd party applications, like customizable Themes, pin scramble, removing call log entries, and of course, root console. You can enjoy a huge choice of applications from open-source applications markets, like F-Droid, or proprietary, like Samsung Galaxy Store. You can even install Google Play and most of the applications would be 100% compatible. However, installing Google applications, consider privacy, for example, prefer andOTP instead of Google Authenticator and Newpipe open-source YouTube client instead of proprietary analog. You also have the option of manual downloading of apk-files you used on your Android smartphone. 

![LineageOS](https://raw.githubusercontent.com/yuchdev/Blog/master/images/tewtqg/mobile/lineageos.png)

##### /e/. 

Another fork of LineageOS, replacing Google Play Services with MicroG, a free and open-source implementation of Google APIs, and using Mozilla Location Service for geolocation. 

![/e/](https://raw.githubusercontent.com/yuchdev/Blog/master/images/tewtqg/mobile/e.png)


#### I do not recommend

##### Replicant. 

Actually, it's a "totally opensource" fork of LineageOS with removed all proprietary drivers and applications. The disadvantage of the system is a relatively small number of supported devices, due to the removal of closed-source drivers.  

#### Linux distributions 

Switching to Linux distributions, an advanced user should understand that he has to find a replacement for basically all applications he got used to on Android. The good news is Linux offers a variety of alternatives to most applications, but if you stuck on online games, probably it's not your choice.  

Fewer devices can run Linux than Android-compatible OS. However, you can consider devices like Librem 5 or Pinephone, intended for Linux in the first place, highly customizable and hackable. 

##### PureOS
This Debian-based Linux distribution is being shipped with an opensource smartphone, Librem 5. Phone and OS advertise "security by design", highly hackable, and require quite advanced user skills. However, as of 2021, the smartphone is reported to have multiple problems with software, including security issues.

##### PostmarketOS
This distribution, based on Alpine Linux, offers the largest number of supported smartphones, tablets and smartwatches as of April 2020. Developers have plans of supporting Android applications through a virtualization application, Anbox, which would create unique user experience if succeed. 

 
#### Migrating OTP applications 

Most probably, you have applications on your old Android phone which may cause serious hassle migrating to new hardware. There’s no general solution (as well as a general problem), however, if your phone is already rooted and you migrate on another Android-like distribution, you can simply copy all application configuration files to your new phone. 

OTP applications, providing a one-time password for 2-factor authentication, can’t be migrated so easily, probably for the sake of your security. Review of all methods is beyond the scope of this article, however, here are some sources, making the export of your accounts to a new phone much less painful than manual transfer: Export accounts from Google Authenticator, Migrating FreeOTP to another phone, and Migrating from FreeOTP to andOTP (notice, that by the moment of writing the article, FreeOTP was left unsupported, so consider choosing andOTP)

