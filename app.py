from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from keras.models import model_from_json
import numpy as np
import pandas as pd
from keras.models import load_model
from get_model import saved

model = load_model('scaled_model_191MSE.h5')

app = FastAPI()


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    with open("index.html") as f:
        html_content = f.read()
    return HTMLResponse(content=html_content, status_code=200)


@app.post("/predict")
async def pred(a: float, b: float, c: int, d: float, e: float, f: float,
               g: float, h: float, i: float):
    #arr = a, b, c, d, e, f, g, h, i
    arr = np.array([[a, b, c, d, e, f, g, h, i]])

    pred = model.predict(arr)

    pred_list = pred.tolist()
    return {"prediction": pred_list}


'''    new_data = pd.DataFrame({
    'sex': [2.0],  # Example input values
    'highest_qualification': [0.0],
    'rural': [1],
    'disability_status': [0.0],
    'is_water_filter': [2.0],
    'chew': [5.0],
    'smoke': [4.0],
    'alcohol': [4.0],
    'treatment_source': [9.0]
})'''