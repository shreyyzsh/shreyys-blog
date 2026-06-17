---
title: The Intuition Behind "Hello World" of Machine Learning
date: 2026-06-01
---
If there's a superpower humans have chased throughout history, it's the ability to peek into the future. From astrology and tarot cards to omens and prophecies, numerous civilizations searched for ways to know what lay ahead. Time moved forward, and as our understanding of the world evolved, we stopped looking at the stars to look at the data instead. 

Machine learning isn't a magical wand that lets you take a look into the future, but it can uncover patterns in observations and use them to make predictions that are surprisingly accurate. At the heart of this lies Linear Regression, a fairly simple algorithm that offers us a mathematical framework to answer the fundamental question: "Given what I already know, can I predict what comes next?"

# Linear Regression existed before Machine Learning
Machine learning has become a buzzword in recent decades, and will probably remain in trend for some time. However, linear regression was developed as a statistical method for learning the relationship between variables much before machine learning existed. 

It was first used to predict the height of offspring and then went on to gain popularity before machine learning borrowed it. It's both a statistical algorithm and a machine learning algorithm that has been around for more than 200 years. The literal meaning of the term regression is going backwards, but in statistics it refers to estimating the continuous relationship between two or more variables. It is a type of supervised learning algorithm where labelled datasets are used to train the models. 

![[/images/blog/Pasted%20image%20260601195509.png]]

# Finding Relationships in Data
Linear Regression works on the assumption that there exists a linear relationship between the input variable x, called the feature, and the output variable y, called the target. It tries to map one or more features to the target variable using an affine function, defined as:

$$
h(x) = {w}{x}  + {b}
$$

Here, w is the slope of the line, called the weight, and b is the intercept, called the bias. The weight determines how much sensitive our prediction is to the changes in x, and bias gives us the predicted value when x = 0.

![[/images/blog/Pasted%20image%20260613172709.png]]

The red line is our hypothesis trying to predict the price of a house based on the area, and the scattered yellow points are the training examples that we had. Notice how the line doesn't pass through all the yellow points, indicating that our prediction will inevitably contain some error.

To fit this line, we need the right values for w and b that'll make our prediction closer to the target. For this, we'll devise a way to figure out how wrong our prediction is and then update the values of w and b iteratively. Since we're dealing with a training set and not just one data point, the individual errors can be combined into a single quantity known as the cost function. 

$$
J(w, b) = \frac{1}{2m}\sum_{i=1}^{m}\left(h(x^{(i)}) - y^{(i)}\right)^2
$$

In linear regression, we use the Mean Squared Error (MSE), which squares the error terms before averaging them. Squaring the error terms helps us penalize larger mistakes in prediction more heavily, pushing the model to find a line that fits the data more accurately. 

**Note:** We divided our cost function with `m` to average the error across the training examples and then multiplied it by `1/2` to making the calculations cleaner to work with.

# Optimization is the Way
Since the cost function depends on the values of w and b, we need to find the parameters that will help us minimize the cost, and this makes our goal an optimization problem. I think we already have an idea about how to achieve this feat, and that is by iterating the values of w and b till we reach the optimal point. The question is how do we get there?

This is where Gradient Descent comes to the rescue. It's an optimization algorithm used by multiple machine learning models that iteratively keeps adjusting the parameters until the minimum cost function state is achieved.  

Before we get into gradient descent, we need to first unlock what a gradient is. A gradient is a measure of how sensitive a function is to small changes in its parameters. In mathematical terms, it's a vector of partial derivatives that tells us how much the cost function changes on updating the values of parameters. 

The partial derivative of the cost function with respect to the parameters gives us:

$$
\frac{∂(J(w, b))}{∂(w, b)} = \frac{1}{m}\sum_{i=1}^m((h(x^{(i)}) - y^{(i)})x^{(i)} 
$$

We begin with random values of w and b, often taken to be zero in simple regression models, and then repeatedly update them by taking small steps like walking down a hill. The steps in the beginning could be large, depending upon how steep the cost function is, but they become smaller as we approach the minimum, and the parameters gradually converge to their optimal values. Mathematically, the parameter updates can be expressed as:

$$
w := w - α\sum_{i=1}^{m}\frac{∂(J(w, b))}{∂(b)}
$$

$$
b := b - α\sum_{i=1}^{m}\frac{∂(J(w, b))}{∂(b)}
$$

Here, α (alpha) is the learning rate, which is used to determine the size of the step we take after each iteration. A high learning rate takes larger steps but also risks overshooting the minimum, whereas a low learning rate ensures precise steps but increases the number of iterations required to reach the optimum. 

# When does Linear Regression Work Well?
For linear regression to work well, the relationship between the input and the output variable should be approximately linear. The simplicity and computational efficiency it provides make it an ideal model for many predictive tasks. You can try it yourself on different datasets to understand the relationship between two or more variables, like how the economic growth of a country is linked to the electricity consumption, and so on. 

There are known limitations to linear regression as well. The real world hardly offers a linear relationship between the feature and target variables; that is why we have other algorithms and models to look at. This, however, doesn't change the fact that linear regression is one of the fundamental ideas in machine learning and can be used as a lens to understand other complex models such as decision trees, neural networks, etc. 

It's not merely about fitting a line to data, but developing an intuition for how machines learn from experience and improve through optimization.