import pandas as pd
import plotly.graph_objects as go
from datetime import datetime, timedelta
import random

# Generate synthetic stock data
def generate_synthetic_stock_data(start_date, num_days):
    date_range = [start_date + timedelta(days=i) for i in range(num_days)]
    data = []
    price = 100  # Starting price

    for date in date_range:
        open_price = price
        high_price = open_price + random.uniform(0, 10)
        low_price = open_price - random.uniform(0, 10)
        close_price = random.uniform(low_price, high_price)
        volume = random.randint(1000000, 5000000)
        data.append([date, open_price, high_price, low_price, close_price, volume])
        price = close_price  # Next day opens at today's close

    return pd.DataFrame(data, columns=['Date', 'Open', 'High', 'Low', 'Close', 'Volume'])

# Generate 100 days of synthetic stock data starting from Jan 1, 2023
start_date = datetime(2023, 1, 1)
num_days = 100
df = generate_synthetic_stock_data(start_date, num_days)

# Create the candlestick chart
fig = go.Figure(data=[go.Candlestick(
    x=df['Date'],
    open=df['Open'],
    high=df['High'],
    low=df['Low'],
    close=df['Close'],
    increasing_line_color='lime',
    decreasing_line_color='red'
)])

# Customize the layout
fig.update_layout(
    title='Candlestick Chart',
    yaxis_title='Stock Price',
    xaxis_title='Date',
    template='plotly_dark',
    xaxis_rangeslider_visible=False
)

# Add volume bars
fig.add_trace(go.Bar(
    x=df['Date'],
    y=df['Volume'],
    marker_color='grey',
    name='Volume',
    yaxis='y2'
))

# Create dual y-axis
fig.update_layout(
    yaxis2=dict(
        title='Volume',
        overlaying='y',
        side='right',
        showgrid=False
    )
)

# Save the figure as an HTML file
fig.write_html('interactive_candlestick_chart.html')

print("Interactive chart saved as 'interactive_candlestick_chart.html'.")

# Displaying the plot inline if in a Jupyter Notebook
# Uncomment the following line if you are running this in a Jupyter Notebook
# fig.show()
