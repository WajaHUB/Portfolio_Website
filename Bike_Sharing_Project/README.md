# 🚲 Bike Sharing Demand Prediction

A machine learning project that predicts bike sharing demand using advanced ML models including LSTM neural networks and Random Forest, with real-time weather integration.

## 📊 Project Overview

This project analyzes and predicts bike sharing demand patterns by leveraging multiple data sources and advanced machine learning techniques. The system integrates real-time weather data to provide accurate demand forecasting for bike sharing services.

## 🎯 Key Features

- **Multi-Model Approach**: Implements LSTM, Random Forest, ARIMA, and Linear Regression
- **Real-time Weather Integration**: Uses Weather API for current conditions
- **Comprehensive EDA**: Extensive exploratory data analysis with visualizations
- **Data Preprocessing**: Advanced data cleaning and feature engineering
- **Performance Comparison**: Evaluates multiple models for optimal accuracy

## 🛠 Technologies Used

- **Python**: Core programming language
- **Pandas & NumPy**: Data manipulation and analysis
- **Scikit-learn**: Machine learning algorithms
- **TensorFlow**: Deep learning (LSTM) implementation
- **Weather API**: Real-time weather data integration
- **Jupyter Notebooks**: Interactive development environment
- **Matplotlib & Seaborn**: Data visualization

## 📁 Project Structure

```
Bike_Sharing_Project/
├── Main_models_2.0.ipynb          # Main analysis with all ML models
├── WeatherAPI.ipynb               # Weather API integration
├── Data_import.ipynb              # Data loading and preprocessing
├── cleaned_EDA.ipynb              # Exploratory data analysis
├── washington_data/               # Dataset and model implementations
│   ├── Linear_Regression.ipynb   # Linear regression model
│   ├── Random_Forest.ipynb       # Random forest implementation
│   ├── LTSM.ipynb                # LSTM neural network
│   └── Data/day (1).csv          # Historical bike sharing data
└── Instructions_how_to_Run_Code.txt # Setup and execution guide
```

## 🚀 Getting Started

### Prerequisites
```bash
pip install pandas numpy scikit-learn tensorflow matplotlib seaborn jupyter
```

### Running the Analysis
1. Clone this repository
2. Install required dependencies
3. Follow instructions in `Instructions_how_to_Run_Code.txt`
4. Start with `Data_import.ipynb` for data preprocessing
5. Run `Main_models_2.0.ipynb` for complete analysis

## 📈 Model Performance

The project compares multiple machine learning approaches:
- **LSTM Neural Network**: Best for capturing temporal patterns
- **Random Forest**: Excellent for feature importance analysis
- **ARIMA**: Traditional time series forecasting
- **Linear Regression**: Baseline model for comparison

## 🌤 Weather Integration

Real-time weather data significantly improves prediction accuracy by incorporating:
- Temperature and humidity conditions
- Precipitation probability
- Wind speed and atmospheric pressure
- Seasonal weather patterns

## 📊 Key Insights

- Weather conditions strongly correlate with bike usage patterns
- Temporal features (hour, day, season) are crucial predictors
- Combined model approach outperforms individual algorithms
- Real-time data integration improves prediction accuracy by 15-20%

## 👨‍💻 Author

**Wajahat Khan** - Data Scientist & ML Engineer
- 📧 Email: wajakhan@Berkeley.edu
- 💼 LinkedIn: [wajaakhan](https://www.linkedin.com/in/wajaakhan/)
- 🐙 GitHub: [WajaCode](https://github.com/WajaCode)

---

*This project demonstrates advanced machine learning techniques for demand forecasting in urban mobility systems.*