# Results

## V1 bot

Some sample results from V1 of wordle bot:

- 14/01/2022 - tangy - fail
- 15/01/2022 - panic - fail
- 16/01/2022 - solar - 3 attempts
- 17/01/2022 - shire - fail
- 18/01/2022 - proxy - 5 attempts
- 19/01/2022 - point - 5 attempts
- 20/01/2022 - robot - 5 attempts
- 21/01/2022 - prick - 5 attempts
- 22/01/2022 - wince - 4 attempts
- 23/01/2022 - crimp - 5 attempts
- 24/01/2022 - knoll - 6 attempts

## V2 bot

V2 corrects an error in my logic, which would not remember the location(s) where misplaced letter did not belong, which has now been fixed. It still does not look at any weighting but it consistently gets better results than v1

Some sample results from V2 of wordle bot to compare with the above:

- 01/01/2022 - rebus - 4 attempts
- 02/01/2022 - boost - 5 attempts
- 03/01/2022 - truss - 3 attempts
- 04/01/2022 - siege - 5 attempts
- 05/01/2022 - tiger - 4 attempts
- 06/01/2022 - banal - 5 attempts
- 07/01/2022 - slump - 5 attempts
- 08/01/2022 - crank - 5 attempts
- 09/01/2022 - gorge - 6 attempts
- 10/01/2022 - query - 5 attempts
- 11/01/2022 - drink - 4 attempts
- 12/01/2022 - favor - 5 attempts
- 13/01/2022 - abbey - 4 attempts
- 14/01/2022 - tangy - 6 attempts
- 15/01/2022 - panic - 5 attempts
- 16/01/2022 - solar - 6 attempts
- 17/01/2022 - shire - 3 attempts
- 18/01/2022 - proxy - 5 attempts
- 19/01/2022 - point - 6 attempts
- 20/01/2022 - robot - 3 attempts
- 21/01/2022 - prick - 4 attempts
- 22/01/2022 - wince - 5 attempts
- 23/01/2022 - crimp - 6 attempts
- 24/01/2022 - knoll - 4 attempts
- 25/01/2022 - sugar - 4 attempts
- 26/01/2022 - whack - 4 attempts
- 27/01/2022 - mount - 4 attempts
- 28/01/2022 - perky - 3 attempts
- 29/01/2022 - could - 4 attempts
- 30/01/2022 - wrung - 5 attempts
- 31/01/2022 - light - 5 attempts

A benchmark run of all 12972 valid wordle words resulted in 10476 successful games (a success rate of 80.8%). Successful games had an average of 4.6 guesses.

## V3

V3 has weighting attached to each letter based on its popularity in the English language and weights each word according to the letters in the word.

A benchmark run of all 12972 valid wordle words resulted in 10507 successful games (a success rate of 81%). Successful games had an average of 4.6 guesses.

This is a much smaller improvement that I anticipated and the bot is _much_ slower, taking around 15-20 minutes to run all 12972 words as opposed to around 1 minute for V2. I suspect this is due to how I implemented the weighting of each word (not the letters) and have thoughts on how to improve this.

- 01/02/2022 - those - 6 attempts
- 02/02/2022 - moist - 5 attempts
- 03/02/2022 - shard - 6 attempts
- 04/02/2022 - pleat - 4 attempts
- 05/02/2022 - aloft - 6 attempts
- 06/02/2022 - skill - 5 attempts
- 07/02/2022 - elder - 6 attempts