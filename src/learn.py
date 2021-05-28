import pandas as pd
import numpy as np
import pickle
import seaborn as sn
import matplotlib.pyplot as plt
import matplotlib.pyplot as plt
import sklearn.ensemble as ske
from sklearn import tree, linear_model, neighbors
from sklearn.model_selection import cross_validate,train_test_split
from sklearn.feature_selection import SelectFromModel
import joblib
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import confusion_matrix,recall_score,precision_score, f1_score,classification_report
import json


data = pd.read_csv('data.csv', sep='|')
X = data.drop(['Name', 'md5', 'legitimate'], axis=1).values
y = data['legitimate'].values

print('Researching important feature based on %i total features\n' % X.shape[1])

# Feature selection using Trees Classifier (ExtraTree)
fsel = ske.ExtraTreesClassifier().fit(X, y)
model = SelectFromModel(fsel, prefit=True)
X_new = model.transform(X)
nb_features = X_new.shape[1]

X_train, X_test, y_train, y_test = train_test_split(X_new, y ,test_size=0.5,shuffle=True, random_state=100)

features = []

print('%i features identified as important: \n' % nb_features)

indices = np.argsort(fsel.feature_importances_)[::-1][:nb_features]
for f in range(nb_features):
    print("%d. feature %s (%f)" % (f + 1, data.columns[2+indices[f]], fsel.feature_importances_[indices[f]]))

# XXX : take care of the feature order
for f in sorted(np.argsort(fsel.feature_importances_)[::-1][:nb_features]):
    features.append(data.columns[2+f])


#Algorithm comparison
algorithms = {
        "Regression": linear_model.LinearRegression(),
        "DecisionTree": tree.DecisionTreeClassifier(max_depth=10),
        "RandomForest": ske.RandomForestClassifier(n_estimators=50),
        "GradientBoosting": ske.GradientBoostingClassifier(n_estimators=50),
        "AdaBoost": ske.AdaBoostClassifier(n_estimators=100),
        "GNB": GaussianNB(),
        "k-NN": neighbors.KNeighborsRegressor()
    }


results = {}
print("\nNow testing algorithms")
for algo in algorithms:
    clf = algorithms[algo]
    clf.fit(X_train, y_train)
    score = clf.score(X_test, y_test)
    precentage= score*100
    print("%s : %f %%" % (algo, precentage))
    results[algo] = score

with open('barchart.json', 'w') as json_file:
    json.dump(results, json_file)
#print('\n Data saved in json file.....')

winner = max(results, key=results.get)
print('\nWinner algorithm is %s with a %f %% success' % (winner, results[winner]*100))

# Save the algorithm and the feature list for later predictions
print('Saving algorithm and feature list in classifier directory...')
joblib.dump(algorithms[winner], 'classifier/classifier.pkl')
open('classifier/features.pkl', 'wb').write(pickle.dumps(features))
print('Saved')

# Evaluation
print('Evaluation... \n')
clf = algorithms[winner]
res = clf.predict(X_test)

# outcome values order in sklearn
tp, fn, fp, tn = confusion_matrix(y_test, res,labels=[1,0]).reshape(-1)
print('tp fn fp tn : \n', tp, fn, fp, tn)

# classification report for precision, recall f1-score and accuracy
matrix = classification_report(y_test, res,labels=[1,0])
print('Classification report : \n',matrix)
 
print('Classification report : \n',matrix)
precision_positive = precision_score(y_test, res, pos_label=1)
precision_negative = precision_score(y_test, res, pos_label=0)
print('True Positive : ',(precision_positive *100))
print('True Negative: ',(precision_negative *100))

recall_sensitivity = recall_score(y_test, res, pos_label=1)
recall_specificity = recall_score(y_test, res, pos_label=0)
print('Sensitivity : ',(recall_sensitivity*100))
print('Specificity : ',(recall_specificity*100) )

# confusion matrix
confusion_matrix = pd.crosstab(y_test, res, rownames=['Actual'], colnames=['Predicted'],  margins = True)
sn.heatmap(confusion_matrix, annot=True,fmt='d' )
plt.savefig('ConfusionMatrix.png', dpi=300, bbox_inches='tight')
plt.show()