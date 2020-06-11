---
template: BlogPost
path: /Goody
date: 2020-02-21T12:12:25.364Z
title: Goody
metaDescription: >-
  Goody is a chatbot I created as a fun side project. It's meant to talk like a
  witch. I wanted to develop and deploy a webapp and make something fun in the
  process.
thumbnail: /assets/goody.png
---
![A depiction of goody's chat ui](https://liamkiniry.site/assets/images/goody/goody.png)

## The Witchy Chatbot

Project Type:Flask App, Data Analysis, WebDev, UI Design

Date:Sep 2019

Technologies:Python, HTML, CSS, NLP

I created a chatbot that talks like a witch as part of a fun Halloween project. It's dialogue draws on classical and modern works of literature and film. I wanted to know how Chatbots worked and learn about how to design a chat UI, so I made this chatbot.

## The Challenge

Data Collection, Analysis, and Conversation

In this project, I wanted to know how chatbots worked so I did a lot of reading and tutorials to begin. I found that for custom chatbots, like most AI, the data they are built on is very important. My first task was to find and analyze conversation data that related to witches, then I had to build a system to combine and utilize this data, then I had to build the UI.

## The Data



Data Sources

The first step in this project was to assemble data. I reached out to friends to find out their favorite witch-themed books, texts, plays, and films. Then I had to find transcripts from all of these and extract important statements and lines from each. Films and Movies were better formatted for a chatbot because scripts are usually structured as conversations or lines.

| Macbeth                   | Play by William Shakespeare      |
| ------------------------- | -------------------------------- |
| The VVitch                | Film by Robert Eggers            |
| Plays of Aleister Crowley | Plays by Aleister Crowley        |
| Henry the IV              | Play by William Shakespeare      |
| Julius Caesar             | Play by William Shakespeare      |
| Romeo and Juliet          | Play by William Shakespeare      |
| Lesser Key of Solomon     | Text by Aleister Crowley         |
| The Witcher               | Books by Andrzej Sapkowski       |
| The Witcher               | Video Game by CD Projekt         |
| The Crucible              | Play by Arthur Miller            |
| The Witch of Edmonton     | Play by Rowley, Dekker, and Ford |
| Nosferatu the Vampyre     | Film by Werner Herzog            |
| Penny Dreadful            | TV Series Produced by Showtime   |

## Building the Bot

Code

I used a python library and framework for building conversational chatbots called Chatterbot. This library came with pre-made packages for machine learning, and conversational dialogue. I only had to make some minor adjustments in the code. I had to plug in my dataset. I also had to build in come conditional functions. Typically, bots will let you know when you've said something that the system cannot understand. This is usually good feedback for bots that are meant to help users accomplish tasks. Because Goody is a novelty and is meant to maintain conversation even when the system does not understand (to maintain some illusion of fluid conversation) I wrote a statement that sends a random sentence from the dataset when the system's confidence for finding an accurate reply is too low. I made Goody into a flask app so that is could be web hosted but written in python

![the logo for chatterbot: machine learnign, conversational dialogue engine](https://liamkiniry.site/assets/images/goody/chatterbot.png)

## Designing The UI

Design Inspiration

In order to think critically about the lifecycle of interaction with our design solution we sketched out a storyboard how the average person would use our system. This allowed us to break up the interaction with the app into stages: before the meeting, during the meeting, and after the meeting.

![art nouveau selections from art, architecture, and print that inspired the design of goody.](https://liamkiniry.site/assets/images/goody/goodyinspo.png "art nouveau selections from art, architecture, and print that inspired the design of goody.")

Sketching

When I was thinking about how to design this system, I knew I wanted to keep a basic chat UI that users would be able to understand from their past experience. I also knew that I wanted to enhance that and make it fit the theme. That's where the idea of a tombstone chat UI occurred. Tombstones and chat UI's have remarkably similar structure. Tombstones have a header where the name and decoration go, and a body where the epitaph and main content goes.\
Because of this I merged the two in the sketch shown here.

![a sketch of a chat UI that occurs on a tombstone](https://liamkiniry.site/assets/images/goody/goodysketch.png)

![spooky art nouveau accents that would border the chat UI](https://liamkiniry.site/assets/images/goody/goodygraphics.png)

Embelishments

I wanted to capture the spirit (pun intended) of Art Nouveau in Goody's spooky accents . I created these assets to be included as part of the final design and create a 'Gesamtkunstwerk' touching all parts of the design.

## The Final Design

![A Sample of the UI for chatting with goody, the chatbot, complete with art nouveau accents](https://liamkiniry.site/assets/images/goody/goody.png)

Overview

The design was made to recreate the typical chat experience but embellished by by spooky and witchy art nouveau accents. It took several rounds of iteration but in the end I created a UI that could be used to easily chat to nlp powered chatbot.

![this shows the UI of writing and viewing messages within this design](https://liamkiniry.site/assets/images/goody/goodymobile.png)

Writing Messages

When designing the application some very helpful friends and I tested out the design on our phones and decided that disabling the zoom on tap function native to many mobile phones would make a more fluid interaction. This would allow users to see the entire bottom of the chat and the message and not require them to zoom back out to the original size to view the rest of the chat.

![an art nouveau illustration of a skull](https://liamkiniry.site/assets/images/goody/skullleft.png)

"it was creepy but fun."

\- My Mom

[TRY IT YOURSELF](https://goody.pythonanywhere.com/)

## Reflection

I learned a lot about the process of designing and coding a project from start to finish. This project gave me a greater understanding of how designs need to be conveyed between design and development teams. I also got to make something that was fun and weird. It is definitely something I would not have done in class or at work. I think this project helped me to be a better designer and to think critically about design and development. It also definitely helped me to improve my coding skills. I wanted to learn how to make a chatbot and I definitely did that. In the future I'd like to learn more about machine learning and natural language processing. I'd also like to learn about ways to design alt text or multimedia experiences like this for people who can't see because this project had mostly visual design.
