# Homework 4 - Code Quiz

![image](https://user-images.githubusercontent.com/54219054/66703238-0dc9db80-ecd6-11e9-96e7-c335c73cd7bb.png)

This assignment was completed using the bonus task of making multiple quizzes emanating from one common source. So I will be splitting between the two quizzes as they have been set up differently.

## Old Movie Quiz

![image](https://user-images.githubusercontent.com/54219054/66703265-52557700-ecd6-11e9-876a-fc9ff215efc9.png)

This quiz was set up with the assignment guidelines in mind. Starting from the general quiz screen, clicking on the 'Old Movie' Quiz button brings you to the rules for the quiz.

The fun thing about this particular quiz is that only 5 of the 15 questions are answered and those 5 are picked randomly from the 15 in a random order.

Upon pressing the 'Begin' button, a timer will start from 50 seconds counting down each second. Each question has 4 possible answers and a correct answers rewards points while incorrect answers remove 10 seconds from the timer. The points are rewarded based on the time that the question starts and when the question is answered, looking at the timer value for each instance. Also a little indicator under the questions show if the question was right or wrong.

![image](https://user-images.githubusercontent.com/54219054/66703309-d3ad0980-ecd6-11e9-8380-970fed0c120e.png)

Upon completion of the question or when the timer reaches zero, a results field will appear with how many questions were correctly answered and how many points were earned. At this time, a input field for your initials will needed to be filled. Using the input and your point total, a high score list will be added using local storage from previous games, while also adding your score to local storage.

![image](https://user-images.githubusercontent.com/54219054/66710150-629e3e00-ed38-11e9-9fa0-b23bdc0d17e2.png)

From there, you can take the quiz again or clear the high scores from local storage. Refreshing the page brings you to the trivia page if you would like to take the other quiz.

## Alex Quiz

![image](https://user-images.githubusercontent.com/54219054/66710166-94170980-ed38-11e9-8d3a-c6f45da57c4b.png)

As this is the bonus quiz, I took a couple liberties in order to not just have to repeat the same process for both quizzes.

This one is different because:

* There is no timer as this quiz is a little less cutthroat and more of a get-to-know Alex activity. This also means that no time is taken off the timer when an incorrect answer is provided

* The points gained is static for correct answers, as only one point is given per correct answer.

* This quiz sets up its own local storage for the results so as not to compare the quizzes scores with all the difference between them.

![image](https://user-images.githubusercontent.com/54219054/66710170-c163b780-ed38-11e9-9889-64107e94c8ef.png)