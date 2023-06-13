
import pandas
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

# pull in the data set so we can use it
ds = pandas.read_csv("/Users/stephendoty/Desktop/Coding/DigitalCrafts/lectures/12-22_machineLearning/SampleData.csv")

# print(ds)

# separate the independent and dependent variable using iloc documentation in nearpod
X=ds.iloc[:,[1, 2]].values
Y=ds.iloc[:,3].values

# print(X)
# print(Y)

# Split test and learning sets
X_Learn, X_Test, Y_Learn, Y_Test = train_test_split(X, Y, test_size=0.2)

# print(X_Learn)
# print(X_Test)

ss = StandardScaler()

# Scale the data so large data values don't skew the results
X_Learn = ss.fit_transform(X_Learn)
X_Test = ss.transform(X_Test)

# print(X_Learn)
print(X_Test)

# Make the logistic regression model
lrm = LogisticRegression()
lrm.fit(X_Learn, Y_Learn)

# practice and make sure it makes reasonable sense
print(lrm.predict(ss.transform([[90, 3]])))

# check the test to see how it compared to the actual values
prediction = lrm.predict(X_Test)

print(prediction)
print(Y_Test)


#challenges

# Easy: Huh. There's a lot of hard coded information needed from the user right now. It would be great if I just ran this program and it asked me a few questions, and when I answered them, made the model and spit out the answer.


# Hard: We talked a lot about models here, but somewhere hiding under the hood is some mathematics. You see, there is a beautiful formula, and it just makes my math heart cry. But in order to use the formula, we would have to look through some documentation and forums. (Especially since it is scaled.) Is it possible to get the formula that our model made so we can use it where ever
