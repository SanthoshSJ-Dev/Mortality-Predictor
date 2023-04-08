import pandas as pd
import numpy as np
from keras.models import load_model

# Load the trained model from the .h5 file
model = load_model('scaled_model_191MSE.h5')

# Load the new input data as a pandas DataFrame
new_data = pd.DataFrame({
    'sex': [1.0],  # Example input values
    'highest_qualification': [0.0],
    'rural': [1],
    'disability_status': [0.0],
    'is_water_filter': [2.0],
    'chew': [7.0],
    'smoke': [1.0],
    'alcohol': [4.0],
    'treatment_source': [8.0]
})

# Perform any necessary data preprocessing, such as scaling or encoding

# Make predictions using the loaded model
predictions = model.predict(new_data)

# Print the predicted age values
print(predictions)
