from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles 
import pandas as pd
from keras.models import load_model

model = load_model('scaled_model_191MSE.h5')
app = FastAPI()
templates = Jinja2Templates(directory="templates/")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/predict")
async def predict(request: Request,
                  operation: str = Form(...),
                  sex: float = Form(...),
                  highest_qualification: float = Form(...),
                  rural: int = Form(...),
                  disability_status: float = Form(...),
                  is_water_filter: float = Form(...),
                  chew: float = Form(...),
                  smoke: float = Form(...),
                  alcohol: float = Form(...),
                  treatment_source: float = Form(...)):
    
    if operation=="result":
        print(operation, sex, highest_qualification, rural, disability_status, is_water_filter, chew, smoke, alcohol, treatment_source)

        new_data = pd.DataFrame({
            'sex': [sex],
            'highest_qualification': [highest_qualification],
            'rural': [rural],
            'disability_status': [disability_status],
            'is_water_filter': [is_water_filter],
            'chew': [chew],
            'smoke': [smoke],
            'alcohol': [alcohol],
            'treatment_source': [treatment_source]
        })

        pred = model.predict(new_data)
        print(pred)

        # Convert pred to a native Python data type
        #pred = float(pred[0][0])  # Assuming pred is a single scalar value

        # Pass pred as a dictionary to the Jinja2 template
        return templates.TemplateResponse("result.html", {"request": request, "result": int(pred)})
