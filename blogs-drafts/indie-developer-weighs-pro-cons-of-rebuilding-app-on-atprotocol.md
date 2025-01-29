---
title: "Should I rebuild my app on Bluesky's AT Protocol?"
description: "I'm an indie developer weighing the pros and cons of rebuilding my app on Bluesky's AT Protocol."
date: "2024-12-04"
author: "Daniel Mathews"
author_image: "https://ax0.taddy.org/blog/about-us/danny-small-profile-pic.png"
author_url: "https://bsky.app/profile/dmathewwws.com"
---

# Should I rebuild my app on Bluesky’s AT Protocol?

Six years ago, I built a podcast app called [Podyssey](https://podyssey.fm). It’s like Goodreads but for podcasts ie) users recommend their favourite episodes on the app. However, I haven't updated the app in a couple of years, and I’ve been thinking about what a rebuild of Podyssey would look like.

Recently I joined Bluesky and had an idea: **What if I could see which podcasts the people I follow on Bluesky are recommending?** 

This thought sparked a larger idea, while I’ve always imagined a rebuild of Podyssey would fix some product frustrations I’ve had about the app, what if I took this opportunity to rebuild Podyssey to work on the AT Protocol (the protocol that Bluesky uses) and what would that look like? 

## What is AT Protocol?

First, I think it's important to talk about the big idea behind Bluesky. Bluesky is an alternative to X (Twitter). However, the real innovation behind Bluesky is that they have defined a protocol ([AT Protocol](https://atproto.com)) that anyone can use to store their own data (posts, likes etc). This means you don’t have to store your data on Bluesky’s servers to interact with other Bluesky users.

Bluesky's pitch is that users are better off in the long run if they aren't locked into centralized platforms. They achieve this by defining a protocol that anyone can build their apps on top of. As an indie developer, I've seen platforms like Meta, X, and Reddit start as great places to build audiences, only to later remove API access and kill third-party apps. The pitch with AT Protocol is that by building on a protocol that no single company controls, developers like me can get the benefits of working with large platform networks without the downsides of working without the fearing a company can change their mind in the future.

![From Bluesky’s initial pitch. (Release the bird from its cage and into the blue sky)](https://ax0.taddy.org/blog/bluesky/twitter-to-bluesky.jpg)

From Bluesky’s initial pitch. (Release the bird from its cage and into the blue sky)

That's exciting, but it's also a really ambitious idea because X is just one of many apps that could be rebuilt on AT Protocol. There are many apps that lock-in users to their platform that could be rebuilt on this protocol, for example, Instagram, TikTok, YouTube, or even my app, Podyssey.

## Bluesky as a growth channel

There are ideological reasons why I would want to build an app on an open protocol like AT Protocol, but there is one compelling business reason: It opens up Bluesky as a distribution channel for my app. Specifically, I get access to: 

1. Bluesky’s open social graph (which I’ll dive into shortly) and
2. Bluesky’s user base, which is growing really fast.

![Bluesky growth within the last 6 months](https://ax0.taddy.org/blog/bluesky/bluesky-active-users.jpg)

Bluesky growth within the last 6 months

## Is Bluesky decentralized?

Moreover, If I'm going to take the time to rebuild my app on a protocol that someone else created, I need to know that they can’t:

- Change the protocol in a way that negatively affects my app
- Create barriers between me and my users
- Start charging me for what was previously free

These are all things that big centralized platforms have done in the past and have [burned](https://mashable.com/article/twitter-elon-musk-paid-enterprise-api-access-pricing) [developers](https://www.theverge.com/2023/5/31/23743993/reddit-apollo-client-api-cost). So, how much control does Bluesky have over AT Protocol - or said in a slightly different way - is AT Protocol decentralized? I think the best way to discuss this is to see how your data is stored:

![Screenshot 2024-11-23 at 5.14.59 PM.png](https://ax0.taddy.org/blog/bluesky/bluesky-PDS-example.png)

This is my data, which was created using the Bluesky app and you can see a live version of it [here](https://atproto-browser.vercel.app/at/dmathewwws.com). You will notice that it has 4 collections:

- My Profile - which stores my name, profile pic etc
- My Posts - which stores every post (tweet) I’ve made on the app
- My Likes - which stores every like I've made on the app
- My Follows - which stores a link to every person I follow on the app

It's that simple. Every user has their own repository (aka: PDS) which is made up of collections and records (see below image). As long the data in your data repository is in this format, anyone can host their own PDS. Anyone can also build their own Bluesky-compatible app, they just have to support all the same collections as Bluesky. And lastly, anyone can define new collections (aka: a lexicon) for the different types of data they need for their app.

![This is what a PDS (Personal Data Server) looks like ](https://ax0.taddy.org/blog/bluesky/bluesky-PDS-architecture.webp)

This is what a PDS (Personal Data Server) looks like 

So, if AT Protocol just defines how collections of text documents should be saved, how much control could Bluesky have if I define my own collections and build my app on AT Protocol? 

Well, I’ve seen some valid [critiques](https://anderegg.ca/2024/11/15/maybe-bluesky-has-won) about Bluesky not being decentralized, yet. I believe their arguments can be summarized as Bluesky is theoretically decentralized (there is a protocol that no one company owns and anyone can build apps on that protocol) but practically Bluesky isn’t decentralized. Bluesky, the company, has servers that host almost all user data, Bluesky provides services that make it easier to use AT Protocol (Relay, AppView, etc) and they build the Bluesky app, the app which most people use. So despite AT Protocol being open, Bluesky maintains significant control over the ecosystem, at least for now. 

To Bluesky’s credit, I will mention 3 things: 

1. Their words and most importantly their actions have shown that they care about keeping AT Protocol as the central part of Bluesky.
2. If you want to build a protocol that people use, you could start with a technical document and hope people build the different things needed to build apps on the protocol, or you can build a product and the helpful tools yourself. Bluesky has taken the latter route and it's working for them, it's made AT Protocol a lot more practical than theoretical.
3. The only way that Bluesky has less control over AT Protocol is if more people build apps that work on the protocol. If we expect Bluesky to build and run everything that makes AT Protocol useful I think we’ve missed the point of open protocols.

## Is one Social Graph enough?

The idea for building Podyssey on AT Protocol came from a very simple idea, I want to see the podcasts the people I follow on Bluesky would recommend to their followers. However, as I explored AT Protocol, it brought up some interesting product questions. 

The simplest way to show podcast recommendations from people I follow would be to let users sign in with their Bluesky account and use the Bluesky follow graph ([`app.bsky.graph.follow`](https://atproto-browser.vercel.app/at/did:plc:z7tuu4dmfvoqlm2wensjxons/app.bsky.graph.follow)). However, this creates a problem: if someone I follow on Bluesky recommends podcasts I'm not interested in, I'd have to unfollow them on Bluesky to stop seeing their podcast recommendations on Podyssey. That's not a great user experience.

Instead, it sounds like the user experience I want is to have my own lexicon for Podyssey. This is what I came up with:

![Screenshot 2024-11-25 at 5.18.02 PM.png](https://ax0.taddy.org/blog/bluesky/bluesky-podyssey.png)

- My Recommendations  - which stores every recommendation I’ve made on the app
- My Podcasts - which stores every podcast I subscribe to (you can use Podyssey as your podcast player)
- My Follows - which stores a link to every person I follow on the app

To summarize, while it initially seemed that Bluesky's social graph could serve as the one social graph for all apps, I now think most apps should maintain their own social graphs to let users customize their experience. I can still use Bluesky's social graph to jumpstart my app’s social graph, which would allow people with Bluesky to see which of the people they follow on Bluesky are also on Podyssey.

## Requirement to Have a Bluesky Account

Another question I had was: Should I require everyone who uses Podyssey to also have a Bluesky account? Well let’s go through my options:

**1) Require everyone who uses Podyssey to sign in with Bluesky.** This would be the simpler option and require less technical work to implement. 

**2) Do not require sign-in with Bluesky.** The other option is to allow users without Bluesky accounts to either log in with their own data repository or have Podyssey create and host a data repository for them.

I think the second option offers a better user experience. However, as I was looking into it more, It did raise a couple of challenges: 

1. Bluesky has [open-source code](https://github.com/bluesky-social/pds) for hosting your own PDS, but it's unclear whether it supports hosting multiple users' PDSs (like in my case)
2. I don't want to build a hosting provider, I want to build a podcast app. From my understanding  PDS, a user has one PDS for all apps they use on AT Protocol. This raises concerns about hosting costs for me as users could use their Podyssey-hosted PDS to sign in to other AT Protocol apps and potentially upload images and videos, leaving me responsible for those hosting costs. That sounds like a different business with a different business model.

## Everything is public

You may have noticed something from being able to see all my Bluesky data. Everything is public on AT Protocol. All my posts, likes, every person I follow, and even every person I block. I think Bluesky can do this because it is a “public square” for discussion, but the question I have is, would this work for my app?

While many Podyssey users may not mind having public data, I think some will want the option to keep their data private. Moreover, even extroverted / outgoing users might feel uncomfortable with public data in certain situations. For example, someone listening to a health-related podcast may not want it appearing in their public podcast list, as this could reveal personal health information.

To Bluesky's credit, it seems like they realize this is an issue and are adding the ability to restrict certain apps’ access to certain collections (via OAuth scopes) and are working on adding private data to your data repository. However, the implementation details and timeline for these are still unclear.

![Frame 10-3.png](https://ax0.taddy.org/blog/bluesky/bluesky-private-data.png)

## Novel product ideas

Working on an open protocol like AT Protocol opens up some novel product ideas:

### Multiple apps using the same collections

If there was a standardized lexicon for podcast apps, it could allow for better integrations between podcast apps. Here are 2 examples: 

1. You could use multiple podcast apps and know that whenever you added or deleted a new podcast in one app, it would be synchronized across any app you use for podcasts.
2. Any podcast app could leverage existing collections (like Podyssey's recommendations & podcasts list) to provide better discovery suggestions, even for their brand-new users.

![Screenshot 2024-11-27 at 2.27.18 PM.png](https://ax0.taddy.org/blog/bluesky/podyssey-misc.png)

This idea could easily extend beyond podcasts to other media types, including synced reading lists between e-readers, shared bookmarks / collections, watchlists, and music playlists.

### Using Bluesky’s Firehose

People are already recommending podcasts on Bluesky using Apple or Spotify links or certain podcast hashtags. One idea is to add a ‘Trending on Bluesky’ section which could be aggregated through data from the Bluesky Firehose. This is a great way to jumpstart content on a new app (Shoutout to [@ian](https://bsky.app/profile/iansmithbuilds.bsky.social) for the idea).

## Moderation

After hearing of some users being banned on Bluesky, it made me wonder if I am too tightly tied to Bluesky’s moderation decisions. 

For example, let’s consider a user who gets banned by Bluesky. While I understand that Bluesky won't host their PDS, what happens if I disagree with Bluesky's moderation decision and choose to host that user's PDS so they can use Podyssey? Since I still rely on helpful Bluesky's services like Relay and AppView (which crawl PDS and do things like aggregate the number of likes every person has made for my post), would these services allow the banned user's PDS to be included? I’m unsure about this policy at the moment, but it opens up questions about Bluesky's ability to control who can use my app. 

This problem goes away if there are alternative options for services like Relay + AppView that Bluesky does not run.

## User Experience

Between all the platforms X, Threads, Mastodon & Bluesky, I personally think Bluesky is the most likely to become the public square most people use in the future. 

There are several reasons for this, one of which is Bluesky is already emerging as a [leading source of traffic](https://www.youtube.com/watch?v=D4ghgVq9z4M) back to people’s websites. However, I’d like to focus on a user-experience related reason based on my experience building a podcast app. I’ve spoken to many people, including developers, who are unaware that podcasts are powered by RSS, a decentralized technology, under the hood. To a regular person, it works just like every other content platform (YouTube, TikTok, Instagram) and most users neither know nor care that RSS is the underlying technology driving these apps.

I get this same experience when using Bluesky - I never think about AT Protocol. Bluesky works just like I expect it to, which is the gold standard that all decentralized apps should strive for. It's good to see an example of that, and it makes me think that if I rebuilt Podyssey on AT Protocol, I can also give my users a great user experience.

## Is building on top of AT Protocol economically viable?

It seems like the early adopters who are currently building on AT Protocol are doing so because they believe in the ideals of decentralization ie) not locking-in users into centralized platforms. However, it's still unclear to me whether the future of AT Protocol is a few public benefit companies / non-profit organizations that ensure the protocol continues to operate on behalf of these utopian ideals or AT Protocol transitions to become an economically viable platform for for-profit organizations to build their business on.

One significant advantage for Bluesky is that they have already built something that millions of people use every day. If economic viability depends on how widely the AT Protocol is adopted, this is a great start. The more apps and users that rely on the protocol, the more monetization opportunities arise both for Bluesky and 3rd party developers.

## Conclusion

After going through this exercise, I came up with a list of things that would make it a no-brainer for me to build Podyssey on AT Protocol:

- **Private Data in your data repository**. I want the ability to add data to user’s data repositories that isn’t publicly accessible to everyone.
- **Best Practices for building an app on AT Protocol.** After realizing I would have to host my own PDSs for users that don’t already have Bluesky, I am curious what Bluesky would consider best practices for hosting PDSs, what information we should store on our own servers vs PDSs, and if we should use 3rd party Relays + AppViews or run our own.
- **Alternatives for Relay + AppView.** For Bluesky to have less control over AT Protocol there needs to be alternatives to using their Relay + AppView services or it needs to be cost effective for me to run these services for myself.
- **Examples of economically viable apps.** I would love to see examples of apps built on AT Protocol that are economically viable or at minimum have Bluesky articulate how they see apps built on AT Protocol can become economically viable.

Personally, I find what Bluesky has already achieved inspiring, they are taking on billion dollar companies with huge platform moats, and winning. 

While I am not ready to commit to building Podyssey on AT Protocol, one of my takeaways is that if you believe in the goals Bluesky is trying to achieve, and want to help them achieve it, there is a need for SaaS services that help app developers like me solve some of the pain points I mentioned above. It would help make AT Protocol fulfill its mission to be a truly decentralized protocol option and make it easier for indie developers like me take the plunge into the ATmosphere.

### If you want to take a deeper dive into AT Protocol:

AT Protocol Docs: [https://atproto.com](https://atproto.com/)

Bluesky Docs: [https://docs.bsky.app/docs/get-started](https://docs.bsky.app/docs/get-started)

AT Protocol Browser: [https://atproto-browser.vercel.app/at/dmathewwws.com](https://atproto-browser.vercel.app/at/dmathewwws.com)

Architecture of Bluesky: [https://newsletter.pragmaticengineer.com/p/Bluesky](https://newsletter.pragmaticengineer.com/p/bluesky)

<aside>
👋

Here is my Bluesky skeet about this article if you would like to share / repost. Thanks!

[https://bsky.app/profile/dmathewwws.com/post/3lcied3jgfc2j](https://bsky.app/profile/dmathewwws.com/post/3lcied3jgfc2j)

</aside>