# Wordle Bot

Yes its everyone's favourite daily word guessing game. I know that lots of people have create various projects around this including producing analysis to find the best starting word etc.

This is just a simple bot. You tell it the daily word (or any word for that matter) and it tries to guess the word. The bot is dumb, it just randomly selects any of the remaining valid words until it either runs out of guesses or gets the correct word.

In the future I may add some weighting to words. 🤷‍♂️

Note that words.json contains all correct answers to wordle plus all words that will be accepted as valid guesses. Don't look in there if you don't want tips I guess.

## Install

Clone the repo. `npm i`

## Run

To run the bot run `npm run start`. The game will start and ask you to enter a word. It must be a 5 letter word within the wordle dictionary.

## Test

`npm test`
