---
title: Guessing Game - Part 2
name:  guessing-game-v1
---

# Project 2: Letter Guessing

Collaboration Policy: This assignment must be completed individually.  You may discuss high-level ideas with other students, but you should not share code.

## Description
The goal of this homework assignment is to create a letter guessing game with one player playing against a computer.

First the player picks the length of the word she or he would like to use.  Then the computer picks a random word from a list of the appropriate length.  If the computer does not have a word of the specified length in the list, it will ask the user to pick again.  

Second, the number of lives the player starts with is equal to the length of the word + 4.  The player then guesses a letter that she or he thinks appear in the secret word.  The computer checks whether the letter appears in the secret word.  If the letter exists, the computer reveals all of the instances of that letter within the secret word.  If the letter does not exist, the computer decreases the player's lives by one.  If the player tried to guess a letter she or he has already guessed before, the computer will announce this and take a life away.  

The computer displays the progress that the player has made towards guessing the word.  The game continues until either all of the letters have been guessed (and the player wins) or all of the player's lives are used up (and the player loses).  In either case, the computer should announce this event and the game should end.

Here is an example of the game:
Computer: How long of a word do you want to play with?
Player: 20

Computer: Sorry I don’t know any words of length 20.
Computer: How long of a word do you want to play with?
Player: 8

Computer: Guess a letter.
Computer: _ _ _ _ _ _ _ _
Player: r

Computer: Yes, r is in the secret word.
Computer: Guess a letter.
Computer: _ _ r _ _ _ _ _



Player: r
Computer: You have already guessed the letter r.
Computer: Guess a letter.
Computer: _ _ r _ _ _ _ _

Player: a
Computer: Yes, a is in the secret word.
Computer: Guess a letter.
Computer: _ _ r _ _ a _ _

Player: L
Computer: Yes, l is in the secret word.
Computer: Guess a letter.
Computer: _ _ r _ _ a l l

Player: h
Computer: No, h is NOT in the secret word.
Computer: Guess a letter.
Computer: _ _ r _ _ a l l

Player: f
Computer: Yes, f is in the secret word.
Computer: Guess a letter.
Computer: f _ r _ _ a l l

Player: e
Computer: Yes, e is in the secret word.
Computer: Guess a letter.
Computer: f _ r e _ a l l

Player: i
Computer: Yes, i is in the secret word.
Computer: Guess a letter.
Computer: f i r e _ a l l

Player: b
Computer: Yes, b is in the secret word.
Computer: Congratulations! You figured out the secret word fireball in 8 guesses and had 10 lives left!

## Starting Materials
There is a starter file provided which includes a word bank of 1000 words.
(If your browser does not automatically open a new window, you can access the file here: http://inst.eecs.berkeley.edu/~cs10/fa13/hw/supp/HW2-starter.xml and import into a new Snap! project.)

## Extra for Experts
Graphics: Add the ability to print the letters on the screen using sprites.  Try to make it so that the word that is printed is always centered, regardless of the length. You should be able to account for word lengths up to and including 11 letters.

## Submission Guidelines
The following must be placed in the D2L dropbox.  Add a comment to the dropbox if you completed the extra credit.

### Project file
This is the file with all your Snap! code.  Name this file as Proj1 with your first and last name, such as:  Proj2_MaryMosman.xml  

### Readme file
Write a file that has 2 sections:

- The first section, Summary, should describe what the program is.  In this case, it should describe your game (in your own words, not mine), and how to play it.

- The second section, Learning, should describe what you found challenging (or not) about the assignment and how you worked through the challenges and solved the problem.  Perhaps you tried something and it didn’t work, then you tried a different approach.  Perhaps you didn’t know where to start and talked it through with a friend.  Perhaps the problem was easy because you’ve done something similar before.  The only “wrong” answer here is not talk about how you solved the problem.

## Tips
- Remember the saving and testing tips from Project 1!
- Be sure to handle the situation when the computer does not know any of the words that are of the length chosen by the user.
- Deduct a life when the user guesses a letter she has already guessed.
- Use good naming for variables and blocks.  It should be obvious what things are used for based on what they are called.  Avoid names like x which give no indication of meaning, and make sure names are not misleading.  
- Make sure to read through your code when you are all done. Look for places where there is a group of code doing a task that could be pulled out into its own block.
 
