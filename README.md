# i18n-core-js
Welcome to the source code i18n project. This is the repository that houses the core JS for the project.

# Problem to Solve
Everything is in english.... Programming languages, tutorials, documentation. If someone is a non-native English speaker/reader and doesn't have the opportunity to learn English, this can greatly hinder their ability to contribute to the world of software development and computer science as a whole. Right now, one may say that "Most of the world speaks English, so why bother?" That may be true now but may not always be true. Additionally, computer science is not just for those who get college degrees or can afford bootcamps. In theory, anyone can learn to code on their own with free resources on the internet. This is true if you can read and write English. That beautiful world of shared information/ability is not readily available to the rest of the world at large.

# Proposed Solution
One solution is to re-write all compliers, interpreters, and language tools to work with multiple languages. This is a possible solution..... but that is an incredible ammount of work and would be difficult.

A better approach is to translate the code itself BEFORE compile/interpret time. Assuming the interpreter can take unicode characters, then we would only need to translate the language's keywords and standard libraries (and possibly 3rd party libraries). That way, comments, variable names, and strings would be preserved in the native language and the interpreter would understand enough to run the program. As mentioned above, this step would take place before compile time or interpretation.

## Why not also translate comments, tutorials, etc...
The point of this is not to translate natural language in general, there's google translate for that (and also, others have already started this [work](https://www.blog.google/outreach-initiatives/google-org/computer-science-lessons-spanish/)). There are other more qualified people to create programming language tutorials for native speakers of other languages.

While this idea is out of scope for this project specifically, it is not unrelated. The hope is that this project will enable and inspire people to create tutorials for native speakers (see Vision below for more detail).

# Goal
The goal of this project is to enable people from any natural language to contribute to the software development world and computer science in their current situation.

# Vision
Listed below are the key points that are expounded later (see the Strategies section for how we hope to get there):
- [Natural language translation for all programming languages](##-natural-language-translation-for-all-programming-languages)
- [Tooling native to every ecosystem that automates translation into the build process with minimum added latency (a webpack plugin would be one JavaScript example)](##-tooling-native-to-every-ecosystem-that-automates-translation-into-the-build-process-with-minimum-added-latency)
- [Dynamic translation in code editors that allows for multi-lingual collaboration](##-dynamic-translation-in-code-editors-that-allows-for-multi-lingual-collaboration)
- [Others are inspired to create learning material and professional provision](##-others-are-inspired-to-create-learning-material-and-professional-provision)

## Natural language translation for all programming languages
Hopefully this is self explainatory, but basically, we want to have translations for every natural language into every programming language.

## Tooling native to every ecosystem that automates translation into the build process with minimum added latency
We live in the age of automation. We shouldn't make users have to run a command or click a button every time they want to build. This should be seemlessly integrated into the build process.

## Dynamic translation in code editors that allows for multi-lingual collaboration
It seems a little silly to give someone the ability to learn how to code in their natural language only for them to find out they need to learn a English after all to be relavent in the software dev world. Plugins that can translate files on the fly will be helpful for these people to integrate into a software dev production environment. This also includes plugins for popular code hosting sites (like github, bitbucket, gitlab, etc...).

## Others are inspired to create learning material and professional provision
The hope is that once this project is techinally sound, it will be used to help people learn development, those people can then create examples, tutorials, and learning material that can help teach others to develop in their natural language. It may even be possible for bilingual programmers to see a market in creating tutorials, bootcamps, classes, etc... in their natural language to help others in their native language. Eventually, we hope that business will see the value in hiring people who can program in their native language.

# Strategy
Outlined below is the strategy we hope to employ, understanding we will be leaning on a lot of community support. At the time of this writing, the owner only knows English... which is a little problematic, Google translate can only take you so far.

1. *Build a "vertical slice"*. To use industry paralance, building a vertical slice means we build a functional feature through every layer of our tech stack (front end, midtier, backend, etc...) so that we have a small feature that works end to end. Here, the stack is everything outlined in the [Vision](#-vision) above: translation, core translator for a given language, seemless build tool, editor translators. Obviously, there is a lot to each of these layers. For example, there are probably hundreds of JS editors and each of those editors can edit multiple programming languages. This step of the strategy is to focus on building a Proof of Concept to demonstrate that this approach is viable and can be expanded.
2. *Utilize the community to replicate the vertical slice*. Once we have a POC and ship to production, people can work on any part of this stack they want applied to any combination. We want to avoid bloating this project with unecessary and irrelavent projects; owners will make the decide what projects to include in this project. Developers are free to pull in these projects for use in their own ideas.
